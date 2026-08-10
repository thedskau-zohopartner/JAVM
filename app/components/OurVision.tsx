const VISION = [
  "Our vision is to build more than a growth system, we aim to become a long-term partner in your journey.",
  "As we work together, we develop a deeper understanding of your business, your goals, and the challenges you face.",
  "That growing understanding allows us to continuously support your vision, because your success is what drives ours.",
];

export default function OurVision() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      {/* barcode panels */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-23.5 hidden h-118.25 w-94.75 -scale-y-100 bg-[url('/about-us/bg-lines.svg')] bg-contain bg-no-repeat lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 -right-23.5 hidden h-118.25 w-94.75 rotate-180 bg-[url('/about-us/bg-lines.svg')] bg-contain bg-no-repeat lg:block"
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        {/* dashed doodles */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 hidden h-56 w-81 bg-[url('/about-us/mountain-doddle.svg')] bg-contain bg-no-repeat lg:block"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 hidden h-56 w-81 bg-[url('/about-us/eye-doddle.svg')] bg-contain bg-no-repeat lg:block"
        />

        <div className="relative mx-auto flex w-full max-w-141.25 flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-3 bg-[#F3F4EE] px-3.5 py-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-[#3D3D41] capitalize">
              <span
                aria-hidden
                className="block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-ink/80"
              />
              Our Vision
            </div>

            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.04em] text-[#101010] lg:text-[40px] lg:leading-[46px]">
              Growing With Your Business Beyond Every Milestone and Goal
            </h2>
          </div>

          <div className="flex max-w-126 flex-col gap-6 text-base font-medium leading-6 tracking-[-0.02em] text-[#080808]/60 lg:text-lg">
            {VISION.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
