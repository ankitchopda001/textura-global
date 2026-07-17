import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaCalendarDay,
  FaUserFriends,
  FaPhoneAlt,
} from "react-icons/fa";

function StatsCards({
  totalInquiries,
  todayInquiries,
  totalEmails,
  totalPhones,
}) {
  const cards = [
    {
      title: "Total Inquiries",
      value: totalInquiries,
      icon: <FaEnvelope />,
    },
    {
      title: "Today's Inquiries",
      value: todayInquiries,
      icon: <FaCalendarDay />,
    },
    {
      title: "Unique Emails",
      value: totalEmails,
      icon: <FaUserFriends />,
    },
    {
      title: "Unique Phones",
      value: totalPhones,
      icon: <FaPhoneAlt />,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-slate-900 border border-yellow-400 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400">{card.title}</p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-3">
                {card.value}
              </h2>
            </div>

            <div className="text-5xl text-yellow-400">
              {card.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCards;