import { OrderWithItems } from "@/src/types/OrderWithItems"

interface OrderCardProps{
    order: OrderWithItems;
}

export function OrderCard({order}: OrderCardProps){

    console.log(order);
    return (
        <div
            key={order.id}
            className="rounded-2xl border-3 border-neutral-300 bg-white p-5"
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                {order.id}
                </p>

                <h3 className="mt-2 text-lg font-medium">
                {order.customer_name}
                </h3>

                <p className="text-sm text-neutral-500">
                Telefono: {order.customer_phone}
                </p>
            </div>

            <span
                className={`h-fit rounded-full px-3 py-1 text-xs ${
                    order.order_status === "delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                }`}
            >
                {order.order_status === "delivered"
                    ? "Entregada"
                    : "Pendiente"}
            </span>
            </div>

            <div className="mt-5">
            <p className="text-sm font-medium">
                Productos -{" "}
                {order.order_items.length}
            </p>

            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                {order.order_items.map(
                (item) => (
                    <li key={item.id}>
                    • {item.product_title}
                    </li>
                )
                )}
            </ul>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                Entrega
                </p>

                <p className="mt-1 text-sm">
                {order.delivery_date}
                </p>

                <p className="text-sm text-neutral-500">
                {order.delivery_time}
                </p>
            </div>

            <div>
                <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                Total
                </p>

                <p className="mt-1 text-lg font-medium">
                ${order.total}
                </p>
            </div>
            </div>

            <div className="mt-6 flex gap-3">
                <button className="rounded-full border border-neutral-200 px-5 py-2 text-sm transition hover:bg-neutral-50">
                    Ver Orden
                </button>

                {order.order_status === "pending" && (
                    <button
                        className="rounded-full bg-green-600 px-5 py-2 text-sm text-white transition hover:bg-green-700"
                    >
                        Marcar como Entregada
                    </button>
                )}
            </div>

            {/* <div className="mt-6">
            <button className="rounded-full border border-neutral-200 px-5 py-2 text-sm transition hover:bg-neutral-50">
                Ver Orden
            </button>
            
            </div> */}
        </div>
    )
}