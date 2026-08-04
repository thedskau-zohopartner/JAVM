import Nav from "../components/Nav";
import ContactHero from "../components/ContactHero";
import BookingSection from "../components/BookingSection";
import WhatToExpect from "../components/WhatToExpect";
import Clients from "../components/Clients";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ECECEC]">
      <div className="flex min-h-[60vh] flex-col bg-[#003CFC]">
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
        <ContactHero />
      </div>
      <BookingSection />
      <WhatToExpect />
      <Clients variant="light" />
    </main>
  );
}
