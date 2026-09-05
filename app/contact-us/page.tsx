import Nav from "../components/Nav";
import BookingSection from "../components/BookingSection";
import WhatToExpect from "../components/WhatToExpect";
import ContactForm from "../components/ContactForm";
import Clients from "../components/Clients";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ECECEC]">
      <div className="flex flex-col bg-[#0D0E13]">
        <Nav
          logoSrc="/logo.svg"
          logoClassName="h-6 w-auto sm:h-7"
          transparent
          darkBg
          links={[
            { label: "Home", href: "/" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "About", href: "/about-us" },
            { label: "Case Studies", href: "/case-study", hasDropdown: true },
          ]}
        />
        <BookingSection />
      </div>
      <WhatToExpect />
      
      <Clients variant="light" />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
