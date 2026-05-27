"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionTag from "./SectionTag";

const STEP_DURATION_MS = 10000;

type Step = { title: string; sub: string };

const STEPS: Step[] = [
  {
    title: "Identify what's holding sales back, and what needs to be in place.",
    sub: "We deep dive into your current sales metrics, process and performance to identify what is holding your growth back with precision.",
  },
  {
    title: "Create a customized strategy based on your sales process that can boost revenue.",
    sub: "We strategise and design a tailored sales solution based on your needs to bring you the clarity and renewed excitement for your business future.",
  },
  {
    title: "Build the system frameworks and operations for growth.",
    sub: "We use the tailored plan and go into the mechanic shed to build you the exact system, frameworks and SOP's your business needs to have a sales engine that drives revenue growth.",
  },
  {
    title: "Implement, upskill and manage for success.",
    sub: "We implement what's been built into the business, upskill you and your staff & provide ongoing support to ensure maximum process adoption and performance progress. Simply said, we manage your business growth!",
  },
];

function StepArrow({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${open ? "text-white" : "text-white/70"
        }`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-500 ease-out ${open ? "rotate-180" : "rotate-0"}`}
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </span>
  );
}

export default function WhatWeActuallyDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setActiveIndex((curr) => (curr + 1) % STEPS.length);
    }, STEP_DURATION_MS);
    return () => clearTimeout(t);
  }, [activeIndex]);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#050170] px-6 py-24 text-white sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:pb-40 lg:pt-32 xl:px-48">
      <div className="relative w-full">
        <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <SectionTag variant="dark" className="self-center lg:self-start">What we actually do</SectionTag>

          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_44%] lg:gap-12">
            <h2 className="mx-auto w-[min(70ch,100%)] text-[44px] font-medium leading-[1.1] tracking-[-1.4px] text-white sm:text-5xl lg:mx-0 lg:text-6xl lg:font-normal lg:tracking-[-2.4px]">
              We don&apos;t advise. We{" "}
              <span className="hidden lg:box-decoration-clone lg:inline lg:rounded-[1px] lg:bg-[#cff0ff] lg:px-4 lg:text-ink">
                build and<br />run the system.
              </span>
              <span className="mt-2 flex w-full flex-col items-center gap-2 lg:hidden">
                <span className="w-full rounded-[1px] bg-[#cff0ff] py-1 text-center text-ink">build and</span>
                <span className="w-full rounded-[1px] bg-[#cff0ff] py-1 text-center text-ink">run the system.</span>
              </span>
            </h2>

            <Image
              src="/what-we-actually-do/line-converging.svg"
              alt=""
              width={840}
              height={150}
              aria-hidden
              className="hidden h-auto max-w-none opacity-85 lg:block lg:w-[calc(100%_+_8rem)] xl:w-[calc(100%_+_12rem)]"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:mt-24 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <ol className="m-0 flex list-none flex-col p-0">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <li
                  key={step.title}
                  className={`border-b border-white/20 last:border-b-0 ${isActive ? "border-b-0" : ""}`}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex w-full items-start justify-between gap-8 py-10 text-left transition-colors hover:bg-white/[0.02] ${idx === 0 ? "pt-0" : ""
                      }`}
                  >
                    <div className="flex w-[min(60ch,100%)] flex-col">
                      <p
                        className={`text-[18px] leading-[1.35] tracking-[-0.2px] transition-colors duration-300 lg:text-[24px] lg:leading-[1.32] lg:tracking-[-0.3px] ${isActive ? "font-medium text-white lg:font-semibold" : "font-normal text-white/55 lg:font-medium"
                          }`}
                      >
                        {step.title}
                      </p>
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-3.5">
                            <p className="text-[19px] font-light leading-[1.55] tracking-[-0.1px] text-white/55">
                              {step.sub}
                            </p>
                            {isActive && (
                              <div className="relative mt-4 hidden h-[3px] w-full lg:block">
                                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/25" />
                                <div className="absolute left-0 top-0 h-full bg-white animate-progress-bar" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <StepArrow open={isActive} />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out lg:hidden ${isActive ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex w-full justify-center">
                        <Image
                          src="/what-we-actually-do/right-graph-image.png"
                          alt="Diagnose pipeline gaps and reveal blind spots visualization"
                          width={620}
                          height={420}
                          className="block h-auto w-full max-w-[420px]"
                        />
                      </div>
                      {isActive && (
                        <div className="relative mt-5 h-[3px] w-full">
                          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/25" />
                          <div className="absolute left-0 top-0 h-full bg-white animate-progress-bar" />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:block">
            <Image
              src="/what-we-actually-do/right-graph-image.png"
              alt="Diagnose pipeline gaps and reveal blind spots visualization"
              width={620}
              height={420}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
