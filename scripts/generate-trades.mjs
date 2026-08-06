// Merges the workflow's copy packs with the palette table into src/data/trades.ts.
//
// Reads journal.jsonl rather than the workflow's .output file: the latter
// truncates long strings for display, which would silently clip the copy.
// The journal stores each agent's full return value but not its slug, so we
// zip results back to trades by launch order and then VERIFY that mapping
// against a keyword each trade must mention. A silent mis-map would put the
// plumber's copy on the dentist's page.
import { readFileSync, writeFileSync } from "node:fs";

const DIR =
	"/Users/lee/.claude/projects/-Users-lee-TheBasicPage/c20d0d0c-9d30-4b0c-81db-037a8a8f326c/subagents/workflows/wf_b4bab6ac-fa3";

// emoji, brand, tint, phone. Every brand/tint pair is contrast-checked.
// Numbers use the 555-01xx range, reserved for fiction.
const META = {
	plumber: ["🚿", "#14507d", "#e8f1f8", "(519) 555-0142", /plumb|pipe|drain/i],
	electrician: ["⚡️", "#8a5a06", "#fbf1de", "(705) 555-0118", /electric|breaker|panel|wiring/i],
	landscaper: ["🌿", "#2c6538", "#e8f2e9", "(613) 555-0176", /lawn|garden|mulch|landscap|sod/i],
	contractor: ["🔨", "#8a4520", "#f8eee7", "(905) 555-0133", /renovat|contract|build|kitchen|framing/i],
	cleaner: ["🧼", "#0f6f68", "#e4f2f1", "(604) 555-0159", /clean/i],
	"dog-groomer": ["🐩", "#8a3f72", "#f7eaf3", "(250) 555-0107", /groom|dog|nail|coat/i],
	"dental-clinic": ["🦷", "#12657a", "#e5f1f4", "(403) 555-0191", /dent|teeth|tooth|hygien/i],
	cafe: ["☕️", "#5c3a29", "#f4ece6", "(902) 555-0164", /coffee|caf|espresso|pastry|bake/i],
	"food-truck": ["🌮", "#a83729", "#faeae7", "(587) 555-0128", /truck|taco|menu|lunch/i],
	bookkeeper: ["🧮", "#1e3a5f", "#e9edf4", "(306) 555-0185", /bookkeep|payroll|invoic|tax|receipt/i],
	"yoga-studio": ["🧘", "#5a4b7d", "#eeebf5", "(778) 555-0113", /yoga|class|mat|beginner/i],
	therapist: ["💬", "#3c5a6e", "#eaf0f3", "(431) 555-0147", /therap|counsel|session|anxiet/i],
	notary: ["📜", "#7a2f43", "#f7e9ec", "(709) 555-0172", /notar|document|affidavit|witness|commission/i],
};
const ORDER = Object.keys(META);

const ENT = { "&amp;": "&", "&quot;": '"', "&#39;": "'", "&lt;": "<", "&gt;": ">", "&nbsp;": " " };
const clean = (v) =>
	typeof v === "string"
		? v
				.replace(/&amp;|&quot;|&#39;|&lt;|&gt;|&nbsp;/g, (m) => ENT[m])
				// The prompt banned em dashes; enforce rather than trust.
				.replace(/\s*—\s*/g, ", ")
				.replace(/\s+([,.])/g, "$1")
				.replace(/,\s*,/g, ",")
		: Array.isArray(v)
			? v.map(clean)
			: v && typeof v === "object"
				? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, clean(x)]))
				: v;

const lines = readFileSync(`${DIR}/journal.jsonl`, "utf8").split("\n").filter((l) => l.trim());
const startOrder = [];
const byAgent = new Map();
for (const l of lines) {
	const d = JSON.parse(l);
	if (d.type === "started") startOrder.push(d.agentId);
	if (d.type === "result" && d.result) byAgent.set(d.agentId, clean(d.result));
}

const packs = startOrder.map((id) => byAgent.get(id)).filter(Boolean);
if (packs.length !== ORDER.length) {
	console.error(`expected ${ORDER.length} packs, got ${packs.length}`);
	process.exit(1);
}

// Launch order does NOT survive the concurrency cap, so never trust it. Score
// every (trade, pack) pair and assign globally, strongest match first. A first
// -come-first-served pass gets this wrong: "cleaner" happily swallows the dog
// groomer, whose copy mentions a clean coat.
const NAME = {
	plumber: /plumb/i,
	electrician: /electric/i,
	landscaper: /landscap|lawn ?care|garden/i,
	contractor: /contract|construction|renovation|builder/i,
	cleaner: /cleaning|cleaners/i,
	"dog-groomer": /groom/i,
	"dental-clinic": /dental|dentist/i,
	cafe: /caf|coffee|espresso|roast/i,
	"food-truck": /truck|taco|street food/i,
	bookkeeper: /bookkeep|accounting|ledger/i,
	"yoga-studio": /yoga/i,
	therapist: /therap|counsel|psycholog/i,
	notary: /notar/i,
};

const score = (slug, p) => {
	const body = JSON.stringify(p);
	const hits = (body.match(new RegExp(META[slug][4].source, "gi")) || []).length;
	const nameHit = NAME[slug].test(p.business) ? 100 : 0;
	const bodyName = (body.match(new RegExp(NAME[slug].source, "gi")) || []).length * 3;
	return nameHit + bodyName + hits;
};

const pairs = [];
for (const slug of ORDER) for (let i = 0; i < packs.length; i++) pairs.push([score(slug, packs[i]), slug, i]);
pairs.sort((a, b) => b[0] - a[0]);

const assigned = {};
const usedPack = new Set();
for (const [s, slug, i] of pairs) {
	if (assigned[slug] !== undefined || usedPack.has(i)) continue;
	if (s <= 0) continue;
	assigned[slug] = i;
	usedPack.add(i);
}

const unresolved = ORDER.filter((s) => assigned[s] === undefined);
if (unresolved.length) {
	console.error("could not confidently assign:", unresolved.join(", "));
	process.exit(1);
}

const ordered = ORDER.map((slug) => packs[assigned[slug]]);
console.log("Assignment:");
ORDER.forEach((slug, i) => console.log("  " + slug.padEnd(15) + ordered[i].business));
console.log();
ORDER.forEach((s, i) => (packs[i] = ordered[i]));

const out = ORDER.map((slug, i) => {
	const p = packs[i];
	const [emoji, brand, tint, phone] = META[slug];
	return {
		slug,
		trade: slug
			.split("-")
			.map((w) => w[0].toUpperCase() + w.slice(1))
			.join(" "),
		emoji,
		brand,
		tint,
		phone,
		business: p.business,
		tagline: p.tagline,
		heroHeadline: p.heroHeadline,
		heroSub: p.heroSub,
		ctaPrimary: p.ctaPrimary,
		ctaNote: p.ctaNote,
		stats: p.stats,
		services: p.services,
		areaOrHours: p.areaOrHours,
		reviews: p.reviews,
		trust: p.trust,
		closing: p.closing,
	};
});

// The agents worked independently, so a few invented the same street name.
// Fine in isolation, sloppy when all thirteen are shown together.
const RENAME = {
	"food-truck": "Two Bridges Kitchen",
	"yoga-studio": "Rivermill Yoga",
	"dental-clinic": "Halton Row Dental",
};

const PHONE_RE = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;

for (const t of out) {
	if (RENAME[t.slug]) {
		const old = t.business;
		t.business = RENAME[t.slug];
		// Swap it everywhere the old name was used in the copy.
		for (const k of ["tagline", "heroHeadline", "heroSub", "ctaNote"])
			t[k] = t[k].split(old).join(t.business);
		t.closing.blurb = t.closing.blurb.split(old).join(t.business);
	}

	// Any number a copywriter invented gets replaced by ours, then stripped out
	// of the button label: it already sits underneath as the sub-label.
	t.ctaNote = t.ctaNote.replace(PHONE_RE, t.phone);
	t.heroSub = t.heroSub.replace(PHONE_RE, t.phone);
	t.ctaPrimary = t.ctaPrimary
		.replace(PHONE_RE, "")
		.replace(/[:·,\-\s]+$/, "")
		.trim();
	if (/^call$/i.test(t.ctaPrimary)) t.ctaPrimary = "Call us now";
	if (t.ctaPrimary.length < 5) t.ctaPrimary = "Get in touch";
}

const dupes = out.map((t) => t.business).filter((b, i, a) => a.indexOf(b) !== i);
if (dupes.length) {
	console.error("duplicate business names:", dupes.join(", "));
	process.exit(1);
}

const header = `// Thirteen fictional businesses, one per trade shown on the home page.
//
// Copy is per trade because a plumber and a bookkeeper worry about different
// things. Structure is shared because every service business page answers the
// same five questions: who you are, what you do, where you do it, who vouches
// for you, and how to reach you right now.
//
// Every brand/tint pair below was contrast-checked. White on \`brand\` and ink
// on \`tint\` both clear WCAG AA, so a new trade means copying a row and
// re-running the check in scripts/.
//
// Phone numbers use the 555-01xx range, which is reserved for fiction and
// cannot ring a real person.

export type Trade = {
	slug: string;
	trade: string;
	emoji: string;
	/** Deep enough to carry white text. */
	brand: string;
	/** Pale wash; carries ink text. */
	tint: string;
	phone: string;
	business: string;
	tagline: string;
	heroHeadline: string;
	heroSub: string;
	ctaPrimary: string;
	ctaNote: string;
	stats: { value: string; label: string }[];
	services: { name: string; blurb: string; price?: string }[];
	/** "area" when the business travels to the customer, "hours" when they come to it. */
	areaOrHours: { mode: "area" | "hours"; heading: string; items: string[]; note: string };
	reviews: { quote: string; name: string; detail: string }[];
	trust: string[];
	closing: { headline: string; blurb: string };
};

export const TRADES: Trade[] = `;

writeFileSync("src/data/trades.ts", header + JSON.stringify(out, null, "\t") + ";\n");
console.log(`wrote src/data/trades.ts (${out.length} trades)`);
for (const t of out) console.log("  " + t.slug.padEnd(15) + t.business + "  ·  " + t.ctaPrimary);
