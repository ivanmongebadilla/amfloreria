import Product from "@/src/types/Products"
import Link from "next/link";
import EditProductForm from "@/src/components/admin/EditProductForm";

interface EditProductPageProps {
    product: Product;
    category: string
}

export default function EditProductPage({product, category}: EditProductPageProps) {
    return(
         <main className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

            <div className="mb-8 flex items-center justify-between">
                <div>
                    <Link
                    href={`/admin/products/${category}`}
                    className="mb-4 inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-[var(--blush)]/40 sm:text-xs"
                    >
                        ← Volver
                    </Link>

                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                        A|M Florería
                    </p>

                </div>
            </div>
            <EditProductForm product={product}/>
        </div>
    </main>
    )
}