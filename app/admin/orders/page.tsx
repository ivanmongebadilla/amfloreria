import Link from "next/link";
import { mockOrders } from "@/src/data/orderitemstest";
import { OrderCard } from "@/src/components/admin/OrderCard";

export default function Orders() {

    const pendingOrders = mockOrders.filter((order) => order.order_status === "pending");
    const preparingOrders = mockOrders.filter((order) => order.order_status === "preparing");
    const outForDelivery = mockOrders.filter((order) => order.order_status === "out_for_delivery")
    const delivered = mockOrders.filter((order) => order.order_status === "delivered")

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/admin/dashboard"
          className="mb-4 inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-[var(--blush)]/40 sm:text-xs"
        >
          ← Dashboard
        </Link>

        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          A|M Florería
        </p>

        <h1 className="mt-2 text-4xl font-light tracking-tight">
          Órdenes
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          Administra y da seguimiento a los pedidos.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <h2 className="text-lg font-medium">
            Estado de Pedidos
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-500">
                Pendientes
              </p>

              <p className="mt-1 text-2xl font-light">
                {pendingOrders.length}
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                Preparando
              </p>

              <p className="mt-1 text-2xl font-light">
                5
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                En Camino
              </p>

              <p className="mt-1 text-2xl font-light">
                3
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                Entregadas
              </p>

              <p className="mt-1 text-2xl font-light">
                47
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <input
            placeholder="Buscar orden o cliente..."
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
          />
        </div>

        <div className="mt-8 space-y-6">
          <details
            open
            className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <summary className="cursor-pointer list-none px-6 py-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">
                  Pendientes
                </h2>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                  {pendingOrders.length}
                </span>
              </div>
            </summary>

            <div className="space-y-4 px-6 pb-6">
              {pendingOrders.map((order) => (<OrderCard key={order.id} order={order}/> ))}
            </div>
          </details>

          <details className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <summary className="cursor-pointer list-none px-6 py-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">
                  Preparando
                </h2>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                  {preparingOrders.length}
                </span>
              </div>
            </summary>

            <div className="space-y-4 px-6 pb-6">
              {preparingOrders.map((order) => (<OrderCard key={order.id} order={order}/> ))}
            </div>
          </details>

          <details className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <summary className="cursor-pointer list-none px-6 py-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">
                  En Camino
                </h2>

                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700">
                  {outForDelivery.length}
                </span>
              </div>
            </summary>

            <div className="space-y-4 px-6 pb-6">
              {outForDelivery.map((order) => (<OrderCard key={order.id} order={order}/> ))}
            </div>
          </details>

          <details className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <summary className="cursor-pointer list-none px-6 py-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">
                  Entregadas
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                  {delivered.length}
                </span>
              </div>
            </summary>
          </details>
        </div>
      </div>
    </main>
  );
}