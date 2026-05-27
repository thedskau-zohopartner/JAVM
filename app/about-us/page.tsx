import Nav from "../components/Nav";
import AboutHero from "../components/AboutHero";
import OurMission from "../components/OurMission";

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
          { label: "Case Studies", href: "#", hasDropdown: true },
        ]}
      />
      <AboutHero />
      <OurMission />
    </main>
  );
}
