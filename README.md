# The Basic Page

The marketing site for [thebasicpage.com](https://thebasicpage.com): a flat-fee $499
one-page website for small businesses, live the same business day.

It is one page. That is not a limitation of the build, it's the argument: the site is
supposed to be a demo of the product it sells.

## ⚠️ The one thing that needs filling in

`CONTACT.phone` in [`src/consts.ts`](src/consts.ts) is **deliberately empty**.

The entire pitch is "text a human", so a placeholder `(555)` number would have been the
single lie on an otherwise scrupulously honest page. Put the real number in and the text
button, the `tel:` links in the hero and footer, and the `telephone` field in the
structured data all switch on by themselves. Format it however you want it displayed:

```ts
export const CONTACT = { email: "hi@thebasicpage.com", phone: "(705) 555-0142" } as const;
```

Also confirm `hi@thebasicpage.com` actually receives mail before launch.

## Running it

```bash
npm install && npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on `localhost:4321` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Build, then serve through Wrangler as Cloudflare will |
| `npm run deploy` | Deploy to Cloudflare Workers |

## Where things live

| Path | What's in it |
| --- | --- |
| `src/pages/index.astro` | The whole site. Every section, in order. |
| `src/consts.ts` | Contact details, prices, the monthly plans. Change a price once, here. |
| `src/faq.ts` | The questions. Renders the FAQ **and** generates the `FAQPage` structured data, so the two can't drift. |
| `src/styles/global.css` | Design tokens and every component. |
| `src/components/BaseHead.astro` | Meta tags, Open Graph, and the JSON-LD. |
| `public/fonts/` | Self-hosted, subset. |
| `scripts/` | How the fonts were fetched and subset. Re-run if the type changes. |

## Notes for whoever edits this next

- **No JavaScript ships.** The reveals are CSS scroll-driven animations behind an
  `@supports` check, so browsers without them just render the page finished. Reveal
  individual items, never a container. A faded-out container taller than the viewport
  is an invisible wall of text waiting to happen.
- **The FAQ is not an accordion, on purpose.** The page argues that assistants read plain
  sentences; hiding twelve answers behind a disclosure triangle would refute it.
- **Colour is load-bearing.** `--ink` (`#093f5e`) is the lightest, bluest ink that still
  clears WCAG AA on the bright `--sky-400` bands (5.2:1) as well as on white (11.2:1).
  White text on `--sky-500` is only 2.8:1 and fails, which is why buttons and outgoing
  message bubbles are `--sky-700`.
- **Warm accents are rationed.** Lemon appears on the hero total, the receipt total, and
  the one-business-hour tag. That scarcity is why the price is impossible to miss.
- **No invented numbers.** There are deliberately no "loads in 0.4s / weighs 41 KB"
  claims. On a page whose whole position is itemised honesty, one checkable false number
  would undo the rest. If you add a stat, measure it first.

## Stack

Astro 5, deployed to Cloudflare Workers. No UI framework, no CSS framework, no CMS.
