import Image from "next/image";

type Outcome = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const OUTCOMES: Outcome[] = [
  {
    title: "Increase in Conversion rates",
    description:
      "Structured sales processes consistently outperform improvised ones. Clients typically see measurable conversion improvement within 60 – 90 days.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Decrease in Founder dependency",
    description:
      "When the system owns the process, the founder steps out of the sales chair. Most clients reduce direct sales involvement by over 50% within 6 months.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 19h16" />
        <path d="M7 16V9M12 16v-5M17 16v-9" />
        <path d="m5 6 5 4 4-3 6 4" />
      </svg>
    ),
  },
  {
    title: "Revenue predictability increases",
    description:
      "Month-to-month variance drops significantly when pipeline management and conversion rates become consistent and measurable.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 12h3l2-5 4 10 2-6 3 4h4" />
      </svg>
    ),
  },
  {
    title: "Improved team performance",
    description:
      "Sales teams with a clear system, proper training, and ongoing management outperform teams operating on instinct every time.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 19c.6-3 3-5 6-5s5.4 2 6 5" />
        <path d="M15 19c.4-2 1.8-3.5 4-3.5s3.6 1.5 4 3.5" />
      </svg>
    ),
  },
];

export default function WhatClientExperience() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <Image
        src="/how-it-works/whatclientexp.png"
        alt=""
        fill
        sizes="100vw"
        quality={95}
        className="object-cover object-top"
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-4 py-20 sm:px-8 sm:py-24 lg:gap-20 lg:px-20 lg:py-28">
        <div className="flex flex-col gap-7">
          <div className="inline-flex w-fit items-center gap-2 self-start rounded-sm bg-white/10 px-3.5 py-1.5 font-mono text-base tracking-tight text-white">
            <span aria-hidden className="block h-2 w-2 shrink-0 rounded-[1px] bg-white/85" />
            What clients experience
          </div>

          <h2 className="max-w-[20ch] text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            What changes inside the business and how fast.
          </h2>
        </div>

        <div className="rounded-sm border border-white/15 bg-[#F7F6F5]/10 backdrop-blur-md">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2">
            {OUTCOMES.map((o) => (
              <article
                key={o.title}
                className="flex flex-col gap-8 border-white/15 p-8 sm:p-12 min-h-[260px] sm:min-h-[330px] [&:not(:first-child)]:border-t sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2)]:border-t-0"
              >
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-sm bg-white/10 text-white mb-2">
                  {o.icon}
                </div>

                <div className="flex flex-col gap-4 flex-1 justify-center">
                  <h3 className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
                    {o.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-white/70 sm:text-lg">
                    {o.description}
                  </p>
                </div>
              </article>
            ))}
       
          </div>
        </div>
      </div>
    </section>
  );
}
