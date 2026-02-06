import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ChevronRight,
  Check,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { businessData } from "@/data/businessData";

// ── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return businessData.cities.map((city) => ({
    city: city.slug,
  }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = businessData.cities.find((c) => c.slug === slug);

  if (!city) {
    return { title: "City Not Found" };
  }

  return {
    title: `Epoxy Flooring in ${city.name}, AZ`,
    description: `Premium epoxy flooring in ${city.name}, Arizona. Garage floor coatings, commercial epoxy, decorative metallic floors & more. 15-year warranty. 1-day install. Free estimates from E&P Epoxy Solutions.`,
    openGraph: {
      title: `Epoxy Flooring in ${city.name}, AZ | E&P Epoxy Solutions`,
      description: `Transform your floors in ${city.name} with Arizona's most trusted epoxy flooring company. Free estimates available.`,
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = businessData.cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  // Get nearby cities (exclude current, pick up to 5)
  const currentIndex = businessData.cities.findIndex(
    (c) => c.slug === city.slug
  );
  const nearbyCities = businessData.cities
    .filter((c) => c.slug !== city.slug)
    .slice(
      Math.max(0, currentIndex - 2),
      Math.max(0, currentIndex - 2) + 5
    );

  // Ensure we always get 5 cities even for edge cases
  const displayCities =
    nearbyCities.length >= 5
      ? nearbyCities
      : businessData.cities
          .filter((c) => c.slug !== city.slug)
          .slice(0, 5);

  // Schema.org structured data for local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `E&P Epoxy Solutions - ${city.name}`,
    description: city.description,
    telephone: businessData.brand.phone,
    email: businessData.brand.email,
    url: `${businessData.brand.website}/areas/${city.slug}`,
    areaServed: {
      "@type": "City",
      name: city.name,
      addressRegion: "AZ",
      addressCountry: "US",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Navbar />
      <main>
        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="dark-texture py-20 sm:py-28 lg:py-32">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                  {city.name}, Arizona
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Epoxy Flooring in{" "}
                <span className="text-gradient">{city.name}, AZ</span>
              </h1>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                {city.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button
                    variant="hero"
                    size="xl"
                    className="w-full sm:w-auto gap-2"
                  >
                    Get a Free Estimate
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href={`tel:${businessData.brand.phone}`}>
                  <Button
                    variant="hero-outline"
                    size="xl"
                    className="w-full sm:w-auto gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    {businessData.brand.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ───────────────────────────────────────── */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
                Our Services in{" "}
                <span className="text-gradient">{city.name}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Full-service epoxy flooring for homes and businesses in{" "}
                {city.name} and surrounding areas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {businessData.services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.slug}`}
                  className="group card-elevated p-5 sm:p-6"
                >
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {service.priceRange}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors">
                      Learn More
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Value Props Row ─────────────────────────────────────── */}
        <section className="bg-background epoxy-pattern">
          <div className="container-custom py-12 sm:py-16">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="card-elevated p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  15-Year Warranty
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every residential floor we install in {city.name} is backed by
                  our industry-leading 15-year warranty.
                </p>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  1-Day Installation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Most garage floors in {city.name} are completed in a single
                  day. Park on it within 24 hours.
                </p>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  Free Estimates
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get a no-obligation on-site quote for your {city.name}{" "}
                  property. Honest pricing, no pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose E&P ──────────────────────────────────────── */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Why {city.name} Homeowners Choose{" "}
                <span className="text-gradient">E&P Epoxy</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Family-owned and operated by brothers Emmett & Parker",
                  "Industrial-grade 100% solids epoxy — not the thin stuff from big-box stores",
                  "Diamond grinding surface prep for a bond that actually lasts",
                  "Hundreds of color and flake combinations to match your style",
                  `Serving ${city.name} and the entire Phoenix Metro area`,
                  "Licensed, insured, and backed by a 15-year warranty",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Nearby Areas ────────────────────────────────────────── */}
        <section className="section-padding dark-texture">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
                Nearby Service Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
                Also Serving These{" "}
                <span className="text-gradient">Nearby Cities</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {displayCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}`}
                  className="group card-dark p-5 text-center"
                >
                  <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                  <h3 className="font-display font-bold text-white group-hover:text-accent transition-colors">
                    {nearby.name}
                  </h3>
                  <span className="text-white/40 text-xs">Arizona</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/areas"
                className="text-accent text-sm font-semibold hover:underline"
              >
                View All {businessData.cities.length} Service Areas &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <CTA />

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
