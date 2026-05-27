import Image from "next/image";
import SectionTag from "./SectionTag";

export default function OurMission() {
  return (
    <section className="w-full px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div className="mx-auto w-full max-w-[1400px] rounded-md bg-[#071637] px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10 text-white">
            <SectionTag variant="dark">Our Mission &amp; vision</SectionTag>

            <div className="flex flex-col gap-6 text-lg leading-relaxed sm:text-xl lg:text-2xl">
              <p>
                <span className="font-medium">
                  Our mission is to empower your business to lead your market.
                </span>{" "}
                <span className="font-light text-white/65">
                  We focus on creating and implementing systems that turn a good
                  business into a market leader.
                </span>
              </p>
              <p>
                <span className="font-medium">
                  Every founder deserves to see their vision scale,
                </span>{" "}
                <span className="font-light text-white/65">
                  which requires structure. JAVM is here to provide that support
                  until you succeed.
                </span>
              </p>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-sm">
            <Image
              src="/about-us/Our Mission - founder image.png"
              alt="James Musa and Jarrod Musa, founders of JAVM Partners"
              width={1200}
              height={900}
              className="block h-auto w-full"
            />
            <figcaption className="absolute bottom-3 left-3 inline-flex items-center rounded-sm bg-black/45 px-3 py-1.5 font-mono text-xs text-white/90 backdrop-blur-sm sm:text-sm">
              The JAVM Partners
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
