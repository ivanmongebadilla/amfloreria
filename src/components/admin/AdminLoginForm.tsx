"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/src/lib/supabase/client";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ loading, setLoading] = useState(false)

  const router = useRouter();
  const supabase = createClient();

async function handleSubmit(
      e: React.FormEvent
  ) {
      e.preventDefault();
       try {
          setLoading(true);

          const { error } =
              await supabase.auth.signInWithPassword({
                  email,
                  password,
              });

          if (error) {
              throw error;
          }

          router.push("/admin/dashboard");
          router.refresh();
      } catch (error) {
          console.error(error);

          alert(
              "Usuario o contraseña incorrectos"
          );
      }
  }

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          A|M Florería
        </p>

        <h1 className="mt-3 text-3xl font-light tracking-tight">
          Admin Login
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          Inicia sesión para administrar productos y pedidos.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4"
      >
        <div>
          <label className="mb-2 block text-sm">
            Email
          </label>

          <input
            type="text"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">
            Contraseña
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            placeholder="Contraseña"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-full bg-black px-5 py-3 text-sm text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Iniciando Sesion..." : "Iniciar Sesion" }
        </button>
      </form>
    </div>
  );
}