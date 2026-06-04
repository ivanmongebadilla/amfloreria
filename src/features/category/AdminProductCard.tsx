import Product from "@/src/types/Products";
import Link from "next/link";

interface AdminProductCardProps {
    products: Product[];
    category: string;
}

export default function AdminProductCard({products, category}: AdminProductCardProps) {
    return (
        <div className="grid p-4 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
            <div
            key={product.id}
            className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
            >
            <div
                className="h-[220px] bg-contain bg-center bg-no-repeat transition-transform duration-700 hover:scale-[1.02]"
                style={{
                    backgroundImage: `url(${product.image})`,
                }}
            />

            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-medium">
                    {product.title}
                </h2>

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
                </div>

                <p className="mt-3 text-xl font-light">
                ${product.price}
                </p>

                <div className="mt-6 flex gap-2">
                <Link href={`/admin/products/${category}/${product.id}/edit`}>
                    <button className="flex-1 rounded-full border border-neutral-200 px-4 py-2 text-sm transition hover:bg-neutral-50">
                        Editar
                    </button>
                </Link>
                

                <button className="flex-1 rounded-full border border-red-200 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50">
                    Eliminar
                </button>
                </div>
            </div>
            </div>
        ))}
        </div>
    );
}