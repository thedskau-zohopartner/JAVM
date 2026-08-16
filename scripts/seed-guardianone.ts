import { readFileSync } from "node:fs";
import { getCliClient } from "sanity/cli";

const client = getCliClient();

let keyCounter = 0;
const nextKey = () => `k${(keyCounter += 1)}`;

function para(text: string) {
  return {
    _type: "block",
    _key: nextKey(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: nextKey(), text, marks: [] }],
  };
}

function bullet(text: string) {
  return { ...para(text), listItem: "bullet", level: 1 };
}

const body = [
  {
    _type: "section",
    _key: nextKey(),
    heading: "The Situation",
    content: [
      para(
        "Following a highly successful 16-year operational legacy, the company recently underwent a full corporate transformation. A rebrand was completed, a restructured management team, new personnel, and aggressive growth benchmarks.",
      ),
      para(
        "However, despite the fresh market identity, the business lacked the strategic sales and operational infrastructure required to successfully launch.",
      ),
      para(
        "The sales function was entirely unformalised. No dedicated sales systems, no foundational pipeline infrastructure, and no established embedded sales leadership to convert new clients.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "The Approach",
    content: [
      para(
        "The engagement began with an intensive diagnostic of the newly restructured organisation to align its 16 years of industry capability with its fresh corporate identity. JAVM Partners mapped out a commercial blueprint, focusing on building a modern sales process from the ground up.",
      ),
      para(
        "This strategic and operational roadmap allowed JAVM Partners to embed themselves directly within GuardianOne to architect, install, and execute the vital systems needed to drive sustainable outcomes.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Strategic go-to-market roadmap and alignment",
    content: [
      para(
        "GuardianOne was still in the midst of its corporate rebrand at the point of engagement. The leadership team lacked a unified strategic roadmap to transition the new identity into the market. There was no formalised operational plan, training framework, or defined milestones to ensure the internal organisation could support and execute the brand’s aggressive new growth targets.",
      ),
      para(
        "JAVM Partners engineered and deployed a comprehensive, phased strategic roadmap designed to synchronise GuardianOne’s leadership and sales function. We mapped out the exact sales systems, team training required and priority activities to drive the brand forward. Crucially, this strategy translated high-level growth goals into highly defined, measurable KPIs and organisational outcomes.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Team upskilling and operational discipline",
    content: [
      para(
        "In preparation for the market launch, GuardianOne’s leadership required alignment and skill development regarding the company’s newly defined Unique Selling Proposition (USP). The organisation possessed no standardised sales framework, leaving the founders without a structured approach for executing modern sales-based lead generation, running high-converting sales conversations, or enforcing best-practice follow-up cadences.",
      ),
      para(
        "JAVM Partners engineered and executed an intensive, practical training protocol designed to build long-term operational discipline across the leadership team. Rather than delivering abstract theory, we embedded real-time skill development directly into the company’s daily operations, ensuring clarity and progress could be installed for the B2B sales lifecycle, pipeline management, and follow-up strategies.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Post-merger stalled opportunities",
    content: [
      para(
        "Following the audit, JAVM Partners was able to categorise and identify critical revenue gaps caused by the merger of the new brand. Stalled pipeline opportunities, past proposal non-closures, upsell cadences and referral patterns were left open.",
      ),
      para(
        "JAVM instilled follow-up operations and frameworks, and 1-to-1 support on the execution of strategy, turning stagnant opportunities into active pursuits to drive revenue under the new brand, as well as navigating new prospective opportunities and pipeline growth.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Key results",
    content: [
      bullet(
        "Aligned leadership under a phased strategic roadmap, transforming abstract growth targets into clear milestones and measurable organisational KPIs",
      ),
      bullet(
        "Engineered and deployed a formalised sales infrastructure from scratch, replacing unstandardised practices with repeatable operational structure",
      ),
      bullet(
        "Delivered intensive, real-time training on lead generation, high-converting sales conversations, and best-practice follow-up cadences to build long-term capability",
      ),
      bullet(
        "Re-established lost post-merger revenue opportunities by identifying stalled pipeline, past proposals, forgotten upsell cadences and referral channels",
      ),
      bullet(
        "Stabilised the sales ecosystem with 1-to-1 execution support, ensuring continuous lead generation efforts under the new brand identity",
      ),
    ],
  },
];

async function main() {
  const [logo, portrait] = await Promise.all([
    client.assets.upload("image", readFileSync("/tmp/guardianone-logo.png"), {
      filename: "guardianone-logo.png",
    }),
    client.assets.upload("image", readFileSync("public/Clients/LEON.png"), {
      filename: "leon-liberchuk.png",
    }),
  ]);

  const doc = await client.createOrReplace({
    _id: "caseStudy-guardianone",
    _type: "caseStudy",
    company: "GuardianOne",
    slug: { _type: "slug", current: "guardianone" },
    person: "Leon",
    role: "Founder at GuardianOne",
    category: "MSP & Cyber",
    featured: false,
    publishedAt: new Date().toISOString(),
    cardHeading: "From stalled MSP to growth clarity and action",
    title: "From stalled MSP to growth clarity and action",
    subtitle:
      "How GuardianOne built strategy and high-performing operations to support new sales growth",
    summary:
      "GuardianOne is an Australian security services company providing B2B security solutions to commercial clients.",
    facts: [
      {
        _type: "fact",
        _key: nextKey(),
        label: "Industry",
        value: "MSP and cyber",
      },
      {
        _type: "fact",
        _key: nextKey(),
        label: "Founded",
        value: "Leon Liberchuk, 2010",
      },
      {
        _type: "fact",
        _key: nextKey(),
        label: "Headquarters",
        value: "Melbourne, Australia",
      },
    ],
    body,
    quote:
      "We were flying blind, no leads, no real process, and no idea how to grow. JAVM Partners came in bringing stability. They built us a clear sales process, helped us execute, and set us up to scale with confidence.",
    quoteAuthor: "Leon Liberchuk, Founder at GuardianOne",
    logo: {
      _type: "image",
      asset: { _type: "reference", _ref: logo._id },
      alt: "GuardianOne logo",
    },
    portrait: {
      _type: "image",
      asset: { _type: "reference", _ref: portrait._id },
      alt: "Leon Liberchuk, founder of GuardianOne",
    },
  });

  console.log(`Published ${doc._id} -> /case-study/guardianone`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
