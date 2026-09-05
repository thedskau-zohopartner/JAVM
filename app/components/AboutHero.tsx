import Image from "next/image";
import SectionTag from "./SectionTag";
import TransitionLink from "./TransitionLink";

type Stat = {
  value: string;
  unit: string;
  label: string;
};

const STATS: Stat[] = [
  {
    value: "100",
    unit: "%",
    label: "Guaranteed reduction in deal cycle length",
  },
  {
    value: "1.5",
    unit: "x",
    label: "Average engagement EBITA increase at valuation",
  },
  {
    value: "90",
    unit: "days",
    label: "Average investment break-even speed",
  },
];

const NARRATIVE = [
  "We had one question",
  "What makes company A scale versus company B not?",
  "In our analysis we identified it’s not a marketing constraint, it’s a sales infrastructure constraint.",
  "Most companies lack a scalable sales system that actually drive long-term revenue and team development.",
  "We saw the gap no one was doing well.",
  "While typical coaches, advisors and consultants sit on the left side providing quick-fix frameworks and disappear.",
  "JAVM Partners was built on the right side to provide the permanent infrastructure to support business owners in growth, as a partner.",
];

type Value = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const VALUES: Value[] = [
  {
    title: "Transparency",
    desc: "We ensure clear communication about every aspect of our engagement.",
    /* chat */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 4h16v12H8l-4 4Z" />
        <path d="M8 8.5h8M8 12h5" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    desc: "We take responsibility for outcomes and focus on solutions, not excuses.",
    /* contract_edit */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M13.5 2.5H6v19h5" />
        <path d="M13.5 2.5 18 7v4" />
        <path d="M9 8h5M9 11.5h4" />
        <path d="m20.4 13.6-6 6-2.9.8.8-2.9 6-6a1.5 1.5 0 0 1 2.1 2.1Z" />
      </svg>
    ),
  },
  {
    title: "Results & Outcomes",
    desc: "Our success is measured by real changes in your business, not by reports or sessions.",
    /* show_chart */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m3 16.5 5.5-5.5 3.5 3.5L21 7.5" />
      </svg>
    ),
  },
  {
    title: "Tenacity",
    desc: "We tackle challenges head-on and remain committed, even when things get tough. What ever it takes.",
    /* handshake */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m2.5 10.5 3.5-3.5 2.5 1.5h6l2.5-1.5 3.5 3.5" />
        <path d="M6 7v8.5M18 7v8.5" />
        <path d="M8.5 12.5 11 15l1.5-1.5L14 15l1.5-1.5L17 15" />
      </svg>
    ),
  },
];

function ValueCard({ value }: { value: Value }) {
  return (
    <article className="flex min-h-57.5 flex-col gap-10 rounded-[4px] bg-[#F1F3F4] p-5 text-left transition-[flex-grow] duration-500 ease-out sm:flex-1 sm:basis-0 sm:hover:grow-[1.3728] lg:gap-15">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-ink text-white [&>svg]:h-6 [&>svg]:w-6">
        {value.icon}
      </span>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-medium leading-[26px] tracking-[-0.03em] text-[#080808]">
          {value.title}
        </h3>
        <p className="text-base font-medium leading-6 tracking-[-0.02em] text-[#080808]/60 lg:text-lg">
          {value.desc}
        </p>
      </div>
    </article>
  );
}

function RuledHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center gap-4 sm:gap-6">
      <span aria-hidden className="h-px flex-1 bg-ink/20" />
      <span className="whitespace-nowrap font-mono text-sm font-medium uppercase leading-[26px] text-ink/60 sm:text-base">
        {children}
      </span>
      <span aria-hidden className="h-px flex-1 bg-ink/20" />
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="w-full px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 rounded-md bg-white px-6 py-14 text-center sm:gap-12 sm:px-12 sm:py-20 lg:gap-14 lg:px-20 lg:py-24">
        <div className="inline-flex items-center gap-3 bg-[#F3F4EE] px-3.5 py-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-[#3D3D41] capitalize">
          <span
            aria-hidden
            className="block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-ink/80"
          />
          About us
        </div>

        <h1 className="max-w-235 text-[40px] font-medium leading-[1.06] tracking-[-0.04em] text-ink sm:text-[56px] lg:text-[64px]">
          We created JAVM Partners to take the hassle out of growth.
        </h1>

        <p className="max-w-153 text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-ink/70 sm:text-xl lg:text-2xl">
          Built for companies that have strong delivery and market fit, however, are faced with a lack of time or the know-how, to solve all the pains that come with growth
        </p>

        <Image
          src="/about-us/james-and-jarrod.png"
          alt="James Musa and Jarrod Musa, founders of JAVM Partners"
          width={1640}
          height={920}
          priority
          className="block aspect-900/459 w-full max-w-225 rounded-lg object-cover"
        />

        <div className="flex w-full max-w-235 flex-col items-center gap-6">
          <RuledHeading>The pattern was always the same</RuledHeading>

          <div className="flex max-w-150 flex-col gap-6.5 text-base font-medium leading-[1.3] tracking-[-0.03em] text-ink/70 sm:text-lg lg:text-xl">
            {NARRATIVE.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="text-base font-medium leading-[1.3] tracking-[-0.03em] text-ink/70 sm:text-lg lg:text-xl">
            JAVM was created to fill this gap!
          </p>
        </div>

        <div className="grid w-full max-w-235 grid-cols-1 gap-4.5 sm:grid-cols-3">
          {STATS.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col justify-between gap-11 rounded-[4px] bg-[#F3F4EE] p-6 text-left sm:min-h-62.5"
            >
              <p className="flex items-baseline text-ink">
                <span className="text-[52px] font-medium leading-[80px] tracking-[-0.04em] lg:text-[61px]">
                  {stat.value}
                </span>
                <span className="text-[32px] font-medium leading-[37px] text-ink/50 lg:text-[37px]">
                  {stat.unit}
                </span>
              </p>
              <p className="text-base font-medium leading-5 tracking-[-0.01em] text-ink/60">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-10 sm:mt-16 sm:gap-14">
          <SectionTag variant="light">What We Stand For</SectionTag>

          <h2 className="max-w-[20ch] text-[40px] font-normal leading-[1.05] tracking-[-1.4px] text-ink sm:text-5xl lg:text-5xl lg:tracking-[-2.4px]">
            Four values. All of them operational.
          </h2>

          {/* equal by default; the hovered card grows into the 534/389 split */}
          <div className="flex w-full max-w-235 flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <ValueCard value={VALUES[0]} />
              <ValueCard value={VALUES[1]} />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ValueCard value={VALUES[2]} />
              <ValueCard value={VALUES[3]} />
            </div>
          </div>

          <div aria-hidden className="h-px w-1/2 bg-ink/15" />
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-8 sm:mt-10 sm:gap-10">
          <SectionTag variant="light">Our Commitment</SectionTag>

          <h2 className="max-w-[22ch] text-5xl font-normal leading-[1.05] tracking-[-1.4px] text-ink sm:text-5xl lg:text-6xl lg:tracking-[-2.4px]">
            We guarantee to back our work completely.
          </h2>



          <div className="flex max-w-[45ch] flex-col gap-5 text-[17px] leading-[1.55] tracking-[-0.1px] text-ink/65 sm:text-lg lg:text-[20px]">
            <p>
              If you don&apos;t see measurable improvement in your sales
              performance, we keep working at no additional cost until you do.
            </p>
            <p className="block md:hidden">
              No fine print. No conditions designed to protect us. We put this
              in writing because we&apos;re confident in the work and because
              we think it&apos;s the only honest way to operate.
            </p>
          </div>

          <TransitionLink
            href="/contact-us"
            className="inline-flex w-full max-w-[360px] items-center justify-center gap-3 rounded-[2px] bg-brand-orange px-8 py-[18px] font-mono text-[15px] font-bold uppercase leading-tight tracking-wider text-white shadow-[0_4px_18px_rgba(249,63,40,0.25)] transition-all duration-300 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_6px_24px_rgba(249,63,40,0.35)] sm:text-[16px]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18 3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3ZM6 3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3ZM18 15a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3ZM6 15a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
              <path d="M9 6h6M9 18h6M6 9v6M18 9v6" />
            </svg>
            BOOK A DISCOVERY CALL
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
