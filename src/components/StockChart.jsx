import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function StockChart({ data }) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-indigo-100">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#E0E7FF" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#6366F1", fontWeight: 600, fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "#C7D2FE" }}
            padding={{ left: 15, right: 15 }}
          />
          <YAxis
            domain={["dataMin", "dataMax"]}
            tick={{ fill: "#6366F1", fontWeight: 600, fontSize: 12 }}
            axisLine={{ stroke: "#C7D2FE" }}
            tickLine={false}
            width={60}
            padding={{ top: 10, bottom: 10 }}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#EEF2FF", borderRadius: "8px", borderColor: "#6366F1" }}
            labelStyle={{ fontWeight: "bold", color: "#4F46E5" }}
            formatter={(value) => `$${value.toFixed(2)}`}
          />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#6366F1"
            strokeWidth={3}
            dot={{ r: 4, stroke: "#4F46E5", strokeWidth: 2, fill: "white" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
