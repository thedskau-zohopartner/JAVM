import CommandIcon from "./CommandIcon";
import TransitionLink from "./TransitionLink";

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050170] px-4 py-16 lg:px-25 lg:py-25">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-140.25 bg-[url('/final-cta-stripes.svg')] bg-right bg-no-repeat lg:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-25 -bottom-25 h-84.75 w-94.75 bg-[url('/final-cta-stripes.svg')] bg-cover bg-no-repeat lg:hidden"
      />

      <div className="relative flex flex-col gap-10 lg:w-173.75 lg:gap-12">
        <div className="flex flex-col gap-4.5">
          <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.04em] text-white sm:text-[40px] lg:w-194 lg:max-w-full lg:text-5xl lg:leading-[1.08]">
            Are you looking to improve your sales process? Let&rsquo;s uncover
            the 2-3 biggest constraints that will generate you more revenue.
          </h2>
          <p className="text-base font-normal leading-6.5 tracking-[-0.6px] text-white/60 lg:w-141.75 lg:max-w-full lg:text-lg">
            Just a direct conversation with operators who&rsquo;ve seen your
            problem before and know how to solve it.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
          <TransitionLink
            href="/contact-us"
            className="flex h-12.25 w-full items-center justify-center gap-3 rounded-xs bg-[#EC3B0D] px-6.5 py-4 font-mono text-sm font-bold uppercase leading-[1.2] text-white transition hover:bg-[#d43509] active:scale-[0.99] lg:w-65.75"
          >
            <CommandIcon />
            Book a diagnostic call
          </TransitionLink>

          <TransitionLink
            href="/how-it-works"
            className="flex h-12.25 w-full items-center justify-center gap-2.5 rounded-xs border border-white/16 bg-[#F5F5F5]/10 px-6.5 py-4 font-mono text-sm font-medium uppercase leading-[1.2] text-white transition hover:bg-white/15 active:scale-[0.99] lg:w-44.5"
          >
            See how we work
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
