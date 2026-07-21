import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function InquiryCharts({ inquiries = [] }) {
  const COLORS = [
    "#FACC15",
    "#22C55E",
    "#3B82F6",
    "#EF4444",
    "#A855F7",
    "#F97316",
  ];

  const safeInquiries = Array.isArray(inquiries) ? inquiries : [];

  // Monthly Data
  const monthlyMap = {};

  safeInquiries.forEach((item) => {
    if (item && item.created_at) {
      try {
        const month = new Date(item.created_at).toLocaleString("default", {
          month: "short",
        });
        monthlyMap[month] = (monthlyMap[month] || 0) + 1;
      } catch (e) {
        // Ignore date parse error
      }
    }
  });

  const monthlyData = Object.keys(monthlyMap).map((month) => ({
    month,
    inquiries: monthlyMap[month],
  }));

  // Pie Data
  const pieData = [
    {
      name: "Unique Emails",
      value: new Set(safeInquiries.map((i) => i?.email).filter(Boolean)).size,
    },
    {
      name: "Unique Phones",
      value: new Set(safeInquiries.map((i) => i?.phone).filter(Boolean)).size,
    },
    {
      name: "Total",
      value: safeInquiries.length,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-10">
      {/* Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Monthly Inquiries
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <XAxis
              dataKey="month"
              stroke="#CBD5E1"
              tick={{ fill: "#CBD5E1", fontSize: 12 }}
            />

            <YAxis
              stroke="#CBD5E1"
              tick={{ fill: "#CBD5E1", fontSize: 12 }}
              allowDecimals={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "10px",
              }}
              labelStyle={{ color: "#FACC15" }}
            />

            <Bar
              dataKey="inquiries"
              fill="#FACC15"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Inquiry Summary
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={110}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "10px",
              }}
              labelStyle={{ color: "#FACC15" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}

export default InquiryCharts;