"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  service: string;
  src: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "3-Car Garage Transformation",
    location: "Goodyear, AZ",
    service: "Garage Floor Coating",
    src: "https://plus.unsplash.com/premium_photo-1661879916150-f80f71c41df8?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Metallic Pearl Finish",
    location: "Scottsdale, AZ",
    service: "Metallic Epoxy",
    src: "https://images.unsplash.com/photo-1589109807644-924edf14ee09?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Polished Concrete Showroom",
    location: "Phoenix, AZ",
    service: "Concrete Polishing",
    src: "https://plus.unsplash.com/premium_photo-1724636685530-e72c4ecf8f14?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Commercial Warehouse Floor",
    location: "Peoria, AZ",
    service: "Commercial Epoxy",
    src: "https://images.unsplash.com/photo-1595424073665-bf04f38d9c0b?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Modern Garage Coating",
    location: "Paradise Valley, AZ",
    service: "Garage Floor Coating",
    src: "https://plus.unsplash.com/premium_photo-1675876511390-349299fff2ab?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Industrial Grade Flooring",
    location: "Surprise, AZ",
    service: "Industrial Coatings",
    src: "https://images.unsplash.com/photo-1585557488780-78b585ba3117?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Decorative Metallic Swirl",
    location: "Cave Creek, AZ",
    service: "Decorative Epoxy",
    src: "https://images.unsplash.com/photo-1770086962001-3da4f60e7db5?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Clean Modern Garage",
    location: "Glendale, AZ",
    service: "Garage Floor Coating",
    src: "https://plus.unsplash.com/premium_photo-1764702364309-af6aa29a960f?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Sleek Commercial Space",
    location: "Chandler, AZ",
    service: "Commercial Epoxy",
    src: "https://images.unsplash.com/photo-1518632537434-6a721453712e?w=800&h=600&fit=crop",
  },
  {
    id: 10,
    title: "Luxury Residential Floor",
    location: "Mesa, AZ",
    service: "Metallic Epoxy",
    src: "https://plus.unsplash.com/premium_photo-1682125919133-484f50cfa51d?w=800&h=600&fit=crop",
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
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="320px"
            />

            {/* Overlay with info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

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
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden">
            <Image
              src={selectedImage.src.replace("w=800&h=600", "w=1600&h=1000")}
              alt={selectedImage.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
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
