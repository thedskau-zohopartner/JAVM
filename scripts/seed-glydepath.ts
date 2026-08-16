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
        "Specialising in ServiceNow enterprise AI workflows, GlydePath possessed elite technical capabilities but lacked a formalised sales foundation. To scale two distinct product lines, leadership recognised the need to hire a BDM but lacked the structured, high-performing infrastructure to ensure their onboarding success.",
      ),
      para(
        "Consequently, strategic growth and commercial execution relied entirely on trial and error. This operational bottleneck left executive leadership consumed by manual execution rather than high-level decision-making, stalled organisational progress and left the company’s true growth potential capped.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "The Approach",
    content: [
      para(
        "JAVM Partners entered into a strategic partnership with GlydePath, embedding at the board level to align long-term decision-making with rapid enterprise scale. We took a hands-on approach to completely re-engineer their sales infrastructure and market positioning.",
      ),
      para(
        "Upon deep analysis of the market and company, we crafted key long-term projects to place GlydePath in a position of large growth scale.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Build the A-to-Z sales infrastructure to onboard the first BDM",
    content: [
      para(
        "GlydePath operated with an elite technical delivery model but lacked a formalised, repeatable sales foundation and structured operational onboarding frameworks. This critical structural deficit made it impossible for leadership to confidently recruit, onboard, or successfully integrate a Business Development Manager (BDM). Without predefined sales methodologies, pipeline tracking mechanisms, or clearly defined key performance indicators (KPIs), any immediate commercial hire carried an unsustainably high risk of a failed onboarding cycle, prolonged ramp-up times, and inefficient allocation of growth capital.",
      ),
      para(
        "JAVM Partners engineered a comprehensive, A-to-Z enterprise sales playbook and operational infrastructure constructed specifically for GlydePath’s market niche. This architectural blueprint established standardised prospecting systems, sales process methodologies and embedded automation. JAVM Partners provided the essential organisational foundation required to guarantee the immediate success, strategic alignment, rapid ramp-up time, and long-term predictable output of future enterprise sales talent.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Board-level interventions and governance",
    content: [
      para(
        "The company’s strategic growth and commercial execution relied entirely on the founder’s trial and error, creating an operational bottleneck. Executive leadership was continually consumed by daily, manual sales execution, ad hoc prospecting, and tactical administrative troubleshooting rather than high-level decision-making. This dependency meant that organisational progress was directly capped by the founder’s personal bandwidth, leaving broader, macroscopic growth strategies unexecuted and severely limiting the enterprise’s ability to achieve sustainable scalability.",
      ),
      para(
        "JAVM Partners embedded directly at the board level, ensuring growth strategy and decisions were unified and correct to align company goals with weekly actions. This was done to establish rigorous governance structures and high-level strategic decision-making frameworks.",
      ),
      para(
        "This intervention institutionalised operational processes, streamlined reporting efforts, and effectively automated administrative burdens, restoring executive leadership’s focus exclusively to long-term market positioning, resource allocation, and high-impact growth.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Orchestrating the vendor ecosystem and pipeline opportunities",
    content: [
      para(
        "GlydePath Consulting needed to expand its market growth across two distinct, highly technical product lines but lacked a predictable, enterprise prospecting system. Because there was no structured outreach framework or formalised partner ecosystem in place, marketing and sales efforts relied on ad hoc networking, leaving revenue stagnant.",
      ),
      para(
        "This approach failed to convert high-value enterprise leads, created uneven sales cycles, and left major industry trade shows underutilised as methods for scalable client acquisition.",
      ),
      para(
        "JAVM Partners arranged and managed a suite of vendors to support company expansion and architected end-to-end industry trade show strategies designed to maximise market presence and capture high-yield field leads. We formalised GlydePath Consulting’s messaging and go-to-market offers to ensure both product lines could be scaled in parallel. Through managing trade events and partner channels into a highly structured lead-generation system, JAVM Partners established a predictable pipeline of enterprise opportunities.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Key results",
    content: [
      bullet(
        "Embedded at the board level to drive strategic growth and formalise high-performance vendor onboarding frameworks",
      ),
      bullet(
        "Architected a scalable outbound prospecting system and executed end-to-end trade show strategies to maximise high-yield lead generation",
      ),
      bullet(
        "Engineered a comprehensive, A-to-Z sales infrastructure to support a structured, “ready-to-hire” sales function",
      ),
      bullet(
        "Optimised product positioning and go-to-market offer to simultaneously scale two distinct product lines in parallel",
      ),
      bullet(
        "Integrated AI and embedded workflows into the sales pipeline, drastically reducing founder lead time while maximising output",
      ),
    ],
  },
];

async function main() {
  const [logo, portrait] = await Promise.all([
    client.assets.upload("image", readFileSync("/tmp/glydepath-logo.png"), {
      filename: "glydepath-logo.png",
    }),
    client.assets.upload("image", readFileSync("public/Clients/JAMIE.png"), {
      filename: "jamie-douglas.png",
    }),
  ]);

  const doc = await client.createOrReplace({
    _id: "caseStudy-glydepath",
    _type: "caseStudy",
    company: "GlydePath",
    slug: { _type: "slug", current: "glydepath" },
    person: "Jamie",
    role: "Founder at GlydePath Consulting",
    category: "IT Consulting",
    featured: false,
    publishedAt: new Date().toISOString(),
    cardHeading: "From stalled growth to rapid scale",
    title: "From stalled growth to rapid scale",
    subtitle:
      "How Jamie embedded a fully managed operational team to take the time and the how out of growth",
    summary:
      "GlydePath Consulting is an Australian IT consulting firm that specialises in architecting and implementing ServiceNow enterprise workflows.",
    facts: [
      {
        _type: "fact",
        _key: nextKey(),
        label: "Industry",
        value: "IT consulting",
      },
      {
        _type: "fact",
        _key: nextKey(),
        label: "Founded",
        value: "Jamie Douglas, 2025",
      },
      {
        _type: "fact",
        _key: nextKey(),
        label: "Headquarters",
        value: "Brisbane, Australia",
      },
    ],
    body,
    quote:
      "I chose JAVM Partners because we had no real sales foundation, and I didn’t want to hire a BDM without the right structure in place. They offered a solution I wasn’t aware existed in the market that fitted my needs perfectly. We are now moving towards building a scalable and managed sales function to support growth as we expand.",
    quoteAuthor: "Jamie Douglas, Founder at GlydePath Consulting",
    logo: {
      _type: "image",
      asset: { _type: "reference", _ref: logo._id },
      alt: "GlydePath Consulting logo",
    },
    portrait: {
      _type: "image",
      asset: { _type: "reference", _ref: portrait._id },
      alt: "Jamie Douglas, founder of GlydePath Consulting",
    },
  });

  console.log(`Published ${doc._id} -> /case-study/glydepath`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
