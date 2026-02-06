import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { businessData } from "@/data/businessData";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "E&P Epoxy Solutions serves 24+ cities across the Phoenix Metro area. Find premium epoxy flooring services in your city — garage coatings, commercial floors, decorative epoxy & more. Free estimates.",
  openGraph: {
    title: "Service Areas | E&P Epoxy Solutions",
    description:
      "Serving 24+ cities across the Phoenix Metro with premium epoxy flooring. Find your city and get a free estimate today.",
  },
};

export default function AreasPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="dark-texture py-20 sm:py-28 lg:py-32">
          <div className="container-custom text-center">
            <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
              Where We Work
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
              Service <span className="text-gradient">Areas</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Serving 24+ cities across the Phoenix Metro with premium epoxy
              flooring installation, backed by our 15-year warranty and 1-day
              installation.
            </p>
          </div>
        </section>

        {/* ── City Grid ─────────────────────────────────────────────── */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {businessData.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/${city.slug}`}
                  className="group card-elevated p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg group-hover:text-accent transition-colors">
                        {city.name}
                      </h2>
                      <span className="text-xs text-muted-foreground">
                        Arizona
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {city.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-medium text-accent">
                    View Services
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="section-padding bg-background epoxy-pattern">
          <div className="container-custom text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Don&apos;t See Your City?{" "}
              <span className="text-gradient">We May Still Serve You.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8">
              We cover the entire Phoenix Metro area. Reach out for a free
              consultation and we&apos;ll let you know if we can serve your
              location.
            </p>
            <Link href="/contact">
              <Button variant="cta" size="xl" className="gap-2">
                Get a Free Estimate
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
