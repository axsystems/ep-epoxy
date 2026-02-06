// E&P Epoxy Solutions - Business Data

// ── Types ──────────────────────────────────────────────────────────────────────

interface Brand {
  name: string;
  tagline: string;
  foundingYear: number;
  owners: string[];
  phone: string;
  email: string;
  website: string;
}

interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  priceRange: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface Stats {
  projectsCompleted: string;
  yearsExperience: string;
  warrantyYears: string;
  satisfactionRate: string;
  citiesServed: string;
}

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface City {
  name: string;
  slug: string;
  description: string;
}

interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

interface BusinessData {
  brand: Brand;
  services: Service[];
  process: ProcessStep[];
  stats: Stats;
  testimonials: Testimonial[];
  faqs: FAQ[];
  cities: City[];
  valueProps: ValueProp[];
}

// ── Data ───────────────────────────────────────────────────────────────────────

export const businessData: BusinessData = {
  // ── Brand ──────────────────────────────────────────────────────────────────
  brand: {
    name: "E&P Epoxy Solutions",
    tagline: "Arizona's Premier Epoxy Flooring Specialists",
    foundingYear: 2026,
    owners: ["Emmett Henkel", "Parker Henkel"],
    phone: "623-555-0199",
    email: "info@epepoxysolutions.com",
    website: "https://epepoxysolutions.com",
  },

  // ── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      id: "garage-floor-coatings",
      name: "Garage Floor Coatings",
      slug: "garage-floor-coatings",
      shortDescription:
        "Transform your garage with a durable, showroom-quality epoxy floor installed in just one day.",
      description:
        "Our garage floor coatings are the bread and butter of E&P Epoxy Solutions. We transform dull, cracked concrete into stunning, durable floors that stand up to hot tires, chemical spills, and daily wear. Our 1-day installation process means you can park on your new floor within 24 hours. Choose from hundreds of color and flake combinations to match your style.",
      icon: "Warehouse",
      features: [
        "1-day installation — park on it the next day",
        "Hot tire pickup resistant",
        "Chemical and stain resistant",
        "Hundreds of color and flake options",
        "Diamond-ground surface preparation",
        "Industrial-grade 100% solids epoxy",
        "Clear UV-stable polyaspartic top coat",
        "15-year residential warranty",
      ],
      priceRange: "$1,500 - $3,500",
    },
    {
      id: "commercial-epoxy-flooring",
      name: "Commercial Epoxy Flooring",
      slug: "commercial-epoxy-flooring",
      shortDescription:
        "High-performance epoxy flooring for warehouses, retail spaces, restaurants, and offices.",
      description:
        "Give your business the professional edge it deserves with commercial-grade epoxy flooring. Whether you run a warehouse, retail store, restaurant, or office, our commercial coatings deliver exceptional durability, easy maintenance, and a polished look that impresses clients and customers. We work around your schedule to minimize downtime.",
      icon: "Building2",
      features: [
        "High-traffic durability rated for forklifts and heavy equipment",
        "Slip-resistant finishes available",
        "Custom logo and safety line integration",
        "USDA-approved options for food service",
        "Fast-cure formulas to minimize business downtime",
        "Seamless and easy to sanitize",
        "Chemical and abrasion resistant",
        "After-hours and weekend installation available",
      ],
      priceRange: "$3 - $8 per sq ft",
    },
    {
      id: "industrial-floor-coatings",
      name: "Industrial Floor Coatings",
      slug: "industrial-floor-coatings",
      shortDescription:
        "Heavy-duty floor coatings engineered for factories, manufacturing plants, and industrial facilities.",
      description:
        "Industrial environments demand floors that can take a beating. Our industrial floor coatings are engineered to withstand extreme conditions — heavy machinery, chemical exposure, constant forklift traffic, and thermal shock. We use multi-layer systems with self-leveling epoxies and urethane top coats to create floors that last for decades under the toughest conditions.",
      icon: "Factory",
      features: [
        "Heavy-duty multi-layer coating systems",
        "Extreme chemical and solvent resistance",
        "Thermal shock resistant",
        "Anti-static and ESD flooring options",
        "Self-leveling for uneven concrete",
        "Forklift and heavy machinery rated",
        "OSHA-compliant safety striping",
        "Moisture mitigation systems available",
      ],
      priceRange: "$5 - $12 per sq ft",
    },
    {
      id: "decorative-metallic-epoxy",
      name: "Decorative & Metallic Epoxy",
      slug: "decorative-metallic-epoxy",
      shortDescription:
        "Stunning metallic epoxy floors with marble-like swirls, 3D depth effects, and custom color blends.",
      description:
        "Make a statement with our decorative and metallic epoxy floors. Using specialized metallic pigments, we create breathtaking floors with marble-like swirls, three-dimensional depth, and a luminous finish that shifts in the light. Every floor is a one-of-a-kind work of art. Perfect for showrooms, luxury garages, basements, man caves, and anywhere you want a jaw-dropping floor.",
      icon: "Sparkles",
      features: [
        "One-of-a-kind custom designs",
        "Marble-like swirl patterns with 3D depth",
        "Luminous metallic pigments that shift in the light",
        "Wide range of color blends and effects",
        "High-gloss mirror-like finish",
        "Just as durable as standard epoxy",
        "Perfect for showrooms and luxury spaces",
        "UV-stable clear coat prevents yellowing",
      ],
      priceRange: "$4,000 - $10,000",
    },
    {
      id: "concrete-polishing",
      name: "Concrete Polishing",
      slug: "concrete-polishing",
      shortDescription:
        "Modern, minimalist diamond-polished concrete floors with a sleek, low-maintenance finish.",
      description:
        "Achieve a modern, minimalist aesthetic with our diamond-polished concrete floors. Using a multi-step grinding process with progressively finer diamond tooling, we transform ordinary concrete into a sleek, reflective surface. Polished concrete is incredibly durable, low-maintenance, and perfect for contemporary homes, retail spaces, and offices.",
      icon: "Gem",
      features: [
        "Multi-step diamond grinding and polishing process",
        "Matte, satin, or high-gloss finish options",
        "Densifier-hardened for maximum durability",
        "Extremely low maintenance — just dust mop and damp mop",
        "No coatings to peel or delaminate",
        "Eco-friendly — uses existing concrete slab",
        "Stain-resistant with proper sealing",
        "Ideal for radiant heat flooring systems",
      ],
      priceRange: "$3 - $7 per sq ft",
    },
    {
      id: "patio-pool-deck-coatings",
      name: "Patio & Pool Deck Coatings",
      slug: "patio-pool-deck-coatings",
      shortDescription:
        "Non-slip, UV-resistant outdoor coatings designed for Arizona patios, pool decks, and outdoor living spaces.",
      description:
        "Arizona outdoor living demands floors that can handle intense sun, monsoon rains, and bare feet. Our patio and pool deck coatings are specifically formulated for the harsh desert climate. They stay cool underfoot, resist UV fading, and feature non-slip textures to keep your family safe around the pool. Transform your backyard into a resort-worthy retreat.",
      icon: "Sun",
      features: [
        "Cool-touch technology — stays comfortable in Arizona heat",
        "Non-slip textured finish for wet areas",
        "UV-resistant — won't fade or yellow in direct sun",
        "Waterproof and monsoon-ready",
        "Crack bridging membrane for expansion joints",
        "Wide range of colors and textures",
        "Resistant to pool chemicals and salt",
        "15-year outdoor warranty",
      ],
      priceRange: "$4 - $9 per sq ft",
    },
  ],

  // ── Process ────────────────────────────────────────────────────────────────
  process: [
    {
      step: 1,
      title: "Free Consultation",
      description:
        "We visit your property, measure the space, assess the concrete condition, and discuss your design preferences. You'll receive a detailed, same-day quote with no hidden fees or pressure to commit.",
    },
    {
      step: 2,
      title: "Surface Preparation",
      description:
        "Proper prep is the foundation of a lasting floor. We diamond-grind the entire surface to create the ideal profile for adhesion, repair all cracks and imperfections, and perform a moisture test to ensure optimal coating performance.",
    },
    {
      step: 3,
      title: "Base Coat Application",
      description:
        "We apply an industrial-grade epoxy primer that chemically bonds to the prepared concrete. This base coat penetrates deep into the surface, creating an unbreakable foundation for the decorative and protective layers that follow.",
    },
    {
      step: 4,
      title: "Top Coat & Design",
      description:
        "This is where your floor comes to life. We broadcast color flakes, blend metallic pigments, or apply your chosen finish, then seal everything with a crystal-clear polyaspartic or polyurethane top coat for maximum durability and shine.",
    },
    {
      step: 5,
      title: "Final Inspection",
      description:
        "We do a thorough walk-through with you to make sure every detail is perfect. You'll receive care instructions, a maintenance guide, and your warranty documentation. We don't leave until you're 100% satisfied.",
    },
  ],

  // ── Stats ──────────────────────────────────────────────────────────────────
  stats: {
    projectsCompleted: "500+",
    yearsExperience: "10+",
    warrantyYears: "15",
    satisfactionRate: "99%",
    citiesServed: "24+",
  },

  // ── Testimonials ───────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Mike Trevino",
      location: "Goodyear, AZ",
      rating: 5,
      text: "I got the full-flake garage floor coating and honestly cannot believe the difference. My garage went from an embarrassing oil-stained mess to looking like a showroom. Emmett and his crew showed up at 7am, prepped and coated the whole 3-car garage, and I was parking on it the next evening. Six months in and it still looks brand new. Worth every penny.",
      service: "Garage Floor Coatings",
    },
    {
      name: "Rachel Simmons",
      location: "Peoria, AZ",
      rating: 5,
      text: "We hired E&P for a metallic epoxy floor in our basement entertainment area and the result is absolutely stunning. It has this deep, ocean-blue swirl pattern that literally everyone comments on. Parker walked us through the color options and helped us pick the perfect blend. The craftsmanship is top-notch — you can tell these guys actually care about the work.",
      service: "Decorative & Metallic Epoxy",
    },
    {
      name: "David Ostrowski",
      location: "Surprise, AZ",
      rating: 5,
      text: "We own a small auto parts warehouse and needed flooring that could handle pallets, forklifts, and chemical spills without falling apart. E&P put down a commercial epoxy system with safety lines and it has been bulletproof. They did the whole job over a weekend so we didn't lose any business days. Professional, on time, and the price was very fair for the quality.",
      service: "Commercial Epoxy Flooring",
    },
    {
      name: "Jennifer Cahill",
      location: "Scottsdale, AZ",
      rating: 5,
      text: "Our pool deck was cracked, faded, and scorching hot in the summer. E&P applied their cool-touch pool deck coating and it made a huge difference — the kids can actually walk on it barefoot now even in July. It has a nice non-slip texture and the desert sand color we picked looks beautiful with our backyard. They also sealed up all the hairline cracks. Really happy with how it turned out.",
      service: "Patio & Pool Deck Coatings",
    },
  ],

  // ── FAQs ───────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How long does an epoxy floor last?",
      answer:
        "With proper installation and basic maintenance, a high-quality epoxy floor will last 15 to 20 years or more in a residential setting. Commercial and industrial floors typically last 10 to 15 years depending on traffic and conditions. Our 15-year warranty backs every residential installation we do.",
    },
    {
      question: "Can I park my car on an epoxy garage floor?",
      answer:
        "Absolutely. Our garage floor coatings are specifically designed to handle the weight and heat of parked vehicles. We use hot-tire-pickup-resistant formulas, so you won't see marks or peeling even from tires that are hot after a long Arizona drive. You can typically park on the floor 24 to 48 hours after installation.",
    },
    {
      question: "How long does the floor take to cure?",
      answer:
        "You can walk on most of our floors within 12 to 16 hours after application. Light foot traffic is fine the next day. For garage floors, you can park a vehicle on it within 24 to 48 hours. Full chemical cure takes about 7 days, during which you should avoid dragging heavy objects across the surface.",
    },
    {
      question: "How much does epoxy flooring cost?",
      answer:
        "Costs vary based on the size of the area, condition of the existing concrete, and the type of coating system you choose. A standard 2-car garage floor coating typically runs $1,500 to $3,000. Metallic and decorative floors cost more due to the specialized materials and technique involved. We provide free, no-obligation quotes so you'll know the exact cost upfront.",
    },
    {
      question: "What does the surface preparation process involve?",
      answer:
        "Surface prep is the most critical step in any epoxy installation. We use commercial diamond grinding machines to profile the concrete, which removes any existing coatings, stains, or contaminants and opens up the pores of the concrete for maximum adhesion. We also repair cracks, fill joints, and perform a moisture test. Proper prep is what separates a floor that lasts 15 years from one that peels in 2.",
    },
    {
      question: "What's the difference between metallic epoxy and flake epoxy?",
      answer:
        "Flake epoxy uses colored vinyl chips broadcast into the wet base coat, creating a speckled, granite-like appearance. It's the most popular choice for garages and offers great durability with a classic look. Metallic epoxy uses special metallic pigments that are manipulated to create flowing, marble-like patterns with a three-dimensional depth effect. Each metallic floor is completely unique. Metallic is higher cost but delivers a truly custom, high-end result.",
    },
    {
      question: "What does the warranty cover?",
      answer:
        "Our 15-year residential warranty covers peeling, delamination, hot tire pickup, and manufacturer defects in the coating system. It does not cover damage from abuse, improper cleaning chemicals, or structural issues with the underlying concrete. Commercial warranties vary by project and are detailed in your proposal. We stand behind our work — if there's ever an issue, we'll make it right.",
    },
    {
      question: "How do I maintain my epoxy floor?",
      answer:
        "Epoxy floors are one of the easiest flooring surfaces to maintain. For routine cleaning, just sweep or dust mop to remove debris, then damp mop with warm water and a mild cleaner like Simple Green. Avoid harsh chemicals like bleach or acidic cleaners. For garages, rinse out with a garden hose as needed. There's no need for waxing, sealing, or special treatments — just basic cleaning to keep it looking great.",
    },
  ],

  // ── Cities ─────────────────────────────────────────────────────────────────
  cities: [
    {
      name: "Buckeye",
      slug: "buckeye",
      description:
        "Serving Buckeye's rapidly growing communities with premium epoxy flooring. From new construction garages to commercial spaces in the Sundance and Verrado neighborhoods, we're proud to be Buckeye's go-to epoxy team.",
    },
    {
      name: "Litchfield Park",
      slug: "litchfield-park",
      description:
        "Bringing beautiful, long-lasting epoxy floors to Litchfield Park homeowners and businesses. Our coatings complement the charming character of this tight-knit West Valley community.",
    },
    {
      name: "Goodyear",
      slug: "goodyear",
      description:
        "E&P Epoxy Solutions proudly serves Goodyear with expert garage floor coatings, commercial flooring, and decorative epoxy. We've coated hundreds of floors across Estrella, Palm Valley, and Pebble Creek.",
    },
    {
      name: "Avondale",
      slug: "avondale",
      description:
        "Providing top-quality epoxy flooring services to Avondale homes and businesses. Whether it's a residential garage or a commercial warehouse near the I-10 corridor, we deliver results that last.",
    },
    {
      name: "Surprise",
      slug: "surprise",
      description:
        "Serving the Surprise community with professional epoxy floor installations. From Sun City Grand to Marley Park, our team knows the area and delivers exceptional floors to homeowners across the city.",
    },
    {
      name: "Peoria",
      slug: "peoria",
      description:
        "Peoria homeowners trust E&P Epoxy Solutions for durable, beautiful garage and patio floors. We serve all of Peoria from Vistancia in the north to the Old Town district and everything in between.",
    },
    {
      name: "Sun City",
      slug: "sun-city",
      description:
        "Helping Sun City homeowners upgrade their garages and patios with easy-to-maintain epoxy coatings. Our low-maintenance floors are a perfect fit for the active adult lifestyle.",
    },
    {
      name: "Sun City West",
      slug: "sun-city-west",
      description:
        "Providing Sun City West residents with premium epoxy floor coatings. Our durable, easy-to-clean surfaces are ideal for garages, workshops, and outdoor entertaining areas.",
    },
    {
      name: "El Mirage",
      slug: "el-mirage",
      description:
        "Serving El Mirage with affordable, high-quality epoxy flooring solutions. We help homeowners and business owners transform their concrete floors into beautiful, functional surfaces.",
    },
    {
      name: "Glendale",
      slug: "glendale",
      description:
        "From the Westgate Entertainment District to historic downtown, E&P Epoxy Solutions delivers premium flooring to Glendale's homes and businesses. We're one of Glendale's most trusted epoxy contractors.",
    },
    {
      name: "Youngtown",
      slug: "youngtown",
      description:
        "Bringing professional epoxy flooring to Youngtown's community. Our quick 1-day installations and durable coatings are perfect for Youngtown homeowners looking for a hassle-free upgrade.",
    },
    {
      name: "Waddell",
      slug: "waddell",
      description:
        "Serving the Waddell area with expert epoxy flooring for homes, horse properties, and workshops. Our coatings stand up to the demands of rural and suburban West Valley living.",
    },
    {
      name: "Tolleson",
      slug: "tolleson",
      description:
        "E&P Epoxy Solutions is proud to serve Tolleson's growing residential and industrial communities. From garage floors to warehouse coatings, we deliver quality results at competitive prices.",
    },
    {
      name: "Phoenix",
      slug: "phoenix",
      description:
        "Serving the greater Phoenix area with a full range of epoxy flooring services. As the Valley's premier epoxy specialists, we handle projects of every size across all Phoenix neighborhoods.",
    },
    {
      name: "New River",
      slug: "new-river",
      description:
        "Providing New River's rural and custom-home community with premium epoxy floor coatings. Our team understands the unique needs of larger properties and custom garages in the area.",
    },
    {
      name: "Fountain Hills",
      slug: "fountain-hills",
      description:
        "Delivering high-end epoxy flooring to Fountain Hills' luxury homes and businesses. Our decorative metallic and polished concrete options perfectly complement the upscale desert aesthetic.",
    },
    {
      name: "Cave Creek",
      slug: "cave-creek",
      description:
        "Serving Cave Creek homeowners with rugged, beautiful epoxy flooring built for the desert lifestyle. Our coatings protect against dust, heat, and heavy use in garages and workshops.",
    },
    {
      name: "Carefree",
      slug: "carefree",
      description:
        "Bringing luxury epoxy flooring to Carefree's exclusive homes and estates. Our metallic and decorative epoxy options deliver the high-end finish that Carefree homeowners expect.",
    },
    {
      name: "Scottsdale",
      slug: "scottsdale",
      description:
        "E&P Epoxy Solutions serves Scottsdale with premium epoxy flooring, from North Scottsdale luxury garages to Old Town commercial spaces. We deliver finishes worthy of Scottsdale's refined standards.",
    },
    {
      name: "Paradise Valley",
      slug: "paradise-valley",
      description:
        "Providing Paradise Valley's luxury residences with bespoke epoxy flooring solutions. Our metallic and polished concrete options add stunning elegance to some of Arizona's finest homes.",
    },
    {
      name: "Wickenburg",
      slug: "wickenburg",
      description:
        "Extending our expert epoxy flooring services to the Wickenburg community. We serve homeowners, ranches, and commercial properties with coatings built to withstand the rugged desert environment.",
    },
    {
      name: "Luke AFB",
      slug: "luke-afb",
      description:
        "Proudly serving military families at Luke Air Force Base with fast, professional garage floor coatings. Our 1-day installations are perfect for military families on the move.",
    },
    {
      name: "Laveen",
      slug: "laveen",
      description:
        "Serving the Laveen community with quality epoxy flooring for homes and businesses. Our durable coatings are built to handle South Phoenix heat and the demands of everyday life.",
    },
    {
      name: "Anthem",
      slug: "anthem",
      description:
        "E&P Epoxy Solutions is the trusted epoxy flooring contractor for Anthem's master-planned communities. We deliver beautiful, long-lasting floors that stand up to the North Valley's extreme summer heat.",
    },
  ],

  // ── Value Props ────────────────────────────────────────────────────────────
  valueProps: [
    {
      title: "15-Year Warranty",
      description:
        "Every residential floor we install is backed by our industry-leading 15-year warranty. We stand behind our work because we know it lasts.",
      icon: "ShieldCheck",
    },
    {
      title: "1-Day Installation",
      description:
        "Most residential garage floors are completed in a single day. You'll be parking on your brand-new floor within 24 hours.",
      icon: "Clock",
    },
    {
      title: "Licensed & Insured",
      description:
        "We're a fully licensed and insured Arizona contractor. Your property and your investment are protected from start to finish.",
      icon: "BadgeCheck",
    },
    {
      title: "Family-Owned",
      description:
        "E&P Epoxy Solutions is owned and operated by brothers Emmett and Parker. When you work with us, you work directly with the owners.",
      icon: "Users",
    },
    {
      title: "Industrial-Grade Materials",
      description:
        "We use only professional-grade, 100% solids epoxy and polyaspartic coatings — the same systems trusted in commercial and industrial facilities.",
      icon: "Layers",
    },
    {
      title: "Free Estimates",
      description:
        "Get a no-obligation quote with an on-site visit. We'll measure your space, assess your concrete, and give you an honest price — no pressure, no gimmicks.",
      icon: "FileText",
    },
  ],
};

export default businessData;
