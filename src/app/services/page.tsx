import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessData } from "@/data/businessData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Warehouse,
  Building2,
  Factory,
  Sparkles,
  Gem,
  Sun,
  Check,
  ChevronRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | E&P Epoxy Solutions",
  description:
    "Explore our full range of epoxy flooring services in Arizona — garage floor coatings, commercial epoxy, industrial coatings, decorative metallic epoxy, concrete polishing, and patio & pool deck coatings. Free estimates available.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Warehouse,
  Building2,
  Factory,
  Sparkles,
  Gem,
  Sun,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero Banner ───────────────────────────────────────────────── */}
        <section className="dark-texture section-padding text-center">
          <div className="container-custom">
            <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mt-3 mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              From residential garages to industrial warehouses, E&P Epoxy
              Solutions delivers premium flooring built to last. Explore each
              service below or{" "}
              <Link href="/contact" className="text-accent hover:underline">
                request your free estimate
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── Service Detail Sections ───────────────────────────────────── */}
        {businessData.services.map((service, index) => {
          const Icon = iconMap[service.icon] || Warehouse;
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.slug}
              className={`section-padding ${isEven ? "dark-texture" : "bg-background"}`}
            >
              <div className="container-custom">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* ── Left / Info Side ────────────────────────────────── */}
                  <div className="flex-1 w-full">
                    {/* Icon + heading */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-cta flex items-center justify-center shadow-accent-glow shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2
                        className={`text-3xl sm:text-4xl font-display font-bold ${
                          isEven ? "text-white" : "text-foreground"
                        }`}
                      >
                        {service.name}
                      </h2>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-base sm:text-lg leading-relaxed mb-8 ${
                        isEven ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Price badge + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <span className="text-sm font-bold text-accent bg-accent/10 px-4 py-2 rounded-full">
                        {service.priceRange}
                      </span>
                      <Link href="/contact">
                        <Button variant="cta" size="lg" className="gap-2">
                          Get a Free Estimate
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* ── Right / Features Card ──────────────────────────── */}
                  <div className="flex-1 w-full">
                    <div
                      className={`${isEven ? "card-dark" : "card-elevated"} p-6 sm:p-8`}
                    >
                      <h3
                        className={`font-display font-bold text-lg mb-5 ${
                          isEven ? "text-white" : "text-foreground"
                        }`}
                      >
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-accent" />
                            </div>
                            <span
                              className={`text-sm leading-relaxed ${
                                isEven
                                  ? "text-white/70"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-hero" />

          {/* Accent glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 container-custom text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Not Sure Which Service{" "}
              <span className="text-gradient-light">You Need?</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              No problem. Tell us about your project and we&apos;ll recommend
              the best solution for your space and budget. Every consultation is
              free.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto gap-2"
                >
                  Get Your Free Estimate
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
        </section>
      </main>
      <Footer />
    </>
  );
}
