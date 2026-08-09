import DiagnosticIcon from "./DiagnosticIcon";
import SectionTag from "./SectionTag";

export default function HowItWorksHero() {
  return (
    <section className="relative w-full px-4 pb-12 pt-10 sm:px-8 sm:pt-14 lg:px-20 lg:pb-20 lg:pt-16">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 lg:items-start lg:gap-6">
        <SectionTag variant="glass" className="self-center lg:self-start">
          Revenue Systems &amp; Sales Operations
        </SectionTag>

        <div className="flex w-full flex-col gap-3.5 lg:gap-5">
          <h1 className="text-center text-[56px] font-medium leading-[0.94] tracking-[-0.04em] text-white lg:w-226.5 lg:max-w-full lg:text-left lg:text-[64px] lg:leading-[1.06]">
            We Build the{" "}
            <span className="block bg-[#003CFC] text-white lg:inline lg:box-decoration-clone lg:px-4.25 lg:align-baseline">
              Sales Infrastructure
            </span>{" "}
            Behind Predictable Revenue
          </h1>

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center sm:gap-5">
            <p className="max-w-[58ch] text-center text-sm leading-[1.36] tracking-[-0.01em] text-white/70 lg:w-176.75 lg:max-w-full lg:text-left lg:text-lg lg:leading-[1.4] lg:text-white/60">
              JAVM Partners works inside your business to design, implement, and
              manage the sales infrastructure that turns inconsistent revenue
              into a predictable, scalable growth.
            </p>

            {/* <a
              href="#"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-sm bg-white px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:-translate-y-px hover:bg-gray-100 sm:py-4 sm:text-base lg:h-12.25 lg:py-0"
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
            </a> */}
          </div>
        </div>

        <a
          href="#"
          className="flex h-12.25 w-full items-center justify-center gap-3 rounded-xs bg-white px-6.5 font-mono text-sm font-bold uppercase leading-[17px] text-black transition hover:bg-gray-100 active:scale-[0.99] lg:hidden"
        >
          <DiagnosticIcon className="shrink-0" />
          Book a free diagnostic call
        </a>
      </div>
    </section>
  );
}
