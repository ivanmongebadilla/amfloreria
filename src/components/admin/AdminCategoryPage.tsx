import Product from "@/src/types/Products";
import Link from "next/link";

interface CategoryPageProps {
    products: Product[];
    category: string;
}

export default function AdminCategoryPage({products, category}: CategoryPageProps){

    return (
        <main className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

            <div className="mb-8 flex items-center justify-between">
            <div>
                <Link
                href="/admin/products"
                className="mb-4 inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-[var(--blush)]/40 sm:text-xs"
                >
                ← Categorías
                </Link>

                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                A|M Florería
                </p>

                <h1 className="mt-2 text-4xl font-light tracking-tight">
                {category}
                </h1>

                <p className="mt-2 text-sm text-neutral-500">
                Administra los productos de esta categoría.
                </p>
            </div>

            <button className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:opacity-90">
                Agregar Producto
            </button>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <table className="w-full">
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

                    {/* <td className="px-6 py-4">
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
                    </td> */}

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
            </div>

        </div>
    </main>
    )
}