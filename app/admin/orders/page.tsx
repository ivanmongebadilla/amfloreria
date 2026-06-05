import Link from "next/link";
import { mockOrders } from "@/src/data/orderitemstest";
import { OrderSection } from "@/src/components/admin/OrderSection";
import { OrdersStats } from "@/src/components/admin/OrderStats";

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

        <OrdersStats
            pending={pendingOrders.length}
            preparing={preparingOrders.length}
            outForDelivery={outForDelivery.length}
            delivered={delivered.length}
        />

        <div className="mt-8">
          <input
            placeholder="Buscar orden o cliente..."
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
          />
        </div>

        <div className="mt-8 space-y-6">
           <OrderSection
                status="Pendientes"
                orders={pendingOrders}
                open
            />

            <OrderSection
                status="Preparando"
                orders={preparingOrders}
            />

            <OrderSection
                status="En Camino"
                orders={outForDelivery}
            />

            <OrderSection
                status="Entregadas"
                orders={delivered}
            /> 
        </div>
      </div>
    </main>
  );
}