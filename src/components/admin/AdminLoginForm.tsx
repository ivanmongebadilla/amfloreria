"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        try {
            const response = await fetch(
            "/api/admin-login",
            {
                method: "POST",
                headers: {
                "Content-Type":
                    "application/json",
                },
                body: JSON.stringify({
                username,
                password,
                }),
            }
            );

            const data = await response.json();

            if (!response.ok) {
            throw new Error(
                data.message ??
                "Error al iniciar sesión"
            );
            }

            router.push("/admin/dashboard");
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
            Usuario
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black"
            placeholder="Usuario"
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
          className="mt-4 w-full rounded-full bg-black px-5 py-3 text-sm text-white transition hover:opacity-90"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}