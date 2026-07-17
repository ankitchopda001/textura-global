import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProfileDropdown({ adminName = "Admin" }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-yellow-400 text-black font-bold text-lg flex items-center justify-center"
      >
        {adminName.charAt(0).toUpperCase()}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-slate-700">
            <p className="font-semibold text-white">
              {adminName}
            </p>

            <p className="text-sm text-slate-400">
              Ankit Chopda
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 hover:bg-red-600 transition"
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;