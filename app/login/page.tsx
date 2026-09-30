"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../action";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");

    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            R
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Evaluación de inversiones
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Rentabilidad de Proyectos
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Ingresá la contraseña para acceder al dashboard.
          </p>
        </div>

        <form action={handleSubmit}>
          <label className="text-sm font-semibold text-slate-700">
            Contraseña
          </label>

          <input
            name="password"
            type="password"
            required
            autoFocus
            placeholder="Ingresá la contraseña"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          {error && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <p className="mt-7 text-center text-xs text-slate-400">
          Acceso restringido · Información de uso interno
        </p>
      </div>
    </main>
  );
}