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
    <section className="relative w-full bg-white px-4 pt-15 pb-37.5 text-ink sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:py-32 xl:px-48">
      <div className="flex w-full flex-col gap-6 lg:gap-14">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
          <div className="flex items-end gap-3 sm:gap-4 md:gap-6">
            <h2 className="text-[40px] font-medium leading-[50px] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:leading-[1.05] lg:tracking-normal">
              <span className="text-[#080808]/60 lg:text-ink/35">
                Real businesses.
              </span>
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

          <div className="flex flex-col items-start gap-6 md:gap-5">
            <Image
              src="/LevLogisticsCaseStudy.png"
              alt="Lev Logistics"
              width={220}
              height={44}
              className="block h-9.25 w-auto max-w-none md:hidden"
            />
            <button
              type="button"
              className="flex h-12.25 w-full shrink-0 items-center justify-center gap-3 rounded-xs bg-[#EC3B0D] px-6.5 font-mono text-sm font-bold uppercase leading-[17px] tracking-normal text-white transition hover:bg-[#d43509] active:scale-[0.98] md:inline-flex md:h-auto md:w-fit md:justify-start md:rounded-none md:bg-brand-orange md:px-6 md:py-4 md:text-[15px] md:tracking-[0.08em] md:hover:bg-[#e02e1c]"
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

        <div className="flex flex-col gap-5 lg:gap-14">
          <article className="relative flex flex-col-reverse gap-5 rounded-md bg-[#CADEFF] p-3.5 lg:flex-row lg:items-start lg:gap-10 lg:bg-[#CFE3F5] lg:p-10">
            <div className="relative h-110.75 w-full shrink-0 overflow-hidden rounded-sm bg-[#F7F7F5] lg:h-100 lg:w-74">
              {/*add no optimization to this image*/}
              <Image
                src="/KOSTA.png"
                alt="Kosta"
                fill
                sizes="(min-width: 1024px) 296px, 100vw"
                quality={100}
                unoptimized
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.7)_78.44%)] lg:hidden"
              />
              <p className="absolute inset-x-6.75 bottom-6.5 text-[20px] font-bold leading-[1.2] tracking-[-0.02em] text-white lg:hidden">
                Kosta
                <br />
                Director at Lev Logistics
              </p>
            </div>

            <div className="flex flex-col gap-4.5 px-1.5 py-2.5 lg:h-100 lg:w-212 lg:justify-between lg:gap-0 lg:px-0 lg:py-4">
              <Image
                src="/%E2%80%9C.svg"
                alt=""
                width={28}
                height={21}
                aria-hidden
                className="h-auto w-5.25 lg:w-7"
              />

              <div className="flex flex-col gap-6.5 text-lg font-medium leading-[26px] tracking-[-0.03em] text-[#000625] lg:gap-8 lg:min-h-48 lg:text-2xl lg:leading-8">
                <p>
                  JAVM Partners transformed the chaos of our inconsistent sales
                  into building us the right sales operations with structure
                  that we can follow. They provided the support and
                  accountability we needed to build supercharged momentum.
                </p>
                <p>
                  We went from doing $300K to doing $600K per month with JAVM,
                  and we&rsquo;re looking to do 1 million per month next.
                </p>
              </div>

              <div className="hidden h-12 w-67 max-w-full flex-col justify-end text-xl font-bold leading-[1.2] tracking-[-0.02em] text-[#000625] lg:flex">
                <span>Kosta</span>
                <span className="text-[#000625]/65">
                  Director at Lev Logistics
                </span>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STATS.map((stat) => (
              <article
                key={stat.label}
                className="flex h-62.5 flex-col justify-between rounded-md bg-[#F3F4EE] p-5 sm:h-auto sm:min-h-90 sm:p-8"
              >
                <header className="flex items-start justify-between gap-6">
                  <p className="font-mono text-[15px] uppercase leading-[22px] text-[#000625] sm:max-w-[90%] sm:text-xl sm:leading-[1.1] sm:tracking-tight sm:text-ink">
                    {stat.label}
                  </p>
                  <Image
                    src={stat.logo}
                    alt={stat.logoAlt}
                    width={120}
                    height={24}
                    className="hidden h-6 w-auto max-w-none shrink-0 sm:block"
                  />
                </header>

                <div className="flex items-baseline gap-2">
                  <span className="text-[65.52px] font-medium leading-[86px] tracking-[-0.04em] text-[#0B1956] sm:text-9xl sm:leading-[0.9] sm:tracking-[-2px]">
                    {stat.value}
                  </span>
                  <span className="text-[40px] font-medium leading-10 text-[#0B1956]/50 sm:text-6xl sm:font-semibold sm:text-[#7E86A2]">
                    {stat.unit}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
