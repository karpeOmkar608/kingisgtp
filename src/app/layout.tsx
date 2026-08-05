import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Get It Packed | Your Brand. Expertly Packed.",
  description:
    "Premium white-label packaging solutions for pulses and grains. Launch your own food brand with customized packaging, your logo, and professional branding. Based in Nashik, Maharashtra.",
  keywords:
    "white label packaging, custom packaging India, private label food, pulses packaging, grains packaging, food brand launch, Nashik packaging company",
  openGraph: {
    title: "Get It Packed | Your Brand. Expertly Packed.",
    description:
      "Launch your own food brand with premium white-label packaging solutions for pulses and grains.",
    type: "website",
    locale: "en_IN",
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
      <body className={`${plusJakarta.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
