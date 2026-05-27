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
  bg: string;
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
    bg: "#050170",
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
    bg: "#0D0E13",
  },
  {
    name: "CHARLES",
    file: "CHARLES.png",
    fullName: "Charles",
    role: "Director at",
    company: "Integrity Finance",
    logo: "/logo-strip/integrityfinance.svg",
    quote:
      "JAVM Partners helped us gain clear focus on the sales activities that matter most. Their hands-on support and proven framework simplified our process and set us up for sustainable growth.",
    bg: "rgba(5, 1, 112, 0.8)",
  },
  {
    name: "FRASER",
    file: "FRASER.png",
    fullName: "Fraser",
    role: "Founder at",
    company: "The Cyber Collective",
    logo: "/logo-strip/thecybercollective.svg",
    quote:
      "We lacked the time and resources to effectively hire and onboard a BD. Their strength was not only in designing the prospecting and sales process but also in integrating it into our business and training the role. This gave me confidence that new hires would enter a well-structured system ready to perform.",
    bg: "#050170",
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
    bg: "#0D0E13",
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
    bg: "#003CFC",
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
    bg: "rgba(0, 60, 252, 0.8)",
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

export default function Clients() {
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

  const advanceOpen = () => {
    setOpenIndex((curr) => (curr === null ? 0 : (curr + 1) % CLIENTS.length));
  };

  return (
    <section className="relative flex min-h-screen w-full items-center bg-ink bg-[url('/clients-bg.jpg')] bg-cover bg-[position:25%_center] bg-no-repeat px-6 py-24 text-white sm:bg-center sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:pb-40 lg:pt-32 xl:px-48">
      <div aria-hidden className="absolute inset-0 bg-ink/55" />

      <div className="relative mx-auto flex w-full flex-col items-start gap-12">
        <SectionTag variant="dark">Real Stories From Real Clients</SectionTag>

        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h2 className="w-[min(80ch,100%)] text-[48px] leading-[1.05] tracking-[-1.8px] text-white sm:text-6xl sm:tracking-[-2.4px]">
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
                className={`group relative h-[480px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-lg transition-[width] duration-500 ease-out ${
                  isExpanded ? "w-[720px] max-w-[90vw]" : "w-[320px]"
                }`}
              >
                <Image
                  src={`/Clients/${client.file}`}
                  alt={client.fullName}
                  fill
                  sizes="(max-width: 768px) 320px, 720px"
                  className={`object-cover transition-opacity duration-500 ${
                    isExpanded ? "opacity-0" : "opacity-100 group-hover:scale-105"
                  }`}
                />

                <div
                  aria-hidden={!isExpanded}
                  style={{ backgroundColor: client.bg }}
                  className={`absolute inset-0 flex flex-col justify-between p-7 transition-opacity duration-500 sm:p-9 ${
                    isExpanded ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <header className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-[13px] uppercase tracking-[0.04em] text-white sm:text-[15px]">
                        {client.fullName.toUpperCase()}, {client.role.toUpperCase()}
                      </span>
                      <Image
                        src={client.logo}
                        alt={client.company}
                        width={160}
                        height={26}
                        className="h-6 w-auto max-w-none"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        advanceOpen();
                      }}
                      aria-label="Next testimonial"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#050170] transition hover:bg-gray-100 active:scale-95"
                    >
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 17l5-5-5-5" />
                        <path d="M13 17l5-5-5-5" />
                      </svg>
                    </button>
                  </header>

                  <p className="text-[15px] leading-[1.55] tracking-[-0.1px] text-white/95 sm:text-[17px]">
                    &ldquo;{client.quote}&rdquo;
                  </p>
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
