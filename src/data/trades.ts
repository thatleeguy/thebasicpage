// Thirteen fictional businesses, one per trade shown on the home page.
//
// Copy is per trade because a plumber and a bookkeeper worry about different
// things. Structure is shared because every service business page answers the
// same five questions: who you are, what you do, where you do it, who vouches
// for you, and how to reach you right now.
//
// Every brand/tint pair below was contrast-checked. White on `brand` and ink
// on `tint` both clear WCAG AA, so a new trade means copying a row and
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

export const TRADES: Trade[] = [
	{
		"slug": "plumber",
		"trade": "Plumber",
		"emoji": "🚿",
		"brand": "#14507d",
		"tint": "#e8f1f8",
		"phone": "(519) 555-0142",
		"business": "Kirchner Plumbing & Drain",
		"tagline": "Burst pipes, blocked drains, no hot water.",
		"heroHeadline": "Burst pipe? Shut the water off, then call.",
		"heroSub": "I'm Dave Kirchner. I answer this phone myself, nights and weekends included. If it's an emergency I'll walk you through what to shut off before I hang up, and I'll give you a real arrival window instead of \"sometime today\".",
		"ctaPrimary": "Call Dave",
		"ctaNote": "Goes straight to my cell. If I miss you, I call back.",
		"stats": [
			{
				"value": "22 yrs",
				"label": "Fixing local plumbing"
			},
			{
				"value": "1-2 hrs",
				"label": "Usual emergency arrival"
			},
			{
				"value": "4.9",
				"label": "Across 138 reviews"
			}
		],
		"services": [
			{
				"name": "Burst and leaking pipes",
				"blurb": "We stop the water, dry the area out, and replace the bad section of pipe on the same visit when we can.",
				"price": "from $180"
			},
			{
				"name": "Blocked drains and toilets",
				"blurb": "Sink, tub, toilet or main line, we snake it and run a camera down if the clog keeps coming back.",
				"price": "from $150"
			},
			{
				"name": "No hot water",
				"blurb": "We test the tank, the element and the gas valve, then tell you straight whether it's worth repairing.",
				"price": "free quote on replacement"
			},
			{
				"name": "Frozen and split pipes",
				"blurb": "Winter calls for pipes that froze in a crawlspace, a garage wall or an unheated addition."
			},
			{
				"name": "Toilets, taps and fixtures",
				"blurb": "Running toilets, dripping taps, new sinks and shower valves, most of it done in one visit.",
				"price": "from $120"
			},
			{
				"name": "Sump pumps and basement backups",
				"blurb": "We test your pump before the spring melt and swap it out before the basement floods, not after.",
				"price": "from $135"
			}
		],
		"areaOrHours": {
			"mode": "area",
			"heading": "Towns we drive to",
			"items": [
				"Fergus",
				"Elora",
				"Salem",
				"Belwood",
				"Alma",
				"Arthur",
				"Elmira"
			],
			"note": "Past Arthur there's a small travel charge. We tell you the amount on the phone first."
		},
		"reviews": [
			{
				"quote": "A pipe let go in our laundry room at 11 on a Sunday night. Dave picked up on the second ring, was here in about forty minutes, and mopped the floor before he left.",
				"name": "Karen M.",
				"detail": "Burst pipe, February"
			},
			{
				"quote": "Our kitchen sink backed up three times in one year. He put a camera down the line, found tree roots, and showed me the video so I wasn't just taking his word for it.",
				"name": "Rob T.",
				"detail": "Blocked main line"
			},
			{
				"quote": "No hot water the morning family was coming in. He said the tank was 14 years old and not worth fixing, gave me two prices, and had the new one running by three.",
				"name": "Priya S.",
				"detail": "Water heater replacement"
			}
		],
		"trust": [
			"Licensed and insured in Ontario",
			"Price in writing before work starts",
			"We wear boot covers inside",
			"We haul the old parts away"
		],
		"closing": {
			"headline": "If it's leaking now, call now.",
			"blurb": "Shut the water off at the main, put a bucket under the leak, and phone me. I'll tell you what to do next while I'm getting in the truck."
		}
	},
	{
		"slug": "electrician",
		"trade": "Electrician",
		"emoji": "⚡️",
		"brand": "#8a5a06",
		"tint": "#fbf1de",
		"phone": "(705) 555-0118",
		"business": "Hartwell Electric",
		"tagline": "Licensed electrician. Orillia, Oro-Medonte and Severn.",
		"heroHeadline": "Breaker keeps tripping? We can usually come today.",
		"heroSub": "I'm Dave Hartwell. I've been wiring and fixing houses around Orillia since 2003, and I answer my own phone. Tell me what's happening and I'll tell you straight whether it needs someone today or whether it can wait until next week.",
		"ctaPrimary": "Call us now",
		"ctaNote": "We answer the phone ourselves. Missed you? We call back the same day.",
		"stats": [
			{
				"value": "22 yrs",
				"label": "In Simcoe County"
			},
			{
				"value": "ESA",
				"label": "Licensed and insured"
			},
			{
				"value": "Same day",
				"label": "Most no-power calls"
			}
		],
		"services": [
			{
				"name": "Dead outlets and no power",
				"blurb": "We trace the circuit, find the loose connection or failed breaker, and fix it on the same visit if the part is on the truck.",
				"price": "from $140 for the first hour"
			},
			{
				"name": "Panel upgrades",
				"blurb": "Replacing a 60 or 100 amp panel with a 200 amp service, permit pulled and ESA inspection booked, usually done in one day.",
				"price": "free quote"
			},
			{
				"name": "EV charger installs",
				"blurb": "Level 2 charger wired back to your panel and mounted where you actually park, after we check your service can carry it.",
				"price": "free quote"
			},
			{
				"name": "Breakers that keep tripping",
				"blurb": "Almost always one overloaded circuit or one failed part, and we tell you which it is and what it costs before we start."
			},
			{
				"name": "Older house wiring",
				"blurb": "Knob and tube, aluminum, ungrounded plugs: we walk the house with you and say what is genuinely unsafe and what can wait a year."
			},
			{
				"name": "Lights, fans and outdoor plugs",
				"blurb": "Pot lights, bathroom fans vented outside instead of into the attic, and exterior receptacles that survive a Simcoe winter."
			}
		],
		"areaOrHours": {
			"mode": "area",
			"heading": "Towns we cover",
			"items": [
				"Orillia",
				"Oro-Medonte",
				"Coldwater and Warminster",
				"Severn and Washago",
				"Ramara and Brechin",
				"North end of Barrie",
				"Hawkestone and Shanty Bay"
			],
			"note": "Past Gravenhurst or south of Barrie there is a small travel charge, and we say so on the phone first."
		},
		"reviews": [
			{
				"quote": "Half our kitchen went dead on a Sunday night and Dave had it running by Monday lunch. It was a burnt wire behind the dishwasher plug.",
				"name": "Marlene P.",
				"detail": "Dead outlets, Orillia"
			},
			{
				"quote": "I called about a full panel replacement and he told me I did not need one yet. He swapped two breakers and charged me for the hour.",
				"name": "Sean R.",
				"detail": "Panel check, Coldwater"
			},
			{
				"quote": "Charger install took one morning. He shifted the box over a foot so I can still wheel the mower past it, which I notice every single week.",
				"name": "Priya G.",
				"detail": "EV charger, Oro-Medonte"
			}
		],
		"trust": [
			"Licensed and insured",
			"We pull the permits ourselves",
			"Written price before we start",
			"Boots off, drop sheets down"
		],
		"closing": {
			"headline": "Not sure if it can wait?",
			"blurb": "Call and describe what you're seeing, smelling or hearing. If it's fine until next week I'll tell you, and if it isn't, I'll tell you that too."
		}
	},
	{
		"slug": "landscaper",
		"trade": "Landscaper",
		"emoji": "🌿",
		"brand": "#2c6538",
		"tint": "#e8f2e9",
		"phone": "(613) 555-0176",
		"business": "Cedar Line Landscaping",
		"tagline": "Lawn care, gardens and stone work in Rockwood",
		"heroHeadline": "We show up on the day we said we would",
		"heroSub": "I'm Dan Mercier. I've been cutting grass and building patios around Rockwood since 2004, and these days it's me and two small crews. You get the same guys every visit, I answer the phone most days myself, and if rain is going to push your day back, we call and tell you.",
		"ctaPrimary": "Call for a free quote",
		"ctaNote": "Quotes are free. We walk the yard with you and write it down.",
		"stats": [
			{
				"value": "22 yrs",
				"label": "Working in this area"
			},
			{
				"value": "Same crew",
				"label": "Every visit, all season"
			},
			{
				"value": "48 hrs",
				"label": "Most quotes back"
			}
		],
		"services": [
			{
				"name": "Weekly lawn mowing",
				"blurb": "We cut, trim the edges and blow the clippings off your walk, the same day every week.",
				"price": "from $45 a cut"
			},
			{
				"name": "Spring cleanup",
				"blurb": "We rake the beds out, pull the winter mess off the lawn, cut back the perennials and haul it all away.",
				"price": "from $280"
			},
			{
				"name": "Fall cleanup",
				"blurb": "Leaves off the lawn and out of the beds, beds cut back, everything hauled off before the first snow.",
				"price": "from $300"
			},
			{
				"name": "Garden beds and mulch",
				"blurb": "Fresh mulch, shrubs trimmed back, and new plants in for the ones that didn't come back this spring.",
				"price": "from $95 a yard, installed"
			},
			{
				"name": "Interlock patios, walkways and steps",
				"blurb": "We dig down to solid ground, pack the base properly and lay the stone so it isn't sinking in three years.",
				"price": "free quote"
			},
			{
				"name": "Sod and grading",
				"blurb": "We strip the tired lawn, fix the low spot that holds water after every rain, and lay fresh sod.",
				"price": "from $2.40 a sq ft"
			}
		],
		"areaOrHours": {
			"mode": "area",
			"heading": "Where we work",
			"items": [
				"Rockwood",
				"Guelph",
				"Eden Mills",
				"Acton",
				"Georgetown",
				"Fergus",
				"Erin"
			],
			"note": "Farther out than Fergus we add a travel charge, and it's on the quote before you book."
		},
		"reviews": [
			{
				"quote": "Our back yard held water every spring for six years. Dan regraded it in two days and this April the grass was dry.",
				"name": "Marnie K.",
				"detail": "Regrading, Rockwood"
			},
			{
				"quote": "They did our fall cleanup while we were away. We came home to a clean lawn and a photo of the finished job in my email.",
				"name": "Rick P.",
				"detail": "Fall cleanup, Guelph"
			},
			{
				"quote": "The patio is four years old and not one stone has shifted. My neighbour's sank the first winter.",
				"name": "Aline T.",
				"detail": "Interlock patio, Acton"
			}
		],
		"trust": [
			"Licensed and insured",
			"Same two guys every visit",
			"We clean up before we leave",
			"We call if we're running late"
		],
		"closing": {
			"headline": "Book before the spring rush fills up",
			"blurb": "Our April and May cleanup dates are usually spoken for by early March. Call or text and we'll come look at the yard, no charge either way."
		}
	},
	{
		"slug": "contractor",
		"trade": "Contractor",
		"emoji": "🔨",
		"brand": "#8a4520",
		"tint": "#f8eee7",
		"phone": "(905) 555-0133",
		"business": "Harkness Construction",
		"tagline": "Renovations and additions in Northumberland County",
		"heroHeadline": "A renovation that finishes when we said it would",
		"heroSub": "I'm Dan Harkness. Every job gets a written schedule and a written price before anyone swings a hammer, and I send you photos at the end of each week. If a date is going to slip, you hear it from me first, not from an empty driveway.",
		"ctaPrimary": "Book a free site visit",
		"ctaNote": "I answer my own phone. If I miss you, I call back same day.",
		"stats": [
			{
				"value": "22 yrs",
				"label": "Building around Cobourg"
			},
			{
				"value": "Fixed",
				"label": "Written price up front"
			},
			{
				"value": "Fridays",
				"label": "Photo update every week"
			}
		],
		"services": [
			{
				"name": "Kitchen renovations",
				"blurb": "We gut it, rewire what needs rewiring, and set the cabinets level so the doors line up.",
				"price": "free quote, most land $45k to $90k"
			},
			{
				"name": "Bathroom renovations",
				"blurb": "Waterproofing goes in before any tile, and we pull the subfloor if it feels soft underfoot.",
				"price": "from $18,000"
			},
			{
				"name": "Additions and second storeys",
				"blurb": "We handle the drawings, the permit and the inspections, and you get a start date in writing.",
				"price": "free quote"
			},
			{
				"name": "Basement finishing",
				"blurb": "Framing, insulation, a bathroom if you want one, all inspected before the drywall goes on.",
				"price": "from $32,000"
			},
			{
				"name": "Decks, porches and garages",
				"blurb": "Footings dug to depth, posts up on saddles, framing that will not twist on you in two winters.",
				"price": "from $9,000"
			},
			{
				"name": "Fixes on our own work",
				"blurb": "A door that stops latching or a trap that weeps a year later, we come back and sort it out.",
				"price": "no charge in the first year"
			}
		],
		"areaOrHours": {
			"mode": "area",
			"heading": "Where we work",
			"items": [
				"Cobourg",
				"Port Hope",
				"Baltimore",
				"Grafton",
				"Colborne",
				"Bewdley",
				"Roseneath"
			],
			"note": "Past Brighton or Peterborough we will still come look, but travel shows up as a line in the quote."
		},
		"reviews": [
			{
				"quote": "They found rot under our old tub that nobody had warned us about. Dan called me before touching it and showed me the price change on paper the same day.",
				"name": "Janice R.",
				"detail": "Bathroom reno, Port Hope"
			},
			{
				"quote": "He gave me a start date in March and the truck pulled in on that exact morning. The driveway got swept every night, which mattered a lot with a two year old in the house.",
				"name": "Mark T.",
				"detail": "Kitchen and mudroom, Cobourg"
			},
			{
				"quote": "We got three quotes for the addition. Theirs was not the cheapest, but it was the only one that broke out what the permit and the engineer were going to cost us.",
				"name": "Sylvie B.",
				"detail": "Second storey addition, Grafton"
			}
		],
		"trust": [
			"Licensed, insured and WSIB covered",
			"One year workmanship warranty, in writing",
			"Written schedule before we start",
			"Driveway swept at day's end"
		],
		"closing": {
			"headline": "Come see a job we are on",
			"blurb": "If you are trying to picture the work, I will walk you through a house we are finishing this month. Bring your drawings or just a photo off your phone, either one is enough to start."
		}
	},
	{
		"slug": "cleaner",
		"trade": "Cleaner",
		"emoji": "🧼",
		"brand": "#0f6f68",
		"tint": "#e4f2f1",
		"phone": "(604) 555-0159",
		"business": "Avon Valley Cleaning Co.",
		"tagline": "Home and office cleaning in Stratford, Ontario",
		"heroHeadline": "The same two cleaners in your home every time",
		"heroSub": "You meet them before anyone gets a key. Nobody new shows up at your door without us calling you first. We have been cleaning houses around Stratford since 2012, mostly for people who got our name from a neighbour.",
		"ctaPrimary": "Call for a free quote",
		"ctaNote": "Dana answers the phone. If we miss you, we call back same day.",
		"stats": [
			{
				"value": "14 yrs",
				"label": "Cleaning local homes"
			},
			{
				"value": "Same team",
				"label": "Every single visit"
			},
			{
				"value": "4.8",
				"label": "Average from 96 reviews"
			}
		],
		"services": [
			{
				"name": "Every-two-weeks home cleaning",
				"blurb": "Kitchen, bathrooms, floors, dusting, and beds made if you leave the linens out.",
				"price": "from $140 a visit"
			},
			{
				"name": "Weekly home cleaning",
				"blurb": "Same list as the biweekly, less buildup between visits, so we are usually in and out faster.",
				"price": "from $115 a visit"
			},
			{
				"name": "Monthly home cleaning",
				"blurb": "For houses that stay tidy on their own but need the corners and the baseboards done.",
				"price": "from $180 a visit"
			},
			{
				"name": "First-time deep clean",
				"blurb": "Inside the oven, behind the toilet, the top of the fridge, all the spots that get skipped for years.",
				"price": "free in-home quote"
			},
			{
				"name": "Move-out cleaning",
				"blurb": "We clean the empty place top to bottom and email you photos of every room when we lock up.",
				"price": "from $260"
			},
			{
				"name": "Small office and clinic cleaning",
				"blurb": "Evenings after you close, for offices up to about 4,000 square feet.",
				"price": "free quote"
			}
		],
		"areaOrHours": {
			"mode": "area",
			"heading": "Where we clean",
			"items": [
				"Stratford",
				"St. Marys",
				"Shakespeare and Tavistock",
				"New Hamburg",
				"Sebringville and Mitchell",
				"The county roads in between"
			],
			"note": "More than 25 minutes out of Stratford we add $15 for travel, and we tell you before you book."
		},
		"reviews": [
			{
				"quote": "They found my daughter's retainer down the side of the couch and left it on the counter in a bag with a note. Two years in and it has been the same two women every single time.",
				"name": "Alison T.",
				"detail": "Biweekly cleaning, Stratford"
			},
			{
				"quote": "I was not comfortable handing a key to a stranger. Dana came by first, walked the house with me, and wrote down that our dog hides under the bed and hates the vacuum. Small thing, but it told me plenty.",
				"name": "Rob M.",
				"detail": "New client, June"
			},
			{
				"quote": "We got the whole damage deposit back on the Douro Street apartment. The landlord said the oven looked new, and it very much was not.",
				"name": "Priya S.",
				"detail": "Move-out clean, April"
			}
		],
		"trust": [
			"Bonded and insured",
			"Police checks on file for everyone",
			"The same two cleaners every visit",
			"We bring our own supplies"
		],
		"closing": {
			"headline": "Meet us before you hand over a key",
			"blurb": "Call or text and we will come look at the place, no charge and no pressure. If we are not the right fit, we will tell you and give you the name of someone who is."
		}
	},
	{
		"slug": "dog-groomer",
		"trade": "Dog Groomer",
		"emoji": "🐩",
		"brand": "#8a3f72",
		"tint": "#f7eaf3",
		"phone": "(250) 555-0107",
		"business": "Birch Street Dog Grooming",
		"tagline": "One dog at a time, since 2007",
		"heroHeadline": "Your dog is the only dog here",
		"heroSub": "We book one dog at a time. No crates full of dogs waiting their turn, no barking down the hall, no dryer running while your dog is on the table. If your dog has had a bad haircut somewhere before, tell us when you call and we will go slower.",
		"ctaPrimary": "Call the shop to book",
		"ctaNote": "We answer the phone ourselves. If we miss you, we call back same day.",
		"stats": [
			{
				"value": "19 yrs",
				"label": "Same shop, same street"
			},
			{
				"value": "1 at a time",
				"label": "Dogs in the building"
			},
			{
				"value": "4.9",
				"label": "From 138 reviews"
			}
		],
		"services": [
			{
				"name": "Full groom",
				"blurb": "Bath, blow dry, haircut, nails, ears and a full brush out, usually about two hours.",
				"price": "from $75, price depends on size and coat"
			},
			{
				"name": "Breed cuts",
				"blurb": "Schnauzer beards, westie jackets, doodle teddy heads, poodle feet, done the way the breed is meant to look.",
				"price": "from $85"
			},
			{
				"name": "Bath and tidy",
				"blurb": "Wash, dry, brush, and a trim around the eyes, feet and back end with no full haircut.",
				"price": "from $50"
			},
			{
				"name": "Nail trim and grind",
				"blurb": "Walk in Wednesday or Thursday afternoon, no appointment, and we smooth the edges after so they do not scratch.",
				"price": "$15"
			},
			{
				"name": "De-shedding for double coats",
				"blurb": "For huskies, shepherds and labs, with an undercoat rake and a high velocity dry that pulls out the loose fur.",
				"price": "from $65"
			},
			{
				"name": "Nervous and senior dogs",
				"blurb": "First slot of the morning when the shop is quiet, with breaks, a mat to stand on, and a stop any time your dog says stop.",
				"price": "same price, we just book more time"
			}
		],
		"areaOrHours": {
			"mode": "hours",
			"heading": "Shop hours on Birch Street",
			"items": [
				"Tue to Fri · 8am to 4:30pm",
				"Sat · 8am to 2pm",
				"Sun and Mon · Closed",
				"Walk in nail trims · Wed and Thu, 2pm to 4pm",
				"Last drop off · One hour before we close"
			],
			"note": "Closed on statutory holidays. If a storm closes us, we call everybody booked that day."
		},
		"reviews": [
			{
				"quote": "Our collie hides under the deck when she hears the word bath. Second visit she walked in the door on her own.",
				"name": "Kara M.",
				"detail": "Rough collie, groomed every six weeks"
			},
			{
				"quote": "I asked for a schnauzer cut and got an actual schnauzer cut, beard and eyebrows and all. The last place sent him home with a poodle head.",
				"name": "Dave R.",
				"detail": "Schnauzer, first visit"
			},
			{
				"quote": "They stopped and called me about a lump they found on Otis instead of just clipping around it. Vet said it is a fatty lump, but I am glad somebody told me.",
				"name": "Sylvie T.",
				"detail": "Twelve year old lab, de-shed"
			}
		],
		"trust": [
			"Same two groomers every visit",
			"Certified in pet first aid",
			"We text a photo when done",
			"We call before changing your cut"
		],
		"closing": {
			"headline": "Bring your dog by and say hi",
			"blurb": "You do not need an appointment to come see the shop. Most nervous dogs do better if the first visit is nothing but a treat, a sniff around, and back out the door."
		}
	},
	{
		"slug": "dental-clinic",
		"trade": "Dental Clinic",
		"emoji": "🦷",
		"brand": "#12657a",
		"tint": "#e5f1f4",
		"phone": "(403) 555-0191",
		"business": "Halton Row Dental",
		"tagline": "Family dentist on Cedar Street. New patients welcome.",
		"heroHeadline": "Nervous about the dentist? Tell us. We go slow.",
		"heroSub": "A lot of the people who walk in here have not seen a dentist in years. Some come in because something hurts and they have been putting it off. We look, we tell you plainly what we see, and you get the price in writing before we do anything.",
		"ctaPrimary": "Call to book a visit",
		"ctaNote": "Weekdays, a real person picks up. Say it is pain and we prioritize you.",
		"stats": [
			{
				"value": "27 yrs",
				"label": "On Cedar Street"
			},
			{
				"value": "Same day",
				"label": "Held for toothaches"
			},
			{
				"value": "Free",
				"label": "Written quote first"
			}
		],
		"services": [
			{
				"name": "Checkups and cleanings",
				"blurb": "An exam, a cleaning, and x-rays only if you actually need them.",
				"price": "from $180"
			},
			{
				"name": "Fillings",
				"blurb": "Tooth-coloured fillings, and most of them are finished in one visit.",
				"price": "from $195"
			},
			{
				"name": "Toothaches and same-day pain",
				"blurb": "Call before 10am and we will do our best to see you that day.",
				"price": "emergency exam from $95"
			},
			{
				"name": "For people who hate the dentist",
				"blurb": "We freeze properly, work in short stretches, and stop the second you raise your hand."
			},
			{
				"name": "Kids and teens",
				"blurb": "Short first visits where they sit in the chair, we count teeth, and nobody gets a lecture."
			},
			{
				"name": "Crowns and root canals",
				"blurb": "We do most root canals right here instead of sending you into the city.",
				"price": "quoted in writing first"
			}
		],
		"areaOrHours": {
			"mode": "hours",
			"heading": "When we are open",
			"items": [
				"Mon and Wed · 8am to 6pm",
				"Tue and Thu · 8am to 4pm",
				"Fri · 8am to 2pm",
				"Sat · 9am to 1pm, two Saturdays a month",
				"Sun · Closed"
			],
			"note": "Closed statutory holidays. After hours, the machine gives you a number to call for pain."
		},
		"reviews": [
			{
				"quote": "I stayed away for nine years because I was embarrassed about my teeth. Nobody said a word about it. We made a plan and started with the tooth that hurt.",
				"name": "Dana R.",
				"detail": "First visit back after a long gap"
			},
			{
				"quote": "My son cracked a front tooth at hockey on a Saturday morning. They called back in about twenty minutes and opened up for us.",
				"name": "Mike T.",
				"detail": "Chipped tooth, weekend"
			},
			{
				"quote": "They handed me the cost of the crown on paper before anything started. The final bill came in four dollars under it.",
				"name": "Priya S.",
				"detail": "Crown, March"
			}
		],
		"trust": [
			"Licensed with the RCDSO",
			"We direct bill most insurance",
			"Written estimate before any work",
			"Free parking behind the building"
		],
		"closing": {
			"headline": "New patients welcome. Nervous ones especially.",
			"blurb": "Call 519-555-0142 or book online. If you are not sure what you need, say so when you call, and we will start with a look and a price."
		}
	},
	{
		"slug": "cafe",
		"trade": "Cafe",
		"emoji": "☕️",
		"brand": "#5c3a29",
		"tint": "#f4ece6",
		"phone": "(902) 555-0164",
		"business": "Quarry Street Cafe",
		"tagline": "Coffee, soup, and cinnamon buns since 2012",
		"heroHeadline": "Open at 6:30. The coffee is already on.",
		"heroSub": "We're at 24 Quarry Street, across from the post office, and the coffee is on by 6:30 on weekdays. Cinnamon buns come out around 8 and the soup goes up on the board by 11. Sit as long as you like, nobody here will rush you.",
		"ctaPrimary": "Call ahead for pickup",
		"ctaNote": "We answer the phone ourselves. Usually ready in ten minutes.",
		"stats": [
			{
				"value": "14 yrs",
				"label": "Same corner since 2012"
			},
			{
				"value": "6:30am",
				"label": "Weekday opening time"
			},
			{
				"value": "$2.75",
				"label": "Small drip coffee"
			}
		],
		"services": [
			{
				"name": "Coffee and espresso",
				"blurb": "Beans roasted an hour up the highway, ground to order, and a decaf shot that still tastes like coffee.",
				"price": "from $2.75"
			},
			{
				"name": "Breakfast sandwiches",
				"blurb": "Egg and cheddar on a bun from the bakery two doors down, with bacon or tomato, until 11am.",
				"price": "from $6"
			},
			{
				"name": "Soup and sandwiches",
				"blurb": "Two soups a day written on the board by 11, and a half sandwich with a cup is the usual order.",
				"price": "from $9.50"
			},
			{
				"name": "Baking",
				"blurb": "Cinnamon buns, butter tarts, and date squares, plus a gluten free loaf on Wednesdays and Saturdays.",
				"price": "from $3"
			},
			{
				"name": "Beans by the bag",
				"blurb": "One pound bags of whatever we are brewing that week, and we will grind it if you tell us what machine you have.",
				"price": "usually $19 a pound"
			},
			{
				"name": "The back room",
				"blurb": "Seats twelve, and book clubs, knitting nights and tutors can have it if they book a few days ahead.",
				"price": "free to book"
			}
		],
		"areaOrHours": {
			"mode": "hours",
			"heading": "When we're open",
			"items": [
				"Mon to Thu · 6:30am to 4pm",
				"Fri · 6:30am to 5pm",
				"Sat · 7am to 4pm",
				"Sun · 8am to 2pm",
				"Stat holidays · closed"
			],
			"note": "Hot food stops half an hour before close, and the baking is usually gone by one on Saturdays."
		},
		"reviews": [
			{
				"quote": "I come in most mornings and Dana starts my Americano when she sees me park. Last winter she set aside a butter tart because I was running late.",
				"name": "Ken M.",
				"detail": "Weekday regular"
			},
			{
				"quote": "Our book club had the back room every second Thursday for two years and never once got a bill for it. They put on a pot of decaf without being asked.",
				"name": "Priya S.",
				"detail": "Book club, Thursdays"
			},
			{
				"quote": "The chicken and rice soup is the only thing my dad will eat when he's sick, so I drive in from Elgin for it. They tape the lid on so it doesn't spill in the car.",
				"name": "Marion T.",
				"detail": "Soup run from Elgin"
			}
		],
		"trust": [
			"Same owners since 2012",
			"Real mugs if you're staying",
			"Free wifi, no password",
			"Step free door and washroom"
		],
		"closing": {
			"headline": "The kettle's on. Come sit down.",
			"blurb": "We're at 24 Quarry Street, across from the post office, with parking behind the building. If the lights are on and the sign says open, so are we."
		}
	},
	{
		"slug": "food-truck",
		"trade": "Food Truck",
		"emoji": "🌮",
		"brand": "#a83729",
		"tint": "#faeae7",
		"phone": "(587) 555-0128",
		"business": "Two Bridges Kitchen",
		"tagline": "We move every day. This page says where.",
		"heroHeadline": "Today: Victoria Street lot, Alliston, 11 to 2",
		"heroSub": "The truck sits in a different lot most days, so this line gets updated by 8 every morning. If we sell out early or the weather moves us, it changes here first. Tap, debit and cash all work at the window.",
		"ctaPrimary": "Get the daily text",
		"ctaNote": "One text each morning at 8. Reply STOP to quit. Nothing else sent.",
		"stats": [
			{
				"value": "8am",
				"label": "Today's spot posted"
			},
			{
				"value": "6 yrs",
				"label": "Same truck, two cooks"
			},
			{
				"value": "11 to 2",
				"label": "Most weekday lunches"
			}
		],
		"services": [
			{
				"name": "Smash burger",
				"blurb": "Two thin patties, onion, pickle and house sauce on a soft bun.",
				"price": "from $11"
			},
			{
				"name": "Brisket sandwich",
				"blurb": "Brisket goes on the smoker at 5am and comes off when it is ready.",
				"price": "from $14"
			},
			{
				"name": "Fries and gravy",
				"blurb": "Potatoes cut in the truck that morning. Gravy is made from the brisket drippings.",
				"price": "from $7"
			},
			{
				"name": "Fried chicken sandwich",
				"blurb": "Buttermilk thigh, fried to order, so it takes about six minutes.",
				"price": "from $13"
			},
			{
				"name": "Black bean burger",
				"blurb": "Made in our kitchen, cooked on a clean part of the griddle.",
				"price": "from $11"
			},
			{
				"name": "Truck at your event",
				"blurb": "We park at weddings, staff lunches and ball tournaments. We need 40 people or more to make the trip work.",
				"price": "free quote"
			}
		],
		"areaOrHours": {
			"mode": "area",
			"heading": "Where we park most weeks",
			"items": [
				"Alliston, Mondays and Thursdays",
				"Beeton, Tuesdays",
				"Tottenham, Wednesdays",
				"Cookstown, Fridays",
				"Angus, Saturday mornings by the arena"
			],
			"note": "Weather and events move us around. The line at the top of this page is always the right one."
		},
		"reviews": [
			{
				"quote": "Drove out to the arena because that is where they were the week before, and of course they were gone. Signed up for the morning text and I have not missed a lunch since.",
				"name": "Dan R.",
				"detail": "On the text list since March"
			},
			{
				"quote": "The brisket sandwich is worth waiting for. He told me straight up it would be twelve minutes and it was twelve minutes.",
				"name": "Kaylee M.",
				"detail": "Friday lunch, Victoria Street"
			},
			{
				"quote": "They fed about sixty kids and parents at our ball tournament and never got behind. They swept the lot before they pulled out.",
				"name": "Marc T.",
				"detail": "Ball tournament, June"
			}
		],
		"trust": [
			"Health unit inspected, permit posted",
			"We post when we sell out",
			"Tap, debit and cash accepted",
			"Same two people cook every day"
		],
		"closing": {
			"headline": "Know where we are before you drive",
			"blurb": "Put your number in once and you get one text every morning with the lot and the hours. If we sell out early or a storm keeps us home, that text is how you find out."
		}
	},
	{
		"slug": "bookkeeper",
		"trade": "Bookkeeper",
		"emoji": "🧮",
		"brand": "#1e3a5f",
		"tint": "#e9edf4",
		"phone": "(306) 555-0185",
		"business": "Kirkwood Bookkeeping",
		"tagline": "Books, payroll and HST for small shops",
		"heroHeadline": "Behind on your books? We can catch you up.",
		"heroSub": "I'm Dana Kirkwood. I do the books for about sixty small businesses around town, mostly trades, salons and one landscaper who still writes everything on the back of gas receipts. Bring me what you have, in whatever shape it's in, and you can stop losing Sunday nights to spreadsheets.",
		"ctaPrimary": "Book a free first meeting",
		"ctaNote": "First meeting is free. Bring the shoebox of receipts if that's what you've got.",
		"stats": [
			{
				"value": "19 yrs",
				"label": "Doing books in town"
			},
			{
				"value": "60+",
				"label": "Small business clients"
			},
			{
				"value": "Same week",
				"label": "First appointment, usually"
			}
		],
		"services": [
			{
				"name": "Monthly bookkeeping",
				"blurb": "We reconcile your bank and credit cards every month and send you a two page summary you can actually read.",
				"price": "from $185 a month"
			},
			{
				"name": "Payroll",
				"blurb": "Direct deposit, source deductions, T4s and ROEs for shops with one to fifteen staff.",
				"price": "from $60 per pay run"
			},
			{
				"name": "GST and HST filing",
				"blurb": "We work out what you owe, file it, and tell you the number two weeks before it comes out of your account.",
				"price": "from $95 per filing"
			},
			{
				"name": "Catch-up work",
				"blurb": "One year behind or four, we start with the oldest box and work forward until you're current.",
				"price": "free quote after we see the pile"
			},
			{
				"name": "Year end file for your accountant",
				"blurb": "A clean set of books and the backup they ask for, so you're not paying accountant rates for cleanup.",
				"price": "from $350"
			},
			{
				"name": "New business setup",
				"blurb": "We get your accounts, HST number and a simple filing routine in place in one sitting.",
				"price": "free quote"
			}
		],
		"areaOrHours": {
			"mode": "hours",
			"heading": "Office hours on Erie Street",
			"items": [
				"Mon to Thu · 9am to 4:30pm",
				"Fri · 9am to 1pm",
				"Tue evenings · by appointment, until 7pm",
				"Sat mornings, Feb to April · 9am to noon",
				"Drop-offs · mail slot beside the blue door, any time"
			],
			"note": "April books up fast, so call in February if you can. Closed the last week of August."
		},
		"reviews": [
			{
				"quote": "I was three years behind and too embarrassed to phone anyone. Dana had it all sorted by March and my HST bill came in lower than I'd been dreading.",
				"name": "Rob T.",
				"detail": "Three years of catch-up"
			},
			{
				"quote": "She set up payroll for my two stylists and now it just runs. I text when someone swaps a shift and it's handled by Friday.",
				"name": "Amrita S.",
				"detail": "Payroll, small salon"
			},
			{
				"quote": "My accountant used to charge me extra every spring to clean up my files. This year he said my year end was the tidiest he'd seen from a shop my size.",
				"name": "Gerry M.",
				"detail": "Second year end with Kirkwood"
			}
		],
		"trust": [
			"A real person answers the phone",
			"Bonded and insured",
			"We explain things in plain English",
			"We tell you before we bill"
		],
		"closing": {
			"headline": "Bring the shoebox. We've seen worse.",
			"blurb": "Call the office or send an email and you'll hear back the same day. If we're with a client, leave a message and we'll call you before we close."
		}
	},
	{
		"slug": "yoga-studio",
		"trade": "Yoga Studio",
		"emoji": "🧘",
		"brand": "#5a4b7d",
		"tint": "#eeebf5",
		"phone": "(778) 555-0113",
		"business": "Rivermill Yoga",
		"tagline": "Small classes. Beginners in every one.",
		"heroHeadline": "You do not need to be flexible to start",
		"heroSub": "We are the little studio beside the bakery on Quarry Street. Most people who walk in have never done yoga before, and plenty of them cannot touch their toes. Wear something you can move in and we will lend you a mat.",
		"ctaPrimary": "Book a beginner class",
		"ctaNote": "First class is $10. Cancel a booking up to two hours before.",
		"stats": [
			{
				"value": "12 yrs",
				"label": "On Quarry Street"
			},
			{
				"value": "16",
				"label": "Spots per class"
			},
			{
				"value": "$10",
				"label": "Your first class"
			}
		],
		"services": [
			{
				"name": "Gentle Beginners",
				"blurb": "Sixty minutes at a slow pace, and the teacher names and explains every pose before you try it.",
				"price": "from $20 drop-in"
			},
			{
				"name": "Slow Flow",
				"blurb": "You move with your breath, with pauses built in so you can ask what you just did wrong.",
				"price": "from $20 drop-in"
			},
			{
				"name": "Hatha",
				"blurb": "Fewer poses, held longer, with a block or a strap any time you want one.",
				"price": "from $20 drop-in"
			},
			{
				"name": "Yin and Restorative",
				"blurb": "Mostly on the floor with bolsters under you, Sunday afternoons, lights down.",
				"price": "from $20 drop-in"
			},
			{
				"name": "Chair Yoga",
				"blurb": "Everything is done sitting down or holding the back of the chair, and nobody gets on the floor.",
				"price": "from $12 drop-in"
			},
			{
				"name": "Prenatal",
				"blurb": "A small group taught by Renu, who trained in prenatal yoga, and you can join any week you like.",
				"price": "from $20 drop-in"
			}
		],
		"areaOrHours": {
			"mode": "hours",
			"heading": "This week at the studio",
			"items": [
				"Mon · 9:30am Gentle Beginners · 6pm Slow Flow",
				"Tue · 7am Hatha · 5:30pm Chair Yoga · 7pm Yin",
				"Wed · 9:30am Gentle Beginners · 6pm Slow Flow",
				"Thu · 7am Hatha · 6pm Prenatal",
				"Sat · 8:30am Slow Flow · 10am Gentle Beginners",
				"Sun · 4pm Yin and Restorative"
			],
			"note": "Doors open 20 minutes early. We close for two weeks at Christmas and post the dates on the door."
		},
		"reviews": [
			{
				"quote": "I sat in my car for ten minutes before my first class because I was too nervous to go in. Nobody looked at me twice, and Renu showed me how to stack two blocks so my knees stopped hurting.",
				"name": "Dana M.",
				"detail": "First class in January, still coming"
			},
			{
				"quote": "I am 68 and I do the Tuesday chair class. I can get up off the floor now without grabbing the couch, and last year I could not.",
				"name": "Bill T.",
				"detail": "Chair yoga, Tuesdays"
			},
			{
				"quote": "Booked the Sunday restorative class after a rotten week and spent most of the hour lying on a bolster. I was asleep by 9:30 that night.",
				"name": "Priya S.",
				"detail": "Sunday Yin, first visit"
			}
		],
		"trust": [
			"Mats, blocks and bolsters provided",
			"No contracts, no auto-renew",
			"Ground floor, no stairs",
			"Every teacher is certified"
		],
		"closing": {
			"headline": "Come try one class and see",
			"blurb": "If it turns out not to be your thing, you are out ten dollars and an hour of a Tuesday. Most people book a second class before they leave the room."
		}
	},
	{
		"slug": "therapist",
		"trade": "Therapist",
		"emoji": "💬",
		"brand": "#3c5a6e",
		"tint": "#eaf0f3",
		"phone": "(431) 555-0147",
		"business": "Whitfield Counselling",
		"tagline": "Dana Whitfield, registered psychotherapist. Fergus, Ontario.",
		"heroHeadline": "Making the first appointment is the hardest part",
		"heroSub": "I'm Dana. I've been a registered psychotherapist for fourteen years, and my office is above the bakery on St. David Street. A first session is 50 minutes, and you can tell me as much or as little as you want. If I'm not the right fit for you, I'll say so and help you find someone who is.",
		"ctaPrimary": "Book a free 15-minute call",
		"ctaNote": "No intake forms yet. Just a phone call. I answer it myself.",
		"stats": [
			{
				"value": "14 yrs",
				"label": "In private practice"
			},
			{
				"value": "5 days",
				"label": "Typical wait to start"
			},
			{
				"value": "Evenings",
				"label": "Tuesday and Thursday"
			}
		],
		"services": [
			{
				"name": "Free 15-minute phone call",
				"blurb": "A short call so you can hear my voice and ask questions before you commit to anything.",
				"price": "free"
			},
			{
				"name": "Individual therapy for adults",
				"blurb": "Fifty minutes, weekly or every other week, in the office or by video.",
				"price": "from $160 a session"
			},
			{
				"name": "Anxiety and panic",
				"blurb": "We work on what your body starts doing before your brain catches up, and what to do about it."
			},
			{
				"name": "Grief and loss",
				"blurb": "Often for the months afterward, when everyone else has gone back to normal and you haven't."
			},
			{
				"name": "Couples counselling",
				"blurb": "Both of you in the room for 75 minutes, mostly about how the two of you talk to each other.",
				"price": "from $210 a session"
			},
			{
				"name": "Work stress and burnout",
				"blurb": "For people who can't sleep Sunday night and can't get moving Monday morning."
			}
		],
		"areaOrHours": {
			"mode": "hours",
			"heading": "Office hours",
			"items": [
				"Mon · 9am to 4pm",
				"Tue · 11am to 8pm",
				"Wed · 9am to 4pm",
				"Thu · 11am to 8pm",
				"Fri · 9am to 1pm",
				"Sat and Sun · closed"
			],
			"note": "Video sessions anywhere in Ontario. The office is up one flight of stairs and there is no elevator, so please tell me if that's a problem and we'll sort something out."
		},
		"reviews": [
			{
				"quote": "I sat in the parking lot for ten minutes before my first appointment and nearly drove home. Dana never made a thing of it, and by the second visit I was walking in on time.",
				"name": "Marisa T.",
				"detail": "Anxiety, started last spring"
			},
			{
				"quote": "My wife died in February and I didn't want to talk to anyone. Dana let me sit there quiet for most of the first hour. That's the only reason I came back.",
				"name": "Ken B.",
				"detail": "Grief counselling"
			},
			{
				"quote": "We'd been having the same argument for four years. After about eight sessions we still argue, but now it ends instead of going all night.",
				"name": "Priya R.",
				"detail": "Couples counselling, one year in"
			}
		],
		"trust": [
			"Registered with the CRPO",
			"Covered by most workplace plans",
			"Receipt emailed the same day",
			"What you say stays here"
		],
		"closing": {
			"headline": "You can start with just a call",
			"blurb": "Fifteen minutes on the phone, no charge and no obligation to book anything. If I'm not the right person for you, I'll give you two or three names of people who might be."
		}
	},
	{
		"slug": "notary",
		"trade": "Notary",
		"emoji": "📜",
		"brand": "#7a2f43",
		"tint": "#f7e9ec",
		"phone": "(709) 555-0172",
		"business": "Northgate Notary Public",
		"tagline": "Appointments in town, or I come to you.",
		"heroHeadline": "Documents notarized today, at my office or yours",
		"heroSub": "I am Dana Whitfield, a notary public in Northgate since 2011. Most people are in and out in about fifteen minutes with the stamped document they came for. If you cannot get here, I will come to your house, the hospital, or your workplace.",
		"ctaPrimary": "Call to book a time",
		"ctaNote": "I answer the phone myself. If I miss you, I call back same day.",
		"stats": [
			{
				"value": "Same day",
				"label": "Often available"
			},
			{
				"value": "15 min",
				"label": "Typical appointment"
			},
			{
				"value": "2011",
				"label": "Notarizing here since"
			}
		],
		"services": [
			{
				"name": "Affidavits and statutory declarations",
				"blurb": "You swear the document is true, I witness it and stamp it while you wait.",
				"price": "from $40 per document"
			},
			{
				"name": "Certified true copies",
				"blurb": "I check your original against the copy and certify it for passports, transcripts, and licence applications.",
				"price": "$25 first copy, $10 each after"
			},
			{
				"name": "Travel consent letters for children",
				"blurb": "For a child flying without both parents, signed and notarized in one visit.",
				"price": "from $50"
			},
			{
				"name": "Signature witnessing and commissioning",
				"blurb": "Powers of attorney, pension and life certificates, insurance claims, and bank forms signed in front of me.",
				"price": "from $40"
			},
			{
				"name": "Mobile visits",
				"blurb": "I come to your home, a hospital room, a care home, or your office and bring the seal with me.",
				"price": "office fee plus travel, quoted on the phone"
			},
			{
				"name": "Letters of invitation and sponsorship papers",
				"blurb": "For family applying to visit from abroad, notarized and stamped the way the visa office asks for.",
				"price": "free quote"
			}
		],
		"areaOrHours": {
			"mode": "area",
			"heading": "Towns I drive to",
			"items": [
				"Northgate and Northgate Heights",
				"Ashcroft Mills",
				"Bellview",
				"Kerrsdale",
				"Pinehurst",
				"Loyalist Corners"
			],
			"note": "In-town travel is $40. Past the highway I quote the exact fee before I book you in."
		},
		"reviews": [
			{
				"quote": "My mother is at the Lakeview care home and cannot travel. Dana came Tuesday afternoon, witnessed the power of attorney at her bedside, and was done in twenty minutes.",
				"name": "Kathleen R.",
				"detail": "Mobile visit to a care home"
			},
			{
				"quote": "We flew to Mexico on the Saturday and I found out Thursday night that I needed a consent letter for the kids. She fit me in Friday morning before work.",
				"name": "Marc T.",
				"detail": "Travel consent letter, short notice"
			},
			{
				"quote": "I needed certified copies of my transcripts for a nursing application. She noticed one page was missing a registrar signature before I paid, which saved me sending the whole thing back.",
				"name": "Priya S.",
				"detail": "Certified copies for a job application"
			}
		],
		"trust": [
			"Commissioned notary public, insured",
			"Debit, credit, cash, and e-transfer",
			"Just bring valid photo ID",
			"I notarize, I do not advise"
		],
		"closing": {
			"headline": "Bring the document. I will do the rest.",
			"blurb": "Call or text me with what needs notarizing and I will tell you the fee and exactly which ID to bring. Most weeks I have something open the same day."
		}
	}
];
