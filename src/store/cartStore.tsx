import { create } from "zustand";
import CartItem from "../types/cart";

interface CartStore {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  decreaseQuantity: (id: number) => void;
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

    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + product.quantity,
              }
            : item
        ),
      };
    }

    return {
      items: [...state.items, product],
    };
  }),

  decreaseQuantity: (id: number) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),


  clearCart: () =>
    set({
      items: [],
    }),
}));