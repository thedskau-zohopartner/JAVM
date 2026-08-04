"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionTag from "./SectionTag";

const STEP_DURATION_MS = 5000;

type Client = {
  name: string;
  file: string;
  fullName: string;
  role: string;
  company: string;
  logo: string;
  quote: string;
};

const CLIENTS: Client[] = [
  {
    name: "LEON",
    file: "LEON.png",
    fullName: "Leon",
    role: "Founder at",
    company: "Guardian One",
    logo: "/logo-strip/guardianone.svg",
    quote:
      "We were flying blind, no leads, no real process, and no idea how to grow. JAVM Partners came in bringing stability. They built us a clear sales process, helped us execute, and set us up to scale with confidence.",
  },
  {
    name: "MATT",
    file: "MATT.png",
    fullName: "Matt",
    role: "Founder at",
    company: "Cybernode",
    logo: "/logo-strip/cybernode.svg",
    quote:
      "Our sales had completely plateaued. We had leads, but no structure and it showed. JAVM Partners came in, rebuilt our sales process from the ground up, and within weeks we were back to closing high-quality deals consistently. It felt like we finally got out of our own way.",
  },
  {
    name: "ANDO",
    file: "ANDO.png",
    fullName: "Ando",
    role: "Founder at",
    company: "Stadium Fitness",
    logo: "/logo-strip/stadiumfitness.svg",
    quote:
      "We had no clear sales structure, unsure who to target, how to get them in, or how to close and keep them. JAVM Partners built a simple process that fixed all of that. Now we attract the right people and turn more of them into long-term members.",
  },
  {
    name: "KOSTA",
    file: "KOSTA.png",
    fullName: "Kosta",
    role: "Director at",
    company: "Lev Logistics",
    logo: "/logo-strip/LevLogistics.svg",
    quote:
      "JAVM Partners transformed our sales approach. They didn't just make minor adjustments; they created a strategic process that set us apart from competitors. They established the operational foundation we needed, helping us generate $250k in new revenue within the first 3 months. We now view JAVM as a long-term partner, taking charge of our sales infrastructure and driving new revenue.",
  },
  {
    name: "JAMIE",
    file: "JAMIE.png",
    fullName: "Jamie",
    role: "Founder at",
    company: "GlydePath",
    logo: "/logo-strip/Glydepath.svg",
    quote:
      "I chose JAVM Partners because we had no real sales foundation, and I didn't want to hire a BD without the right structure in place. They offered a solution I wasn't aware existed in the market that fitted my needs perfectly. We are now moving towards building a scalable and managed sales function to support growth as we expand.",
  },
];

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous client" : "Next client"}
      className={`inline-flex h-16 w-16 items-center justify-center transition-[background-color,opacity] duration-300 ${
        disabled
          ? "cursor-not-allowed bg-white/15 text-white/50"
          : "bg-[#003cfc] text-white hover:bg-[#0030d0] active:scale-95"
      }`}
    >
      <svg
        width="26"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {direction === "left" ? (
          <path d="M19 12H5M12 5l-7 7 7 7" />
        ) : (
          <path d="M5 12h14M12 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default function Clients({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (openIndex === null) return;
    const t = setTimeout(() => {
      setOpenIndex((curr) => (curr === null ? 0 : (curr + 1) % CLIENTS.length));
    }, STEP_DURATION_MS);
    return () => clearTimeout(t);
  }, [openIndex]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 1);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const t = setTimeout(update, 600);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const el = scrollerRef.current;
    if (!el) return;

    const t = setTimeout(() => {
      const card = el.children[openIndex] as HTMLElement | undefined;
      if (!card) return;

      const cardLeft = card.offsetLeft;
      const cardRight = cardLeft + card.offsetWidth;
      const viewLeft = el.scrollLeft;
      const viewRight = viewLeft + el.clientWidth;

      if (cardLeft < viewLeft) {
        el.scrollTo({ left: cardLeft, behavior: "smooth" });
      } else if (cardRight > viewRight) {
        el.scrollTo({ left: cardRight - el.clientWidth, behavior: "smooth" });
      }
    }, 550);

    return () => clearTimeout(t);
  }, [openIndex]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = 24;
    const delta = card.offsetWidth + gap;
    el.scrollBy({ left: dir === "right" ? delta : -delta, behavior: "smooth" });
  };

  return (
    <section className={`relative flex min-h-screen w-full items-center px-6 py-24 sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:pb-40 lg:pt-32 xl:px-48 ${
      isLight
        ? "bg-white text-ink"
        : "bg-ink bg-[url('/clients-bg.jpg')] bg-cover bg-[position:25%_center] bg-no-repeat text-white"
    }`}>
      {!isLight && <div aria-hidden className="absolute inset-0 bg-ink/55" />}

      <div className="relative mx-auto flex w-full flex-col items-start gap-12">
        <SectionTag variant={isLight ? "light" : "dark"}>Real Stories From Real Clients</SectionTag>

        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h2 className={`w-[min(80ch,100%)] text-[48px] leading-[1.05] tracking-[-1.8px] sm:text-6xl sm:tracking-[-2.4px] ${
            isLight ? "text-ink" : "text-white"
          }`}>
            What happens when{" "}
            <span className="inline-block rounded-[1px] bg-[#003cfc] px-3 text-white sm:px-4">
              sales systems
            </span>
            <br />
            are built properly
          </h2>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <ArrowButton
              direction="left"
              disabled={!canScrollLeft}
              onClick={() => scroll("left")}
            />
            <ArrowButton
              direction="right"
              disabled={!canScrollRight}
              onClick={() => scroll("right")}
            />
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mt-20"
        >
          {CLIENTS.map((client, idx) => {
            const isExpanded = openIndex === idx;
            return (
              <article
                key={client.name}
                onClick={() => setOpenIndex(isExpanded ? null : idx)}
                aria-expanded={isExpanded}
                className={`group relative h-[480px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-lg bg-[#050170] transition-[width] duration-500 ease-out ${
                  isExpanded ? "w-[720px] max-w-[90vw]" : "w-[320px]"
                }`}
              >
                <div
                  aria-hidden={isExpanded}
                  className={`absolute inset-0 flex items-center justify-center p-10 transition-opacity duration-500 ${
                    isExpanded ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  <Image
                    src={client.logo}
                    alt={client.company}
                    width={260}
                    height={42}
                    className="h-auto w-[70%] max-w-[220px] transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div
                  aria-hidden={!isExpanded}
                  className={`absolute inset-0 flex flex-col gap-5 p-5 transition-opacity duration-500 sm:flex-row sm:gap-8 sm:p-6 ${
                    isExpanded ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="relative aspect-[297/399] h-[38%] w-auto shrink-0 self-center overflow-hidden ring-1 ring-white/25 sm:h-full sm:self-auto">
                    <Image
                      src={`/Clients/${client.file}`}
                      alt={client.fullName}
                      fill
                      sizes="(max-width: 640px) 140px, 330px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 sm:py-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-white sm:text-[14px]">
                        {client.fullName.toUpperCase()}, {client.role.toUpperCase()}
                      </span>
                      <Image
                        src={client.logo}
                        alt={client.company}
                        width={160}
                        height={26}
                        className="h-5 w-auto max-w-none"
                      />
                    </div>

                    <p className="text-[13px] font-light leading-[1.6] tracking-[-0.1px] text-white/95 sm:text-[16px]">
                      &ldquo;{client.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex w-full justify-center gap-3 sm:hidden">
          <ArrowButton
            direction="left"
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
          />
          <ArrowButton
            direction="right"
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
}
