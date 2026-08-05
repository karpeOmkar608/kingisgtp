"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Package, Boxes, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "White Label Manufacturing",
    desc: "Launch your own brand with our manufacturing & packaging expertise.",
    color: "#2E7D32",
    bg: "#E8F5E9",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    desc: "Your logo, your design, your brand identity on every pack.",
    color: "#1565C0",
    bg: "#E3F2FD",
  },
  {
    icon: Boxes,
    title: "Bulk Orders",
    desc: "Competitive pricing for large volumes. Scale your business faster.",
    color: "#6A1B9A",
    bg: "#F3E5F5",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    desc: "Every product meets strict quality standards before it ships.",
    color: "#E65100",
    bg: "#FFF3E0",
  },
];

export default function TrustHighlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon
                  className="w-6 h-6"
                  style={{ color: item.color }}
                />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
