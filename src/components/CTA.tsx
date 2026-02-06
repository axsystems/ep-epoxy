"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight, Star } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative z-10 container-custom text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-white/90 text-sm font-medium">Free Estimates — No Obligation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Transform{" "}
          <span className="text-gradient-light">Your Floor?</span>
        </h2>

        <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Get a free, no-pressure quote from Arizona&apos;s most trusted epoxy flooring team. Same-day estimates available.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact">
            <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
              Get Your Free Estimate
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:623-555-0199">
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto gap-2">
              <Phone className="w-5 h-5" />
              623-555-0199
            </Button>
          </a>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/services" className="text-white/50 hover:text-accent text-sm transition-colors">
            View All Services →
          </Link>
          <Link href="/areas" className="text-white/50 hover:text-accent text-sm transition-colors">
            Service Areas →
          </Link>
          <Link href="/about" className="text-white/50 hover:text-accent text-sm transition-colors">
            About E&P →
          </Link>
        </div>
      </div>
    </section>
  );
}
