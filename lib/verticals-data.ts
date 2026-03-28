import { SOUTH_DR_COVERAGE_AREAS } from "./coverage-areas";
import type { IntakeServiceValue } from "./intake-services";

export type VerticalSlug =
  | "condo-rentals"
  | "commercial-rentals"
  | "property-sales"
  | "development"
  | "investor-groups-bulk";

export type VerticalProcessStep = {
  title: string;
  body: string;
};

export type Vertical = {
  slug: VerticalSlug;
  title: string;
  oneLiner: string;
  detailParagraphs: readonly [string, ...string[]];
  processSteps: readonly [VerticalProcessStep, ...VerticalProcessStep[]];
  intakeServiceValue: IntakeServiceValue;
  /** Context-specific hint for the intake “Your goal” field on this vertical’s page. */
  intakeGoalPlaceholder: string;
};

export const VERTICALS = [
  {
    slug: "condo-rentals",
    title: "Condo rentals",
    oneLiner: "Active tourists and repeat guests—real demand, not just a listing.",
    detailParagraphs: [
      `List your condo with us and tap into demand from travelers and repeat guests across the south of the Dominican Republic—${SOUTH_DR_COVERAGE_AREAS}—not a passive listing, but active positioning in the tourism corridor.`,
      `We coordinate marketing, channel strategy, and introductions through our network so your unit is seen by people already planning stays and returns across ${SOUTH_DR_COVERAGE_AREAS}.`,
    ],
    processSteps: [
      {
        title: "Share your property and goals",
        body: "Submit the intake form with your contact details, unit basics, and how you want to operate (seasonal, long-stay, etc.). That gives us a clear starting point.",
      },
      {
        title: "Discovery call with our team",
        body: "Use this call to ask anything you need cleared up—we answer directly. Because your unit is already rent-ready and the complex has its own administration, the discussion is about how you want your condo run: your calendar, your house rules, and your commercial expectations—not ours.",
      },
      {
        title: "Placement in our guest and partner network",
        body: "We route your condo through the channels and relationships that match your asset—repeat guests, tour operators, and referral partners where it fits.",
      },
      {
        title: "Go-live and ongoing optimization",
        body: "Once live, we refine positioning, respond to inbound, and keep you informed. You stay in the loop without managing every touchpoint yourself.",
      },
    ],
    intakeServiceValue: "condo-rentals",
    intakeGoalPlaceholder:
      "What do you want for your condo—short stays, seasonal, long-stay mix? Beds, location, when you want it live, and any must-haves for guests or pricing.",
  },
  {
    slug: "commercial-rentals",
    title: "Commercial space for your business",
    oneLiner: "Opening or scaling a brand? We help you lease retail, office, or mixed-use space that fits your plan.",
    detailParagraphs: [
      "This is for business owners and operators who need a real address—not a side hobby: shops, services, offices, and mixed formats in busy locations where customers and staff actually show up.",
      "You bring the concept and criteria; we help you navigate the market, compare options clearly, and move toward a lease that matches your opening timeline and numbers.",
    ],
    processSteps: [
      {
        title: "Your business and space brief",
        body: "Share what you’re opening (or moving), rough size and layout needs, preferred areas, rent band, and target open date. That becomes our search brief—no guesswork.",
      },
      {
        title: "Shortlist and market reality",
        body: "We return viable options and explain asking rents, pass-through costs, and typical terms so you know what’s real before you tour. Expectations stay grounded.",
      },
      {
        title: "Tours, terms, and negotiation",
        body: "We coordinate visits, flag pros and cons per location, and support you through offer/LOI and commercial negotiation with the landlord side—so you’re not doing it alone.",
      },
      {
        title: "Lease signed and handoff",
        body: "Once terms land, we align with your legal or notary stack for execution, then hand off with clarity on possession, fit-out windows, and what happens day one.",
      },
    ],
    intakeServiceValue: "commercial-rentals",
    intakeGoalPlaceholder:
      "What business are you opening or moving—retail, office, or mixed-use? Ideal size, area, rent budget, foot traffic needs, and target opening date.",
  },
  {
    slug: "property-sales",
    title: "Property sales",
    oneLiner: "We route your sale to agencies with active buyers.",
    detailParagraphs: [
      "Selling in this market means reaching the right agencies and agents with active buyers—not blasting a listing into noise.",
      "We handle coordination and route your deal to our pool of partner agencies so exposure is wide where it matters, with less fragmentation for you.",
    ],
    processSteps: [
      {
        title: "Listing intake and materials",
        body: "Share property details, pricing expectations, and documentation status. We confirm what buyers and agencies need to move quickly.",
      },
      {
        title: "Agency routing strategy",
        body: "We map which desks and agents match your price point and product type, then introduce the opportunity through structured channels.",
      },
      {
        title: "Buyer flow and feedback",
        body: "Showings, offers, and objections are consolidated so you hear signal, not scattered messages from multiple fronts.",
      },
      {
        title: "Closing support",
        body: "We stay aligned through diligence and closing—coordinating timelines with your counsel and the buy side where useful.",
      },
    ],
    intakeServiceValue: "property-sales",
    intakeGoalPlaceholder:
      "What are you selling—condo, land, commercial? Asking range, timeline, occupancy or legal notes, and what kind of buyer or exposure you want.",
  },
  {
    slug: "development",
    title: "Development",
    oneLiner: "Ground-up core or pre-sales—economics matched to your role.",
    detailParagraphs: [
      "Whether you want a core ground-up position or discounted pre-sales to resell or hold at delivery, we align the structure to the role you want—not a one-size mandate.",
      "Projects are evaluated with our developer relationships so economics, milestones, and risk are clear before you commit.",
    ],
    processSteps: [
      {
        title: "Fit and mandate conversation",
        body: "We clarify capital appetite, horizon, and whether you’re leaning core equity, pre-sale, or a hybrid. No deal is forced into the wrong box.",
      },
      {
        title: "Project shortlist and data room",
        body: "Where there’s fit, we share project summaries, timelines, and key assumptions from the sponsor side—so you review substance, not hype.",
      },
      {
        title: "Structure and terms review",
        body: "We walk through pricing, tranches, default scenarios, and your rights at each phase. Questions go to the right desk before you sign.",
      },
      {
        title: "Commitment and execution",
        body: "Once aligned, we coordinate documentation and capital calls with the developer path. You know what happens next at each milestone.",
      },
    ],
    intakeServiceValue: "development",
    intakeGoalPlaceholder:
      "Are you after core equity, pre-sale inventory, or both? Ticket size, horizon, and how hands-on you want to be—so we match the right project structure.",
  },
  {
    slug: "investor-groups-bulk",
    title: "Investor groups & bulk condos",
    oneLiner:
      "Pool capital to secure a large block of condos in promoted projects—at bulk pricing under public presale—then resell as construction ramps or hold to completion.",
    detailParagraphs: [
      `This vertical is built for investor groups that want scale, not single units: we work with developments we actively promote across the south of the Dominican Republic—${SOUTH_DR_COVERAGE_AREAS}—and negotiate allocations so your group can take a sizeable bulk of condos at a discounted rate compared with what buyers see on the standard presale desk.`,
      "A lower entry price supports two outcomes—sell into stronger demand as the project goes vertical and the market re-prices, or hold through delivery and aim for a better rate of return because your basis stayed below late-cycle presale. Structure, minimums, and how the group acts together stay clear from the first conversation.",
    ],
    processSteps: [
      {
        title: "Group brief and ticket",
        body: "Share who leads the group, how many investors you expect, rough ticket per person, and target unit count or budget range. Say whether you lean toward flipping as the project advances or holding to the end—we route you to bulk blocks that fit that intent.",
      },
      {
        title: "Promoted-project match",
        body: `We introduce projects we’re promoting in ${SOUTH_DR_COVERAGE_AREAS} where bulk condo inventory is still available, with economics versus public presale spelled out so you’re comparing apples to apples.`,
      },
      {
        title: "Bulk terms, allocation, and docs",
        body: "We lock how the block is priced, how units are assigned within the group, assignment or resale rules if you exit early, and signing order. Legal and subscription paperwork follows the economics you’ve already reviewed.",
      },
      {
        title: "Deposits, milestones, and updates",
        body: "Capital follows the developer’s schedule. The group gets coordinated reporting through construction—so you can time a resale window or stay aligned if you’re riding through to delivery.",
      },
    ],
    intakeServiceValue: "investor-pool-bulk",
    intakeGoalPlaceholder:
      "How many condos or what aggregate budget, which areas or projects interest you, and whether you want to resell as the building rises or hold to completion—plus group size and ticket per person if you know it.",
  },
] as const satisfies readonly Vertical[];

export const verticalSlugs: VerticalSlug[] = VERTICALS.map((v) => v.slug);

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}
