import {
  Facebook,
  Instagram,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden px-4 py-6 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 md:gap-24">
          <header className="flex flex-col gap-6 border-b border-[color:var(--border)] pb-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 text-center md:text-left">
              <p className="font-heading text-3xl tracking-[0.25em] text-[var(--foreground)] md:text-4xl">
                A|M
              </p>
              <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-500 md:text-xs">
                Boutique Floral
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 md:justify-end">
              <nav className="flex items-center justify-center gap-5 text-[10px] uppercase tracking-[0.2em] text-neutral-700 sm:gap-8 sm:text-xs">
                <a href="#colecciones">Colecciones</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#contacto">Contacto</a>
              </nav>

              <button className="rounded-full border border-[color:var(--border)] bg-white/80 p-3 backdrop-blur-sm transition-colors hover:bg-[var(--blush)]/40">
                <ShoppingBag size={18} />
              </button>
            </div>
          </header>

          <section
            id="colecciones"
            className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
          >
            <div className="space-y-6 text-center lg:text-left">
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

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
                <button className="rounded-full bg-[var(--foreground)] px-6 py-4 text-xs uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.02] sm:px-8 sm:text-sm">
                  Ver Colección
                </button>

                <button className="rounded-full border border-[color:var(--border)] bg-white/80 px-6 py-4 text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-colors hover:bg-[var(--blush)]/40 sm:px-8 sm:text-sm">
                  Bouquet Personalizado
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -left-6 top-6 h-40 w-40 rounded-full bg-[var(--blush)] opacity-70 blur-3xl sm:h-56 sm:w-56" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[var(--sage)] opacity-40 blur-3xl sm:h-72 sm:w-72" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-[var(--beige)] via-[var(--blush)] to-[var(--sage)] p-4 shadow-2xl shadow-black/5 sm:rounded-[2.5rem] sm:p-8">
                <div className="flex min-h-[360px] items-end rounded-[1.5rem] border border-white/40 bg-white/20 p-6 backdrop-blur-sm sm:min-h-[560px] sm:rounded-[2rem] sm:p-10">
                  <div className="space-y-4 sm:space-y-5">
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
                transmitir emoción, elegancia y personalidad. Nuestro enfoque
                combina diseño moderno con detalles delicados para crear piezas
                únicas para cualquier ocasión.
              </p>

              <p className="text-base leading-8">
                Cada bouquet es cuidadosamente elaborado utilizando flores
                frescas y composiciones inspiradas en una estética sofisticada,
                romántica y atemporal.
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
                <p className="text-lg">(555) 123-4567</p>
                <p className="text-lg">contacto@amboutiquefloral.com</p>
              </div>
            </div>
          </section>

          <footer className="flex flex-col items-center justify-between gap-6 border-t border-[color:var(--border)] py-8 text-center md:flex-row md:text-left">
            <div>
              <p className="font-heading text-2xl tracking-[0.2em]">A|M</p>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Boutique Floral
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="rounded-full border border-[color:var(--border)] p-3 transition-colors hover:bg-[var(--blush)]/40"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-[color:var(--border)] p-3 transition-colors hover:bg-[var(--blush)]/40"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-[color:var(--border)] p-3 transition-colors hover:bg-[var(--blush)]/40"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
