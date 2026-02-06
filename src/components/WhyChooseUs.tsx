"use client";

import { ShieldCheck, Clock, BadgeCheck, Users, Layers, FileText } from "lucide-react";
import { businessData } from "@/data/businessData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Users,
  Layers,
  FileText,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background epoxy-pattern" id="why-us">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">Why E&P</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Why Choose <span className="text-gradient">E&P Epoxy</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We&apos;re not a franchise or a side hustle. We&apos;re two brothers who built this business from the ground up — and we treat every floor like it&apos;s our own.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {businessData.valueProps.map((prop, i) => {
            const Icon = iconMap[prop.icon] || ShieldCheck;
            return (
              <div
                key={prop.title}
                className="card-elevated p-5 sm:p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-4 shadow-accent-glow">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-12 md:mt-16 bg-dark rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { label: "Projects Completed", value: businessData.stats.projectsCompleted },
            { label: "Years Experience", value: businessData.stats.yearsExperience },
            { label: "Year Warranty", value: businessData.stats.warrantyYears },
            { label: "Satisfaction Rate", value: businessData.stats.satisfactionRate },
            { label: "Cities Served", value: businessData.stats.citiesServed },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center animate-count" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
