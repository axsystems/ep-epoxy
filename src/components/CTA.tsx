"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1682597000932-d7041f42f669?w=1920&h=800&fit=crop&q=80"
        alt="Polished epoxy floor"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />

      <div className="relative z-10 container-custom text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Transform{" "}
          <span className="text-accent">Your Floor?</span>
        </h2>

        <p className="text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Get a free, no-pressure quote from Arizona&apos;s most trusted epoxy team. Same-day estimates available.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact">
            <Button variant="glass-accent" size="xl" className="w-full sm:w-auto gap-2">
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
      </div>
    </section>
  );
}
