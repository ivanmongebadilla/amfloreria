"use client";

const orderItems = [
  {
    id: 1,
    title: "Ramo Rosas Blancas",
    quantity: 1,
    price: 1200,
  },
  {
    id: 2,
    title: "Tulipanes Rosas",
    quantity: 2,
    price: 850,
  },
];

const subtotal = orderItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

const deliveryFee = 150;
const total = subtotal + deliveryFee;

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5] px-4 py-6 text-[#1f1f1f]">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            A|M Florería
          </p>

          <h1 className="mt-2 text-3xl font-light tracking-tight">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-neutral-500">
            Finaliza tu pedido y agenda la entrega de tus flores.
          </p>
        </div>

        <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Delivery info</h2>

          <div className="mt-5 grid gap-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            />

            <input
              type="text"
              placeholder="Dirección de entrega"
              className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            />

            <textarea
              placeholder="Instrucciones de entrega"
              rows={4}
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Date & time delivery</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input
              type="date"
              className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            />

            <select className="h-12 rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black">
              <option>9:00 AM - 12:00 PM</option>
              <option>12:00 PM - 3:00 PM</option>
              <option>3:00 PM - 6:00 PM</option>
            </select>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Card message</h2>

          <textarea
            placeholder="Escribe un mensaje especial para la tarjeta"
            rows={5}
            className="mt-5 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
          />
        </section>

        <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Order summary</h2>

            <span className="text-sm text-neutral-500">
              {orderItems.length} productos
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4"
              >
                <div>
                  <p className="text-sm font-medium">{item.title}</p>

                  <p className="mt-1 text-xs text-neutral-500">
                    Cantidad: {item.quantity}
                  </p>
                </div>

                <p className="text-sm font-medium">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-neutral-100 pt-5 text-sm">
            <div className="flex items-center justify-between text-neutral-500">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex items-center justify-between text-neutral-500">
              <span>Entrega</span>
              <span>${deliveryFee}</span>
            </div>

            <div className="flex items-center justify-between text-base font-semibold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </section>

        <button className="h-14 rounded-2xl bg-black text-sm font-medium text-white transition hover:opacity-90">
          Proceed to payment
        </button>
      </div>
    </main>
  );
}
