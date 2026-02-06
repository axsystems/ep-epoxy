import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        dark: "hsl(var(--dark))",
        "dark-card": "hsl(var(--dark-card))",
        amber: {
          DEFAULT: "hsl(var(--amber))",
          light: "hsl(var(--amber-light))",
          dark: "hsl(var(--amber-dark))",
        },
        slate: {
          deep: "hsl(var(--slate-deep))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-montserrat)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        soft: "0 4px 20px -4px hsl(var(--primary) / 0.12)",
        medium: "0 8px 30px -6px hsl(var(--primary) / 0.18)",
        card: "0 2px 12px -2px hsl(var(--primary) / 0.08)",
        glow: "0 0 40px hsl(var(--accent) / 0.3)",
        "accent-glow": "0 4px 20px -4px hsl(var(--accent) / 0.4)",
        dark: "0 8px 30px -6px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--slate-deep)), hsl(var(--dark)))",
        "gradient-cta": "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--amber-dark)))",
        "gradient-card": "linear-gradient(180deg, hsl(var(--card)), hsl(var(--muted)))",
        "gradient-dark": "linear-gradient(180deg, hsl(var(--dark)), hsl(var(--slate-deep)))",
        "gradient-amber": "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--amber-light)))",
        "gradient-overlay": "linear-gradient(180deg, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9))",
        "gradient-metallic": "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%)",
        "gradient-epoxy": "linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 20%, #4a4a4a 40%, #3d3d3d 60%, #2d2d2d 80%, #1a1a1a 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(2deg)" },
          "66%": { transform: "translateY(4px) rotate(-1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        count: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        count: "count 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
