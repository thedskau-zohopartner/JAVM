import Image from "next/image";
import SectionTag from "./SectionTag";

const CARDS = [
  { src: "/contact-us/card 1.png", alt: "The call" },
  { src: "/contact-us/card 2.png", alt: "The real problem" },
  { src: "/contact-us/card 3.png", alt: "We build it with you" },
];

export default function WhatToExpect() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 px-4 py-20 sm:gap-12 sm:px-8 sm:py-24 lg:gap-14 lg:px-20 lg:py-28">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionTag>What To Expect</SectionTag>

          <h2 className="text-3xl font-normal leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            One{" "}
            <span className="inline-block rounded-sm bg-[#003CFC] px-3 py-0.5 align-baseline text-white">
              45 min call.
            </span>{" "}
            Then we
            <br />
            get to work.
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <Image
              key={card.src}
              src={card.src}
              alt={card.alt}
              width={600}
              height={800}
              className="block h-auto w-full rounded-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
