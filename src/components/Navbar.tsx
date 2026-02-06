"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessData } from "@/data/businessData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar - hidden on mobile */}
      <div className="hidden md:block bg-dark text-white/80 text-xs py-2">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>Serving 24+ Cities Across Arizona</span>
            <span className="text-accent font-semibold">15-Year Warranty on All Residential Floors</span>
          </div>
          <a href={`tel:${businessData.brand.phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3 h-3" />
            {businessData.brand.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-soft">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-cta flex items-center justify-center shadow-accent-glow group-hover:scale-105 transition-transform">
                <span className="text-white font-display font-bold text-lg">E&P</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-foreground text-base leading-tight block">E&P Epoxy</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest leading-tight block">Solutions</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-lg hover:bg-muted/50"
                  >
                    {link.label}
                    {link.label === "Services" && <ChevronDown className="w-3 h-3 inline ml-1" />}
                  </Link>

                  {/* Services dropdown */}
                  {link.label === "Services" && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-medium border border-border/50 p-2 min-w-[240px]">
                        {businessData.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services#${service.slug}`}
                            className="block px-3 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-muted/50 rounded-lg transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${businessData.brand.phone}`} className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{businessData.brand.phone}</span>
              </a>
              <Link href="/contact">
                <Button variant="cta" size="default">Free Estimate</Button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link href="/contact">
                <Button variant="cta" size="sm">Free Estimate</Button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors touch-manipulation"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 bg-white animate-slide-up">
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.label === "Services" ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground/80 hover:text-accent hover:bg-muted/50 rounded-lg transition-colors touch-manipulation"
                      >
                        Services
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-1">
                          {businessData.services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services#${service.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-foreground/60 hover:text-accent hover:bg-muted/50 rounded-lg transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-accent hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile quick actions */}
              <div className="pt-4 border-t border-border/30 flex gap-2">
                <a href={`tel:${businessData.brand.phone}`} className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <Link href="/contact" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="cta" className="w-full">Free Estimate</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
