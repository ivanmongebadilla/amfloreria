import AdminCard from "@/src/components/admin/AdminCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            A|M Florería
          </p>

          <h1 className="mt-3 text-4xl font-light tracking-tight">
            Dashboard
          </h1>

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

          <AdminCard
            title="Ventas"
            description="Consultar métricas y ventas."
            href="/admin/sales"
          />

          <AdminCard
            title="Configuración"
            description="Administrar información de la tienda."
            href="/admin/settings"
          />
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-neutral-500">
              Pedidos Pendientes
            </p>

            <p className="mt-2 text-4xl font-light">
              --
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-neutral-500">
              Productos Activos
            </p>

            <p className="mt-2 text-4xl font-light">
              --
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-neutral-500">
              Ventas del Mes
            </p>

            <p className="mt-2 text-4xl font-light">
              --
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}