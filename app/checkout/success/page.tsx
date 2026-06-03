import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Pedido Confirmado
        </p>

        <h1 className="mt-4 text-3xl font-light tracking-tight">
          Pago procesado exitosamente
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-neutral-500">
          Gracias por confiar en A|M Florería.
          <br />
          Hemos recibido tu pago correctamente y comenzaremos a preparar tu pedido.
        </p>

        <div className="mt-8">
          <Link
            href="/"
          >
            <button className="w-full rounded-md bg-black px-4 py-3 text-white">
                Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}