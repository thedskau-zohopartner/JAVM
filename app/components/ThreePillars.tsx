"use client";

import Image from "next/image";
import { useState } from "react";

type Pillar = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

const PILLARS: Pillar[] = [
  {
    key: "build",
    label: "BUILD",
    title: "Sales infrastructure from the ground up",
    description:
      "Most businesses have never formally designed their sales process. We fix that. We build the complete operational foundation, from how leads enter the funnel to how deals close, so your team has a system to follow, not just instincts to rely on.",
    image: "/how-it-works/the-three-pillars/BUILD.png",
  },
  {
    key: "enable",
    label: "ENABLE",
    title: "Your team executing the system, consistently",
    description:
      "A document doesn’t change behaviour. Weekly execution meetings, tactical training, and live operational support do. We work alongside your team not above them until the system becomes second nature, not an overhead.",
    image: "/how-it-works/the-three-pillars/ENABLE.png",
  },
  {
    key: "manage",
    label: "MANAGE",
    title: "Performance managed, not just measured",
    description:
      "Tracking is only useful if someone acts on it. We monitor conversion rates, pipeline quality, and sales cycle velocity, and we make operational decisions based on what the data tells us. Your sales function becomes a managed performance system, not a reactive activity.",
    image: "/how-it-works/the-three-pillars/MANAGE.png",
  },
];

export default function ThreePillars() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = PILLARS[activeIdx];

  return (
    <section className="w-full bg-[#050170] px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-3.5 py-1.5 font-mono text-xl tracking-tight text-white">
          <span aria-hidden className="block h-2 w-2 shrink-0 rounded-[1px] bg-white/85" />
          The three pillars
        </div>

        <h2 className="mt-10 max-w-[24ch] text-center text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Every JAVM engagement runs on{" "}
          <span className="inline-block rounded-sm bg-[#5FC7FC] px-3 py-0.5 text-ink">
            three core pillars.
          </span>
        </h2>

        <div className="mt-14 grid w-full grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={pillar.key}
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-pressed={isActive}
                className={`px-5 py-3.5 text-center font-mono text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ease-out sm:text-base ${
                  isActive
                    ? "bg-white text-ink"
                    : "border border-white/15 bg-transparent text-white/40 hover:text-white/70"
                } ${i > 0 && !isActive ? "border-l-0" : ""}`}
              >
                {pillar.label}
              </button>
            );
          })}
        </div>

        <div className="grid w-full grid-cols-1 gap-10 border border-t-0 border-white/15 p-6 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-10">
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 self-start rounded-sm bg-white/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white">
                <span aria-hidden className="block h-2 w-2 rounded-[1px] bg-white/85" />
                {active.label}
              </div>

              <h3 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
                {active.title}
              </h3>
            </div>

            <p className="mt-auto max-w-[58ch] pt-10 text-base font-light leading-relaxed text-white/65 lg:pb-2 lg:text-lg">
              {active.description}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={active.image}
              alt=""
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={95}
              className="block h-auto w-full"
            />
          </div>
        </div>

        <a
          href="#"
          className="mt-14 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-brand-orange px-8 py-[18px] font-mono text-base font-bold uppercase leading-tight tracking-wider text-white shadow-[0_4px_18px_rgba(249,63,40,0.35)] transition-all duration-300 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_6px_24px_rgba(249,63,40,0.45)] sm:mt-16 lg:w-auto"
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
          BOOK A CONSULTATION CALL
        </a>
      </div>
    </section>
  );
}
