import Footer from "./Footer";

/** Footer for /about-us — same layout, its own tagline. */
export default function AboutFooter() {
  return (
    <Footer
      tagline={
        <>
          Sales growth doesn&rsquo;t stall because of effort.{" "}
          <span className="text-white">
            It stalls because the system behind it hasn&rsquo;t been built.
          </span>
        </>
      }
    />
  );
}
