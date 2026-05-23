import CartItem from "@/src/types/cart";

type OrderSummaryItemProps = {
  item: CartItem,
  onRemove: (id: number) => void;
};

export default function OrderSummaryItem({ item, onRemove,}: OrderSummaryItemProps) {
  return (
    <article className="flex items-center gap-4 rounded-3xl bg-neutral-50 p-4 ring-1 ring-black/5 transition hover:bg-neutral-100/70">
      <div className="h-24 w-24 overflow-hidden rounded-2xl bg-neutral-200">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3">
        <div>
          <h3 className="line-clamp-2 text-sm font-medium text-neutral-900">
            {item.title}
          </h3>

          <p className="mt-1 text-xs text-neutral-500">
            Cantidad: {item.quantity}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
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
    </article>
  );
}
