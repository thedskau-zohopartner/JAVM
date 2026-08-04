export default function ContactHero() {
  return (
    <section className="relative flex w-full flex-1 items-center justify-center overflow-hidden px-4 py-10 sm:px-8 sm:py-15 lg:px-20 lg:py-22">
      <div className="absolute right-0 top-[30%] w-[55%] -translate-y-1/2 sm:w-[45%] lg:w-[40%]">
        <img
          src="/what-we-actually-do/line-converging.svg"
          alt=""
          aria-hidden
          className="block h-auto w-full"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center sm:gap-10">
        <div className="inline-flex items-center gap-2 rounded-[2px] bg-white/10 px-3.5 py-1.5 font-mono text-xl tracking-[-0.15px] text-white">
          <span aria-hidden className="block h-2 w-2 shrink-0 rounded-[1px] bg-white/85" />
          Contact Us
        </div>

        <h1 className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          You&apos;ve built something real.
          <br />
          Let&apos;s make it{" "}
          <span className="inline-block rounded-sm bg-[#F93F28] px-3 py-0.5 align-baseline text-white">
            scale without you.
          </span>
        </h1>
      </div>
    </section>
  );
}
