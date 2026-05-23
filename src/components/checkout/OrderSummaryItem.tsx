type OrderSummaryItemProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  onRemove: (id: number) => void;
};

export default function OrderSummaryItem({
  id,
  title,
  image,
  price,
  quantity,
  onRemove,
}: OrderSummaryItemProps) {
  return (
    <article className="flex items-center gap-4 rounded-3xl bg-neutral-50 p-4 ring-1 ring-black/5 transition hover:bg-neutral-100/70">
      <div className="h-24 w-24 overflow-hidden rounded-2xl bg-neutral-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3">
        <div>
          <h3 className="line-clamp-2 text-sm font-medium text-neutral-900">
            {title}
          </h3>

          <p className="mt-1 text-xs text-neutral-500">
            Cantidad: {quantity}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-neutral-900">
            ${(price * quantity).toLocaleString()}
          </p>

          <button
            onClick={() => onRemove(id)}
            className="text-xs font-medium text-neutral-500 transition hover:text-black"
          >
            Remover
          </button>
        </div>
      </div>
    </article>
  );
}
