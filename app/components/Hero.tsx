import Image from "next/image";
import DiagnosticIcon from "./DiagnosticIcon";
import TrustedBy from "./TrustedBy";

function HeroBadge() {
  return (
    <div className="inline-flex max-w-full animate-fade-in items-center gap-1.5 whitespace-nowrap rounded-[2px] bg-white/10 px-2.5 py-1.5 text-[11px] leading-[1.6] tracking-[-0.15px] text-white [animation-delay:0.1s] lg:gap-2 lg:px-4 lg:py-2 lg:text-[17px]">
      <span aria-hidden className="h-2 w-2 shrink-0 rounded-[1px] bg-white/80 lg:h-2.5 lg:w-2.5" />
      <span>
        <b className="ml-1 font-bold lg:ml-2">100% guarantee</b> increase in revenue
      </span>
      <span aria-hidden className="ml-0.5 inline-flex items-center lg:ml-1">
        <svg className="h-[8px] w-auto lg:h-[11px]" width="16" height="11" viewBox="0 0 13 11" fill="none">
          <path d="M1 1L5.5 5.5L1 10" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 1L11.5 5.5L7 10" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

function HeroCtas() {
  return (
    <div className="relative mt-0 flex w-full flex-col items-center justify-center gap-3 animate-fade-in [animation-delay:0.55s] lg:w-auto lg:flex-row">
      <Image
        src="/left-beam.svg"
        alt=""
        width={538}
        height={193}
        priority
        aria-hidden
        className="pointer-events-none absolute right-full top-1/2 hidden h-auto w-[clamp(220px,38vw,520px)] -translate-y-1/2 opacity-80 [mix-blend-mode:plus-lighter] lg:block"
      />

      <Image
        src="/right-beam.svg"
        alt=""
        width={538}
        height={193}
        priority
        aria-hidden
        className="pointer-events-none absolute left-full top-1/2 hidden h-auto w-[clamp(220px,38vw,520px)] -translate-y-1/2 opacity-80 [mix-blend-mode:plus-lighter] lg:block"
      />

      <a
        href="#"
        className="inline-flex w-full items-center justify-center gap-3 rounded-[2px] border border-white/15 bg-white/10 px-8 py-[18px] font-mono text-[16px] font-medium uppercase leading-tight tracking-wider text-white backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-px hover:border-white/30 hover:bg-white/20 lg:w-auto"
      >
        SEE HOW WE WORK
      </a>

      <a
        href="#"
        className="inline-flex w-full items-center justify-center gap-3 rounded-[2px] bg-brand-orange px-8 py-[18px] font-mono text-[16px] font-bold uppercase leading-tight tracking-wider text-white shadow-[0_4px_18px_rgba(249,63,40,0.35)] transition-all duration-300 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_6px_24px_rgba(249,63,40,0.45)] lg:w-auto"
      >
        <DiagnosticIcon />
        BOOK A FREE DIAGNOSTIC CALL
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative flex w-full flex-1 flex-col items-center overflow-x-hidden bg-[#050170]">
      <div className="relative z-[5] flex max-w-[920px] flex-col items-center gap-7 px-6 pt-14 text-center lg:gap-10 lg:pt-20">
        <HeroBadge />

        <h1 className="max-w-[920px] animate-fade-in text-8xl leading-[1.05] tracking-[-1.8px] text-white [animation-delay:0.25s] lg:tracking-[-2.4px]">
          <span className="block lg:whitespace-nowrap">Your sales aren&apos;t broken.</span>
          <span className="block lg:whitespace-nowrap">Your system is!</span>
        </h1>

        <p className="max-w-[680px] animate-fade-in text-[17px] leading-[1.45] tracking-[-0.18px] text-white/70 font-light [animation-delay:0.4s] lg:text-[22px]">
          We create high-performance sales systems for businesses, making revenue
          predictable and scalable, independent of the founder.
        </p>

        <HeroCtas />
      </div>

      <TrustedBy />
    </div>
  );
}
