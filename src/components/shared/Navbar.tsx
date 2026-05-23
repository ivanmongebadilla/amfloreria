import Link from "next/link";
// import { ShoppingBag } from "lucide-react";
import CartIcon from "../cart/CartIcon";

interface NavbarProps {
  showShopLink?: boolean;
}

export function Navbar({ showShopLink = true }: NavbarProps) {
  return (
    <header className="flex flex-col gap-6 border-b border-[color:var(--border)] pb-6 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="space-y-1 text-center md:text-left">
        <p className="font-heading text-3xl tracking-[0.25em] md:text-4xl">
          A|M
        </p>
        <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-500 md:text-xs">
          Boutique Floral
        </p>
      </Link>

      <div className="flex items-center justify-center gap-4 md:justify-end">
        <nav className="flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-neutral-700 sm:gap-8 sm:text-xs">
          {showShopLink ? (
            <Link href="/shop">Comprar</Link>
          ) : (
            <Link href="/">Inicio</Link>
          )}

          <Link href="/#nosotros">Nosotros</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>

        <Link href="/checkout">
          <div 
            className="rounded-full border border-[color:var(--border)] bg-white/80 p-3 backdrop-blur-sm transition-colors hover:bg-[var(--blush)]/40"
          >
            <CartIcon />
          </div>
        </Link>

        {/* <Link
          href="/shop"
          className="rounded-full border border-[color:var(--border)] bg-white/80 p-3 backdrop-blur-sm transition-colors hover:bg-[var(--blush)]/40"
        >
          <ShoppingBag size={18} />
        </Link> */}
      </div>
    </header>
  );
}
