"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tag, TrendingUp, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Tag,
    title: "Build Your Brand",
    desc: "Build recognition across your range with products sold under your own name.",
    color: "#2E7D32",
    bg: "#E8F5E9",
  },
  {
    icon: TrendingUp,
    title: "No Manufacturing Investment",
    desc: "Skip the factory costs. Let us handle production while you focus on sales.",
    color: "#1565C0",
    bg: "#E3F2FD",
  },
  {
    icon: DollarSign,
    title: "Set Your Retail Pricing",
    desc: "Position and price your own range for the customers and channels you serve.",
    color: "#00695C",
    bg: "#E0F2F1",
  },
];

export default function PrivateLabelBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-[#2E7D32] text-sm font-semibold rounded-full mb-4">
            Private Label Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">
            Why Businesses Love Private Label
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            More and more businesses are choosing private-label to grow faster, earn more, and build lasting customer loyalty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-green-100 transition-all duration-300"
            >
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: benefit.bg }}
              >
                <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
