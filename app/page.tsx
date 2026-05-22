import Link from "next/link";
import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";
import { CollectionCard } from "@/src/components/ui/CollectionCard";
import { categories } from "@/src/data/categories";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden px-4 py-6 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 md:gap-24">
          <Navbar />

          <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm sm:px-5 sm:text-xs">
                Diseño Floral de Lujo
              </div>

              <div className="space-y-5">
                <h1 className="mx-auto max-w-[320px] font-heading text-5xl leading-[0.95] font-medium tracking-tight sm:max-w-xl sm:text-6xl md:text-7xl lg:mx-0 lg:max-w-3xl lg:text-8xl">
                  Arreglos florales elegantes diseñados con emoción.
                </h1>

                <p className="mx-auto max-w-md text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-xl">
                  A|M Boutique Floral crea bouquets premium y experiencias
                  florales para celebraciones, regalos y momentos especiales.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/shop"
                  className="rounded-full bg-[var(--foreground)] px-8 py-4 text-xs uppercase tracking-[0.25em] text-white! transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                >
                  Comprar
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -left-6 top-6 h-40 w-40 rounded-full bg-[var(--blush)] opacity-70 blur-3xl sm:h-56 sm:w-56" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[var(--sage)] opacity-40 blur-3xl sm:h-72 sm:w-72" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-[var(--beige)] via-[var(--blush)] to-[var(--sage)] p-4 shadow-2xl shadow-black/5 sm:rounded-[2.5rem] sm:p-8">
                <div className="relative flex min-h-[360px] items-end overflow-hidden rounded-[1.5rem] border border-white/40 bg-white/20 p-6 backdrop-blur-sm sm:min-h-[560px] sm:rounded-[2rem] sm:p-10">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 blur-[2px]"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop")',
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />

                  <div className="relative z-10 space-y-4 sm:space-y-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-700 sm:text-xs">
                      Colección Signature
                    </p>

                    <h2 className="max-w-xs font-heading text-4xl leading-none sm:max-w-sm sm:text-5xl">
                      Arte floral inspirado en la elegancia atemporal.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="colecciones" className="space-y-10">
            <div className="space-y-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Colecciones
              </p>

              <h2 className="font-heading text-5xl leading-none md:text-6xl">
                Diseños florales para cada estilo.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {categories.map((collection) => (
                <CollectionCard
                  key={collection.title}
                  title={collection.title}
                  description={collection.description}
                  image={collection.image}
                />
              ))}
            </div>
          </section>

          <section
            id="nosotros"
            className="grid gap-10 rounded-[2rem] border border-[color:var(--border)] bg-white/60 p-8 backdrop-blur-sm md:grid-cols-2 md:p-12"
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Sobre Nosotros
              </p>

              <h2 className="font-heading text-5xl leading-none md:text-6xl">
                Diseñamos momentos que se convierten en recuerdos.
              </h2>
            </div>

            <div className="space-y-6 text-neutral-600">
              <p className="text-base leading-8">
                En A|M Boutique Floral creemos que cada arreglo floral debe
                transmitir emoción, elegancia y personalidad.
              </p>

              <p className="text-base leading-8">
                Cada bouquet es cuidadosamente elaborado utilizando flores
                frescas y composiciones inspiradas en una estética sofisticada.
              </p>
            </div>
          </section>

          <section
            id="contacto"
            className="rounded-[2rem] bg-[var(--foreground)] px-6 py-12 text-white sm:px-10 md:px-14"
          >
            <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Contacto
                </p>

                <h2 className="font-heading text-5xl leading-none md:text-6xl">
                  Hagamos algo hermoso juntos.
                </h2>
              </div>

              <div className="space-y-4 text-center md:text-right">
                <p className="text-lg">Telefono: (555) 123-4567</p>
                <p className="text-lg">Whatsapp: (555) 123-4567</p>
                <p className="text-lg">Email: contacto@amboutiquefloral.com</p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </section>
    </main>
  );
}
