import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function TrendChart({ inquiries = [] }) {
  const last7Days = {};
  const safeInquiries = Array.isArray(inquiries) ? inquiries : [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const key = date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });

    last7Days[key] = 0;
  }

  safeInquiries.forEach((item) => {
    if (item && item.created_at) {
      try {
        const key = new Date(item.created_at).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
        });

        if (last7Days[key] !== undefined) {
          last7Days[key]++;
        }
      } catch (e) {
        // Ignore date parse error
      }
    }
  });

  const data = Object.entries(last7Days).map(([date, total]) => ({
    date,
    total,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-slate-900 rounded-2xl p-6 mb-10 border border-slate-700 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        Last 7 Days Inquiry Trend
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

          <XAxis
            dataKey="date"
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

          <Line
            type="monotone"
            dataKey="total"
            stroke="#FACC15"
            strokeWidth={3}
            dot={{ r: 5, fill: "#FACC15" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default TrendChart;