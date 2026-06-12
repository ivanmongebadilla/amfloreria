import AdminCard from "@/src/components/admin/AdminCard";
import { DashboardStats } from "@/src/components/admin/DashbordStats";

import EnableNotificationsButton from "@/src/components/admin/EnableNotificationsButton";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            A|M Florería
          </p>

          <div className="mt-3 flex items-start justify-between gap-4">
            <h1 className="text-4xl font-light tracking-tight">
              Dashboard
            </h1>

            <EnableNotificationsButton />
          </div>

          <p className="mt-2 text-sm text-neutral-500">
            Administra productos, pedidos y la información de la tienda.
          </p>
        </div>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AdminCard
            title="Pedidos"
            description="Ver y administrar pedidos."
            href="/admin/orders"
          />

          <AdminCard
            title="Productos"
            description="Agregar, editar o eliminar productos."
            href="/admin/products"
          />

          {/* <AdminCard
            title="Ventas"
            description="Consultar métricas y ventas."
            href="/admin/sales"
          /> */}

          {/* <AdminCard
            title="Configuración"
            description="Administrar información de la tienda."
            href="/admin/settings"
          /> */}
        </section>

        <div>
          <DashboardStats />
        </div>
      </div>
    </main>
  );
}