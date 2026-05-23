import OrderSummaryItem from "./OrderSummaryItem";
import CartItem from "@/src/types/cart";

type OrderSummaryProps = {
  items: CartItem[];
  onRemove: (id: number) => void;
};

export default function OrderSummary({ items, onRemove,}: OrderSummaryProps) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryFee = items.length > 0 ? 150 : 0;
  const total = subtotal + deliveryFee;

  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Checkout
          </p>

          <h2 className="mt-1 text-xl font-medium text-neutral-900">
            Order Summary
          </h2>
        </div>

        <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
          {items.length} productos
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <OrderSummaryItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="mt-6 border-t border-neutral-100 pt-5">
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between text-neutral-500">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between text-neutral-500">
            <span>Entrega</span>
            <span>${deliveryFee.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between pt-2 text-base font-semibold text-neutral-900">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
