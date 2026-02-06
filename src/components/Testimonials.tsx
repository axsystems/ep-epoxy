"use client";

import { Star, Quote } from "lucide-react";
import { businessData } from "@/data/businessData";

export default function Testimonials() {
  return (
    <section className="section-padding bg-background" id="testimonials">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Don&apos;t just take our word for it — hear from real Arizona homeowners and business owners.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {businessData.testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="card-elevated p-5 sm:p-6 relative animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" aria-hidden="true" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <div>
                  <div className="font-display font-bold text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.location}</div>
                </div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-5 py-2.5">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-foreground/70">
              5.0 Average Rating — Trusted by 500+ Arizona Homeowners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
