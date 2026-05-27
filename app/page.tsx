import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import WhatWeActuallyDo from "./components/WhatWeActuallyDo";
import JavmSystem from "./components/JavmSystem";
import Clients from "./components/Clients";
import HowWeWork from "./components/HowWeWork";
import CaseStudy from "./components/CaseStudy";
import WhoItsFor from "./components/WhoItsFor";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ink">
      <Nav />
      <Hero />
      <Problem />
      <WhatWeActuallyDo />
      <JavmSystem />
      <Clients />
      <HowWeWork />
      <CaseStudy />
      <WhoItsFor />
      <FAQ />
    </main>
  );
}
