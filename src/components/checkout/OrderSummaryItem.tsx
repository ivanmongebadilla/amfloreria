import CartItem from "@/src/types/cart";
import { useCartStore } from "@/src/store/cartStore";

type OrderSummaryItemProps = {
  item: CartItem;
  // onRemove: (id: number) => void;
  // onIncreaseQuantity: (id: number) => void;
  // onDecreaseQuantity: (id: number) => void;
};

export default function OrderSummaryItem({ item }: OrderSummaryItemProps) {
  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const increaseQuantity = useCartStore(
    (state) => state.addItem
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  )

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const handleDecreaseQuantity = () => {
      if (item.quantity === 1) {
        removeItem(item.id);
        return;
    }

    decreaseQuantity(item.id);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(item)
  }

  const onRemove = (id: number) => {
    removeItem(id)
  }

  const handleClearCart = () =>{
    clearCart()
  }

  return (
    <article className="flex items-center gap-4 rounded-3xl bg-neutral-50 p-4 ring-1 ring-black/5 transition-all duration-300 hover:bg-neutral-100/70 hover:shadow-sm">
      <div className="h-24 w-24 overflow-hidden rounded-2xl bg-neutral-200">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <h3 className="line-clamp-2 text-sm font-medium text-neutral-900 transition-all duration-200">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 shadow-sm transition-all duration-200">
            <button
              onClick={handleDecreaseQuantity}
              className="flex h-8 w-8 items-center justify-center rounded-full text-base font-medium text-neutral-600 transition-all duration-200 hover:scale-105 hover:bg-neutral-100 hover:text-black active:scale-95"
            >
              -
            </button>

            <span className="min-w-8 px-2 text-center text-sm font-medium text-neutral-900 transition-all duration-200">
              {item.quantity}
            </span>

            <button
              onClick={handleIncreaseQuantity}
              className="flex h-8 w-8 items-center justify-center rounded-full text-base font-medium text-neutral-600 transition-all duration-200 hover:scale-105 hover:bg-neutral-100 hover:text-black active:scale-95"
            >
              +
            </button>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-sm font-semibold text-neutral-900 transition-all duration-200">
              ${(item.price * item.quantity).toLocaleString()}
            </p>

            <button
              onClick={() => onRemove(item.id)}
              className="text-xs font-medium text-neutral-500 transition-all duration-200 hover:text-black"
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
