"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";
import { ProductCard } from "@/src/components/ui/ProductCard";
import { ProductModal } from "@/src/components/ui/ProductModal";

export default function Category() {
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

        <section className="grid grid-cols-1 gap-4 min-[450px]:grid-cols-2 lg:gap-6">
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