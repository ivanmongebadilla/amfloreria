import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function CategoryCard({
  title,
  description,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/40 shadow-xl shadow-black/5 backdrop-blur-sm"
    >
      <div
        className="h-[280px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-3 p-4 text-white sm:gap-4 sm:p-8">
        <div>
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/70 sm:text-[10px]">
            A|M Collection
          </p>

          <h2 className="font-heading text-3xl leading-none sm:text-5xl">
            {title}
          </h2>
        </div>

        <p className="text-xs leading-5 text-white/80 sm:max-w-md sm:text-base sm:leading-7">
          {description}
        </p>

        <div className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black sm:px-5 sm:py-3 sm:text-xs">
          Explorar
        </div>
      </div>
    </Link>
  );
}
