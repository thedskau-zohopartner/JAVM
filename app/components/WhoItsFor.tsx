import Image from "next/image";
import SectionTag from "./SectionTag";

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
    text: "Is Founder-led or small sales teams",
  },
  {
    image: "/whositfor/3.png",
    text: "Have Strong demand but inconsistent revenue",
  },
];

export default function WhoItsFor() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center bg-[#0530C5] bg-cover bg-center bg-no-repeat px-6 py-24 text-white sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:py-32 xl:px-48"
      style={{
        backgroundImage: `url("/whositfor/Who%20It%E2%80%99s%20For%20-%20bg.png")`,
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12">
        <SectionTag variant="dark">Who It&apos;s For</SectionTag>

        <h2 className="text-center text-[clamp(2.25rem,5.2vw,72px)] font-medium leading-[1.15] tracking-[-1.5px] text-white">
          JAVM typically partners with
          <br className="hidden sm:block" /> businesses that
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {CARDS.map((card) => (
            <article key={card.text} className="flex flex-col">
              <Image
                src={card.image}
                alt=""
                width={460}
                height={320}
                aria-hidden
                className="h-auto w-full border-b-2 border-[#000000]"
              />
              <div className="flex-1 bg-white px-7 py-8 text-ink">
                <p className="text-[19px] font- leading-[1.45] tracking-[-0.2px] sm:text-3xl ">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="mt-2 inline-flex items-center gap-3 bg-white px-7 py-4 font-mono text-[14px] tracking-[0.08em] text-ink transition hover:bg-gray-100 active:scale-[0.98] sm:text-[15px]"
        >
          BOOK A CONSULTATION CALL
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
