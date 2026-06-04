import Link from "next/link";
import CreateProductForm from "@/src/components/admin/CreateProductForm";

interface CreateProductProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CreateProduct({params}: CreateProductProps){
    const { category } = await params

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

                        <h1 className="mt-2 text-4xl font-light tracking-tight">
                            {category}
                        </h1>

                        <p className="mt-2 text-sm text-neutral-500">
                            Agrega un producto a esta categoría.
                        </p>

                    </div>
                </div>
                <CreateProductForm category={category} />
            </div>
        </main>
    )
    
}