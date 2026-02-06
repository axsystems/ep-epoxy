"use client";

import { ClipboardList, Wrench, PaintBucket, Palette, CheckCircle2 } from "lucide-react";
import { businessData } from "@/data/businessData";

const stepIcons = [ClipboardList, Wrench, PaintBucket, Palette, CheckCircle2];

export default function Process() {
  return (
    <section className="section-padding dark-texture text-white" id="process">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient-light">Process</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            From consultation to completion, we handle everything with precision and care.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-4 lg:gap-6">
          {businessData.process.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={step.step}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Connector line - desktop only */}
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/40 to-accent/10" aria-hidden="true" />
                )}

                <div className="card-dark p-5 sm:p-6 h-full">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center shadow-accent-glow">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
