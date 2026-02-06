"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { businessData } from "@/data/businessData";

const serviceLinks = businessData.services.map((s) => ({
  label: s.name,
  href: `/services#${s.slug}`,
}));

const cityLinks = businessData.cities.slice(0, 12).map((c) => ({
  label: c.name,
  href: `/areas/${c.slug}`,
}));

export default function Footer() {
  return (
    <footer className="dark-texture text-white pt-16 sm:pt-20 pb-8">
      <div className="container-custom">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-display font-bold text-white text-xl">
                E&P <span className="text-accent">Epoxy</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Arizona&apos;s premier epoxy flooring company, owned and operated by brothers Emmett &amp; Parker Henkel.
            </p>
            <div className="space-y-2">
              <a href={`tel:${businessData.brand.phone}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                {businessData.brand.phone}
              </a>
              <a href={`mailto:${businessData.brand.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                {businessData.brand.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-accent" />
                Phoenix Metro, Arizona
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="w-4 h-4 text-accent" />
                Mon-Sat: 7am - 6pm
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-sm mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-sm mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-accent text-sm font-semibold hover:underline">
                  View All Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-sm mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />Free Estimate
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />Services
                </Link>
              </li>
              <li>
                <Link href="/areas" className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />Service Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} E&P Epoxy Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Licensed &amp; Insured</span>
            <span>|</span>
            <span>ROC #PENDING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
