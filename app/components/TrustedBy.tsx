import Image from "next/image";

const LOGOS = [
  { src: "/logo-strip/LevLogistics.svg", alt: "Lev Logistics" },
  { src: "/logo-strip/Glydepath.svg", alt: "Glydepath" },
  { src: "/logo-strip/stadiumfitness.svg", alt: "Stadium Fitness" },
  { src: "/logo-strip/integrityfinance.svg", alt: "Integrity Finance" },
  { src: "/logo-strip/cybernode.svg", alt: "Cybernode" },
  { src: "/logo-strip/thecybercollective.svg", alt: "The Cyber Collective" },
  { src: "/logo-strip/guardianone.svg", alt: "Guardian One" },
  { src: "/logo-strip/hakeaprojects.svg", alt: "Hakea Projects" },
];

function Divider() {
  return (
    <span
      aria-hidden
      className="h-px w-[80px] shrink-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] lg:w-[140px]"
    />
  );
}

export default function TrustedBy() {
  return (
    <div className="relative z-[5] mt-4 flex w-full flex-col items-center gap-6 pb-10 pt-10 lg:mt-10 lg:gap-9 lg:pt-20">
      <div className="flex flex-col items-center gap-3 px-6 text-center text-[15px] leading-[1.6] tracking-[-0.32px] text-white/60 lg:flex-row lg:text-[20px]">
        <Divider />
        <span>
          Trusted by <b className="font-semibold text-white">leading companies in B2B</b> business and beyond
        </span>
        <Divider />
      </div>

      <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee mt-6">
          {[0, 1].map((set) => (
            <div
              key={set}
              aria-hidden={set === 1}
              className="flex shrink-0 items-center gap-12 pr-12 lg:gap-24 lg:pr-24"
            >
              {LOGOS.map((logo) => (
                <Image
                  key={`${set}-${logo.alt}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  className="h-7 w-auto shrink-0 object-contain opacity-95 transition-opacity hover:opacity-100 lg:h-12"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
