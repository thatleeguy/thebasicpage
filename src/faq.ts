// One source of truth for the questions section. This array renders the FAQ
// on the page *and* generates the FAQPage structured data in <head>, so the
// two can never drift apart — which matters, because the whole argument of
// this site is that machines should be able to read a page correctly.

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
	{
		q: "Is it really only one page?",
		a: "Yes. One page, scrolling. Your phone number, what you do, where you work, your prices or your “call for a quote”, your hours, your photos, your reviews. That is a website. The other nine pages on an agency site are mostly there to justify the invoice.",
	},
	{
		q: "What if I need more later?",
		a: "Then we build more later, we tell you the number before we start, and you decide. Some people add a second page in year two. Plenty never do. Starting small isn’t a trap.",
	},
	{
		q: "Who owns it? What happens if I fire you?",
		a: "You own it. The domain goes in your name on day one — your name, your email, your card if you want it that way. If you leave, we send you the whole page as files and help you move it somewhere else. No hostage situation, and no “let me schedule a call to discuss that”.",
	},
	{
		q: "What’s the catch at $499?",
		a: "The catch is that it’s one page and you can’t edit it yourself. That’s the whole catch. It works because a one-page site takes us hours instead of weeks, and because some people come back in a few years wanting something bigger. We’re genuinely fine either way.",
	},
	{
		q: "I don’t have a logo. I don’t have photos. I don’t know what to write.",
		a: "Completely normal, and it’s most people. We ask you nine questions, use the photos already on your phone, and write the words for you. If a photo won’t work we’ll say so kindly and tell you exactly which three to go and take.",
	},
	{
		q: "I already have a domain and I can’t get into it.",
		a: "Extremely common. Send us whatever login you’ve been dreading and we’ll deal with it. If it’s truly lost we’ll tell you what it costs to recover it before we touch anything.",
	},
	{
		q: "Do I have to be on a monthly plan?",
		a: "No. Paying $499 and never speaking to us again is a perfectly acceptable outcome. Hosting stays on us. Your domain renews at whatever your registrar charges — about $15 a year, paid by you, to them, not to us.",
	},
	{
		q: "How do I pay?",
		a: "After. We build it, you look at it, and you pay the $499 once it’s live and you’re happy. Card, e-transfer, or a cheque like it’s 1997. No deposit, no retainer, no net-30 invoice.",
	},
	{
		q: "What if you disappear?",
		a: "Your page is plain, standard files on ordinary hosting. Any web developer on earth can pick it up in an afternoon. There is no proprietary builder, no locked platform, and nothing that only we can open.",
	},
	{
		q: "My nephew says I need SEO.",
		a: "Your nephew isn’t wrong, he’s just early. A fast page that plainly says what you do and where you do it, plus a Google Business Profile set up properly, is most of local search. That’s the part you’re buying. The rest is worth paying for later, once the phone is already ringing.",
	},
	{
		q: "I’m honestly not techy at all.",
		a: "Good. That’s exactly who this is built for. If you can send a text message, you can run this website forever.",
	},
	{
		q: "I hate texting.",
		a: "Then email us. Same speed, same human, same one business day.",
	},
];
