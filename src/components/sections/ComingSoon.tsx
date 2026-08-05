"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const row1 = [
  { name: "Spices",            emoji: "🌶️" },
  { name: "Dry Fruits",        emoji: "🍇" },
  { name: "Tea & Coffee",      emoji: "☕" },
  { name: "Snacks",            emoji: "🍿" },
  { name: "Flour & Atta",      emoji: "🌾" },
  { name: "Organic Foods",     emoji: "🥗" },
  { name: "Pet Food",          emoji: "🐾" },
  { name: "Personal Care",     emoji: "🧴" },
];

const row2 = [
  { name: "Home Care",         emoji: "🏠" },
  { name: "Nutraceuticals",    emoji: "💊" },
  { name: "Cosmetics",         emoji: "💄" },
  { name: "Cleaning Products", emoji: "🧹" },
  { name: "Health Foods",      emoji: "🥦" },
  { name: "Eco Packaging",     emoji: "♻️" },
  { name: "Gift Packaging",    emoji: "🎁" },
  { name: "Industrial",        emoji: "⚙️" },
];

function MarqueeRow({ items, direction }: { items: typeof row1; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-track overflow-hidden w-full">
      <div
        className={`flex gap-3 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-green-400/40 backdrop-blur-sm rounded-full px-5 py-2.5 transition-all duration-300 cursor-default shrink-0"
          >
            <span className="text-xl leading-none">{item.emoji}</span>
            <span className="text-white text-sm font-semibold whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComingSoon() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="coming-soon"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1B5E20 100%)",
      }}
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4CAF50, transparent)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #2E7D32, transparent)" }}
        />
        {/* Subtle grid dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-green-300 text-sm font-semibold rounded-full mb-5 border border-white/15 tracking-wide">
            🚀 Expanding Soon
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            One Platform.{" "}
            <span className="text-[#4CAF50]">Every Category.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            We&apos;re expanding beyond pulses and grains to become your
            complete white-label packaging partner — across every product category.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col gap-4 mb-14"
      >
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </motion.div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Quote card */}
          <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl px-7 py-5 max-w-xl text-center sm:text-left">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
              &ldquo;We&apos;re building a future where businesses can launch{" "}
              <span className="text-white font-semibold not-italic">any product</span>{" "}
              under their own brand — with professional packaging support.&rdquo;
            </p>
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#2E7D32] hover:bg-[#4CAF50] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-green-900/40 transition-all duration-300 hover:-translate-y-0.5 shrink-0"
          >
            Get Notified
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
