import Product from "@/src/types/Products";

interface ProductTableBodyProps {
    products: Product[];
}

export default function ProductTableBody({products}: ProductTableBodyProps) {
    return(
    // <table className="w-full">
    <table className="min-w-[700px] w-full">
        <thead>
            <tr className="border-b border-neutral-100">
                <th className="px-6 py-4 text-left text-sm font-medium">
                Nombre
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium">
                Precio
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium">
                Estado
                </th>

                <th className="px-6 py-4 text-right text-sm font-medium">
                Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr
                key={product.id}
                className="border-b border-neutral-100 last:border-0"
                >
                <td className="px-6 py-4">
                    {product.title}
                </td>

                <td className="px-6 py-4">
                    ${product.price}
                </td>

                <td className="px-6 py-4">
                    <span
                    className={`rounded-full px-3 py-1 text-xs ${
                        product.active
                        ? "bg-green-100 text-green-700"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                    >
                    {product.active
                        ? "Activo"
                        : "Inactivo"}
                    </span>
                </td>

                <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                    <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm transition hover:bg-neutral-50">
                        Editar
                    </button>

                    <button className="rounded-full border border-red-200 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50">
                        Eliminar
                    </button>
                    </div>
                </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}