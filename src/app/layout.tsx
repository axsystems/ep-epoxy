import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "E&P Epoxy Solutions | Arizona's Premier Epoxy Flooring",
    template: "%s | E&P Epoxy Solutions",
  },
  description:
    "Arizona's #1 epoxy flooring specialists. Garage floors, commercial coatings, decorative metallic epoxy & more. Family-owned. 15-year warranty. Free estimates across Phoenix Metro.",
  keywords: [
    "epoxy flooring Arizona",
    "garage floor coating Phoenix",
    "epoxy garage floor",
    "commercial epoxy flooring",
    "metallic epoxy",
    "concrete coating Arizona",
    "garage floor epoxy near me",
    "E&P Epoxy Solutions",
  ],
  openGraph: {
    title: "E&P Epoxy Solutions | Arizona's Premier Epoxy Flooring",
    description:
      "Transform your floors with Arizona's most trusted epoxy flooring company. 15-year warranty. Free estimates.",
    type: "website",
    locale: "en_US",
    siteName: "E&P Epoxy Solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
