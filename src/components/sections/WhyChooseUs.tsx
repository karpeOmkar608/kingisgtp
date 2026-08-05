"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Star, Palette, TrendingDown, Zap, Award, Factory, Headphones, Rocket,
} from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Only the best raw materials and packaging materials make it to your customers.",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: Palette,
    title: "Customized Branding",
    desc: "Your logo, your colors, your story — on every single pack.",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: TrendingDown,
    title: "Affordable Bulk Pricing",
    desc: "Competitive pricing structures designed for growing businesses.",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Quick production cycles so you never run out of stock.",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: Award,
    title: "Professional Packaging",
    desc: "Stand-up pouches, bags, and boxes that look premium on any shelf.",
    color: "#2E7D32",
    bg: "#E8F5E9",
  },
  {
    icon: Factory,
    title: "Scalable Manufacturing",
    desc: "Start small, scale big. We grow with your business.",
    color: "#1565C0",
    bg: "#E3F2FD",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "A real team behind every order — always reachable on WhatsApp.",
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    icon: Rocket,
    title: "Made for Growing Brands",
    desc: "Ideal for startups and established businesses expanding their product line.",
    color: "#EC4899",
    bg: "#FDF2F8",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-[#2E7D32] text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">
            Everything Your Brand Needs to Succeed
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We&apos;re not just a packaging vendor — we&apos;re your long-term brand partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: feature.bg }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
