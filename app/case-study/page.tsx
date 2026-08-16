import Nav from "../components/Nav";
import CaseStudiesHero from "../components/CaseStudiesHero";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";
import CaseStudiesList from "../components/CaseStudiesList";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { fetchSanity } from "../../sanity/lib/client";
import {
  caseStudyCardsQuery,
  caseStudyPageQuery,
  featuredCaseStudyQuery,
} from "../../sanity/lib/queries";
import type { CaseStudiesPage, CaseStudyCard } from "../../sanity/lib/types";

const FALLBACK = {
  heroEyebrow: "Customer Stories",
  heroHeading: "Proven results for businesses just like yours",
  heroSubheading:
    "A proven way to go from stalled to revenue growth that actually performs consistently, predictably, and at scale",
  featuredEyebrow: "Featured Case Study",
  featuredBlurb: null,
  listEyebrow: "Case Studies",
  listHeading: "Built for the client. With the client",
} satisfies CaseStudiesPage;

export default async function CaseStudyPage() {
  const [pageContent, featured, studies] = await Promise.all([
    fetchSanity<CaseStudiesPage | null>(caseStudyPageQuery),
    fetchSanity<CaseStudyCard | null>(featuredCaseStudyQuery),
    fetchSanity<CaseStudyCard[]>(caseStudyCardsQuery),
  ]);

  const page = pageContent ?? FALLBACK;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="bg-[#050170]">
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
      </div>

      <CaseStudiesHero
        eyebrow={page.heroEyebrow}
        heading={page.heroHeading}
        subheading={page.heroSubheading}
      />

      {featured && (
        <FeaturedCaseStudy
          eyebrow={page.featuredEyebrow}
          blurb={page.featuredBlurb}
          study={featured}
        />
      )}

      <CaseStudiesList
        eyebrow={page.listEyebrow}
        heading={page.listHeading}
        studies={studies}
      />

      <FinalCTA />
      <Footer />
    </main>
  );
}
