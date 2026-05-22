import Link from "next/link";
import Image from "next/image";
import { products } from "@/src/data/products";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const formattedTitle = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-6">
          <Link
            href="/shop"
            className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-neutral-500 transition hover:text-black"
          >
            ← Volver a Shop
          </Link>

          <div className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Categoría
            </p>

            <h1 className="font-heading text-5xl leading-none md:text-6xl">
              {formattedTitle}
            </h1>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-5 min-[450px]:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h2 className="font-heading text-2xl leading-none">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.flowers.map((flower) => (
                    <span
                      key={flower}
                      className="rounded-full bg-[var(--beige)] px-3 py-1 text-xs"
                    >
                      {flower}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-lg font-medium">
                    ${product.price} MXN
                  </p>

                  <button className="rounded-full bg-[var(--foreground)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:opacity-90">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
