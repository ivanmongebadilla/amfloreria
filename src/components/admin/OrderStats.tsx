import { OrderStatCard } from "./OrderStatCard";

interface OrdersStatsProps {
    pending: number;
    preparing: number;
    outForDelivery: number;
    delivered: number;
}

export function OrdersStats({
    pending,
    preparing,
    outForDelivery,
    delivered,
}: OrdersStatsProps) {
    return (
        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-medium">
                Estado de Pedidos
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-4">
                <OrderStatCard
                    label="Pendientes"
                    value={pending}
                />

                {/* <OrderStatCard
                    label="Preparando"
                    value={preparing}
                /> */}

                {/* <OrderStatCard
                    label="En Camino"
                    value={outForDelivery}
                /> */}

                <OrderStatCard
                    label="Entregadas"
                    value={delivered}
                />
            </div>
        </div>
    );
}