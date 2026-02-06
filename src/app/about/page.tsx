import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { businessData } from "@/data/businessData";
import {
  ChevronRight,
  Phone,
  Target,
  TrendingUp,
  Truck,
  Layers,
  ShieldCheck,
  Award,
  Handshake,
  Hammer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the brothers behind E&P Epoxy Solutions. Emmett and Parker Henkel are building Arizona's #1 epoxy flooring company with industrial-grade materials, 15-year warranties, and unmatched craftsmanship.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
        <section className="relative dark-texture py-20 sm:py-28 lg:py-32 overflow-hidden">
          {/* Floating accents */}
          <div
            className="absolute top-10 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 left-10 w-48 h-48 bg-accent/8 rounded-full blur-2xl"
            aria-hidden="true"
          />

          <div className="relative z-10 container-custom text-center">
            <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              About <span className="text-gradient">E&P Epoxy Solutions</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Family-owned and operated by brothers Emmett &amp; Parker Henkel.
              We&apos;re on a mission to become Arizona&apos;s most trusted name
              in epoxy flooring.
            </p>
          </div>
        </section>

        {/* ── Our Story ───────────────────────────────────────────────────────── */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary via-slate-deep to-dark overflow-hidden shadow-medium">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-4 shadow-accent-glow">
                        <span className="text-white font-display font-bold text-3xl">
                          E&P
                        </span>
                      </div>
                      <p className="text-white/40 text-sm">
                        Emmett &amp; Parker on the job site
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating stat badge */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-accent-foreground rounded-2xl px-5 py-3 shadow-accent-glow">
                  <div className="font-display font-bold text-2xl">2026</div>
                  <div className="text-xs font-semibold">Est.</div>
                </div>
              </div>

              {/* Story text */}
              <div>
                <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
                  Two Brothers.{" "}
                  <span className="text-gradient">One Vision.</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    E&P Epoxy Solutions was founded in 2026 by brothers Emmett
                    and Parker Henkel right here in Arizona. What started as a
                    shared passion for craftsmanship and a belief that homeowners
                    and businesses deserve better flooring options has grown into
                    one of the Valley&apos;s most ambitious epoxy flooring
                    companies.
                  </p>
                  <p>
                    We saw an industry full of fly-by-night contractors using
                    cheap materials and cutting corners. We knew we could do
                    better. So we invested in industrial-grade equipment,
                    partnered with top-tier material suppliers, and committed to
                    a standard of work that we&apos;d be proud to put our family
                    name on.
                  </p>
                  <p>
                    Our vision is simple but bold:{" "}
                    <span className="text-foreground font-semibold">
                      become Arizona&apos;s #1 epoxy flooring company.
                    </span>{" "}
                    Not through shortcuts or gimmicks, but through relentless
                    quality, honest pricing, and the kind of customer experience
                    that turns every client into a lifelong advocate.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button variant="cta" size="lg" className="gap-2">
                      Work With Us
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Meet the Owners ─────────────────────────────────────────────────── */}
        <section className="section-padding bg-muted/30 epoxy-pattern">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Meet the <span className="text-gradient">Owners</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                When you hire E&P, you work directly with the owners. No
                middlemen, no sales reps &mdash; just two brothers who care
                about your floor as much as you do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Emmett */}
              <div className="card-elevated p-6 sm:p-8 text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-accent via-amber-dark to-primary mx-auto mb-6 shadow-accent-glow flex items-center justify-center">
                  <Hammer className="w-14 h-14 sm:w-16 sm:h-16 text-white/90" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">
                  Emmett Henkel
                </h3>
                <p className="text-accent font-semibold text-sm mb-4">
                  Co-Founder &amp; Lead Installer
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Emmett is the hands-on force behind every E&P floor. With a
                  meticulous eye for detail and deep expertise in surface
                  preparation and coating systems, he ensures every project meets
                  the highest standard. Emmett leads our installation crews and
                  personally oversees quality control on every job.
                </p>
              </div>

              {/* Parker */}
              <div className="card-elevated p-6 sm:p-8 text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary via-slate-deep to-accent mx-auto mb-6 shadow-accent-glow flex items-center justify-center">
                  <TrendingUp className="w-14 h-14 sm:w-16 sm:h-16 text-white/90" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">
                  Parker Henkel
                </h3>
                <p className="text-accent font-semibold text-sm mb-4">
                  Co-Founder &amp; Operations
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Parker drives the business strategy, customer experience, and
                  growth engine behind E&P. From the moment a customer requests a
                  quote to the final walk-through, Parker makes sure every
                  interaction is seamless, professional, and on time. He&apos;s
                  building the systems to scale E&P into a multi-market brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Mission ─────────────────────────────────────────────────────── */}
        <section className="section-padding dark-texture text-white overflow-hidden relative">
          {/* Glow effects */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative z-10 container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
                Building a{" "}
                <span className="text-gradient">Multi-Million Dollar</span>{" "}
                Epoxy Brand
              </h2>
              <p className="text-white/50 text-base sm:text-lg">
                We&apos;re not here to be just another contractor. We&apos;re
                building a category-defining epoxy flooring company in one of
                America&apos;s fastest-growing markets.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Target,
                  title: "Arizona's Fastest-Growing Market",
                  description:
                    "Arizona leads the nation in new home construction and commercial development. Every new build needs flooring, and we're positioned to capture that demand.",
                },
                {
                  icon: Truck,
                  title: "Professional Fleet",
                  description:
                    "Branded vehicles, industrial diamond grinders, and professional-grade application equipment. We show up looking and operating like the pros we are.",
                },
                {
                  icon: Layers,
                  title: "Industrial-Grade Materials",
                  description:
                    "100% solids epoxy, polyaspartic top coats, commercial-grade primers. We use the same systems trusted in aerospace hangars and hospital floors.",
                },
                {
                  icon: ShieldCheck,
                  title: "Best Warranties in the Business",
                  description:
                    "Our 15-year residential warranty is the strongest in Arizona. We stand behind our work because we use materials and methods that actually last.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-dark p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-4 shadow-accent-glow">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Values ──────────────────────────────────────────────────────── */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
                What Drives Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Our <span className="text-gradient">Core Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Uncompromising Quality",
                  description:
                    "We never cut corners. Every floor gets diamond-ground prep, premium materials, and a final inspection that we'd stake our reputation on.",
                },
                {
                  icon: Handshake,
                  title: "Honest Pricing",
                  description:
                    "No bait-and-switch quotes. No hidden fees. No upselling. You get a fair, transparent price and we deliver exactly what we promise.",
                },
                {
                  icon: Target,
                  title: "Customer Obsession",
                  description:
                    "We don't just want satisfied customers. We want raving fans who tell their neighbors, their friends, and anyone who'll listen about their E&P floor.",
                },
              ].map((value) => (
                <div key={value.title} className="card-elevated p-6 sm:p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-4 shadow-accent-glow">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Section ───────────────────────────────────────────────────── */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
                By the Numbers
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
                E&P at a <span className="text-gradient">Glance</span>
              </h2>
            </div>

            <div className="bg-dark rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                {
                  label: "Projects Completed",
                  value: businessData.stats.projectsCompleted,
                },
                {
                  label: "Years Experience",
                  value: businessData.stats.yearsExperience,
                },
                {
                  label: "Year Warranty",
                  value: businessData.stats.warrantyYears,
                },
                {
                  label: "Satisfaction Rate",
                  value: businessData.stats.satisfactionRate,
                },
                {
                  label: "Cities Served",
                  value: businessData.stats.citiesServed,
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ─────────────────────────────────────────────────────── */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 container-custom text-center">
            <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">
              Let&apos;s Talk
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4 mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Work With{" "}
              <span className="text-gradient-light">Arizona&apos;s Best?</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Get a free, no-obligation estimate from Emmett &amp; Parker. We&apos;ll
              visit your property, assess your concrete, and give you an honest
              price &mdash; same day.
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
