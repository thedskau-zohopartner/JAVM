import Image from "next/image";
import SectionTag from "./SectionTag";

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
    label: "EBITDA increase at valuation post-systemisation",
  },
  {
    value: "90",
    unit: "days",
    label: "to shift from founder-led to system-led growth",
  },
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
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 5h16v10H8l-4 4Z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    desc: "We take responsibility for outcomes and focus on solutions, not excuses.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 3h9l3 3v13a1 1 0 0 1-1.5.87L15 19l-1.5.87L12 19l-1.5.87L9 19l-1.5.87L6 19Z" />
        <path d="M9 8h6M9 11h4" />
        <path d="m13.5 14 1 1 2.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Results & growth",
    desc: "Our success is measured by real changes in your business, not by reports or sessions.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m4 16 5-6 4 4 7-8" />
        <path d="M14 6h6v6" />
      </svg>
    ),
  },
  {
    title: "Tenacity",
    desc: "We tackle challenges head-on and remain committed, even when things get tough.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3 3 12l9 9 9-9Z" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    ),
  },
];

function RuledHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center gap-4 sm:gap-6">
      <span aria-hidden className="h-px flex-1 bg-ink/20" />
      <span className="whitespace-nowrap font-mono text-lg uppercase text-ink/70 sm:text-lg font-medium">
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
        <SectionTag variant="light">About Us</SectionTag>

        <h1 className="max-w-[18ch] text-[40px] font-medium leading-[1.05] tracking-[-1.4px] text-ink sm:text-[56px] lg:text-[72px] lg:tracking-[-2.4px]">
          We created JAVM Partners to take the hassle out of growth.
        </h1>

        <p className="max-w-[60ch] text-[17px] font-light leading-[1.5] tracking-[-0.1px] text-ink/65 sm:text-lg lg:text-[20px]">
          Companies that have strong delivery and market fit, however, are
          faced with lack of time or know-how, along with all the pains that
          come with growth
        </p>

        <figure className="flex w-full max-w-[820px] flex-col items-start gap-3">
          <Image
            src="/about-us/james-and-jarrod.png"
            alt="James Musa and Jarrod Musa, founders of JAVM Partners"
            width={1640}
            height={920}
            priority
            className="block h-auto w-full rounded-sm"
          />
        </figure>

        <div className="mt-6 flex w-full flex-col items-center gap-10 sm:mt-10 sm:gap-12">
          <RuledHeading>The pattern was always the same.</RuledHeading>

          <div className="flex max-w-[62ch] flex-col gap-7 text-base leading-[1.55] tracking-[-0.1px] text-ink/70 sm:text-lg lg:text-xl font-normal">
            <p>
              After having 1000&rsquo;s of conversations with business owners
              around the hassle of growth through sales and consulting.
            </p>
            <p>
              We identified a recurring bottleneck: most companies lack a
              scalable sales system that actually drives long-term revenue and
              team development.
            </p>
            <p>
              While typical consultants provide a &quot;quick-fix&quot;
              framework and disappear, JAVM Partners was built to provide the
              permanent infrastructure to support business owners in growth
            </p>
            <p>JAVM was created to fill this gap!</p>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-10 sm:mt-10 sm:gap-12">
          <RuledHeading>Our guarantee</RuledHeading>

          <div className="flex max-w-[62ch] flex-col gap-6 text-[17px] leading-[1.55] tracking-[-0.1px] text-ink/70 sm:text-lg lg:text-[20px]">
            <p>
              Our promise is simple and ironclad!{" "}
              <span className="font-semibold text-ink">
                You&rsquo;ll see measurable results or we work for free until
                you&rsquo;re 100% thrilled with the outcome.
              </span>
            </p>
            <p>
              No excuses, no fine print, just real results and your total
              satisfaction
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map((s) => (
              <article
                key={s.label}
                className="flex min-h-[260px] flex-col justify-between gap-12 rounded-sm bg-[#F3F4EE] p-7 text-left sm:min-h-[280px] sm:p-8"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-[72px] font-medium leading-[0.9] tracking-[-2px] text-ink sm:text-[88px]">
                    {s.value}
                  </span>
                  <span className="text-[28px] font-medium text-ink/45 sm:text-[32px]">
                    {s.unit}
                  </span>
                </div>
                <p className="max-w-[28ch] text-[14px] leading-[1.45] text-ink/55 sm:text-[15px]">
                  {s.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-10 sm:mt-16 sm:gap-14">
          <SectionTag variant="light">What We Stand For</SectionTag>

          <h2 className="max-w-[20ch] text-[40px] font-normal leading-[1.05] tracking-[-1.4px] text-ink sm:text-5xl lg:text-5xl lg:tracking-[-2.4px]">
            Four values. All of them operational.
          </h2>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="flex min-h-[230px] flex-col justify-between gap-12 rounded-sm bg-[#F1F2EC] p-7 text-left sm:p-8"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] bg-ink text-white sm:h-11 sm:w-11">
                  {v.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[22px] font-normal leading-[1.15] tracking-[-0.4px] text-ink sm:text-[24px]">
                    {v.title}
                  </h3>
                  <p className="max-w-[42ch] text-[15px] leading-[1.5] text-ink/60 sm:text-lg font-normal">
                    {v.desc}
                  </p>
                </div>
              </article>
            ))}
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
            <p>
              No fine print. No conditions designed to protect us. We put this
              in writing because we&apos;re confident in the work and because
              we think it&apos;s the only honest way to operate.
            </p>
          </div>

          <a
            href="#"
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
          </a>
        </div>
      </div>
    </section>
  );
}
