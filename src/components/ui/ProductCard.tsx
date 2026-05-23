"use client";

import { useState } from "react";
import { useCartStore } from "@/src/store/cartStore";
import Product from "@/src/types/products";

interface ProductCardProps {
  product: Product;
  onInfoClick: () => void;
}

export function ProductCard({ product, onInfoClick }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity,
    });

    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/50 bg-white/40 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <div
        className="h-[250px] bg-cover bg-center transition-transform duration-700 hover:scale-[1.02] sm:h-[340px]"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      <div className="space-y-4 p-4 sm:p-5">
        <div className="space-y-1">
          <p className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 sm:text-[10px]">
            A|M Bouquet
          </p>

          <h2 className="font-heading text-2xl leading-none sm:text-3xl">
            {product.title}
          </h2>
        </div>

        <p className="text-sm uppercase tracking-[0.15em] text-neutral-500">
          {`$${product.price} MXN`}
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button
              onClick={onInfoClick}
              className="flex-1 rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--blush)]/40 sm:text-xs"
            >
              Info
            </button>

            <button
              onClick={handleAddToCart}
              className={`flex-1 rounded-full px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 active:scale-95 sm:text-xs ${
                isAdding
                  ? "bg-neutral-800 shadow-lg shadow-black/10"
                  : "bg-[var(--foreground)] hover:scale-[1.01] hover:opacity-90"
              }`}
            >
              {isAdding ? "Agregado" : "Agregar"}
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-3">
            <button
              onClick={decreaseQuantity}
              className="text-lg leading-none transition-all duration-200 hover:scale-110 hover:opacity-60 active:scale-95"
            >
              −
            </button>

            <span className="min-w-[24px] text-center text-sm font-medium transition-all duration-200">
              {quantity}
            </span>

            <button
              onClick={increaseQuantity}
              className="text-lg leading-none transition-all duration-200 hover:scale-110 hover:opacity-60 active:scale-95"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
