import { create } from "zustand";
import CartItem from "../types/cart";

interface CartStore {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      // Si el producto ya existe
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      // Si NO existe
      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () =>
    set({
      items: [],
    }),
}));