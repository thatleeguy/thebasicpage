// Downloads the `latin` subset woff2 files for a Google Fonts CSS2 URL into
// public/fonts/, then prints the @font-face rules rewritten to local paths.
// Usage: node fetch-fonts.mjs "<google fonts css2 url>"
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const UA =
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const url = process.argv[2];
const outDir = path.resolve(process.argv[3] ?? "public/fonts");
await mkdir(outDir, { recursive: true });

const css = await (await fetch(url, { headers: { "User-Agent": UA } })).text();

// Split into individual @font-face blocks, keeping the preceding /* subset */ comment.
const blocks = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g)];

const kept = [];
for (const [, subset, block] of blocks) {
	if (subset !== "latin") continue; // latin only — this is an English-language site
	const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
	const weight = /font-weight:\s*([^;]+);/.exec(block)?.[1].trim();
	const style = /font-style:\s*([^;]+);/.exec(block)?.[1].trim();
	const src = /url\((https:[^)]+)\)/.exec(block)?.[1];
	if (!family || !src) continue;

	const slug = family.toLowerCase().replace(/\s+/g, "-");
	const wSlug = weight.replace(/\s+/g, "-");
	const file = `${slug}-${wSlug}${style === "italic" ? "-italic" : ""}.woff2`;

	const buf = Buffer.from(await (await fetch(src, { headers: { "User-Agent": UA } })).arrayBuffer());
	await writeFile(path.join(outDir, file), buf);

	kept.push({ family, weight, style, file, bytes: buf.length });
}

let out = "";
for (const f of kept) {
	out += `@font-face {\n`;
	out += `\tfont-family: "${f.family}";\n`;
	out += `\tfont-style: ${f.style};\n`;
	out += `\tfont-weight: ${f.weight};\n`;
	out += `\tfont-display: swap;\n`;
	out += `\tsrc: url("/fonts/${f.file}") format("woff2");\n`;
	out += `}\n`;
}
console.log(out);
console.error(
	kept.map((f) => `${f.file}  ${(f.bytes / 1024).toFixed(1)} KB`).join("\n") +
		`\nTOTAL: ${(kept.reduce((a, f) => a + f.bytes, 0) / 1024).toFixed(1)} KB`,
);
