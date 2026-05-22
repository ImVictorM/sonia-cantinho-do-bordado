import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { landingPageSections } from "./landingPageSections";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header sections={landingPageSections} />
      <main>
        <Hero id={landingPageSections.home.id} />
        <About id={landingPageSections.about.id} />
        <Services id={landingPageSections.services.id} />
        <Gallery id={landingPageSections.gallery.id} />
        <Testimonials id={landingPageSections.testimonials.id} />
        <CallToAction />
        <Contact id={landingPageSections.contact.id} />
      </main>
      <Footer sections={landingPageSections} />
    </div>
  );
}
