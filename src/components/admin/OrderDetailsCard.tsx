interface OrderDetailsCardProps{
    status: string;
    quantity: number;
}

function getStatusBadgeClasses(
    status: string
) {
    switch (status) {
        case "Pendientes":
            return "bg-yellow-100 text-yellow-700";

        case "Preparando":
            return "bg-blue-100 text-blue-700";

        case "En Camino":
            return "bg-purple-100 text-purple-700";

        case "Entregadas":
            return "bg-green-100 text-green-700";

        case "Canceladas":
            return "bg-red-100 text-red-700";

        default:
            return "bg-neutral-100 text-neutral-700";
    }
}

export function OrderDetailsCard({status, quantity}: OrderDetailsCardProps){

    return(
        <summary className="cursor-pointer list-none px-6 py-5">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                    {status}
                </h2>

                <span
                    className={`
                        rounded-full
                        px-4
                        py-2
                        text-base
                        font-semibold
                        ${getStatusBadgeClasses(status)}
                    `}
                >
                    {quantity}
                </span>
            </div>
        </summary>
    )
}