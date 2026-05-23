"use client";

import Link from "next/link";
import { use, useState } from "react";
import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";
import { ProductCard } from "@/src/components/ui/ProductCard";
import { ProductModal } from "@/src/components/ui/ProductModal";
import { products } from "@/src/data/products";
import { collectionMeta } from "@/src/data/collectionMeta";

export default function Collection({ params,}: { params: Promise<{ collection: string }>;}) {
    const { collection } = use(params);
    const meta = collectionMeta[collection as keyof typeof collectionMeta];

    const filteredProducts = products.filter((product) =>
        product.collections.includes(collection)
    );

    const [selectedProduct, setSelectedProduct] = useState<(typeof filteredProducts)[0] | null>(null);

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

        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/50 shadow-2xl shadow-black/5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${meta.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 mx-auto flex min-h-[260px] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              {meta.title}
            </p>

            <h1 className="mt-4 font-heading text-4xl leading-none md:text-6xl">
              {meta.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              {meta.subtitle}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 min-[450px]:grid-cols-2 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInfoClick={() => setSelectedProduct(product)}
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