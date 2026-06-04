"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CreateProductFormProps{
    category: string;
}

export default function CreateProductForm({category}: CreateProductFormProps){
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [active, setActive] = useState<boolean>(true);
    const [imagePreview, setImagePreview] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isSaving, setIsSaving] = useState(false)
    const [status, setStatus] = useState<"success" | "error" | null>(null);
    const [message, setMessage] = useState("");

    const getFormData = () => {
        const formData = new FormData();

        formData.append(
            "title",
            title
        );

        formData.append(
            "description",
            description
        );

        formData.append(
            "price",
            price.toString()
        );

        formData.append(
            "active",
            active.toString()
        );

        formData.append(
            "category",
            category
        )

        if (imageFile){
            formData.append(
                "imageFile",
                imageFile
            );
        }
        
        return formData
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const formData = getFormData()

        try {
            setIsSaving(true);

            const response = await fetch('/api/products/create', {
                    method: "POST",
                    body: formData
                }
            )

            if (!response.ok) {
                throw new Error();
            }

            setStatus("success");
            setMessage(
            "Producto actualizado correctamente"
            );

            setTimeout(() => {
                router.push(
                    `/admin/products/${category}`
                );
            }, 1000);
        } catch  {
            setStatus("error");
            setMessage(
            "Error al crear producto"
            );
        } finally {
            setIsSaving(false);
        }
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (!file) return;

        setImageFile(file);

        const previewUrl =
            URL.createObjectURL(file);

        setImagePreview(previewUrl);
    }

    return(
        <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
        >
        <h2 className="text-2xl font-light">
            Editar Producto
        </h2>

        <div className="mt-6 space-y-5">
            <div>
            <label className="mb-2 block text-sm">
                Nombre
            </label>

            <input
                type="text"
                value={title}
                onChange={(e) =>
                setTitle(e.target.value)
                }
                className="h-12 w-full rounded-2xl border border-neutral-200 px-4 text-sm outline-none transition focus:border-black"
            />
            </div>

            <div>
            <label className="mb-2 block text-sm">
                Descripción
            </label>

            <textarea
                rows={5}
                value={description}
                onChange={(e) =>
                setDescription(
                    e.target.value
                )
                }
                className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-black"
            />
            </div>

            <div>
            <label className="mb-2 block text-sm">
                Precio
            </label>

            <input
                type="number"
                value={price}
                onChange={(e) =>
                setPrice(
                    Number(e.target.value)
                )
                }
                className="h-12 w-full rounded-2xl border border-neutral-200 px-4 text-sm outline-none transition focus:border-black"
            />
            </div>

            <div>
                <label className="mb-2 block text-sm">
                    Imagen del Producto
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="product-image"
                />

                <label
                    htmlFor="product-image"
                    className="inline-flex cursor-pointer rounded-full border border-neutral-200 px-5 py-3 text-sm transition hover:bg-neutral-50"
                >
                    Seleccionar Imagen
                </label>
            </div>

            <div className="flex items-center gap-3">
            <input
                id="active"
                type="checkbox"
                checked={active}
                onChange={(e) =>
                setActive(
                    e.target.checked
                )
                }
            />

            <label
                htmlFor="active"
                className="text-sm"
            >
                Producto Activo
            </label>
            </div>

            {message && (
                <div
                    className={`mt-6 rounded-3xl p-4 text-center ring-1 ${
                    status === "success"
                        ? "bg-green-50 text-green-700 ring-green-200"
                        : "bg-red-50 text-red-700 ring-red-200"
                    }`}
                >
                    <p className="text-base font-medium">
                    {status === "success" ? "✓" : "✕"} {message}
                    </p>
                </div>
            )}

            <button
            type="submit"
            disabled={isSaving}
            className="w-full rounded-full bg-black px-6 py-3 text-sm text-white transition hover:opacity-90 disabled:opacity-50"
            >
            {isSaving
                ? "Guardando..."
                : "Guardar Producto"}
            </button>
        </div>
        </form>
    )
}