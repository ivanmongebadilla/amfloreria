import Product from "@/src/types/Products";
import AdminProductCard from "@/src/features/category/AdminProductCard";
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

            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                <AdminProductCard products={products} category={category}/>
            </div>

        </div>
    </main>
    )
}