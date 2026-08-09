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
      <svg width="51" height="50" viewBox="0 0 51 50" fill="none" aria-hidden>
        <rect width="50.7651" height="50" rx="3.57143" fill="#003CFC" />
        <ellipse
          cx="25.0969"
          cy="25.0004"
          rx="14.1901"
          ry="14.2856"
          stroke="white"
          strokeWidth="1.42857"
        />
        <ellipse
          cx="25.0957"
          cy="25.0007"
          rx="6.63324"
          ry="14.2856"
          stroke="white"
          strokeWidth="1.42857"
        />
        <path d="M10.7154 25.3462H39.2133" stroke="white" strokeWidth="1.42857" />
      </svg>
    ),
  },
  {
    title: "Pipeline",
    desc: "Have a repeatable strategy and process to proactively find, reach out and bring leads into your sales pipeline.",
    icon: (
      <svg width="53" height="50" viewBox="0 0 53 50" fill="none" aria-hidden>
        <rect width="52.5862" height="50" rx="3.57143" fill="#003CFC" />
        <mask
          id="javm-pipeline-mask"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="10"
          y="10"
          width="30"
          height="30"
        >
          <rect x="10.7142" y="10.7144" width="28.5714" height="28.5714" fill="#D9D9D9" />
        </mask>
        <g mask="url(#javm-pipeline-mask)">
          <path
            d="M12.5202 13.7007H40.0654L26.2928 37.4897L12.5202 13.7007ZM15.7755 15.5788L18.4988 20.274H34.0868L36.81 15.5788H15.7755ZM19.5943 22.152L22.1297 26.5342H30.4559L32.9913 22.152H19.5943ZM23.2253 28.4123L26.2928 33.7335L29.3603 28.4123H23.2253Z"
            fill="white"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Process",
    desc: "Build and standardised the correct sales operations into your business, giving you and the team all the resources need for success.",
    icon: (
      <svg width="53" height="50" viewBox="0 0 53 50" fill="none" aria-hidden>
        <rect width="52.5862" height="50" rx="3.57143" fill="#003CFC" />
        <mask
          id="javm-process-mask"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="7"
          width="37"
          height="36"
        >
          <rect x="6.61957" y="7.14282" width="35.7143" height="35.7143" fill="#D9D9D9" />
        </mask>
        <g mask="url(#javm-process-mask)">
          <path
            d="M11.8202 39.2822V10.717H14.2006V36.9018H40.3854V39.2822H11.8202ZM17.1762 33.9263V20.6752H21.8974V33.9263H17.1762ZM25.0316 33.9263V12.5024H29.7528V33.9263H25.0316ZM32.7283 33.9263V27.1817H37.4495V33.9263H32.7283Z"
            fill="white"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Price",
    desc: "Maximising client lifetime value through implementing tailored cross-sell & upsell initiatives.",
    icon: (
      <svg width="53" height="50" viewBox="0 0 53 50" fill="none" aria-hidden>
        <rect width="52.5862" height="50" rx="3.57143" fill="#003CFC" />
        <mask
          id="javm-price-mask"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="10"
          y="10"
          width="30"
          height="30"
        >
          <rect x="10.7146" y="10.7144" width="28.5714" height="28.5714" fill="#D9D9D9" />
        </mask>
        <g mask="url(#javm-price-mask)">
          <path
            d="M33.3045 35.6129L37.6554 31.2933L36.3407 29.9786L33.3045 32.9523L32.0838 31.7315L30.7691 33.0775L33.3045 35.6129ZM18.7807 20.5569H33.8053V18.6789H18.7807V20.5569ZM34.1966 38.6804C32.5794 38.6804 31.1969 38.1013 30.0492 36.9432C28.9015 35.785 28.3276 34.413 28.3276 32.8271C28.3276 31.1904 28.9013 29.7952 30.0489 28.6414C31.1964 27.4879 32.5842 26.9111 34.2122 26.9111C35.819 26.9111 37.2015 27.4879 38.3597 28.6414C39.5178 29.7952 40.0969 31.1904 40.0969 32.8271C40.0969 34.413 39.5178 35.785 38.3597 36.9432C37.2015 38.1013 35.8138 38.6804 34.1966 38.6804ZM15.0245 37.4284V13.6707H37.5615V25.7843C37.2658 25.6411 36.9624 25.5219 36.6512 25.4265C36.3399 25.3311 36.0173 25.2521 35.6834 25.1895V15.5487H16.9026V34.2982H26.606C26.6661 34.6774 26.7594 35.0383 26.8859 35.3809C27.0123 35.7234 27.159 36.0615 27.326 36.3954L26.293 37.4284L24.4149 35.5528L22.5369 37.4284L20.6588 35.5528L18.7807 37.4284L16.9026 35.5528L15.0245 37.4284ZM18.7807 31.1994H26.6771C26.7549 30.8655 26.8408 30.5421 26.9347 30.2291C27.0286 29.916 27.159 29.6135 27.326 29.3213H18.7807V31.1994ZM18.7807 25.8782H30.8004C31.2595 25.6486 31.7394 25.466 32.2403 25.3304C32.7411 25.1948 33.2628 25.1061 33.8053 25.0643V24.0001H18.7807V25.8782Z"
            fill="white"
          />
        </g>
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
    <section className="relative flex min-h-screen w-full items-center bg-[#003CFC] px-6 py-24 text-white sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:pb-40 lg:pt-32 xl:px-48">
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
                <span aria-hidden className="inline-flex [&>svg]:h-10 [&>svg]:w-auto sm:[&>svg]:h-[50px]">
                  {card.icon}
                </span>

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
