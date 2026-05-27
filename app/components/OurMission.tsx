import Image from "next/image";
import SectionTag from "./SectionTag";

export default function OurMission() {
  return (
    <section className="w-full px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div className="mx-auto w-full max-w-[1400px] rounded-md bg-[#071637] px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-between gap-10 text-white">
            <SectionTag variant="dark" className="self-start">
              Our Mission &amp; vision
            </SectionTag>


            <div className="flex flex-col gap-4 text-xl leading-snug sm:text-2xl lg:text-3xl">
              <p className="leading-snug">
                <span className="font-normal">
                  Our mission is to empower your business to lead your market.
                </span>{" "}
                <span className="font-light text-white/65">
                  We focus on creating and implementing systems that turn a good
                  business into a market leader.
                </span>
              </p>
              <p className="leading-snug">
                <span className="font-normal">
                  Every founder deserves to see their vision scale,
                </span>{" "}
                <span className="font-light text-white/65">
                  which requires structure. JAVM is here to provide that support
                  until you succeed.
                </span>
              </p>
            </div>
       
          </div>

          <figure className="overflow-hidden rounded-sm">
            <Image
              src="/about-us/Our Mission - founder image.png"
              alt="James Musa and Jarrod Musa, founders of JAVM Partners"
              width={1200}
              height={900}
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
