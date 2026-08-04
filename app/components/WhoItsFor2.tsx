import Image from "next/image";

type Card = {
  image: string;
  text: string;
};

const CARDS: Card[] = [
  {
    image: "/whositfor/1.png",
    text: "Generate between $1M–$20M in revenue",
  },
  {
    image: "/whositfor/2.png",
    text: "Have an inconsistent sales function",
  },
  {
    image: "/whositfor/3.png",
    text: "Great at delivery, but may struggle to show value",
  },
];

export default function WhoItsFor() {
  return (
    <section className="relative w-full bg-white px-6 py-16 text-ink sm:px-12 lg:px-44.5 lg:py-25">
      <div className="mx-auto flex w-full max-w-271 flex-col items-center gap-10 lg:gap-12.5">
        <div className="flex flex-col items-center gap-4 lg:max-w-192.5">
          <div className="inline-flex items-center gap-3 bg-ink/10 px-3.5 py-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-ink">
            <span
              aria-hidden
              className="block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-ink/80"
            />
            Who It&apos;s For
          </div>

          <h2 className="text-center text-4xl font-medium leading-tight tracking-[-0.03em] text-ink sm:text-5xl lg:text-[56px] lg:leading-16">
            JAVM typically partners with businesses that
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-5.75 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.text}
              className="flex flex-col border border-ink lg:min-h-92.5"
            >
              <div className="h-63 shrink-0 overflow-hidden bg-[#CADEFF]">
                <Image
                  src={card.image}
                  alt=""
                  width={692}
                  height={504}
                  aria-hidden
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center border-t border-black bg-white px-8 pt-6 pb-7.5">
                <p className="text-2xl font-medium leading-8 tracking-[-0.022em] text-[#0C0C0C] lg:w-70.5 lg:max-w-full">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="flex h-12.25 w-full items-center justify-center gap-3 rounded-xs bg-[#EC3B0D] px-6.5 font-mono text-sm font-bold uppercase leading-[17px] text-white transition hover:bg-[#d43509] active:scale-[0.98] sm:w-65"
        >
          Book a diagnostic call
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
      </div>
    </section>
  );
}
