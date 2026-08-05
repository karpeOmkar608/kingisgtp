"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tag, TrendingUp, Award, Rocket, DollarSign, Zap } from "lucide-react";

const benefits = [
  {
    icon: Tag,
    title: "Build Your Brand",
    desc: "Create a strong brand identity without investing in manufacturing infrastructure.",
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
    icon: Award,
    title: "Professional Packaging",
    desc: "Premium packaging that makes your products stand out on any shelf.",
    color: "#6A1B9A",
    bg: "#F3E5F5",
  },
  {
    icon: Rocket,
    title: "Scale Faster",
    desc: "Increase production volumes instantly without additional capital expenditure.",
    color: "#E65100",
    bg: "#FFF3E0",
  },
  {
    icon: DollarSign,
    title: "Increase Profit Margins",
    desc: "Branded products command premium pricing — improving your bottom line.",
    color: "#00695C",
    bg: "#E0F2F1",
  },
  {
    icon: Zap,
    title: "Launch Quickly",
    desc: "Go from idea to market-ready product in weeks — not months.",
    color: "#D97706",
    bg: "#FEF3C7",
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
