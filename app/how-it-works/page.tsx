import Image from "next/image";
import Nav from "../components/Nav";
import HowItWorksHero from "../components/HowItWorksHero";
import HowWeWorkPhases from "../components/HowWeWorkPhases";
import ThreePillars from "../components/ThreePillars";
import WhatClientExperience from "../components/WhatClientExperience";
import WhoItsFor from "../components/WhoItsFor";

export default function HowItWorks() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ECECEC]">
      <div className="relative w-full">
        <Image
          src="/how-it-works/howwework.png"
          alt=""
          width={2160}
          height={1599}
          priority
          quality={100}
          sizes="100vw"
          className="block h-auto w-full"
        />

        <div className="absolute inset-0 flex flex-col">
          <Nav
            logoSrc="/logo.svg"
            logoClassName="h-6 w-auto sm:h-7"
            transparent
            darkBg
            links={[
              { label: "Home", href: "/" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "About", href: "/about-us" },
              { label: "Case Studies", href: "#", hasDropdown: true },
            ]}
          />

          <HowItWorksHero />
        </div>
      </div>

      <HowWeWorkPhases />
      <ThreePillars />
      <WhatClientExperience />
      <WhoItsFor/>
    </main>
  );
}
