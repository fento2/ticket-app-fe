"use client";
// components/EventCharts.tsx
"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const salesData = [
  { day: "Senin", tickets: 12 },
  { day: "Selasa", tickets: 19 },
  { day: "Rabu", tickets: 8 },
  { day: "Kamis", tickets: 15 },
  { day: "Jumat", tickets: 22 },
];

const categoryData = [
  { category: "VIP", sold: 120 },
  { category: "Regular", sold: 300 },
  { category: "Free", sold: 150 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function EventCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Line Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Penjualan Harian</h2>
        <LineChart width={300} height={200} data={salesData}>
          <Line
            type="monotone"
            dataKey="tickets"
            stroke="#0088FE"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Tiket per Kategori</h2>
        <BarChart width={300} height={200} data={categoryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sold" fill="#00C49F" />
        </BarChart>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Komposisi Tiket</h2>
        <PieChart width={300} height={200}>
          <Pie
            data={categoryData}
            dataKey="sold"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
            label
          >
            {categoryData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
