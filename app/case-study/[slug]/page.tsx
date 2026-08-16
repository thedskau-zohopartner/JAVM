import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import TransitionLink from "../../components/TransitionLink";
import PortableBody from "../../components/PortableBody";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import { fetchSanity } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import {
  caseStudyBySlugQuery,
  caseStudySlugsQuery,
} from "../../../sanity/lib/queries";
import type { CaseStudy } from "../../../sanity/lib/types";

export async function generateStaticParams() {
  const slugs = await fetchSanity<{ slug: string }[]>(caseStudySlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-current/40 bg-current/10 text-center font-mono text-[10px] uppercase tracking-[0.08em] opacity-70 ${className}`}
    >
      {label}
    </div>
  );
}

function DoubleChevron() {
  return (
    <svg
      width="13"
      height="13"
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
  );
}

function QuoteMarks() {
  return (
    <svg
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="currentColor"
      aria-hidden
      className="text-white"
    >
      <path d="M0 20V11.1C0 4.97 3.7.9 9.4 0l1.7 3.5c-3.4.8-5.3 2.9-5.2 5.6h4.6V20H0Z" />
      <path d="M14.1 20V11.1c0-6.13 3.7-10.2 9.4-11.1L25.2 3.5c-3.4.8-5.3 2.9-5.2 5.6h4.6V20h-10.5Z" />
    </svg>
  );
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await fetchSanity<CaseStudy | null>(caseStudyBySlugQuery, {
    slug,
  });

  if (!study) notFound();

  const sections = study.body ?? [];
  const toc = [
    "Company Overview",
    ...sections.map((section) => section.heading),
    "In Their Words",
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#ECECEC]">
      <Nav
        logoSrc="/JAVM-blue-logo.svg"
        logoClassName="h-6 w-auto sm:h-7"
        transparent
        links={[
          { label: "Home", href: "/" },
          { label: "How It Works", href: "/how-it-works" },
          { label: "About", href: "/about-us" },
          { label: "Case Studies", href: "/case-study", hasDropdown: true },
        ]}
      />

      <div className="mx-auto my-8 w-full max-w-[1280px] bg-white lg:my-14">
        <div className="flex items-center gap-4 border border-black/16 px-4 py-4 sm:px-10 sm:py-5">
          <TransitionLink
            href="/case-study"
            className="text-[15px] capitalize leading-[1.6] tracking-[-0.02em] text-[#0D0E13]/50 transition hover:text-[#0D0E13] sm:text-[17.78px]"
          >
            Customer Stories
          </TransitionLink>
          <span className="text-[#0D0E13]/50">
            <DoubleChevron />
          </span>
          <span className="text-[15px] leading-[30px] tracking-[-0.17px] text-[#265AFF] sm:text-[17.78px]">
            {study.company}
          </span>
        </div>

        <div className="flex flex-col items-center gap-14 border border-[#0D0E13]/16 px-4 py-10 sm:px-10 lg:gap-20">
          <div className="flex w-full flex-col items-start gap-10 lg:gap-15">
            <header className="flex w-full flex-col items-center gap-8 py-3.5 lg:gap-10">
              {study.logo ? (
                <Image
                  src={urlFor(study.logo).width(560).url()}
                  alt={study.logo.alt ?? `${study.company} logo`}
                  width={280}
                  height={40}
                  className="h-10 w-auto max-w-70 shrink-0 object-contain"
                />
              ) : (
                <ImagePlaceholder
                  label="Client logo"
                  className="h-10 w-70 shrink-0 text-[#100619]"
                />
              )}

              <div className="flex w-full flex-col items-center gap-4">
                <h1 className="w-full text-center text-[36px] font-bold leading-[1.12] tracking-[-1px] text-[#100619] lg:text-[64px] lg:leading-18 lg:tracking-[-2px]">
                  {study.title}
                </h1>
                {study.subtitle && (
                  <p className="text-center text-[17px] font-medium leading-7 text-[#100619]/60 lg:w-[747px] lg:text-[22px] lg:leading-[30px]">
                    {study.subtitle}
                  </p>
                )}
              </div>
            </header>

            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[372px_1fr]">
              <div className="relative h-70 overflow-hidden rounded-[5px] bg-[#F7F7F5] lg:h-125">
                {study.portrait ? (
                  <Image
                    src={urlFor(study.portrait).width(744).height(1000).url()}
                    alt={study.portrait.alt ?? ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 372px"
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder
                    label="Client portrait"
                    className="absolute inset-0 rounded-none border-0 text-[#100619]"
                  />
                )}
              </div>

              <div className="flex h-125 flex-col justify-between overflow-hidden rounded-[5px] bg-[#050170] p-6 lg:p-12.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[17px] uppercase leading-[31px] tracking-[-0.2px] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] lg:text-[20px]">
                    {study.person}
                  </span>
                  {study.logo ? (
                    <Image
                      src={urlFor(study.logo).width(288).url()}
                      alt=""
                      width={144}
                      height={56}
                      className="h-14 w-36 shrink-0 rounded-sm object-contain"
                    />
                  ) : (
                    <ImagePlaceholder
                      label="logo"
                      className="h-14 w-36 shrink-0 rounded-sm text-white"
                    />
                  )}
                </div>

                <p className="text-[18px] font-light leading-[1.33] tracking-[-0.44px] text-white/60 [text-shadow:0_1px_2px_rgba(0,0,0,0.05)] lg:text-[24px] lg:leading-8">
                  &ldquo;{study.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#0D0E13]/20" />

          <div className="flex w-full flex-col gap-12 lg:flex-row lg:gap-25">
            <nav className="flex w-full flex-col gap-7.5 lg:w-85 lg:shrink-0">
              {toc.map((heading, i) => (
                <div key={heading} className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full text-[13px] font-medium leading-5 tracking-[0.02em] ${
                        i === 0
                          ? "bg-[#1A339A] text-white"
                          : "bg-[#F5F3EF] text-[#12271F]/60"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[20px] font-bold leading-6.5 tracking-[-0.02em] text-[#131315]">
                      {heading}
                    </span>
                  </div>

                  {i === 0 && study.facts && study.facts.length > 0 && (
                    <>
                      <div className="w-full border-t border-dashed border-[#0A0A0A]/20" />
                      <dl className="flex flex-col gap-5">
                        {study.facts.map((fact) => (
                          <div key={fact.label} className="flex flex-col gap-1">
                            <dt className="text-base font-medium leading-6.5 text-[#131315]">
                              {fact.label}
                            </dt>
                            <dd className="text-sm leading-[22px] text-[#131315]/70">
                              {fact.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </>
                  )}

                  {i < toc.length - 1 && (
                    <div className="w-full border-t border-dashed border-[#0A0A0A]/20" />
                  )}
                </div>
              ))}
            </nav>

            <div className="flex w-full flex-col gap-7.5 lg:w-190">
              <p className="text-[18px] font-medium leading-6.5 tracking-[-0.02em] text-[#0A0A0A]/70 opacity-80">
                {study.summary}
              </p>

              {sections.map((section) => (
                <div key={section.heading} className="flex flex-col gap-7.5">
                  <h2 className="text-[24px] font-bold leading-7 tracking-[-0.02em] text-[#0A0A0A]">
                    {section.heading}
                  </h2>

                  <PortableBody value={section.content} />
                </div>
              ))}

              <figure className="flex flex-col items-start gap-7.5 rounded-[4px] bg-[#003CFC] p-6 lg:p-7.5">
                <QuoteMarks />
                <blockquote className="text-[20px] leading-7 tracking-[-1px] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.05)] lg:text-[24px] lg:leading-[33px]">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
                <figcaption className="font-mono text-sm uppercase leading-7 text-white/70">
                  {study.quoteAuthor}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
