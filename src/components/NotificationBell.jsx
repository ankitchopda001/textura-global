import { useState } from "react";

function NotificationBell({ unreadCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="relative bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition"
      >
        🔔

        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-xl z-50">

          <div className="p-4 border-b border-slate-700">
            <h3 className="font-bold text-yellow-400">
              Notifications
            </h3>
          </div>

          <div className="p-4">

            {unreadCount === 0 ? (
              <p className="text-slate-400 text-sm">
                No new notifications
              </p>
            ) : (
              <p className="text-white">
                📩 You have{" "}
                <span className="text-yellow-400 font-bold">
                  {unreadCount}
                </span>{" "}
                unread inquiries.
              </p>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default NotificationBell;