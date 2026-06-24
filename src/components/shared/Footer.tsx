import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-8">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        {/* Logo */}
        <div className="text-center md:text-left">
          <p className="font-heading text-2xl tracking-[0.2em]">A|M</p>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Boutique Floral
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/people/Am-Boutique-floral/100039831827677/?ref=NONE_xav_ig_profile_page_web#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[color:var(--border)] p-3 transition-colors hover:bg-[var(--blush)]/40"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>

          <a
            href="https://www.instagram.com/am_boutique_floral_caborca/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[color:var(--border)] p-3 transition-colors hover:bg-[var(--blush)]/40"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://wa.me/526379352828"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[color:var(--border)] p-3 transition-colors hover:bg-[var(--blush)]/40"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-[color:var(--border)] pt-5">
        <p className="text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} A|M Boutique Floral · Developed by{" "}
          <a
            href="https://www.instagram.com/ivanmb233/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-700 transition-colors hover:text-black"
          >
            Ivan Monge
          </a>
        </p>
      </div>
    </footer>
  );
}
