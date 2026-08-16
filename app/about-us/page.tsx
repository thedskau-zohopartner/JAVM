import Nav from "../components/Nav";
import AboutHero from "../components/AboutHero";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import OurLeadership from "../components/OurLeadership";
import AboutCTA from "../components/AboutCTA";
import AboutFooter from "../components/AboutFooter";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ECECEC]">
      <Nav
        logoSrc="/JAVM-blue-logo.svg"
        logoClassName="h-6 w-auto sm:h-7"
        transparent
        links={[
          { label: "Home", href: "/" },
          { label: "How It Works", href: "/how-it-works" },
          { label: "About", href: "/about-us" },
          { label: "Case Studies", href: "/case-study", hasDropdown: true },
        ]}
      />
      <AboutHero />
      <OurMission />
      <OurVision />
      <OurLeadership />
      <AboutCTA />
      <AboutFooter />
    </main>
  );
}
