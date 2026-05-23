import CartItem from "@/src/types/cart";

type OrderSummaryItemProps = {
  item: CartItem;
  onRemove: (id: number) => void;
  onIncreaseQuantity: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
};

export default function OrderSummaryItem({
  item,
  onRemove,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: OrderSummaryItemProps) {
  return (
    <article className="flex items-center gap-4 rounded-3xl bg-neutral-50 p-4 ring-1 ring-black/5 transition hover:bg-neutral-100/70">
      <div className="h-24 w-24 overflow-hidden rounded-2xl bg-neutral-200">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <h3 className="line-clamp-2 text-sm font-medium text-neutral-900">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => onDecreaseQuantity(item.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-base font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
            >
              -
            </button>

            <span className="min-w-8 text-center text-sm font-medium text-neutral-900">
              {item.quantity}
            </span>

            <button
              onClick={() => onIncreaseQuantity(item.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-base font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
            >
              +
            </button>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-sm font-semibold text-neutral-900">
              ${(item.price * item.quantity).toLocaleString()}
            </p>

            <button
              onClick={() => onRemove(item.id)}
              className="text-xs font-medium text-neutral-500 transition hover:text-black"
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
