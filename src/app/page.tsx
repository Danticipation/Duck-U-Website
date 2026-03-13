import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Culture from "@/components/Culture";
import Scoring from "@/components/Scoring";
import Privacy from "@/components/Privacy";
import MerchForum from "@/components/MerchForum";
import Faq from "@/components/Faq";

export default function HomePage() {
  return (
    <>
      <a id="top" className="sr-only">
        Duck U
      </a>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Culture />
        <Scoring />
        <Privacy />
        <MerchForum />
        <Faq />
      </main>
    </>
  );
}

