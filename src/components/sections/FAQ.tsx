"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can I use my own logo and branding?",
    a: "Absolutely! We specialize in custom-branded packaging. You provide your logo, brand colors, and any design guidelines, and we'll create packaging that perfectly represents your brand.",
  },
  {
    q: "Can I supply my own products for packaging?",
    a: "Yes! If you already have your own pulses or grains, simply send them to us and we'll professionally pack them in your branded packaging with quality checks included.",
  },
  {
    q: "Do you provide packaging design services?",
    a: "Yes, our team can help with packaging design. We'll create a design based on your brand requirements, and production starts only after your approval.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our MOQ varies by product and packaging type. We accommodate both small startup orders and large bulk orders. Contact us on WhatsApp to discuss your specific requirements and get a tailored quote.",
  },
  {
    q: "Do you deliver across India?",
    a: "Yes, we deliver pan India. Whether you're in Maharashtra or any other state, we ensure safe and timely delivery of your branded products.",
  },
  {
    q: "Can you source the products for us?",
    a: "Definitely! If you don't have existing products, we can source premium quality pulses and grains on your behalf, then package and deliver them under your brand.",
  },
  {
    q: "Can you create fully custom packaging shapes and sizes?",
    a: "Yes! We offer a variety of packaging formats — stand-up pouches, flat pouches, bags, boxes, and more — in various sizes. Get in touch to explore what works best for your products.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1A1A1A] text-sm sm:text-base">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#2E7D32]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-[#2E7D32] text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Got a question? We&apos;ve got answers. Still not sure?{" "}
            <a
              href="https://wa.me/919999999999"
              className="text-[#2E7D32] font-semibold underline underline-offset-2"
            >
              Ask us on WhatsApp
            </a>
            .
          </p>
        </motion.div>

        {inView && (
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
