"use client";

import { useState } from "react";
import Product from "@/src/types/Products";
import { useRouter } from "next/navigation";

interface EditProductFormProps {
  product: Product;
}

export default function EditProductForm({product,}: EditProductFormProps) {

    const router = useRouter()

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [active, setActive] = useState(product.active);
  const [imagePreview, setImagePreview] = useState(product.image);
  const [flowerInput, setFlowerInput] = useState("");
  const [flowers, setFlowers] = useState<string[]>(product.flowers);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
        setIsSaving(true);

        const response = await fetch(
        `/api/products/${product.id}`,
        {
            method: "PUT",
            headers: {
            "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
            title,
            description,
            price,
            active,
            }),
        }
        );

        if (!response.ok) {
            throw new Error();
        }

        setStatus("success");
        setMessage(
        "Producto actualizado correctamente"
        );

        setTimeout(() => {
            router.push(
                `/admin/products/${product.category}`
            );
        }, 1000);
    } catch {
        setStatus("error");
        setMessage(
        "Error al actualizar producto"
        );
    } finally {
        setIsSaving(false);
    }
  }

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = e.target.files?.[0];

        if (!file) return;

        setImageFile(file);

        const previewUrl =
            URL.createObjectURL(file);

        setImagePreview(previewUrl);
  }

  function handleAddFlower() {
      if (!flowerInput.trim()) return;

      setFlowers((prev) => [
          ...prev,
          flowerInput.trim(),
      ]);

      setFlowerInput("");
  }

  function handleRemoveFlower(flowerToRemove: string) {
      setFlowers((prev) =>
          prev.filter(
          (flower) =>
              flower !== flowerToRemove
          )
      );
  }

  return (
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
                Contenido Floral
            </label>

            <div className="flex gap-2">
                <input
                type="text"
                value={flowerInput}
                onChange={(e) =>
                    setFlowerInput(e.target.value)
                }
                placeholder="Ej. Rosas"
                className="h-12 flex-1 rounded-2xl border border-neutral-200 px-4"
                />

                <button
                type="button"
                onClick={handleAddFlower}
                className="rounded-2xl bg-black px-4 text-white"
                >
                Agregar
                </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {flowers.map((flower) => (
                <div
                    key={flower}
                    className="flex items-center gap-2 rounded-full bg-[var(--blush)] px-3 py-2 text-sm"
                >
                    {flower}

                    <button
                    type="button"
                    onClick={() =>
                        handleRemoveFlower(flower)
                    }
                    >
                    ✕
                    </button>
                </div>
                ))}
            </div>
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

        <div>
          <label className="mb-2 block text-sm">
            Vista previa
          </label>

          <div
            className="h-[250px] rounded-2xl bg-contain bg-center bg-no-repeat ring-1 ring-black/5"
            style={{
              backgroundImage: `url(${imagePreview})`,
            }}
          />
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
            : "Guardar Cambios"}
        </button>
      </div>
    </form>
  );
}