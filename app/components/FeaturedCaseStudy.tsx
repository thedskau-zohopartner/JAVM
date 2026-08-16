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
      className={`flex items-center justify-center border border-dashed border-white/40 bg-white/10 font-mono text-[11px] uppercase tracking-[0.08em] text-white/70 ${className}`}
    >
      {label}
    </div>
  );
}

export default function FeaturedCaseStudy({
  eyebrow,
  blurb,
  study,
}: {
  eyebrow: string | null;
  blurb: string | null;
  study: CaseStudyCard;
}) {
  return (
    <section className="relative z-10 -mt-30 w-full px-4 sm:px-8 lg:-mt-58.75 lg:px-20">
      <div className="mx-auto w-full max-w-[1280px] rounded-lg bg-white p-4 sm:p-6 lg:p-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_496px] lg:gap-10">
          <div className="relative flex h-97.25 max-h-[70vw] flex-col justify-between overflow-hidden rounded-xl bg-[#003CFC] p-6 lg:max-h-none lg:p-8">
            <div className="absolute inset-y-0 right-0 w-1/2">
              {study.portrait ? (
                <Image
                  src={urlFor(study.portrait).width(800).height(778).url()}
                  alt={study.portrait.alt ?? ""}
                  fill
                  sizes="(max-width: 1024px) 50vw, 400px"
                  className="object-cover object-top"
                />
              ) : (
                <ImagePlaceholder
                  label={`${study.person} photo`}
                  className="h-full w-full rounded-none border-y-0 border-r-0"
                />
              )}
            </div>

            <div className="relative">
              {study.logo ? (
                <Image
                  src={urlFor(study.logo).width(384).url()}
                  alt={study.logo.alt ?? `${study.company} logo`}
                  width={192}
                  height={64}
                  className="h-16 w-48 shrink-0 rounded-sm object-contain object-left"
                />
              ) : (
                <ImagePlaceholder
                  label="logo"
                  className="h-16 w-48 shrink-0 rounded-sm"
                />
              )}
            </div>

            <p className="relative text-[19px] font-medium leading-[1.35] tracking-[-0.02em] text-white">
              {study.person}
              <br />
              {study.role}
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 py-3.5">
            {eyebrow && <SectionTag variant="soft">{eyebrow}</SectionTag>}

            <div className="flex w-full flex-col items-start gap-8">
              <div className="flex w-full flex-col items-start gap-4">
                <h2 className="text-[28px] font-medium leading-[1.2] tracking-[-1px] text-[#100619] lg:text-[40px] lg:leading-12">
                  {study.cardHeading}
                </h2>

                {blurb && (
                  <p className="text-[15px] leading-6 text-[#100619]/60 lg:text-[16px]">
                    {blurb}
                  </p>
                )}
              </div>

              <TransitionLink
                href={`/case-study/${study.slug}`}
                className="inline-flex items-center gap-3 rounded-[2px] bg-ink px-6.5 py-4 font-mono text-sm font-bold uppercase leading-[17px] text-white transition hover:bg-black active:scale-[0.98]"
              >
                Read full case study
                <svg
                  width="12"
                  height="12"
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
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
