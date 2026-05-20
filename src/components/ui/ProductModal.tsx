"use client";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    price: string;
    image: string;
    flowers: string[];
    quantity: string;
    description: string;
  } | null;
}

export function ProductModal({
  isOpen,
  onClose,
  product,
}: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm md:items-center">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[var(--background)] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-30 rounded-full bg-white/90 px-3 py-2 text-xs uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm"
        >
          Cerrar
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <div
            className="h-[320px] bg-cover bg-center sm:h-[420px]"
            style={{ backgroundImage: `url(${product.image})` }}
          />

          <div className="space-y-8 p-6 pb-10 sm:p-8">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                A|M Bouquet
              </p>

              <h2 className="font-heading text-4xl leading-none sm:text-5xl">
                {product.title}
              </h2>

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                {product.price}
              </p>
            </div>

            <p className="text-base leading-8 text-neutral-600">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Flores Incluidas
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.flowers.map((flower) => (
                  <div
                    key={flower}
                    className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm"
                  >
                    {flower}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Cantidad
              </h3>

              <p className="text-lg text-neutral-700">{product.quantity}</p>
            </div>

            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Nota Personalizada
              </label>

              <textarea
                placeholder="Escribe un mensaje especial..."
                className="min-h-[120px] w-full rounded-[1.5rem] border border-[color:var(--border)] bg-white/70 p-4 outline-none"
              />
            </div>

            <button className="w-full rounded-full bg-[var(--foreground)] px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-90">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
