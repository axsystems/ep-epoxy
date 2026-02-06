"use client";

import Link from "next/link";
import { Warehouse, Building2, Factory, Sparkles, Gem, Sun, ChevronRight } from "lucide-react";
import { businessData } from "@/data/businessData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Warehouse,
  Building2,
  Factory,
  Sparkles,
  Gem,
  Sun,
};

export default function Services() {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">What We Do</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            From residential garages to industrial warehouses, we deliver premium epoxy flooring solutions built to last.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {businessData.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Warehouse;
            return (
              <Link
                key={service.id}
                href={`/services#${service.slug}`}
                className="group card-elevated p-5 sm:p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-accent-glow">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Price badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {service.priceRange}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors">
                    Learn More <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
