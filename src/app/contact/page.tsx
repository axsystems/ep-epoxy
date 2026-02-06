"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessData } from "@/data/businessData";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronRight,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      {/* ── Hero Banner ────────────────────────────────────────────────────────── */}
      <section className="dark-texture text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            Get Your{" "}
            <span className="text-gradient">Free Estimate</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a no-obligation
            quote. Most estimates are returned the same day.
          </p>
        </div>
      </section>

      {/* ── Contact Form + Info ────────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left column - Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                Request a Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              {submitted ? (
                <div className="card-elevated p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your request has been received. We&apos;ll review your
                    project details and get back to you with a quote — typically
                    within the same business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Phone <span className="text-accent">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(623) 555-0199"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service + Sq Ft row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {businessData.services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="sqft"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Square Footage Estimate
                      </label>
                      <input
                        id="sqft"
                        name="sqft"
                        type="text"
                        placeholder="e.g. 500 sq ft"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project — current floor condition, color preferences, timeline, etc."
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full sm:w-auto gap-2"
                  >
                    Send Request
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Right column - Contact info cards */}
            <div className="lg:col-span-2 space-y-4">
              {/* Phone */}
              <a
                href={`tel:${businessData.brand.phone}`}
                className="card-elevated p-5 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-0.5">
                    Phone
                  </h3>
                  <p className="text-accent font-semibold">
                    {businessData.brand.phone}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Call or text anytime
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${businessData.brand.email}`}
                className="card-elevated p-5 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-0.5">
                    Email
                  </h3>
                  <p className="text-accent font-semibold text-sm">
                    {businessData.brand.email}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    We respond within a few hours
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="card-elevated p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-0.5">
                    Location
                  </h3>
                  <p className="text-foreground font-semibold text-sm">
                    Phoenix Metro, Arizona
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Serving 24+ cities across the Valley
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="card-elevated p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-0.5">
                    Hours
                  </h3>
                  <p className="text-foreground font-semibold text-sm">
                    Mon &ndash; Sat: 7am &ndash; 6pm
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Sunday by appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Get a Quote ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-10">
            Why Get a Quote From{" "}
            <span className="text-gradient">E&amp;P?</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free Estimates */}
            <div className="card-elevated p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold mb-1">Free Estimates</h3>
              <p className="text-muted-foreground text-sm">
                Every quote includes an on-site visit and detailed proposal at
                no cost to you.
              </p>
            </div>

            {/* Same-Day Quotes */}
            <div className="card-elevated p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold mb-1">Same-Day Quotes</h3>
              <p className="text-muted-foreground text-sm">
                We know your time matters. Most quotes are delivered the same
                business day.
              </p>
            </div>

            {/* No Pressure */}
            <div className="card-elevated p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold mb-1">No Pressure</h3>
              <p className="text-muted-foreground text-sm">
                Take your time deciding. No pushy sales tactics, no hidden fees,
                no obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
