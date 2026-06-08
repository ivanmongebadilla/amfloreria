import { getAllOrders } from "@/src/actions/orders/getAllOrders"
import { getAllProducts } from "@/src/lib/products";
import { getMonthlyOrders } from "@/src/actions/orders/getMonthlyOrders";

export async function DashboardStats() {
    const orders = await getAllOrders();
    const products = await getAllProducts();
    const monthlyOrders = await getMonthlyOrders();
    const pendingOrders = orders.filter((order) => order.order_status === "pending");
    const activeProducts = products.filter((product) => product.active);

    return (
        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-neutral-500">
              Pedidos Pendientes
            </p>

            <p className="mt-2 text-4xl font-light">
              {pendingOrders.length}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-neutral-500">
              Productos Activos
            </p>

            <p className="mt-2 text-4xl font-light">
              {activeProducts.length}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-neutral-500">
              Ventas del Mes
            </p>

            <p className="mt-2 text-4xl font-light">
              ${monthlyOrders.data}
            </p>
          </div>
        </section>
    )
}