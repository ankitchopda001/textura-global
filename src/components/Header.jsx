import { motion } from "framer-motion";
import ProfileDropdown from "./ProfileDropdown";
import NotificationBell from "./NotificationBell";

function Header({
  adminName = "Admin",
  onExport,
  unreadCount,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"
    >
      {/* Left Section */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          Textura Global Admin
        </h1>

        <p className="text-slate-400 mt-2">
          Welcome back,{" "}
          <span className="text-yellow-400 font-semibold">
            {adminName}
          </span>{" "}
          👋
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <NotificationBell unreadCount={unreadCount} />
        <button
          onClick={onExport}
          className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          📥 Export Excel
        </button>

        <ProfileDropdown adminName={adminName} />

      </div>
    </motion.div>
  );
}

export default Header;