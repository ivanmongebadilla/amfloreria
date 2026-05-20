import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  href: string;
}

export function ProductCard({
  title,
  price,
  image,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[1.5rem] border border-white/50 bg-white/40 shadow-lg shadow-black/5 backdrop-blur-sm"
    >
      <div
        className="h-[250px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 sm:h-[340px]"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="space-y-3 p-4 sm:p-5">
        <div className="space-y-1">
          <p className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 sm:text-[10px]">
            A|M Bouquet
          </p>

          <h2 className="font-heading text-2xl leading-none sm:text-3xl">
            {title}
          </h2>
        </div>

        <p className="text-sm uppercase tracking-[0.15em] text-neutral-500">
          {price}
        </p>

        <div className="w-fit rounded-full bg-[var(--foreground)] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white sm:px-5 sm:text-xs">
          Seleccionar
        </div>
      </div>
    </Link>
  );
}
