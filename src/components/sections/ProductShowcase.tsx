"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants";

const products = [
  {
    name: "Toor Dal",
    pack: "/products/toor-dal-pack.webp",
    img: "/products/toor-dal.png",
  },
  {
    name: "Moong Dal",
    pack: "/products/moong-dal-pack.webp",
    img: "/products/moong-dal.png",
  },
  {
    name: "Chana Dal",
    pack: "/products/chana-dal-pack.webp",
    img: "/products/chana-dal.png",
  },
  {
    name: "Urad Dal",
    pack: "/products/urad-dal-pack.webp",
    img: "/products/urad-dal.png",
  },
  {
    name: "Masoor Dal",
    pack: "/products/masoor-dal-pack.webp",
    img: "/products/masoor-dal.png",
  },
  {
    name: "Basmati Rice",
    pack: "/products/basmati-rice-pack.webp",
    img: "/products/basmati-rice.png",
  },
  {
    name: "Wheat (Gehun)",
    pack: "/products/wheat-pack.webp",
    img: "/products/wheat.png",
  },
  {
    name: "Poha",
    pack: "/products/poha-pack.webp",
    img: "/products/poha.png",
  },
];

function productEnquiry(name: string) {
  const message = encodeURIComponent(
    `Hi Get It Packed, I'm interested in custom-branded packaging for ${name}. Could you share the available pack sizes and pricing?`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function PackagingCard({ product }: { product: (typeof products)[number] }) {
  const [showIngredient, setShowIngredient] = useState(false);

  return (
    <article className="min-w-0 snap-start overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
      <div className="relative aspect-square bg-[#f6ebdc]">
        <Image
          src={showIngredient ? product.img : product.pack}
          alt={showIngredient ? `Unpacked ${product.name}` : `${product.name} pouch mockup with a clear product window`}
          fill
          sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 47vw, (max-width: 1279px) 32vw, 390px"
          className="object-cover"
        />
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <h3 className="text-xl font-bold text-[#1A1A1A]">{product.name}</h3>
        <div role="group" aria-label={`Image view for ${product.name}`} className="inline-flex gap-1 rounded-full bg-green-50 p-1">
          {["Packaging", "Ingredient"].map((label, index) => {
            const isIngredient = index === 1;
            const active = isIngredient === showIngredient;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setShowIngredient(isIngredient)}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-green-700 ${active ? "bg-[#2E7D32] text-white" : "text-green-900 hover:bg-green-100"}`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <a
          href={productEnquiry(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${product.name} packaging on WhatsApp`}
          className="block w-fit text-sm font-bold text-[#1B5E20] underline decoration-green-300 underline-offset-4 hover:decoration-current"
        >
          Enquire about this pack
        </a>
      </div>
    </article>
  );
}

export default function ProductShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function scrollCards(direction: number) {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    const secondCard = firstCard?.nextElementSibling;
    if (!carousel || !firstCard || !secondCard) return;

    const step = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left;
    carousel.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <section id="packaging-examples" className="scroll-mt-20 py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">
            See Your Brand on the Pack
          </h2>
          <p className="text-gray-600">
            Explore illustrative packaging mockups with custom front labels and clear product windows.
            Switch to the ingredient view to see what goes inside.
          </p>
        </div>
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-gray-600">{products.length} packaging examples</span>
            <div className="flex gap-2">
              {[
                { label: "Previous products", direction: -1, Icon: ChevronLeft, disabled: atStart },
                { label: "Next products", direction: 1, Icon: ChevronRight, disabled: atEnd },
              ].map(({ label, direction, Icon, disabled }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  aria-controls="packaging-carousel"
                  disabled={disabled}
                  onClick={() => scrollCards(direction)}
                  className="grid size-11 place-items-center rounded-full border border-green-200 bg-white text-green-800 hover:bg-green-50 disabled:opacity-40"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
          <div
            id="packaging-carousel"
            ref={carouselRef}
            role="region"
            aria-label="Product packaging examples"
            tabIndex={0}
            onScroll={(event) => {
              const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
              setAtStart(scrollLeft <= 1);
              setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
            }}
            className="grid auto-cols-[100%] grid-flow-col gap-5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-4 sm:auto-cols-[calc((100%-1.25rem)/2)] lg:auto-cols-[calc((100%-2.5rem)/3)]"
          >
            {products.map((product) => (
              <PackagingCard key={product.name} product={product} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-green-100 bg-gradient-to-br from-white to-green-50 p-4 shadow-sm sm:p-5">
          <div className="min-w-0">
            <h3 className="mb-3 text-base font-bold text-green-950">Product Range</h3>
            <ul className="flex flex-wrap gap-2">
              {[
                ...products,
                { name: "Coconut", img: "/products/coconut.webp" },
                { name: "Dry Fruits", img: "/products/dry-fruits.webp" },
                { name: "Groundnut", img: "/products/groundnut.webp" },
              ].map(({ name, img }) => (
                <li key={name} className="inline-flex items-center gap-2 rounded-full border border-green-200/80 bg-white py-1 pl-1 pr-3 text-sm font-medium text-green-950">
                  <Image
                    src={img}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 shrink-0 rounded-full object-cover"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-full bg-[#2E7D32] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1B5E20]"
          >
            Enquire About Any Product
          </a>
        </div>
      </div>
    </section>
  );
}
