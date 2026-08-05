"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Paintbrush, Search, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Share Your Requirement",
    desc: "Tell us about your products, quantity, branding ideas, and packaging preferences.",
    color: "#2E7D32",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Approve Packaging Design",
    desc: "Our team creates custom packaging designs with your logo and brand guidelines.",
    color: "#1565C0",
  },
  {
    number: "03",
    icon: Search,
    title: "We Source Products",
    desc: "No products? No problem. We source premium pulses and grains on your behalf. (Optional)",
    color: "#6A1B9A",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Packaging & Quality Check",
    desc: "Every product is carefully packed, sealed, and quality-checked before dispatch.",
    color: "#E65100",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery",
    desc: "Your branded products are delivered safely — ready to hit the shelves.",
    color: "#00695C",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-[#2E7D32] text-sm font-semibold rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">
            How It Works — Simple as 1, 2, 3
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From your first inquiry to delivery at your door — a seamless, transparent process.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2E7D32] via-[#4CAF50] to-[#00695C] mx-12 xl:mx-24" />

            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div
                    className="relative z-10 w-24 h-24 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-9 h-9 text-white" />
                  </div>

                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </span>
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2E7D32] to-[#00695C]" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                className="flex gap-5 pl-3"
              >
                <div
                  className="relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="pt-1">
                  <span
                    className="text-xs font-bold tracking-wider uppercase"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </span>
                  <h3 className="font-bold text-[#1A1A1A] mt-0.5 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
