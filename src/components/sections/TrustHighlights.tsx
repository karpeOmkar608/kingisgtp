"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Package, Boxes, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "White Label Manufacturing",
    color: "#2E7D32",
    bg: "#E8F5E9",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    color: "#1565C0",
    bg: "#E3F2FD",
  },
  {
    icon: Boxes,
    title: "Bulk Orders",
    color: "#6A1B9A",
    bg: "#F3E5F5",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    color: "#E65100",
    bg: "#FFF3E0",
  },
];

export default function TrustHighlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Trust highlights" className="py-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl border border-gray-100 bg-white p-4 flex items-center gap-3"
            >
              <div
                className="size-9 shrink-0 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon
                  className="size-5"
                  style={{ color: item.color }}
                />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-base mb-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
