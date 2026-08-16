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
        "The franchise faced a critical growth bottleneck — visibility and member acquisition. They struggled to intercept prospects from corporate gym mammoths, held back by an unstructured sales function and low conversion confidence on the gym floor.",
      ),
      para(
        "Without automated workflows, pipeline visibility, or high-converting operational processes embedded into the general manager’s daily routine, the sales staff were effectively working blind.",
      ),
      para(
        "As a result, the founder was constantly dragged back into frontline sales execution instead of leading the company’s growth. It was clear that there were no formalised operations across the franchise model to sustain a plug-and-play repeatable operating system.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "The Approach",
    content: [
      para(
        "JAVM Partners mapped out a practical commercial blueprint designed to build a modern, scalable sales process from the ground up that can be transferable at scale.",
      ),
      para(
        "By embedding directly into the daily operations of the franchise, JAVM architected, installed, and executed the vital systems, trainings and automated workflows required to remove the founder from frontline sales and drive sustainable member acquisition.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Accelerating member acquisition and improving profit",
    content: [
      para(
        "Stadium Fitness was facing a critical financial bottleneck after several consecutive months below break-even sales. In a fitness market heavily impacted by Perth’s transient FIFO culture, the business struggled to outpace its churn rate. Because the gym relied entirely on organic foot traffic and lacked proactive lead generation or demand creation systems, no new marketed prospects were entering the pipeline. This lack of predictable acquisition created a significant risk, causing the company to steadily bleed capital.",
      ),
      para(
        "JAVM Partners engineered and executed a comprehensive, multi-channel go-to-market campaign to rapidly scale customer acquisition. We built and orchestrated promotion-based social media advertising, optimised digital capture funnels, ran direct sales in the hyper-local community, and formed strategic affiliate partnerships with local businesses.",
      ),
      para(
        "Simultaneously, we deployed an older-lead re-engagement push and an incentivised member referral program. As a result, all sales metrics 2x and drove 3 consecutive months of record-breaking company sales.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Automations, workflows and operations",
    content: [
      para(
        "Because the franchise model lacked standard operating procedures, the team relied on trial and error to scale, leaving the business without the repeatable framework needed to scale with confidence. Management operated entirely on gut feel with misaligned KPIs, unstructured training programs, and no formal process for measuring ROI. The manual sales process created major time bottlenecks for the staff, resulting in delayed response times and inconsistent customer experiences.",
      ),
      para(
        "JAVM Partners engineered and installed a comprehensive suite of sales and management Standard Operating Procedures (SOPs) to formalise the business. We established clear KPI frameworks, predictable performance benchmarks, and structured management playbooks that transformed sales into a highly transferable skill. To optimise efficiency, JAVM Partners automated the entire client acquisition funnel, including inquiry forms, pre-meeting touchpoints, automated follow-up cadences, and post-sale referral campaigns, removing the operational burden from the founder and saving significant time for the sales team.",
      ),
      para(
        "The management team was embedded with new daily structures, tools and resources to effectively track KPIs.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Upskilling and management",
    content: [
      para(
        "The rapid implementation of new structural and operational processes created a critical knowledge gap within the leadership team. Management lacked the specialised capability required to interpret sales data, identify key indicators for campaign pivots, evaluate individual sales performance, and build accurate forecasting models. Without this strategic oversight, the team could not effectively leverage the new systems to make data-driven decisions.",
      ),
      para(
        "JAVM Partners directly embedded themselves as the management team, providing hands-on oversight and establishing a rigorous performance review cadence. We engineered and executed upskilling programs that empowered the Stadium Fitness management team to confidently analyse sales metrics, accurately forecast revenue, and independently make high-ROI operational pivots.",
      ),
    ],
  },
  {
    _type: "section",
    _key: nextKey(),
    heading: "Key results",
    content: [
      bullet(
        "Achieved 3 consecutive months of record-breaking franchise sales, pulling the business out of consecutive below-break-even periods",
      ),
      bullet(
        "Effectively doubled all core sales and acquisition metrics by executing a multi-channel demand creation strategy and optimising the sales process",
      ),
      bullet(
        "Replaced trial-and-error operations with a formalised suite of sales and management Standard Operating Procedures (SOPs)",
      ),
      bullet(
        "Eliminated manual operational bottlenecks by automating the entire client acquisition funnel, saving critical hours for the sales staff and leadership",
      ),
      bullet(
        "Bridged the leadership gap through embedded management and upskilling to transition the management team from gut-feel decision-making to accurate forecasting and operational discipline",
      ),
    ],
  },
];

async function main() {
  const [logo, portrait] = await Promise.all([
    client.assets.upload("image", readFileSync("/tmp/stadium-logo.png"), {
      filename: "stadium-fitness-logo.png",
    }),
    client.assets.upload("image", readFileSync("public/Clients/ANDO.png"), {
      filename: "andrew-ando.png",
    }),
  ]);

  const doc = await client.createOrReplace({
    _id: "caseStudy-stadium-fitness",
    _type: "caseStudy",
    company: "Stadium Fitness",
    slug: { _type: "slug", current: "stadium-fitness" },
    person: "Ando",
    role: "Founder at Stadium Fitness",
    category: "Health & Wellness",
    featured: false,
    publishedAt: new Date().toISOString(),
    cardHeading: "From chaos to control",
    title: "From chaos to control",
    subtitle:
      "How Ando streamlined revenue driven operations and unlocked revenue growth in 6 months",
    summary:
      "A family-run, Perth-based gym franchise dedicated to empowering individuals through health and strength while actively giving back to the local community.",
    facts: [
      {
        _type: "fact",
        _key: nextKey(),
        label: "Industry",
        value: "Health and wellness",
      },
      {
        _type: "fact",
        _key: nextKey(),
        label: "Founded",
        value: "Andrew Ando, 2015",
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
      "We had no clear sales structure, unsure who to target, how to get them in, or how to close and keep them. JAVM Partners built a simple process that fixed all of that. Now we attract the right people and turn more of them into long-term members.",
    quoteAuthor: "Andrew Ando, Founder at Stadium Fitness",
    logo: {
      _type: "image",
      asset: { _type: "reference", _ref: logo._id },
      alt: "Stadium Fitness logo",
    },
    portrait: {
      _type: "image",
      asset: { _type: "reference", _ref: portrait._id },
      alt: "Andrew Ando, founder of Stadium Fitness",
    },
  });

  console.log(`Published ${doc._id} -> /case-study/stadium-fitness`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
