import type { ReactNode } from "react";
import PillarRailLine, { RailSequence } from "./PillarRailLine";

const CHIP =
  "flex h-9.75 items-center justify-center px-3.5 text-center font-mono text-sm uppercase leading-[1.8] tracking-[-0.02em] backdrop-blur-[32px] lg:h-10.25";

const CAPTION =
  "text-center font-mono text-xs uppercase leading-[1.6] tracking-[0.08em] text-white lg:text-sm";

function Connector({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`w-[1.5px] shrink-0 ${className}`} />;
}

function RailIcon({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-16 w-16 shrink-0 place-items-center bg-[#003CFC] text-white">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </span>
  );
}

function TileIcon({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-6.5 w-6.5 shrink-0 place-items-center rounded-[2px] bg-white/20 text-white lg:h-9 lg:w-9 lg:rounded-[2.57px]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-4 w-4 lg:h-5.5 lg:w-5.5"
      >
        {children}
      </svg>
    </span>
  );
}

/* Pillar 01 — the layers stack */
function LayersVisual() {
  return (
    <div className="flex flex-col items-center gap-9 lg:gap-10">
      <p className={`${CAPTION} max-w-54 lg:max-w-60.5`}>
        The layers of a sales infrastructure
      </p>

      <div className="flex flex-col items-center">
        <span className={`${CHIP} w-36.75 bg-white/10 text-white lg:w-40`}>
          Sales Strategy
        </span>
        <Connector className="h-8 bg-white/30 lg:h-9" />
        <span
          className={`${CHIP} w-53.5 border border-white/20 bg-white/20 text-white lg:w-60`}
        >
          Operations &amp; Playbooks
        </span>
        <Connector className="h-8 bg-white/30 lg:h-9" />
        <span
          className={`${CHIP} w-71.5 border border-white/20 bg-white/70 font-medium text-[#080808] lg:w-80`}
        >
          Day-to-Day Sales Structures
        </span>
      </div>
    </div>
  );
}

/* Pillar 02 — the closing rhythm rows */
const CLOSING_ROWS = [
  "Strategic & project management meetings",
  "Async channels for training, accountability, & deal support",
  "Tactical training & quality control meetings",
];

function RowsVisual() {
  return (
    <div className="flex flex-col items-center gap-9 lg:gap-10">
      <p className={CAPTION}>How JAVM partners closes it?</p>

      <div className="flex w-70 flex-col items-center lg:w-84">
        {CLOSING_ROWS.map((row, i) => (
          <span key={row} className="contents">
            {i > 0 && <Connector className="h-10 bg-white/20" />}
            <span className="flex min-h-15.5 w-full items-center justify-center border border-white/20 bg-white/10 px-3 py-2.5 text-center font-mono text-sm uppercase leading-[1.6] tracking-[-0.02em] text-white backdrop-blur-[32px] lg:min-h-16.5 lg:px-3.5 lg:leading-[1.5]">
              {row}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* Pillar 03 — the management rhythm columns */
const RHYTHM_COLUMNS = [
  {
    label: "Ongoing project management",
    tone: "bg-white/10",
    align: "justify-start pt-3.5 pb-1.75 lg:pt-5 lg:pb-2.5",
    icon: (
      <>
        <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M2.5 20a6.5 6.5 0 0 1 9.5-5.8" />
        <path d="M17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M17.5 13v-1M17.5 23v-1M21 15l-.8.8M14.8 21.2l-.8.8M21 21l-.8-.8M14.8 14.8l-.8-.8" />
      </>
    ),
  },
  {
    label: "New strategy & operational initiatives",
    tone: "bg-white/20",
    align: "justify-center py-1.75 lg:py-2.5",
    icon: (
      <>
        <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z" />
        <path d="M12 21.5v-9M3.5 7l8.5 5.5L20.5 7" />
      </>
    ),
  },
  {
    label: "Guidance for risk management",
    tone: "bg-white/30",
    align: "justify-end pt-1.75 pb-3.5 lg:pt-2.5 lg:pb-5",
    icon: (
      <>
        <path d="M12 2.5 20 6v6c0 4.5-3.2 8.4-8 9.5-4.8-1.1-8-5-8-9.5V6l8-3.5Z" />
        <path d="M12 13V9M12 16.5v.01" />
      </>
    ),
  },
];

function ColumnsVisual() {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-10">
      <p className={CAPTION}>The management rhythm</p>

      <div className="flex items-start gap-2.75 lg:gap-4">
        {RHYTHM_COLUMNS.map((column) => (
          <div
            key={column.label}
            className={`flex h-62.25 w-25 flex-col items-start gap-2 px-2.5 backdrop-blur-[32px] lg:h-87.5 lg:w-35 lg:gap-3 lg:px-3.5 ${column.tone} ${column.align}`}
          >
            <TileIcon>{column.icon}</TileIcon>
            <p className="font-mono text-[10px] uppercase leading-[1.6] tracking-[-0.02em] text-white lg:text-sm">
              {column.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

type Pillar = {
  key: string;
  tag: string;
  title: string;
  description: string;
  icon: ReactNode;
  visual: ReactNode;
  visualHeight: string;
};

const PILLARS: Pillar[] = [
  {
    key: "build",
    tag: "Build",
    title: "Sales infrastructure from the ground up",
    description:
      "Most businesses have never formally designed their sales process. We fix that. We build the complete operational foundation, from how leads enter the funnel to how deals close, so your team has a system to follow, not just instincts to rely on.",
    icon: (
      <>
        <path d="M9 18h6M10 21.5h4" />
        <path d="M12 2.5a6.5 6.5 0 0 0-3.7 11.8c.5.4.7.9.7 1.5v.2h6v-.2c0-.6.2-1.1.7-1.5A6.5 6.5 0 0 0 12 2.5Z" />
      </>
    ),
    visual: <LayersVisual />,
    visualHeight: "h-85",
  },
  {
    key: "enable",
    tag: "Implementation & Upskill",
    title: "Your team executing the system, consistently",
    description:
      "A document doesn’t change behaviour. Weekly execution meetings, tactical training, and live operational support do. We work alongside your team not above them until the system becomes second nature, not an overhead.",
    icon: (
      <>
        <path d="M16 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M2 22a6 6 0 0 1 12 0M14 15.5a6 6 0 0 1 8 6" />
      </>
    ),
    visual: <RowsVisual />,
    visualHeight: "h-95",
  },
  {
    key: "manage",
    tag: "Partnership & Operational Management",
    title: "Performance managed, not just measured",
    description:
      "Tracking is only useful if someone acts on it. We monitor conversion rates, pipeline quality, and sales cycle velocity, and we make operational decisions based on what the data tells us. Your sales function becomes a managed performance system, not a reactive activity.",
    icon: (
      <>
        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9h-.2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.4-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5v-.2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    visual: <ColumnsVisual />,
    visualHeight: "h-95",
  },
];

export default function ThreePillars() {
  return (
    <section className="w-full bg-white px-5 pt-12.5 pb-20 lg:px-22 lg:pt-20 lg:pb-36">
      <div className="mx-auto flex w-full max-w-316 flex-col">
        <div className="mx-auto flex w-full flex-col items-center gap-6 lg:max-w-265.75">
          <div className="inline-flex items-center gap-3 bg-[#F3F4EE] px-3.5 py-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-[#080808]">
            <span
              aria-hidden
              className="block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-[#080808]/80"
            />
            What it looks like
          </div>

          <h2 className="w-full text-center text-[40px] font-medium leading-[50px] tracking-[-0.03em] text-[#080808] lg:max-w-210.5 lg:text-[56px] lg:leading-16">
            Every JAVM engagement runs on{" "}
            <span className="box-decoration-clone bg-[#003CFC] px-2 text-white">
              three core pillars.
            </span>
          </h2>
        </div>

        <RailSequence className="mt-12.5 flex flex-col lg:mt-25">
          {PILLARS.map((pillar, i) => {
            const isLast = i === PILLARS.length - 1;
            return (
              <div key={pillar.key} className="flex gap-12.5">
                <div className="hidden w-16 shrink-0 flex-col items-center lg:flex">
                  <RailIcon>{pillar.icon}</RailIcon>
                  {!isLast && <PillarRailLine index={i} />}
                </div>

                <article
                  className={`flex min-w-0 flex-1 flex-col bg-[#E8F1FF] lg:h-137.5 lg:flex-row ${
                    isLast ? "" : "mb-5 lg:mb-12.5"
                  }`}
                >
                  <div className="flex flex-col justify-between gap-10 p-4 lg:h-full lg:w-137.5 lg:shrink-0 lg:p-10.5">
                    <div className="flex flex-col gap-5 lg:w-116 lg:max-w-full">
                      <div className="inline-flex w-fit items-center gap-2.5 border border-[#080808]/20 bg-white px-3 py-1.25 font-mono text-xs uppercase leading-[1.6] tracking-[-0.02em] text-[#080808] lg:gap-3 lg:px-3.5 lg:py-1.5 lg:text-sm">
                        <span
                          aria-hidden
                          className="block h-2.25 w-2.25 shrink-0 rounded-[1px] bg-[#080808] lg:h-2.5 lg:w-2.5"
                        />
                        {pillar.tag}
                      </div>

                      <h3 className="text-2xl font-medium leading-[30px] tracking-[-0.02em] text-[#080808] lg:text-[32px] lg:leading-[34px]">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-base leading-6 text-[#080808]/70 lg:w-116 lg:max-w-full">
                      {pillar.description}
                    </p>
                  </div>

                  <div
                    className={`flex ${pillar.visualHeight} items-center justify-center border-l border-white/24 bg-[#050170] lg:h-auto lg:flex-1`}
                  >
                    {pillar.visual}
                  </div>
                </article>
              </div>
            );
          })}
        </RailSequence>
      </div>
    </section>
  );
}
