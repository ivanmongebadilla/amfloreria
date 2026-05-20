import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
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
  );
}
