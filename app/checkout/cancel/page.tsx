import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Pago Cancelado
        </p>

        <h1 className="mt-4 text-3xl font-light tracking-tight">
          No se completó el pago
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-neutral-500">
          Tu pedido no fue procesado porque el pago fue cancelado o no pudo
          completarse.
          <br />
          Puedes intentarlo nuevamente cuando lo desees.
        </p>

        <div className="mt-8">
          <Link href="/shop">
            <button className="w-full rounded-md bg-black px-4 py-3 text-white">
              Intentar nuevamente
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}