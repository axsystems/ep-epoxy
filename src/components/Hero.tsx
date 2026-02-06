"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Clock, MapPin, ChevronRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-[88vh] flex items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://plus.unsplash.com/premium_photo-1675876511390-349299fff2ab?w=1920&h=1080&fit=crop&q=80"
        alt="Professional epoxy garage floor"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Subtle accent glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-white/90 text-sm font-medium">Brothers Emmett & Parker Henkel</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] mb-6 animate-fade-in-up delay-100">
            Epoxy Floors That{" "}
            <span className="text-accent">Last a Lifetime</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-lg leading-relaxed animate-fade-in-up delay-200">
            Industrial-grade coatings for garages, businesses, and patios.
            Serving <span className="text-white font-medium">24+ cities</span> across the Phoenix metro.
          </p>

          {/* CTA Buttons — Glass style */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in-up delay-300">
            <Link href="/contact">
              <Button variant="glass-accent" size="xl" className="w-full sm:w-auto gap-2">
                Get a Free Estimate
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

          {/* Quick features — subtle, not boxy */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm">15-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm">1-Day Install</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">All Phoenix Metro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
