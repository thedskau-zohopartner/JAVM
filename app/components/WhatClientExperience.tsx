import Reveal from "./Reveal";

/* pair with a `transition-[...]` that includes transform + opacity */
const RISE =
  "translate-y-6 opacity-0 duration-700 ease-out group-data-[revealed=true]:translate-y-0 group-data-[revealed=true]:opacity-100 motion-reduce:transition-none";

type Outcome = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const OUTCOMES: Outcome[] = [
  {
    title: "Increase in customers",
    description:
      "Having the right systems in place means more of the right customers find you, choose you, and keep buying.",
    /* ads_click */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M11 3.5v-2M11 20.5v-2M3.5 11h-2M20.5 11h-2M5.7 5.7 4.3 4.3M16.3 5.7l1.4-1.4M5.7 16.3l-1.4 1.4" />
        <circle cx="11" cy="11" r="3.2" />
        <path d="m13.4 13.4 8.1 3-3.4 1.4-1.4 3.4-3.3-7.8Z" />
      </svg>
    ),
  },
  {
    title: "Decrease in Founder dependency",
    description:
      "Operations mean the business runs and sells without you in every conversation. The team can close deals, follow the process, and keep revenue moving whether you’re in the room or not.",
    /* manage_accounts */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="7.5" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0 1 9.6-5.7" />
        <circle cx="17.5" cy="17.5" r="2.5" />
        <path d="M17.5 13.5v-1M17.5 22.5v-1M21 15l-.8.8M14.8 21.2l-.8.8M21 21l-.8-.8M14.8 13.8l-.8-.8" />
      </svg>
    ),
  },
  {
    title: "Increased revenue predictability",
    description:
      "Better sales structure, inputs and overall approach mean every deal follows the same process and methodology, standardising the business’s conversions.",
    /* startup */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21.5 2.5c-5 0-9 1.7-12.3 5.6l-3.4 4 5.6 5.6 4-3.4C19.2 11 21.5 7.5 21.5 2.5Z" />
        <path d="M9.2 8.1 4.5 7l-2 2.9 3.4 1.7M15.9 14.8l1.1 4.7-2.9 2-1.7-3.4" />
        <path d="M5.8 18.2 3 21M8.6 20.2l-1.8 1.8M3.8 15.4 2 17.2" />
        <circle cx="15.5" cy="8.5" r="1.6" />
      </svg>
    ),
  },
  {
    title: "Improved team performance",
    description:
      "Sales teams with a clear system, proper training, and ongoing management outperform teams operating on instinct every time.",
    /* trending_up */
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M16 7h5v5" />
      </svg>
    ),
  },
];

export default function WhatClientExperience() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050170]">
      <div className="relative mx-auto flex w-full max-w-350 flex-col gap-16 px-4 py-20 sm:px-8 sm:py-24 lg:gap-24 lg:px-20 lg:py-25">
        <Reveal className="flex flex-col gap-6 lg:pl-5">
          <div
            className={`inline-flex w-fit items-center gap-3 self-start bg-white/10 px-3.5 py-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-white transition-[transform,opacity] ${RISE}`}
          >
            <span
              aria-hidden
              className="block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-white/80"
            />
            What clients experience
          </div>

          <h2
            style={{ transitionDelay: "120ms" }}
            className={`max-w-[20ch] text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[60px] ${RISE}`}
          >
            What changes inside the business and how fast.
          </h2>
        </Reveal>

        <Reveal className="relative rounded-[4px] border border-white/15 bg-white/10">
          {/* equal-height rows so the horizontal divider lands on the row boundary */}
          <div className="grid w-full grid-cols-1 sm:auto-rows-fr sm:grid-cols-2">
            {OUTCOMES.map((o, i) => (
              <article
                key={o.title}
                style={{ transitionDelay: `${i * 110}ms` }}
                className={`group/card flex min-h-65 flex-col items-start gap-10 border-white/15 p-8 transition-[transform,opacity,background-color] hover:bg-white/[0.06] max-sm:not-first:border-t sm:min-h-80 sm:gap-15 sm:p-10 ${RISE}`}
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-white/20 text-white transition duration-500 ease-out group-hover/card:-translate-y-0.5 group-hover/card:bg-white/30 sm:h-14 sm:w-14">
                  <span className="inline-flex transition-transform duration-500 ease-out group-hover/card:scale-110 [&>svg]:h-7 [&>svg]:w-7 sm:[&>svg]:h-9 sm:[&>svg]:w-9">
                    {o.icon}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-[32px] sm:leading-9">
                    {o.title}
                  </h3>
                  <p className="text-base font-normal leading-relaxed tracking-[-0.02em] text-white/60 sm:text-xl sm:leading-[26px]">
                    {o.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Line 1556 / Line 1557 — inset dividers, not full-bleed cell borders */}
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 hidden h-[85.6%] w-px -translate-x-1/2 -translate-y-1/2 bg-white/20 sm:block"
          />
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 hidden h-px w-[94.9%] -translate-x-1/2 -translate-y-1/2 bg-white/20 sm:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
