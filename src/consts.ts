// Everything on this site that is a number, a price, or a way to reach us
// lives here. If you change a price, change it once, here.

export const SITE_TITLE = "The Basic Page";
export const SITE_TAGLINE = "A real website for your small business. $499. Live today.";
export const SITE_DESCRIPTION =
	"One good page for your small business, live the same day, for a flat $499. " +
	"No logins, no dashboard, no CMS. You text or email us and we make the change. " +
	"Includes your domain, hosting, and your Google Business Profile set up properly.";

export const SITE_URL = "https://thebasicpage.com";

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
// IMPORTANT: `phone` is intentionally empty. The whole pitch of this page is
// that you can text a human, so a fake or placeholder number would be the one
// lie on an otherwise honest page. Put the real number here and the text
// button, the tel: links and the structured data all switch on by themselves.
// Format it exactly as you want it displayed, e.g. "(705) 555-0142".
export const CONTACT = {
	email: "hi@thebasicpage.com",
	phone: "",
} as const;

/** E.164-ish href for tel: links. Strips everything that isn't a digit. */
export const telHref = (phone: string) =>
	`tel:+1${phone.replace(/\D/g, "").replace(/^1/, "")}`;

// ---------------------------------------------------------------------------
// The offer
// ---------------------------------------------------------------------------

export const PRICE = {
	/** One-time build. The only number most people will remember. */
	build: 499,
} as const;

// Every page is on a plan. $19/month is the floor: it covers hosting, SSL and
// the domain renewal, so there is no page out there that nobody is looking
// after, and no customer who has to remember to renew anything.
export const PLANS = [
	{
		name: "Next day, no drama",
		price: "$19",
		period: "/month",
		blurb:
			"Unlimited normal changes, done within one business day. Hosting, your SSL certificate and your domain renewal are all included and looked after. Cancel by text, no exit interview.",
		pick: true,
		tag: null,
	},
	{
		name: "Same hour, seriously",
		price: "$59",
		period: "/month",
		blurb:
			"Everything above, but changes are done within one business hour, 8am–6pm Monday to Friday. For shops whose prices, menus or hours actually move.",
		pick: false,
		tag: "⚡ 1 business hour",
	},
] as const;
