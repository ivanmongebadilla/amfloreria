export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-16">
          <header className="flex items-center justify-between border-b border-[color:var(--border)] pb-6">
            <div>
              <p className="font-heading text-3xl tracking-[0.25em] text-[var(--foreground)]">
                A|M
              </p>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                Boutique Floral
              </p>
            </div>

            <nav className="hidden gap-10 text-sm uppercase tracking-[0.2em] md:flex">
              <a href="#collections">Collections</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-5 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur-sm">
                Luxury Floral Design
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl font-heading text-6xl leading-[0.95] font-medium tracking-tight md:text-7xl lg:text-8xl">
                  Elegant floral arrangements crafted with emotion.
                </h1>

                <p className="max-w-xl text-lg leading-8 text-neutral-600">
                  A|M Boutique Floral creates premium bouquets and floral
                  experiences designed for celebrations, gifts, and meaningful
                  moments.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-[var(--foreground)] px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.02]">
                  Shop Collection
                </button>

                <button className="rounded-full border border-[color:var(--border)] bg-white/80 px-8 py-4 text-sm uppercase tracking-[0.2em] backdrop-blur-sm transition-colors hover:bg-[var(--blush)]/40">
                  Custom Bouquet
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-[var(--blush)] opacity-70 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--sage)] opacity-40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-[var(--beige)] via-[var(--blush)] to-[var(--sage)] p-8 shadow-2xl shadow-black/5">
                <div className="flex min-h-[560px] items-end rounded-[2rem] border border-white/40 bg-white/20 p-10 backdrop-blur-sm">
                  <div className="space-y-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-700">
                      Signature Collection
                    </p>

                    <h2 className="max-w-sm font-heading text-5xl leading-none">
                      Floral artistry inspired by timeless elegance.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
