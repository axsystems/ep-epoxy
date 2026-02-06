"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  service: string;
  gradient: string;
  pattern: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "3-Car Garage Transformation",
    location: "Goodyear, AZ",
    service: "Garage Floor Coating",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 50%, #2c3e50 100%)",
    pattern: "radial-gradient(ellipse at 30% 40%, rgba(52, 152, 219, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(44, 62, 80, 0.6) 0%, transparent 60%)",
  },
  {
    id: 2,
    title: "Metallic Pearl White",
    location: "Scottsdale, AZ",
    service: "Metallic Epoxy",
    gradient: "linear-gradient(135deg, #bdc3c7 0%, #ecf0f1 30%, #95a5a6 60%, #bdc3c7 100%)",
    pattern: "radial-gradient(ellipse at 20% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(189, 195, 199, 0.4) 0%, transparent 50%)",
  },
  {
    id: 3,
    title: "Ocean Blue Metallic",
    location: "Peoria, AZ",
    service: "Metallic Epoxy",
    gradient: "linear-gradient(135deg, #0c2340 0%, #1a5276 30%, #2e86c1 50%, #1a5276 70%, #0c2340 100%)",
    pattern: "radial-gradient(ellipse at 40% 30%, rgba(46, 134, 193, 0.5) 0%, transparent 50%), radial-gradient(ellipse at 60% 70%, rgba(26, 82, 118, 0.4) 0%, transparent 50%)",
  },
  {
    id: 4,
    title: "Commercial Warehouse",
    location: "Phoenix, AZ",
    service: "Commercial Epoxy",
    gradient: "linear-gradient(135deg, #34495e 0%, #5d6d7e 30%, #85929e 50%, #5d6d7e 70%, #34495e 100%)",
    pattern: "radial-gradient(ellipse at 50% 50%, rgba(133, 146, 158, 0.3) 0%, transparent 50%)",
  },
  {
    id: 5,
    title: "Copper Metallic Blend",
    location: "Paradise Valley, AZ",
    service: "Metallic Epoxy",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #6d4c41 30%, #bf8040 50%, #6d4c41 70%, #1a1a2e 100%)",
    pattern: "radial-gradient(ellipse at 30% 40%, rgba(191, 128, 64, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(109, 76, 65, 0.5) 0%, transparent 50%)",
  },
  {
    id: 6,
    title: "Full Flake Garage System",
    location: "Surprise, AZ",
    service: "Garage Floor Coating",
    gradient: "linear-gradient(135deg, #4a4a4a 0%, #6b6b6b 50%, #4a4a4a 100%)",
    pattern: `
      radial-gradient(circle at 10% 20%, rgba(217,158,43,0.5) 1px, transparent 1px),
      radial-gradient(circle at 30% 50%, rgba(59,130,246,0.4) 1px, transparent 1px),
      radial-gradient(circle at 50% 10%, rgba(255,255,255,0.4) 1px, transparent 1px),
      radial-gradient(circle at 70% 70%, rgba(217,158,43,0.3) 1px, transparent 1px),
      radial-gradient(circle at 90% 40%, rgba(59,130,246,0.3) 1px, transparent 1px),
      radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
      radial-gradient(circle at 60% 30%, rgba(217,158,43,0.4) 1px, transparent 1px),
      radial-gradient(circle at 80% 90%, rgba(59,130,246,0.3) 1px, transparent 1px),
      radial-gradient(circle at 40% 60%, rgba(255,255,255,0.35) 1px, transparent 1px)
    `,
  },
  {
    id: 7,
    title: "Pool Deck Resurface",
    location: "Cave Creek, AZ",
    service: "Patio & Pool Deck",
    gradient: "linear-gradient(135deg, #d4a574 0%, #e8c9a0 30%, #d4a574 60%, #c4956a 100%)",
    pattern: "radial-gradient(ellipse at 40% 40%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 60% 60%, rgba(212, 165, 116, 0.3) 0%, transparent 50%)",
  },
  {
    id: 8,
    title: "Charcoal Metallic Swirl",
    location: "Glendale, AZ",
    service: "Metallic Epoxy",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 25%, #4a4a4a 50%, #333333 75%, #1a1a1a 100%)",
    pattern: "radial-gradient(ellipse at 25% 45%, rgba(255, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 75% 55%, rgba(217, 158, 43, 0.1) 0%, transparent 50%)",
  },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-background overflow-hidden" id="gallery">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12 gap-4">
          <div>
            <span className="uppercase text-accent text-xs sm:text-sm font-bold tracking-widest">Our Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
              Recent <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-xl border border-border hover:border-accent hover:bg-accent/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all touch-manipulation"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-xl border border-border hover:border-accent hover:bg-accent/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all touch-manipulation"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {/* Left spacer for centering on large screens */}
        <div className="hidden lg:block min-w-[calc((100vw-1280px)/2)]" aria-hidden="true" />

        {galleryItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative flex-none w-[280px] sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden snap-start cursor-pointer touch-manipulation"
          >
            {/* Epoxy floor visual */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{ background: item.gradient }}
            />
            <div className="absolute inset-0" style={{ backgroundImage: item.pattern }} />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Overlay with info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Expand icon */}
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Expand className="w-4 h-4 text-white" />
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">{item.service}</span>
              <h3 className="text-white font-display font-bold text-base mt-1">{item.title}</h3>
              <p className="text-white/60 text-xs mt-0.5">{item.location}</p>
            </div>
          </button>
        ))}

        {/* Right spacer */}
        <div className="hidden lg:block min-w-[calc((100vw-1280px)/2)]" aria-hidden="true" />
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden">
            <div className="absolute inset-0" style={{ background: selectedImage.gradient }} />
            <div className="absolute inset-0" style={{ backgroundImage: selectedImage.pattern }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">{selectedImage.service}</span>
              <h3 className="text-white font-display font-bold text-2xl sm:text-3xl mt-2">{selectedImage.title}</h3>
              <p className="text-white/60 text-sm mt-1">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
