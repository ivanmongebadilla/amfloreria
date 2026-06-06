import { OrderWithItems } from "@/src/types/OrderWithItems";
import { OrderCard } from "./OrderCard";
import { OrderDetailsCard } from "./OrderDetailsCard";

interface OrderSectionProps {
    status: string;
    orders: OrderWithItems[];
    open?: boolean;
}

export function OrderSection({
    status,
    orders,
    open = false,
}: OrderSectionProps) {
    return (
        <details
            open={open}
            className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
        >
            <OrderDetailsCard
                status={status}
                quantity={orders.length}
            />

            <div className="space-y-4 px-6 pb-6">
                {orders.map((order) => (
                    <OrderCard
                        key={order.id}
                        order={order}
                    />
                ))}
            </div>
        </details>
    );
}