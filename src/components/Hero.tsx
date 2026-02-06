"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Star, MapPin, ChevronRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Metallic pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(217, 158, 43, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(217, 158, 43, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
        }} />
      </div>

      {/* Floating accents */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} aria-hidden="true" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container-custom py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-white/90 text-sm font-medium">Family-Owned & Operated by Brothers</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-in-up delay-100">
            Arizona&apos;s Premier{" "}
            <span className="text-gradient">Epoxy Flooring</span>{" "}
            Specialists
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Transform your garage, business, or patio with stunning, industrial-grade
            epoxy coatings that last 15+ years. Serving{" "}
            <span className="text-accent font-semibold">24+ cities</span> across the Phoenix Metro.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in-up delay-300">
            <Link href="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                Get Your Free Estimate
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:623-555-0199">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Quick features */}
          <div className="flex flex-wrap gap-4 md:gap-6 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">15-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">1-Day Install</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Serving All Phoenix Metro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
