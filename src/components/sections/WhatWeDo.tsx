"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const cards = [
  {
    tag: "White Label",
    title: "White Label Products",
    subtitle: "Perfect for businesses that want to launch their own brand.",
    items: [
      "Premium pulses & grains sourcing",
      "Your brand name & logo on every pack",
      "Custom packaging design",
      "Ready-to-sell products",
      "Flexible MOQ",
      "Pan India delivery",
    ],
    bg: "from-green-50 to-emerald-50",
    border: "border-green-100",
    tagColor: "bg-green-100 text-[#2E7D32]",
    emoji: "🌿",
  },
  {
    tag: "Packaging Service",
    title: "Send Us Your Products",
    subtitle: "Already have your own pulses or grains? We'll take care of the rest.",
    items: [
      "Professional packaging & sealing",
      "Custom printed pouches",
      "Your logo & label printing",
      "Quality check before dispatch",
      "Bulk order discounts",
      "Secure dispatch & delivery",
    ],
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    tagColor: "bg-blue-100 text-blue-700",
    emoji: "📦",
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-[#2E7D32] text-sm font-semibold rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">
            Two Ways We Can Help Your Business
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re starting from scratch or have existing products,
            we provide the perfect packaging solution for your brand.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className={`rounded-3xl bg-gradient-to-br ${card.bg} border ${card.border} p-8 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{card.emoji}</div>
                <div>
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 ${card.tagColor}`}
                  >
                    {card.tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">{card.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-3 rounded-full text-sm font-semibold shadow transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
