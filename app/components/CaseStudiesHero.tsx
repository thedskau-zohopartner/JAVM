import Image from "next/image";
import SectionTag from "./SectionTag";

export default function CaseStudiesHero({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow: string | null;
  heading: string;
  subheading: string | null;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#050170] px-4 pb-40 pt-14 sm:px-8 lg:px-20 lg:pb-[351px] lg:pt-15">
      <Image
        src="/case-study-page/lines_left.png"
        alt=""
        width={437}
        height={538}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-auto w-40 max-w-none opacity-20 mix-blend-luminosity sm:w-64 lg:w-[437px]"
      />
      <Image
        src="/case-study-page/lines_right.png"
        alt=""
        width={437}
        height={538}
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-auto w-40 max-w-none opacity-20 mix-blend-luminosity sm:w-64 lg:w-[437px]"
      />

      <div className="relative mx-auto flex w-full flex-col items-center gap-6 text-center lg:w-[822px]">
        {eyebrow && <SectionTag variant="glass">{eyebrow}</SectionTag>}

        <div className="flex w-full flex-col items-center gap-5">
          <h1 className="text-[40px] font-medium leading-[1.1] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[64px] lg:leading-none">
            {heading.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="hidden lg:inline" />}
                {line}
              </span>
            ))}
          </h1>

          {subheading && (
            <p className="max-w-[52ch] text-[15px] leading-[1.4] tracking-[-0.01em] text-white/70 lg:w-[540px] lg:max-w-full lg:text-[18px]">
              {subheading}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
