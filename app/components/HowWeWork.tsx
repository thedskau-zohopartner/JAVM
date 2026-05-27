"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTag from "./SectionTag";

type Step = {
  label: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    label: "STEP 01",
    title: "Sales Process Diagnostic",
    desc: "We assess the current sales performance, team execution & operational blind spots",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 3h9l3 3v12l-1.5-1.5L15 18l-1.5-1.5L12 18l-1.5-1.5L9 18l-1.5-1.5L6 18Z" />
        <path d="M9 8h6M9 11h4" />
        <circle cx="15" cy="13.5" r="2.5" />
        <path d="m14 13.5 .8.8 1.6-1.6" />
      </svg>
    ),
  },
  {
    label: "STEP 02",
    title: "Sales inputs build",
    desc: "We design, build & install the correct sales system, tailored to your business needs.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="4" y="4" width="16" height="16" rx="1.5" />
        <path d="M4 9h16" />
        <circle cx="8" cy="13.5" r="1.5" />
        <path d="m6 18 4-4 3 3 2-2 3 3" />
      </svg>
    ),
  },
  {
    label: "STEP 03",
    title: "System Implementation",
    desc: "Implement new sales inputs to ensure long-term operational adoption and growth.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 4h18l-7 9v6l-4 2v-8Z" />
      </svg>
    ),
  },
  {
    label: "STEP 04",
    title: "Operational Support",
    desc: "We work alongside leadership to ensure the system runs consistently and continues improving.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const SECTION_PADDING_X = "px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48";
const ROW_PADDING_L =
  "pl-6 sm:pl-12 md:pl-20 lg:pl-[21.125rem] xl:pl-[25.125rem]";

const CARD_WIDTH_CLASSES =
  "w-[70vw] sm:w-[calc((100vw_-_4.75rem)*0.85/2)] md:w-[calc((100vw_-_6.75rem)*0.85/2)] lg:w-[calc((100vw_-_11.5rem)*0.85/3)] xl:w-[calc((100vw_-_15.5rem)*0.85/3)]";

export default function HowWeWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rowWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    const scroller = scrollerRef.current;
    const rowWrap = rowWrapRef.current;
    if (!section || !inner || !scroller || !rowWrap) return;

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop) {
        const sectionRect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const innerHeight = inner.offsetHeight;
        const total = sectionHeight - innerHeight;
        if (total <= 0) return;

        const scrolled = Math.max(0, Math.min(total, -sectionRect.top));
        const progress = scrolled / total;

        const clientWidth = scroller.clientWidth;
        const contentWidth = rowWrap.scrollWidth;
        const maxTranslate = Math.max(0, contentWidth - clientWidth);
        rowWrap.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`;

        const raw = progress * STEPS.length;
        const idx = Math.min(STEPS.length - 1, Math.floor(raw));
        setActiveIndex(idx);
        setStepProgress(Math.min(1, raw - idx));
      } else {
        rowWrap.style.transform = "";
        const clientWidth = scroller.clientWidth;
        const contentWidth = scroller.scrollWidth;
        const maxScroll = Math.max(1, contentWidth - clientWidth);
        const progress = Math.min(1, Math.max(0, scroller.scrollLeft / maxScroll));
        const raw = progress * STEPS.length;
        const idx = Math.min(STEPS.length - 1, Math.floor(raw));
        setActiveIndex(idx);
        setStepProgress(Math.min(1, raw - idx));
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      scroller.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0D0E13] lg:h-[300vh]"
    >
      <div
        ref={innerRef}
        className="w-full py-12 text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center"
      >
        <div className="flex w-full flex-col gap-12">
          <div
            className={`grid grid-cols-1 items-start gap-6 lg:grid-cols-[auto_1fr] lg:gap-10 ${SECTION_PADDING_X} `}
          >
            <Image
              src="/Vector.png"
              alt=""
              width={170}
              height={170}
              aria-hidden
              className="h-auto w-[110px] sm:w-[140px] lg:w-[170px]"
            />

            <div className="flex flex-col items-start gap-6">
              <SectionTag variant="dark">How We Work</SectionTag>
              <h2 className="w-[min(80ch,100%)] text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-7xl lg:leading-tight">
                Our unique delivery approach keeps clients returning!
              </h2>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-x-hidden"
          >
            <div
              ref={rowWrapRef}
              className="flex flex-col gap-10 lg:will-change-transform"
            >
              <div className={`flex gap-7 ${ROW_PADDING_L}`}>
                {STEPS.map((step, idx) => {
                  const isActive = idx <= activeIndex;
                  return (
                    <article
                      key={step.title}
                      className={`relative flex min-h-[375px] flex-none flex-col justify-between gap-10 rounded-lg border p-8 transition-colors duration-500 ${CARD_WIDTH_CLASSES} ${
                        isActive
                          ? "border-white bg-white text-ink"
                          : "border-white/10 bg-white/[0.04] text-white/85"
                      }`}
                    >
                      <div
                        aria-hidden
                        className={`inline-flex h-11 w-11 items-center justify-center transition-colors duration-500 ${
                          isActive ? "text-ink" : "text-white/55"
                        }`}
                      >
                        {step.icon}
                      </div>

                      <div className="flex flex-col gap-6">
                        <h3
                          className={`text-[28px] leading-[1.2] tracking-[-0.3px] transition-colors duration-500 ${
                            isActive ? "font-semibold text-ink" : "font-medium text-white/55"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-[17px] leading-[1.5] tracking-[-0.1px] transition-colors duration-500 ${
                            isActive ? "text-ink/70" : "text-white/45"
                          }`}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className={`flex gap-7 ${ROW_PADDING_L}`}>
                {STEPS.map((step, idx) => {
                  const isCurrent = idx === activeIndex;
                  const isCompleted = idx < activeIndex;
                  const isActive = isCurrent || isCompleted;
                  return (
                    <div
                      key={step.label}
                      className={`flex flex-none flex-col gap-5 ${CARD_WIDTH_CLASSES}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden
                          className={`block h-3 w-3 shrink-0 transition-colors duration-500 ${
                            isActive ? "rounded-[1px] bg-[#003cfc]" : "rounded-full bg-white/25"
                          }`}
                        />
                        <div className="relative h-px flex-1 bg-white/15">
                          {isCompleted && <div className="absolute inset-0 bg-[#003cfc]" />}
                          {isCurrent && (
                            <div
                              className="absolute inset-y-0 left-0 bg-[#003cfc]"
                              style={{ width: `${stepProgress * 100}%` }}
                            />
                          )}
                        </div>
                      </div>
                      <span
                        className={`inline-flex w-fit items-center px-3.5 py-2 font-mono text-[15px] tracking-[0.04em] transition-colors duration-500 ${
                          isActive
                            ? "bg-[#003cfc] text-white"
                            : "bg-white/[0.06] text-white/45"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
