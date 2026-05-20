import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    title: "Bouquet Romance",
    price: "$1,250 MXN",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Blush",
    price: "$1,850 MXN",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Garden Signature",
    price: "$1,490 MXN",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Soft Peonies",
    price: "$1,690 MXN",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <header className="flex flex-col gap-6 border-b border-[color:var(--border)] pb-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="space-y-1 text-center md:text-left">
            <p className="font-heading text-3xl tracking-[0.25em] md:text-4xl">
              A|M
            </p>
            <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-500 md:text-xs">
              Boutique Floral
            </p>
          </Link>

          <div className="flex items-center justify-center gap-4 md:justify-end">
            <nav className="flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-neutral-700 sm:gap-8 sm:text-xs">
              <Link href="/">Inicio</Link>
              <Link href="/#nosotros">Nosotros</Link>
              <Link href="/#contacto">Contacto</Link>
            </nav>

            <button className="rounded-full border border-[color:var(--border)] bg-white/80 p-3 backdrop-blur-sm transition-colors hover:bg-[var(--blush)]/40">
              <ShoppingBag size={18} />
            </button>
          </div>
        </header>

        <section className="space-y-5 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Shop
          </p>

          <h1 className="font-heading text-5xl leading-none md:text-7xl">
            Colección Floral
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            Descubre bouquets y arreglos diseñados para regalar emociones,
            celebrar momentos especiales y llenar espacios de elegancia.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/40 shadow-lg shadow-black/5 backdrop-blur-sm"
            >
              <div
                className="h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />

              <div className="space-y-3 p-4 sm:p-5">
                <div>
                  <h2 className="font-heading text-2xl leading-none sm:text-3xl">
                    {product.title}
                  </h2>
                </div>

                <p className="text-sm tracking-[0.15em] text-neutral-500 uppercase">
                  {product.price}
                </p>

                <button className="w-full rounded-full bg-[var(--foreground)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90">
                  Agregar al carrito
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
