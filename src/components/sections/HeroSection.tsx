"use client";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight, Sparkles, Star, Package } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden w-full"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #e8f5e9 40%, #dcfce7 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4CAF50, transparent)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #2E7D32, transparent)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E7D32' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-1.5 text-sm font-medium text-[#2E7D32] shadow-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              White-Label Packaging Solutions
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-6"
            >
              Launch Your Own{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2E7D32, #4CAF50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Food Brand
              </span>{" "}
              Without Setting Up a Factory
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              We provide premium white-label packaging solutions for pulses and
              grains with your own logo, brand name, and customized packaging.
              Whether you have your own products or need us to source them —
              we&apos;ve got you covered.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="#packaging-examples"
                id="hero-explore-cta"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#2E7D32] border border-green-200 px-7 py-3.5 rounded-full text-base font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                View Packaging Examples
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap items-center gap-5 mt-10"
            >
              {[
                { icon: <Star className="w-4 h-4 text-yellow-500" />, text: "Premium Quality" },
                { icon: <Package className="w-4 h-4 text-[#2E7D32]" />, text: "Custom Packaging" },
                { icon: <Sparkles className="w-4 h-4 text-[#2E7D32]" />, text: "Your Brand" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-white/80 bg-white p-1.5 shadow-xl shadow-green-950/15 sm:p-2">
              <Image
                src="/packaging-hero-market.webp"
                alt="Cream and forest-green pouches of rice and pulses on a shop display, with Your Brand Here on the center pouch"
                width={1254}
                height={1254}
                sizes="(max-width: 543px) calc(100vw - 46px), (max-width: 1023px) 494px, (max-width: 1279px) calc(50vw - 65px), 575px"
                className="block h-auto w-full rounded-[1.15rem]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col lg:flex items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
