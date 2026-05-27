import Image from "next/image";
import SectionTag from "./SectionTag";

type Stat = {
  label: string;
  value: string;
  unit: string;
  logo: string;
  logoAlt: string;
};

const STATS: Stat[] = [
  {
    label: "AVERAGE OPERATIONAL DISCIPLINE CONSISTENCY ACROSS TEAMS",
    value: "92",
    unit: "%",
    logo: "/Case-Study/square.svg",
    logoAlt: "Square",
  },
  {
    label: "COST EFFICIENCY COMPARED TO BUILDING AND RUNNING IN-HOUSE",
    value: "1/3",
    unit: "cost",
    logo: "/Case-Study/entourage.svg",
    logoAlt: "Entourage",
  },
  {
    label: "FROM FOUNDER-LED TO SYSTEM-LED",
    value: "120",
    unit: "days",
    logo: "/Case-Study/makermil.svg",
    logoAlt: "Maker Mil",
  },
];

export default function CaseStudy() {
  return (
    <section className="relative w-full bg-white px-6 py-24 text-ink sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:py-32 xl:px-48">
      <div className="flex w-full flex-col gap-14">
        <div className="flex items-center justify-between gap-6">
          <SectionTag variant="light">Case Study</SectionTag>
          <Image
            src="/LevLogisticsCaseStudy.png"
            alt="Lev Logistics"
            width={220}
            height={44}
            className="hidden h-10 w-auto max-w-none md:block md:h-11"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
          <div className="flex items-end gap-3 sm:gap-4 md:gap-6">
            <h2 className="text-[40px] font-medium leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="text-ink/35">Real businesses.</span>
              <br />
              <span className="text-ink">Measurable growth.</span>
            </h2>
            <Image
              src="/Vector2.png"
              alt=""
              width={140}
              height={140}
              aria-hidden
              className="hidden h-auto shrink-0 self-end sm:block sm:w-[90px] md:w-[120px] lg:w-[140px]"
            />
          </div>

          <div className="flex flex-col items-start gap-5">
            <Image
              src="/LevLogisticsCaseStudy.png"
              alt="Lev Logistics"
              width={220}
              height={44}
              className="block h-10 w-auto max-w-none md:hidden"
            />
            <button
              type="button"
              className="flex w-full shrink-0 items-center justify-center gap-3 bg-brand-orange px-6 py-4 font-mono text-[14px] tracking-[0.08em] text-white transition hover:bg-[#e02e1c] active:scale-[0.98] sm:text-[15px] md:inline-flex md:w-fit md:justify-start"
            >
              READ FULL CASE STUDY
              <svg
                width="18"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 17l5-5-5-5" />
                <path d="M13 17l5-5-5-5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[minmax(0,420px)_1fr] md:gap-12 lg:gap-16">
          <article className="relative flex flex-col gap-8 rounded-sm border-t-[3px] border-[#000625] bg-[#CFE3F5] p-8 sm:p-10">
            <Image
              src="/%E2%80%9C.svg"
              alt=""
              width={28}
              height={21}
              aria-hidden
              className="h-auto w-7"
            />

            <div className="flex flex-col gap-5 text-[18px] font-medium leading-[1.55] tracking-[-0.1px] text-ink sm:text-xl">
              <p>
                JAVM Partners transformed our sales approach. They didn&apos;t
                just make minor adjustments, they created a strategic process
                that set us apart from competitors.
              </p>
              <p>
                They established the operational foundation we needed, helping
                us generate $250k in new revenue within the first 3 months.
              </p>
            </div>

            <div className="mt-auto flex items-center gap-4 pt-4">
              {/*add no optimization to this image*/}
              <Image
                src="/KOSTA.png"
                alt="Kosta"
                width={2240}
                height={2240}
                quality={100}
                unoptimized
                className="h-18 w-18 rounded-sm object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="text-lg font-medium leading-tight text-ink">
                  Kosta
                </span>
                <span className="text-[17px] text-ink/65">
                  Director at Lev Logistics
                </span>
              </div>
            </div>
          </article>

          <div className="flex items-center justify-end">
            <Image
              src="/CaseStudySectionGraph.png"
              alt="Pipeline visibility after system implementation"
              width={760}
              height={510}
              unoptimized
              className="h-auto w-full max-w-[850px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat) => (
            <article
              key={stat.label}
              className="flex min-h-[360px] flex-col justify-between rounded-md bg-[#F3F4EE] p-7 sm:p-8"
            >
              <header className="flex items-start justify-between gap-6">
                <p className="max-w-[90%] font-mono text-xl uppercase leading-[1.1] tracking-tight text-ink sm:text-xl">
                  {stat.label}
                </p>
                <Image
                  src={stat.logo}
                  alt={stat.logoAlt}
                  width={120}
                  height={24}
                  className="h-6 w-auto max-w-none shrink-0"
                />
              </header>

              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-medium leading-[0.9] tracking-[-2px] text-[#0B1956] sm:text-9xl">
                  {stat.value}
                </span>
                <span className="text-6xl font-semibold text-[#7E86A2] sm:text-6xl">
                  {stat.unit}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
