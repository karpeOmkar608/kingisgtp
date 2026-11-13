import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#F8F9FA] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold text-[#2E7D32]">About Us</p>
          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl">
            Your Private-Label Packaging Partner in Nashik
          </h2>
          <p className="mb-4 max-w-xl leading-relaxed text-gray-600">
            Get It Packed helps businesses sell pulses and grains under their
            own brand. Supply your own product or ask us to help source it,
            then work with us on a pack that carries your name, logo, and design.
          </p>
          <p className="mb-6 max-w-xl leading-relaxed text-gray-600">
            Tell us which products you want to launch and where you plan to sell
            them. We can discuss pack sizes, label artwork, and how much of the
            product you want visible through the pouch.
          </p>
          <p className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="size-4 shrink-0 text-[#2E7D32]" aria-hidden="true" />
            Based in Nashik, Maharashtra, India
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#2E7D32] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B5E20]"
          >
            Discuss Your Packaging Requirements
            <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <figure className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
          <Image
            src="/products/lentil-pouch.webp"
            alt="Cream and green lentil pouch with a Your Brand Here label and yellow lentils visible through the window"
            width={1122}
            height={1402}
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) calc(50vw - 64px), 576px"
            className="h-auto w-full"
          />
          <figcaption className="p-5 sm:px-6">
            <h3 className="font-bold text-[#1A1A1A]">Sample pack · Lentils</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              This mockup pairs a front label for your branding with a clear
              window that lets shoppers see the lentils.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
