import Image from "next/image";
import SectionTag from "./SectionTag";
import TransitionLink from "./TransitionLink";
import { urlFor } from "../../sanity/lib/image";
import type { CaseStudyCard } from "../../sanity/lib/types";

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-white/40 bg-white/10 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-white/70 ${className}`}
    >
      {label}
    </div>
  );
}

function CaseStudyGridCard({ study }: { study: CaseStudyCard }) {
  return (
    <TransitionLink
      href={`/case-study/${study.slug}`}
      className="group flex flex-col items-start gap-4 rounded-[4px] border border-[#DFE1E6] bg-white p-4 transition hover:border-[#0D0D12]/30"
    >
      <div className="relative h-50 w-full overflow-hidden rounded-[4px] bg-[#003CFC]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-15 [background-image:repeating-linear-gradient(125deg,#3C1C85_0px,#3C1C85_2px,transparent_2px,transparent_9px)]"
        />

        {study.portrait ? (
          <Image
            src={urlFor(study.portrait).width(378).url()}
            alt={study.portrait.alt ?? ""}
            width={189}
            height={316}
            className="absolute bottom-0 right-0 h-full w-47.25 object-contain object-right-bottom"
          />
        ) : (
          <ImagePlaceholder
            label={`${study.person} photo`}
            className="absolute bottom-0 right-0 h-full w-47.25 rounded-none border-y-0 border-r-0"
          />
        )}

        <div className="absolute left-7.25 top-1/2 flex w-48.5 -translate-y-1/2 flex-col gap-4">
          {study.logo ? (
            <Image
              src={urlFor(study.logo).width(288).url()}
              alt={study.logo.alt ?? `${study.company} logo`}
              width={144}
              height={48}
              className="h-12 w-36 shrink-0 rounded-sm object-contain object-left"
            />
          ) : (
            <ImagePlaceholder
              label="logo"
              className="h-12 w-36 shrink-0 rounded-sm"
            />
          )}

          <p className="text-[14px] font-medium leading-[17px] tracking-[-0.29px] text-white/70">
            {study.person}
            <br />
            {study.role}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col items-start justify-between gap-10 p-3">
        <div className="flex w-full flex-col items-start gap-3">
          <span className="inline-flex items-center justify-center bg-[#F3F4EE] px-2.5 py-1.5 text-[12px] font-medium leading-[1.4] tracking-[-0.02em] text-[#3D3D41]">
            {study.category}
          </span>

          <h3 className="w-full text-[24px] font-medium leading-8 tracking-[-0.02em] text-[#0D0D12]">
            {study.cardHeading}
          </h3>
        </div>

        <span className="inline-flex items-center gap-3 font-mono text-sm font-medium uppercase leading-5 text-[#131315] transition group-hover:opacity-70">
          Read case study
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M0 4h14M10.5 0.5 14 4l-3.5 3.5" />
          </svg>
        </span>
      </div>
    </TransitionLink>
  );
}

export default function CaseStudiesList({
  eyebrow,
  heading,
  studies,
}: {
  eyebrow: string | null;
  heading: string;
  studies: CaseStudyCard[];
}) {
  return (
    <section className="w-full px-4 py-20 sm:px-8 lg:px-20 lg:py-30">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center gap-6">
          {eyebrow && <SectionTag variant="soft">{eyebrow}</SectionTag>}

          <div className="flex w-full items-start justify-between gap-3">
            <h2 className="mx-auto text-center text-[36px] font-medium leading-[1.07] tracking-[-0.03em] text-[#080808] lg:w-[647px] lg:text-[56px] lg:leading-15">
              {heading.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br className="hidden lg:inline" />}
                  {line}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {studies.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {studies.map((study) => (
              <CaseStudyGridCard key={study._id} study={study} />
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-[4px] border border-dashed border-[#DFE1E6] px-6 py-16 text-center text-[16px] leading-6 text-[#0D0D12]/50 lg:mt-14">
            No case studies yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
