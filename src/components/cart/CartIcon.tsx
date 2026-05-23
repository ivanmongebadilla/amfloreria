"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/src/store/cartStore";

export default function CartIcon() {
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="relative">
      <ShoppingBag size={18} />

      {totalItems > 0 && (
        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--foreground)] text-[10px] text-white">
          {totalItems}
        </div>
      )}
    </div>
  );
}
