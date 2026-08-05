"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Target, Eye } from "lucide-react";

export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-[#2E7D32] text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-5 leading-tight">
              Helping Businesses Build{" "}
              <span className="text-[#2E7D32]">Their Own Brands</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Get It Packed is a packaging-focused startup based in{" "}
              <span className="font-semibold text-[#1A1A1A]">
                Nashik, Maharashtra
              </span>
              , dedicated to helping businesses launch and grow their own branded
              products. We currently specialize in white-label pulses and grains
              with customized packaging solutions, while building toward becoming
              a complete packaging partner for businesses across multiple industries.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <MapPin className="w-4 h-4 text-[#2E7D32]" />
              Nashik, Maharashtra, India
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#2E7D32] flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">Our Mission</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Empower businesses of every size to launch premium products
                    with professional packaging, branding, and manufacturing support.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1565C0] flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To become India&apos;s trusted end-to-end customized packaging
                    and private-label solutions company.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center shadow-2xl py-10 lg:aspect-square">
              <div className="text-center p-12">
                <div className="text-8xl mb-6">🏭</div>
                <div className="space-y-3">
                  {[
                    "✓ Premium Quality Standards",
                    "✓ Customized Branding",
                    "✓ Pan India Delivery",
                    "✓ Fast Turnaround",
                    "✓ Dedicated Support",
                  ].map((text) => (
                    <div
                      key={text}
                      className="bg-white/70 backdrop-blur rounded-full px-5 py-2 text-sm font-semibold text-gray-700"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="hidden sm:block absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <p className="text-2xl font-extrabold text-[#2E7D32]">Nashik</p>
              <p className="text-xs text-gray-500">Maharashtra, India</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="hidden sm:block absolute -top-5 -right-5 bg-[#2E7D32] rounded-2xl p-4 shadow-xl"
            >
              <p className="text-2xl font-extrabold text-white">B2B</p>
              <p className="text-xs text-green-200">Trusted Partner</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
