import Image from "next/image";
import Nav from "../components/Nav";
import HowItWorksHero from "../components/HowItWorksHero";
import HowWeWorkPhases from "../components/HowWeWorkPhases";
import ThreePillars from "../components/ThreePillars";
import WhatClientExperience from "../components/WhatClientExperience";
import WhoItsFor from "../components/WhoItsFor2";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function HowItWorks() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ECECEC]">
      <div className="relative min-h-236 w-full overflow-hidden bg-[linear-gradient(180deg,#0D0E13_4.96%,#0D0E13_70.82%,rgba(13,14,19,0.4)_100%)] lg:min-h-0 lg:bg-none">
        <Image
          src="/how-it-works/howwework.png"
          alt=""
          width={2160}
          height={1599}
          priority
          quality={100}
          sizes="100vw"
          className="hidden h-auto w-full lg:block"
        />

        {/* mobile: the hero visual sits in a 272px band pinned to the bottom */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-68 overflow-hidden lg:hidden"
        >
          <Image
            src="/how-it-works/howwework.png"
            alt=""
            fill
            priority
            quality={100}
            sizes="150vw"
            className="object-cover object-bottom blur-[3px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0D0E13_23.74%,rgba(13,14,19,0.4)_73.95%)]" />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -right-49 bottom-65 h-80.5 w-80.5 rotate-180 bg-[url('/final-cta-stripes.svg')] bg-contain bg-no-repeat lg:hidden"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-15 -left-18.5 h-52 w-52 -scale-x-100 bg-[url('/final-cta-stripes.svg')] bg-contain bg-no-repeat lg:hidden"
        />

        <div className="relative flex flex-col lg:absolute lg:inset-0">
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
      <FinalCTA />
      <Footer />
    </main>
  );
}
