"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionTag from "./SectionTag";

type Phase = {
  number: string;
  title: string;
  paragraphs: string[];
};

const PHASES: Phase[] = [
  {
    number: "Phase 1",
    title: "Diagnostic & Strategy",
    paragraphs: [
      "We conduct a deep operational review across your entire sales function, pipeline structure, team execution, CRM systems, conversion performance, reporting, and founder involvement.",
      "The goal is simple to identify what’s slowing growth, what’s creating inconsistency, and where revenue is leaking. From there, we build a clear operational roadmap designed around your next stage of scale.",
    ],
  },
  {
    number: "Phase 2",
    title: "Sales Inputs Build",
    paragraphs: [
      "Once the gaps are identified, we design and build the systems needed to support scalable revenue growth. This includes sales frameworks, operational processes, reporting structures, scripts, workflows, playbooks, KPIs, and management systems tailored specifically to how your business sells.",
      "Everything is built around one goal: creating predictable revenue without relying on guesswork or founder dependency.",
    ],
  },
  {
    number: "Phase 3",
    title: "System Implementation",
    paragraphs: [
      "A system only works if the team actually uses it. We work directly inside the business to roll out the new sales structure, integrate workflows, support the team, and ensure operational adoption across day-to-day execution.",
      "This includes weekly execution sessions, leadership support, process refinement, tactical training, and ongoing implementation guidance.",
    ],
  },
  {
    number: "Phase 4",
    title: "Performance Management & Growth",
    paragraphs: [
      "Once the system is operational, the focus shifts toward performance, optimisation, and long-term scale. We continuously monitor sales activity, conversion metrics, pipeline movement, and operational performance to improve output over time. The goal is not just building systems, it’s creating a revenue engine that compounds.",
      "JAVM operates as an ongoing growth partner, helping leadership teams make better operational decisions as the business scales.",
    ],
  },
];

function PhaseBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center gap-2 self-start rounded-sm bg-[#CFF0FF] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ink">
      <span aria-hidden className="block h-2 w-2 rounded-[1px] bg-ink" />
      {children}
    </div>
  );
}

const PHASE_DURATION_MS = 10000;

export default function HowWeWorkPhases() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const programmaticScrollRef = useRef(false);
  const programmaticTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[active] as HTMLElement | undefined;
    if (!card) return;

    programmaticScrollRef.current = true;
    if (programmaticTimeoutRef.current !== null) {
      window.clearTimeout(programmaticTimeoutRef.current);
    }
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    programmaticTimeoutRef.current = window.setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 600);
  }, [active]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.children) as HTMLElement[];
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (programmaticScrollRef.current) return;
        let best = -1;
        let bestRatio = 0;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            const idx = cards.indexOf(entry.target as HTMLElement);
            if (idx !== -1) best = idx;
          }
        });
        if (best !== -1 && bestRatio >= 0.55) {
          setActive((prev) => (prev === best ? prev : best));
        }
      },
      {
        root: scroller,
        threshold: [0.4, 0.55, 0.7, 0.9],
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / PHASE_DURATION_MS);
      setProgress(p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setActive((prev) => (prev + 1) % PHASES.length);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionTag variant="light">How We Work</SectionTag>

        <h2 className="mt-8 max-w-[26ch] text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
          We don&rsquo;t hand you a framework and leave. We{" "}
          <span className="inline-block rounded-sm bg-[#003CFC] px-3 py-0.5 align-baseline text-white">
            operate inside the business.
          </span>
        </h2>

        <div className="mt-16 -mx-4 flex items-end sm:-mx-8 lg:-mx-20">
          {PHASES.map((phase, i) => {
            const isCompleted = i <= active;
            return (
              <Fragment key={phase.number}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`shrink-0 px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors duration-500 ease-out ${
                    isCompleted
                      ? "bg-ink text-white"
                      : "border border-ink/15 bg-white text-ink/40 hover:text-ink/70"
                  }`}
                >
                  {phase.number}
                </button>
                {i < PHASES.length - 1 && (
                  <div className="relative h-1 flex-1">
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-px bg-ink/15"
                    />
                    <div
                      aria-hidden
                      className="absolute bottom-0 left-0 h-1 bg-ink"
                      style={{
                        width:
                          i < active
                            ? "100%"
                            : i === active
                              ? `${progress * 100}%`
                              : "0%",
                      }}
                    />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:-mx-20 lg:px-20"
        >
          {PHASES.map((phase) => (
            <article
              key={phase.number}
              className="flex w-[88%] shrink-0 snap-start flex-col gap-8 sm:w-[82%] lg:w-[78%] lg:flex-row lg:items-center lg:gap-12"
            >
              <div className="flex flex-1 flex-col gap-6 lg:max-w-md">
                <PhaseBadge>{phase.number}</PhaseBadge>
                <h3 className="text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                  {phase.title}
                </h3>
                <div className="flex flex-col gap-5 text-base font-light leading-relaxed text-ink/65 lg:text-lg">
                  {phase.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/how-it-works/Grid.png"
                  alt=""
                  width={1300}
                  height={900}
                  sizes="(max-width: 1024px) 88vw, 50vw"
                  quality={95}
                  className="block h-auto w-full"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
