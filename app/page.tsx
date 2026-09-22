"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ventas = [
  { mes: "Ene", plan: 420, real: 410 },
  { mes: "Feb", plan: 480, real: 500 },
  { mes: "Mar", plan: 540, real: 570 },
  { mes: "Abr", plan: 590, real: 640 },
  { mes: "May", plan: 620, real: 690 },
  { mes: "Jun", plan: 650, real: 720 },
  { mes: "Jul", plan: 680, real: 760 },
  { mes: "Ago", plan: 700, real: 790 },
  { mes: "Sep", plan: 720, real: 820 },
  { mes: "Oct", plan: 740, real: 850 },
  { mes: "Nov", plan: 760, real: 890 },
  { mes: "Dic", plan: 780, real: 920 },
];

const ebitda = [
  { mes: "Ene", plan: 82, real: 78 },
  { mes: "Feb", plan: 91, real: 96 },
  { mes: "Mar", plan: 101, real: 110 },
  { mes: "Abr", plan: 108, real: 121 },
  { mes: "May", plan: 112, real: 130 },
  { mes: "Jun", plan: 116, real: 138 },
  { mes: "Jul", plan: 121, real: 147 },
  { mes: "Ago", plan: 125, real: 155 },
  { mes: "Sep", plan: 128, real: 162 },
  { mes: "Oct", plan: 132, real: 170 },
  { mes: "Nov", plan: 136, real: 179 },
  { mes: "Dic", plan: 140, real: 190 },
];

const hipotesis = [
  ["Inversión total", "USD 5,6 M", "USD 5,2 M", "-7,1%", "+1,1 pp"],
  ["Ventas anuales", "USD 7,2 M", "USD 7,95 M", "+10,4%", "+2,8 pp"],
  ["Margen bruto", "29,0%", "30,2%", "+1,2 pp", "+1,3 pp"],
  ["Gastos operativos / Venta", "12,0%", "12,8%", "+0,8 pp", "-0,9 pp"],
  ["Dotación", "45 FTE", "48 FTE", "+6,7%", "-0,6 pp"],
  ["Flete / Venta", "1,8%", "1,6%", "-0,2 pp", "+0,4 pp"],
  ["Mermas / Venta", "0,7%", "0,6%", "-0,1 pp", "+0,2 pp"],
  ["Días de inventario", "50", "56", "+6 días", "-0,5 pp"],
];

const puente = [
  { concepto: "TIR Plan", valor: 20.0 },
  { concepto: "Ventas", valor: 2.8 },
  { concepto: "Margen", valor: 1.3 },
  { concepto: "Inversión", valor: 1.1 },
  { concepto: "Gastos", valor: -0.9 },
  { concepto: "Dotación", valor: -0.6 },
  { concepto: "Otros", valor: 0.1 },
  { concepto: "TIR Real", valor: 24.8 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">

        <aside className="hidden w-64 flex-col bg-slate-900 p-6 text-white lg:flex">
          <div className="mb-10">
            <div className="text-xl font-bold">Rentabilidad</div>
            <div className="text-xl font-bold">de Proyectos</div>
          </div>

          <nav className="space-y-2 text-sm">
            <Menu activo texto="Dashboard" />
            <Menu texto="Proyectos" />
            <Menu texto="Comparador" />
            <Menu texto="Análisis histórico" />
            <Menu texto="Documentación" />
          </nav>

          <div className="mt-auto text-xs text-slate-400">
            Evaluación de inversiones
          </div>
        </aside>

        <main className="flex-1 p-5 md:p-8">

          <header className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Evaluación de inversiones
              </p>
              <h1 className="mt-1 text-3xl font-bold">
                Sucursal A – Puerto Norte
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Nueva sucursal · Apertura octubre 2023
              </p>
            </div>

            <select className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm">
              <option>Sucursal A – Puerto Norte</option>
              <option>Sucursal B – Centro</option>
              <option>Sucursal C – Patagonia</option>
            </select>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <Kpi titulo="Inversión total" real="USD 5,2 M" plan="USD 5,6 M" desvio="-7,1%" />
            <Kpi titulo="TIR" real="24,8%" plan="20,0%" desvio="+4,8 pp" />
            <Kpi titulo="VAN" real="USD 2,15 M" plan="USD 1,20 M" desvio="+79,2%" />
            <Kpi titulo="Payback" real="4,1 años" plan="5,0 años" desvio="-0,9 años" />
            <Kpi titulo="EBITDA anual" real="USD 1,85 M" plan="USD 1,50 M" desvio="+23,3%" />
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-2">

            <Card titulo="Evolución de ventas mensuales" subtitulo="Plan vs. resultado real">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ventas}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="plan"
                      name="Plan"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                    <Line
                      type="monotone"
                      dataKey="real"
                      name="Real"
                      stroke="#2563eb"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card titulo="EBITDA mensual" subtitulo="Plan vs. resultado real">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ebitda}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="plan" name="Plan" fill="#cbd5e1" />
                    <Bar dataKey="real" name="Real" fill="#16a34a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_1fr]">

            <Card titulo="Principales hipótesis vs. resultado real" subtitulo="Variables que explican la rentabilidad">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-slate-50 text-left text-slate-500">
                      <th className="p-3">Variable</th>
                      <th className="p-3">Hipótesis</th>
                      <th className="p-3">Real</th>
                      <th className="p-3">Desvío</th>
                      <th className="p-3">Impacto TIR</th>
                    </tr>
                  </thead>

                  <tbody>
                    {hipotesis.map((fila) => (
                      <tr key={fila[0]} className="border-b border-slate-100">
                        <td className="p-3 font-medium">{fila[0]}</td>
                        <td className="p-3">{fila[1]}</td>
                        <td className="p-3 font-semibold">{fila[2]}</td>
                        <td className="p-3">{fila[3]}</td>
                        <td className="p-3 font-semibold">{fila[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card titulo="Puente de TIR" subtitulo="De la rentabilidad planificada al resultado real">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={puente}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="concepto" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valor" name="Impacto en TIR" fill="#2563eb" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 rounded-lg bg-amber-50 p-4">
                <p className="font-semibold text-amber-900">
                  Conclusión
                </p>
                <p className="mt-1 text-sm leading-6 text-amber-800">
                  El proyecto superó la rentabilidad esperada principalmente por
                  mayores ventas, mejor margen y una inversión menor a la
                  planificada. Los mayores gastos operativos y la dotación
                  compensaron parcialmente esos efectos positivos.
                </p>
              </div>
            </Card>

          </section>

        </main>
      </div>
    </div>
  );
}

function Menu({
  texto,
  activo = false,
}: {
  texto: string;
  activo?: boolean;
}) {
  return (
    <div
      className={`rounded-lg px-4 py-3 ${
        activo
          ? "bg-blue-600 font-semibold text-white"
          : "text-slate-300 hover:bg-slate-800"
      }`}
    >
      {texto}
    </div>
  );
}

function Kpi({
  titulo,
  real,
  plan,
  desvio,
}: {
  titulo: string;
  real: string;
  plan: string;
  desvio: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{titulo}</p>

      <p className="mt-3 text-2xl font-bold">{real}</p>

      <p className="mt-2 text-xs text-slate-400">
        Plan: {plan}
      </p>

      <p
        className={`mt-4 text-sm font-semibold ${
          desvio.startsWith("+") || titulo === "Inversión total" || titulo === "Payback"
            ? "text-emerald-600"
            : "text-red-500"
        }`}
      >
        {desvio}
      </p>
    </div>
  );
}

function Card({
  titulo,
  subtitulo,
  children,
}: {
  titulo: string;
  subtitulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold">{titulo}</h2>
      <p className="mb-5 mt-1 text-sm text-slate-500">{subtitulo}</p>
      {children}
    </div>
  );
}
