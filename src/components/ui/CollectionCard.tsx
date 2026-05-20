import Link from "next/link";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
}

export function CollectionCard({
  title,
  description,
  image,
}: CollectionCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/40 shadow-lg shadow-black/5 backdrop-blur-sm">
      <div
        className="h-[300px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-3 p-4 text-white sm:p-6">
        <div>
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/70 sm:text-[10px]">
            A|M Collection
          </p>

          <h3 className="font-heading text-3xl leading-none sm:text-4xl">
            {title}
          </h3>
        </div>

        <p className="text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
          {description}
        </p>

        <Link
          href="/shop"
          className="w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md transition-colors hover:bg-white hover:text-black sm:px-5 sm:py-2.5 sm:text-xs"
        >
          Explorar
        </Link>
      </div>
    </article>
  );
}
