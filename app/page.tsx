import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dashboard from "./dashboard";

export default async function Home() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("dashboard-auth");

  if (auth?.value !== "authorized") {
    redirect("/login");
  }

  return <Dashboard />;
}