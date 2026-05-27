import SectionTag from "./SectionTag";

export default function HowItWorksHero() {
  return (
    <section className="relative w-full px-4 pb-12 pt-10 sm:px-8 sm:pt-14 lg:px-20 lg:pb-20 lg:pt-16">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 sm:gap-10">
        <SectionTag variant="dark" className="self-start">
          Revenue Systems &amp; Sales Operations
        </SectionTag>

        <h1 className="max-w-[22ch] text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          We Build the{" "}
          <span className="inline-block rounded-sm bg-[#003CFC] px-3 py-0.5 align-baseline text-white">
            Sales Infrastructure
          </span>{" "}
          Behind Predictable Revenue
        </h1>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-start sm:gap-10">
          <p className="max-w-[58ch] text-base font-light leading-relaxed text-white/70 sm:text-lg lg:text-xl">
            JAVM works made your business to design, implement, and manage the
            sales infrastructure that turns inconsistent revenue into a
            predictable, scalable engine.
          </p>

          <a
            href="#"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-sm bg-white px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:-translate-y-px hover:bg-gray-100 sm:py-4 sm:text-base"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18 3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3ZM6 3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3ZM18 15a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3ZM6 15a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
              <path d="M9 6h6M9 18h6M6 9v6M18 9v6" />
            </svg>
            BOOK A FREE DIAGNOSTIC CALL
          </a>
        </div>
      </div>
    </section>
  );
}
