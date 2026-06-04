"use client";

import { useState } from "react";
import Product from "@/src/types/Products";

interface EditProductFormProps {
  product: Product;
}

// export default function EditProductForm({product}: EditProductFormProps){
//     console.log(product)
//     return(
//         <div>
//             {product.title}
//         </div>
//     )
// }

export default function EditProductForm({
  product,
}: EditProductFormProps) {
  const [title, setTitle] = useState(
    product.title
  );

  const [description, setDescription] =
    useState(product.description);

  const [price, setPrice] = useState(
    product.price
  );

  const [active, setActive] = useState(
    product.active
  );

  const [image, setImage] = useState(
    product.image
  );

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log({
      title,
      description,
      price,
      active,
      image,
    });
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
            URL Imagen
          </label>

          <input
            type="text"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            className="h-12 w-full rounded-2xl border border-neutral-200 px-4 text-sm outline-none transition focus:border-black"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">
            Vista previa
          </label>

          <div
            className="h-[250px] rounded-2xl bg-contain bg-center bg-no-repeat ring-1 ring-black/5"
            style={{
              backgroundImage: `url(${image})`,
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

        <button
          type="submit"
          className="w-full rounded-full bg-black px-6 py-3 text-sm text-white transition hover:opacity-90"
        >
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}