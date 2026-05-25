import { Header } from "@/landing/layout/Header";
import { Footer } from "@/landing/layout/Footer";

import { landingNavigation, landingSections } from "./landingNavigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { Testimonials } from "./sections/Testimonials";
import { CallToAction } from "./sections/CallToAction";
import Contact from "./sections/Contact/Contact";

export default function Landing() {
  return (
    <div className="min-h-screen bg-bg-primary overflow-x-hidden">
      <Header homeId={landingNavigation.home.id} sections={landingSections} />
      <main>
        <Hero
          id={landingNavigation.home.id}
          galleryId={landingNavigation.gallery.id}
        />
        <About id={landingNavigation.about.id} />
        <Services id={landingNavigation.services.id} />
        <Gallery id={landingNavigation.gallery.id} />
        <CallToAction />
        <Testimonials id={landingNavigation.testimonials.id} />
        <Contact id={landingNavigation.contact.id} />
      </main>
      <Footer sections={landingSections} />
    </div>
  );
}
