import { OrderWithItems } from "@/src/types/OrderWithItems"

interface OrderCardProps{
    order: OrderWithItems;
}

export function OrderCard({order}: OrderCardProps){
    return (
        <div
            key={order.id}
            className="rounded-2xl border border-neutral-100 p-5"
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
                {order.customer_phone}
                </p>
            </div>

            <span className="h-fit rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                Pendiente
            </span>
            </div>

            <div className="mt-5">
            <p className="text-sm font-medium">
                Productos -{" "}
                {order.items.length}
            </p>

            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                {order.items.map(
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

            <div className="mt-6">
            <button className="rounded-full border border-neutral-200 px-5 py-2 text-sm transition hover:bg-neutral-50">
                Ver Orden
            </button>
            </div>
        </div>
    )
}