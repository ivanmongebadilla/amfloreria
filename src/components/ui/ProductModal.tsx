"use client";

import { useState } from "react";
import { useCartStore } from "@/src/store/cartStore";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    flowers: string[];
    description: string;
  } | null;
}

export function ProductModal({
  isOpen,
  onClose,
  product,
}: ProductModalProps) {
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
    if (!product) return;

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

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm md:items-center">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[var(--background)] shadow-2xl transition-all duration-300">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-30 rounded-full bg-white/90 px-3 py-2 text-xs uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105"
        >
          Cerrar
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <div
            className="h-[320px] bg-cover bg-center transition-transform duration-700 hover:scale-[1.01] sm:h-[420px]"
            style={{ backgroundImage: `url(${product.image})` }}
          />

          <div className="space-y-8 p-6 pb-10 sm:p-8">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                A|M Bouquet
              </p>

              <h2 className="font-heading text-4xl leading-none sm:text-5xl">
                {product.title}
              </h2>

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                {`$${product.price} MXN`}
              </p>
            </div>

            <p className="text-base leading-8 text-neutral-600">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Flores Incluidas
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.flowers.map((flower) => (
                  <div
                    key={flower}
                    className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {flower}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Cantidad
              </h3>

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

            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Nota Personalizada
              </label>

              <textarea
                placeholder="Escribe un mensaje especial..."
                className="min-h-[120px] w-full rounded-[1.5rem] border border-[color:var(--border)] bg-white/70 p-4 outline-none transition-all duration-200 focus:border-black/20 focus:bg-white"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full rounded-full px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 active:scale-[0.98] ${
                isAdding
                  ? "bg-neutral-800 shadow-xl shadow-black/10"
                  : "bg-[var(--foreground)] hover:scale-[1.01] hover:opacity-90"
              }`}
            >
              {isAdding ? "Agregado al carrito" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
