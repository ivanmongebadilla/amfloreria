import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const categories = [
  {
    title: "Ramos",
    description: "Bouquets elegantes para regalar momentos especiales.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/ramos",
  },
  {
    title: "Arreglos Florales",
    description: "Diseños premium para decoración y celebraciones.",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/arreglos-florales",
  },
  {
    title: "Condolencias",
    description: "Arreglos florales elegantes para acompañar momentos difíciles.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/condolencias",
  },
  {
    title: "Eventos",
    description: "Flores diseñadas para bodas y celebraciones memorables.",
    image:
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/eventos",
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
            Colecciones Florales
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            Explora nuestras categorías y descubre arreglos diseñados para
            cada ocasión, estilo y momento especial.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 shadow-xl shadow-black/5 backdrop-blur-sm"
            >
              <div
                className="h-[340px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-6 text-white sm:p-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                    A|M Collection
                  </p>

                  <h2 className="font-heading text-4xl leading-none sm:text-5xl">
                    {category.title}
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base">
                  {category.description}
                </p>

                <div className="w-fit rounded-full border border-white/30 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black">
                  Explorar
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
