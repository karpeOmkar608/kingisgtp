"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const products = [
  { name: "Toor Dal", emoji: "🌾", desc: "Premium quality, ready for custom packaging", badge: "Bestseller" },
  { name: "Moong Dal", emoji: "🫘", desc: "Whole & split — available in all pack sizes", badge: null },
  { name: "Chana Dal", emoji: "🟡", desc: "Bold yellow chana dal in your branded packs", badge: null },
  { name: "Urad Dal", emoji: "⚫", desc: "Whole & dhuli urad for every market", badge: "Popular" },
  { name: "Masoor Dal", emoji: "🔴", desc: "Pink & orange masoor in premium pouches", badge: null },
  { name: "Basmati Rice", emoji: "🍚", desc: "Long grain aromatic basmati under your brand", badge: "New" },
  { name: "Wheat (Gehun)", emoji: "🌾", desc: "Whole wheat grains in branded packaging", badge: null },
  { name: "Poha", emoji: "🥣", desc: "Thick & thin poha packed hygienically", badge: null },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-[#2E7D32] text-sm font-semibold rounded-full mb-4">
            Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">
            Our Current Product Range
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            All products available in custom-branded packaging with your logo,
            brand name, and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-300"
            >
              {/* Product visual */}
              <div className="relative h-44 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </span>
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-[#2E7D32] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-[#1A1A1A] mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2E7D32] bg-green-50 px-2.5 py-1 rounded-full">
                    Available
                  </span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-500 hover:text-[#2E7D32] transition-colors"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            Enquire About Any Product
          </a>
        </motion.div>
      </div>
    </section>
  );
}
