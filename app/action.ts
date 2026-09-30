"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const password = formData.get("password");

  if (password !== process.env.DASHBOARD_PASSWORD) {
    return { error: "Contraseña incorrecta" };
  }

  const cookieStore = await cookies();

  cookieStore.set("dashboard-auth", "authorized", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return { success: true };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("dashboard-auth");
}