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
        "The company had successfully built its backend operations, had the delivery team, and possessed the operational capability to execute top-tier security work. They had even deployed a robust outbound prospecting function consisting of five Sales Development Representatives (SDRs). However, the fundamental constraint was not the structure of the machine; it was that the machine had come to a complete halt.",
      ),
      para(
        "The sales team was booking unqualified appointments, the founder was struggling to convert new clients, and the delivery team sat idle waiting for new projects to begin. With revenue completely stalled, the business was forced to consistently outlay capital to keep the entire team afloat. Despite a surplus of moving parts, leadership lacked the clear visibility needed to diagnose the bottleneck and return Cyber Node to full operational capacity.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "The Approach",
    content: [
      para(
        "JAVM Partners stepped in to diagnose the constraints. Rather than restructuring the team, the focus was placed on optimising the sales process.",
      ),
      para(
        "We embedded directly within the outbound sales function to completely overhaul the process. Providing the strategic intervention that bridged the gap between prospecting and closed contracts. In the process, Cyber Node adopted the systems, upskilling and management required to continually generate new revenue.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading:
      "Generating immediate returns and establishing long-term conversion success",
    content: [
      para(
        "Cyber Node’s outbound prospecting framework had become a critical $100,000 sunk-cost investment yielding zero financial return. While the business had previously grown under the founder’s direct sales efforts, the transition to a team of 5 Sales Development Representatives (SDRs) caused conversion rates to collapse. A deep-dive analysis revealed that the SDR team was optimised against misaligned KPIs, incentivising the team to build the pipeline with highly unqualified leads that had no buying intent or budget authority.",
      ),
      para(
        "JAVM Partners stepped in to completely re-engineer the outbound system, establishing a new Ideal Customer Profile (ICP) backed by a data-driven demographic of their highest-performing past global clients. We implemented a multi-layered lead qualification framework to ensure the sales team only engaged high-value enterprise accounts.",
      ),
      para(
        "To generate immediate liquidity, JAVM Partners deployed a series of short-term revenue boosters, including past client referral programs, direct 1-to-1 deal support on active accounts, and a pipeline re-engagement campaign. This immediate intervention generated a cash return within the first 60 days.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Sales process operations around prospecting and converting",
    content: [
      para(
        "Cyber Node’s sales process lacked a formal, high-converting consultative approach, leaving the business entirely dependent on “hot,” ready-to-buy referrals to close deals. The company lacked the educational assets, nurturing materials, and trust-building frameworks necessary to engage and convert colder, high-value enterprise accounts.",
      ),
      para(
        "Without a structured methodology to guide cold prospects through a complex buying cycle, qualified leads were frequently lost, coupled with a CRM that failed to reflect a modern enterprise sales pipeline.",
      ),
      para(
        "JAVM Partners engineered and deployed a sophisticated consultative selling model tailored specifically for cold enterprise sales. We built a custom pre-nurture cadence utilising an authority-driven case study framework to establish deep credibility before the initial discovery call. To cement these changes, JAVM Partners completely reconfigured Cyber Node’s CRM to accurately reflect the new sales infrastructure, ensuring absolute pipeline visibility and maximising the conversion probability of every qualified prospect.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Team management and permanent sales change",
    content: [
      para(
        "The rapid implementation of the new ICP and qualification process exposed a severe operational friction point. The existing SDR team lacked the tactical capability to execute the new strategy, creating an immediate skill gap that threatened to stall the go-to-market process. Cyber Node required a permanent cultural and behavioural shift that needed training and real-time management.",
      ),
      para(
        "JAVM Partners directly embedded into the sales function. Operating the sales team and the founder to bridge the execution gap and drive permanent behavioural change. We established daily procedures, live pipeline reviews, and real-time feedback loops that replaced old habits with data-driven sales discipline.",
      ),
      para(
        "By installing structured accountability frameworks, performance tracking models, and continuous upskilling cadences, JAVM Partners permanently transformed the outbound team from basic appointment setters into highly effective sales professionals, and transformed the sales process itself into a high-converting consultative sales model.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Key results",
    content: [
      bullet(
        "Deployed short-term revenue strategies, including pipeline re-engagement and direct 1-to-1 deal support, to reverse capital drain and generate an immediate cash return on investment within 60 days",
      ),
      bullet(
        "Rescued a stalled $100,000 prospecting investment by completely overhauling the SDR team and sales process",
      ),
      bullet(
        "Standardised a modern consultative-based selling model and authority-driven pre-nurture cadence, breaking the business’s total dependency on hot inbound referrals",
      ),
      bullet(
        "Reconfigured and optimised Cyber Node’s CRM architecture, replacing operational blind spots with pipeline visibility and measurable conversion tracking",
      ),
      bullet(
        "Embedded directly into operations to establish accountability frameworks, upskilling and systems to transform the sales management and performance",
      ),
    ],
  },
];

async function main() {
  const [logo, portrait] = await Promise.all([
    client.assets.upload("image", readFileSync("/tmp/cybernode-logo.png"), {
      filename: "cyber-node-logo.png",
    }),
    client.assets.upload("image", readFileSync("public/Clients/MATT.png"), {
      filename: "matt-breuillac.png",
    }),
  ]);

  const doc = await client.createOrReplace({
    _id: "caseStudy-cyber-node",
    _type: "caseStudy",
    company: "Cyber Node",
    slug: { _type: "slug", current: "cyber-node" },
    person: "Matt",
    role: "Founder at Cyber Node",
    category: "Cybersecurity & Managed Services",
    featured: false,
    publishedAt: new Date().toISOString(),
    cardHeading: "World-class delivery but struggling to convert clients",
    title: "World-class delivery but struggling to convert clients",
    subtitle:
      "How Matt restructured revenue operations to build pipeline and close deals",
    summary:
      "Cyber Node protects businesses globally from evolving digital threats with managed, enterprise-grade cybersecurity solutions and penetration testing.",
    facts: [
      {
        _type: "fact",
        _key: nextKey(),
        label: "Industry",
        value: "Cybersecurity and managed services",
      },
      {
        _type: "fact",
        _key: nextKey(),
        label: "Founded",
        value: "Matt Breuillac, 2023",
      },
      {
        _type: "fact",
        _key: nextKey(),
        label: "Headquarters",
        value: "Perth, Australia",
      },
    ],
    body,
    quote:
      "Our sales had completely plateaued. We had leads, but no structure and it showed. JAVM Partners came in, rebuilt our sales process from the ground up, and within weeks, we were back to closing high-quality deals consistently. It felt like we finally got out of our own way.",
    quoteAuthor: "Matt Breuillac, Founder at Cyber Node",
    logo: {
      _type: "image",
      asset: { _type: "reference", _ref: logo._id },
      alt: "Cyber Node logo",
    },
    portrait: {
      _type: "image",
      asset: { _type: "reference", _ref: portrait._id },
      alt: "Matt Breuillac, founder of Cyber Node",
    },
  });

  console.log(`Published ${doc._id} -> /case-study/cyber-node`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
