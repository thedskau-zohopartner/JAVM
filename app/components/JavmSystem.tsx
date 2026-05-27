"use client";

import { useEffect, useState } from "react";
import SectionTag from "./SectionTag";

const STEP_DURATION_MS = 5000;

type Card = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const CARDS: Card[] = [
  {
    title: "Positioning",
    desc: "Position your product or service offering for success through each step of your sales process.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Pipeline",
    desc: "Build foundational prospecting systems that will have your pipeline overflowing with cash, ready to be collected.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 4h18l-7 9v6l-4 2v-8Z" />
      </svg>
    ),
  },
  {
    title: "Process",
    desc: "A sales process that builds scalable revenue, makes upskilling & managing the team easy.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 20V10M12 20V4M18 20v-6" />
      </svg>
    ),
  },
  {
    title: "Pricing",
    desc: "Embedded backend sales strategies proven to increase client lifetime value & retention.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function JavmSystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setActiveIndex((curr) => (curr + 1) % CARDS.length);
    }, STEP_DURATION_MS);
    return () => clearTimeout(t);
  }, [activeIndex]);

  return (
    <section className="relative flex min-h-screen w-full items-center bg-deep-blue bg-[url('/JAVMSystem.jpg')] bg-cover bg-center bg-no-repeat px-6 py-24 text-white sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:pb-40 lg:pt-32 xl:px-48">
      <div className="mx-auto flex w-full flex-col items-center gap-10">
        <SectionTag variant="dark">The JAVM System</SectionTag>

        <h2 className="w-[min(80ch,100%)] text-center text-[clamp(2.25rem,5.4vw,76px)]  leading-[1.12] tracking-[-2.4px] text-white">
          The{" "}
          <span className="inline-block rounded-[1px] bg-mint px-4 text-ink">
            4 Foundational Areas
          </span>{" "}
          That<br />Determine if you scale or go bust!!
        </h2>

        <div className="mt-10 grid w-full max-w-[1800px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={card.title}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex min-h-[260px] cursor-pointer flex-col justify-between gap-6 rounded-lg border p-5 transition-colors duration-500 sm:min-h-[520px] sm:gap-10 sm:p-8 ${
                  isActive
                    ? "border-white bg-white text-ink"
                    : "border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30"
                }`}
              >
                <div
                  aria-hidden
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-500 sm:h-12 sm:w-12 ${
                    isActive ? "bg-[#e9eef7] text-ink" : "bg-white/10 text-white"
                  }`}
                >
                  {card.icon}
                </div>

                <div className="flex flex-col">
                  <h3
                    className={`text-2xl tracking-[-0.3px] transition-colors duration-500 sm:text-4xl sm:tracking-[-0.4px] ${
                      isActive ? "font-semibold text-ink" : "font- text-white/85"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-3 sm:pt-4">
                        <p className="text-base font-light leading-[1.5] tracking-[-0.1px] text-ink/70 sm:text-xl sm:font-normal">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
