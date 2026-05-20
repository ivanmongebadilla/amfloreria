import Link from "next/link";
import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";

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
        <Navbar showShopLink={false} />

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

        <section className="grid grid-cols-2 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/40 shadow-xl shadow-black/5 backdrop-blur-sm"
            >
              <div
                className="h-[280px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 flex w-full flex-col gap-3 p-4 text-white sm:gap-4 sm:p-8">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/70 sm:text-[10px]">
                    A|M Collection
                  </p>

                  <h2 className="font-heading text-3xl leading-none sm:text-5xl">
                    {category.title}
                  </h2>
                </div>

                <p className="text-xs leading-5 text-white/80 sm:max-w-md sm:text-base sm:leading-7">
                  {category.description}
                </p>

                <div className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black sm:px-5 sm:py-3 sm:text-xs">
                  Explorar
                </div>
              </div>
            </Link>
          ))}
        </section>

        <Footer />
      </div>
    </main>
  );
}
