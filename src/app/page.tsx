import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "E&P Epoxy Solutions",
    url: "https://epepoxysolutions.com",
    telephone: "623-555-0199",
    email: "info@epepoxysolutions.com",
    description: "Arizona's premier epoxy flooring specialists",
    areaServed: {
      "@type": "Place",
      name: "Phoenix Metropolitan Area, Arizona",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "AZ",
      addressCountry: "US",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "E&P Epoxy Solutions",
    url: "https://epepoxysolutions.com",
    description: "Arizona's premier epoxy flooring specialists",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
