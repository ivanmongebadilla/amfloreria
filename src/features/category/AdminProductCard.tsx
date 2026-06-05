"use client"
import Product from "@/src/types/Products";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface AdminProductCardProps {
    products: Product[];
    category: string;
}

export default function AdminProductCard({products, category}: AdminProductCardProps) {

    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    async function handleDelete(selectedProduct: Product){
        setDeleting(true)
        try {
            await fetch(
                `/api/products/${selectedProduct.id}`,
                {
                method: "DELETE",
                }
            );

            handleCloseModal();

            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setDeleting(false)
        }
    }

    function handleDeleteClick(product: Product){
        setSelectedProduct(product);
        setIsDeleting(true);
    }

    function handleCloseModal(){
        setIsDeleting(false);
        setSelectedProduct(null);
    }

    return (
        <>
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
                

                <button 
                    onClick={() =>
                        handleDeleteClick(product)
                    }
                    className="flex-1 rounded-full border border-red-200 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50">
                    Eliminar
                </button>
                </div>
            </div>
            </div>
        ))}
        </div>

            {isDeleting && selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
                <h2 className="text-xl font-medium">
                    Eliminar Producto
                </h2>

                <p className="mt-4 text-sm text-neutral-600">
                    ¿Estás seguro de eliminar{" "}
                    <span className="font-medium">
                    {selectedProduct.title}
                    </span>
                    ?
                </p>

                <p className="mt-2 text-sm text-red-600">
                    Esta acción no se puede deshacer.
                </p>

                <div className="mt-6">
                    {deleting ? (
                        <div className="rounded-full bg-neutral-100 px-4 py-3 text-center text-sm font-medium text-neutral-600">
                        Eliminando...
                        </div>
                    ) : (
                        <div className="flex gap-3">
                        <button
                            onClick={handleCloseModal}
                            className="flex-1 rounded-full border border-neutral-200 px-4 py-3 text-sm transition hover:bg-neutral-50"
                        >
                            Cancelar
                        </button>

                        <button
                            onClick={() => handleDelete(selectedProduct)}
                            className="flex-1 rounded-full bg-red-600 px-4 py-3 text-sm text-white transition hover:bg-red-700"
                        >
                            Eliminar
                        </button>
                        </div>
                    )}
                </div>

                {/* <div className="mt-6 flex gap-3">
                    <button
                    onClick={handleCloseModal}
                    className="flex-1 rounded-full border border-neutral-200 px-4 py-3 text-sm transition hover:bg-neutral-50"
                    >
                    Cancelar
                    </button>

                    <button
                        onClick={() => handleDelete(selectedProduct)}
                    className="flex-1 rounded-full bg-red-600 px-4 py-3 text-sm text-white transition hover:bg-red-700"
                    >
                        Eliminar
                    </button>
                </div> */}
                </div>
            </div>
)}
        </>
    );
}