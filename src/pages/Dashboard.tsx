import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const chartData = [
    { name: "Admins", count: 5 },
    { name: "Distributors", count: 20 },
    { name: "Manufacturers", count: 10 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {chartData.map((d) => (
          <div key={d.name} className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">{d.name}</h3>
            <p className="text-3xl">{d.count}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium mb-2">User Roles Breakdown</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}