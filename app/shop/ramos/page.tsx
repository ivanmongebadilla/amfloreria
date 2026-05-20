import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";
import { ProductCard } from "@/src/components/ui/ProductCard";

const bouquets = [
  {
    title: "Bouquet Romance",
    price: "$1,250 MXN",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/ramos/bouquet-romance",
  },
  {
    title: "Soft Peonies",
    price: "$1,690 MXN",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/ramos/soft-peonies",
  },
  {
    title: "Luxury Blush",
    price: "$1,850 MXN",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/ramos/luxury-blush",
  },
  {
    title: "Garden Signature",
    price: "$1,490 MXN",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/ramos/garden-signature",
  },
  {
    title: "Elegant Ivory",
    price: "$1,390 MXN",
    image:
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/ramos/elegant-ivory",
  },
  {
    title: "Rosé Garden",
    price: "$1,720 MXN",
    image:
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=1200&auto=format&fit=crop",
    href: "/shop/ramos/rose-garden",
  },
];

export default function RamosPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <Navbar showShopLink={false} />

        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-gradient-to-br from-[var(--beige)] via-[var(--blush)] to-[var(--sage)] px-6 py-16 shadow-2xl shadow-black/5 sm:px-10 md:px-14 md:py-24">
          <div
            className="absolute inset-0 opacity-10 blur-[2px]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
              Ramos
            </p>

            <h1 className="font-heading text-5xl leading-none md:text-7xl">
              Bouquets diseñados para emocionar.
            </h1>

            <p className="text-base leading-8 text-neutral-700 sm:text-lg">
              Descubre ramos florales elegantes creados para celebrar momentos
              especiales, regalar emociones y transformar cualquier espacio.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 lg:gap-6">
          {bouquets.map((bouquet) => (
            <ProductCard
              key={bouquet.title}
              title={bouquet.title}
              price={bouquet.price}
              image={bouquet.image}
              href={bouquet.href}
            />
          ))}
        </section>

        <Footer />
      </div>
    </main>
  );
}
