import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";
import { CategoryCard } from "@/src/components/ui/CategoryCard";
import { categories } from "@/src/data/categories";

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
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
              href={category.href}
            />
          ))}
        </section>

        <Footer />
      </div>
    </main>
  );
}
