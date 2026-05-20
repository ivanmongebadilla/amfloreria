"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";
import { ProductCard } from "@/src/components/ui/ProductCard";
import { ProductModal } from "@/src/components/ui/ProductModal";

const bouquets = [
  {
    title: "Bouquet Romance",
    price: "$1,250 MXN",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    flowers: ["Rosas", "Peonías", "Eucalipto"],
    quantity: "24 flores",
    description:
      "Bouquet elegante con tonos blush diseñado para regalar emociones y momentos especiales.",
  },
  {
    title: "Soft Peonies",
    price: "$1,690 MXN",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop",
    flowers: ["Peonías", "Rosas Garden", "Eucalipto"],
    quantity: "30 flores",
    description:
      "Diseño floral suave y romántico inspirado en una estética premium contemporánea.",
  },
  {
    title: "Luxury Blush",
    price: "$1,850 MXN",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop",
    flowers: ["Rosas Premium", "Tulipanes", "Hydrangeas"],
    quantity: "36 flores",
    description:
      "Bouquet sofisticado con composición floral de lujo para celebraciones memorables.",
  },
  {
    title: "Garden Signature",
    price: "$1,490 MXN",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
    flowers: ["Garden Roses", "Eucalipto", "Ranúnculos"],
    quantity: "28 flores",
    description:
      "Arreglo floral editorial inspirado en jardines europeos y diseño atemporal.",
  },
];

export default function RamosPage() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof bouquets)[0] | null
  >(null);

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <Navbar showShopLink={false} />

        <div>
          <Link
            href="/shop"
            className="inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-[var(--blush)]/40 sm:text-xs"
          >
            ← Volver a Shop
          </Link>
        </div>

        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-gradient-to-br from-[var(--beige)] via-[var(--blush)] to-[var(--sage)] px-6 py-12 shadow-2xl shadow-black/5 sm:px-10 md:px-14 md:py-16">
          <div
            className="absolute inset-0 opacity-10 blur-[2px]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Ramos
            </p>

            <h1 className="font-heading text-4xl leading-none md:text-6xl">
              Bouquets diseñados para emocionar.
            </h1>

            <p className="text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
              Descubre ramos florales elegantes creados para celebrar momentos
              especiales, regalar emociones y transformar cualquier espacio.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 lg:gap-6">
          {bouquets.map((bouquet) => (
            <ProductCard
              key={bouquet.title}
              title={bouquet.title}
              price={bouquet.price}
              image={bouquet.image}
              onInfoClick={() => setSelectedProduct(bouquet)}
            />
          ))}
        </section>

        <Footer />
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </main>
  );
}
