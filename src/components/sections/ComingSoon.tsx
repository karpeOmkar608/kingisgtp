"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock } from "lucide-react";

const categories = [
  { name: "Spices", emoji: "🌶️" },
  { name: "Dry Fruits", emoji: "🫘" },
  { name: "Tea & Coffee", emoji: "☕" },
  { name: "Snacks", emoji: "🍿" },
  { name: "Flour & Atta", emoji: "🌾" },
  { name: "Organic Foods", emoji: "🥗" },
  { name: "Pet Food", emoji: "🐾" },
  { name: "Personal Care", emoji: "🧴" },
  { name: "Home Care", emoji: "🏠" },
  { name: "Nutraceuticals", emoji: "💊" },
  { name: "Cosmetics", emoji: "💄" },
  { name: "Cleaning Products", emoji: "🧹" },
  { name: "Health Foods", emoji: "🥦" },
  { name: "Eco-Friendly Packaging", emoji: "♻️" },
  { name: "Gift Packaging", emoji: "🎁" },
  { name: "Industrial Packaging", emoji: "⚙️" },
];

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
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4CAF50, transparent)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #2E7D32, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-green-300 text-sm font-semibold rounded-full mb-4 border border-white/10">
            🚀 Expanding Soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            More Packaging Solutions{" "}
            <span className="text-[#4CAF50]">Coming Soon</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get It Packed is expanding beyond pulses and grains to become your
            complete customized packaging partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="coming-card group relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center cursor-default hover:bg-white/15 hover:border-green-400/30 transition-all duration-300"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {cat.emoji}
              </span>
              <p className="text-white text-xs font-semibold leading-tight mb-2">
                {cat.name}
              </p>
              <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5">
                <Lock className="w-2.5 h-2.5 text-green-300" />
                <span className="text-green-300 text-xs font-medium">Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-gray-300 italic text-base leading-relaxed">
              &ldquo;We&apos;re building a future where businesses can launch{" "}
              <span className="text-white font-semibold">any product</span> under
              their own brand with professional packaging and manufacturing support.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
