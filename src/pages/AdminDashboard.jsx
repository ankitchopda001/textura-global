import InquiryCharts from "../components/charts/InquiryCharts";
import TrendChart from "../components/charts/TrendChart";
import StatsCards from "../components/dashboard/StatsCards";
import DashboardSkeleton from "../components/loading/DashboardSkeleton";
import Header from "../components/Header";
import protectedRoute from "../components/ProtectedRoute";
import NotificationBell from "../components/NotificationBell";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  getAllInquiries,
  deleteInquiry,
  markInquiryAsRead,
  bulkDeleteInquiries,
  bulkReadInquiries,
} from "../services/inquiryService";

function AdminDashboard() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const recordsPerPage = 10;

  useEffect(() => {
    fetchInquiries();
  }, []);
  const fetchInquiries = async () => {
    try {
      const res = await getAllInquiries();
      if (res.success) {
        setInquiries(res.data || []);
      } else {
        toast.error("Failed to Load Inquiries");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to Load Inquiries");
    } finally {
      setLoading(false);
    }
  };

  
const handleView = async (item) => {
  try {
    const res = await markInquiryAsRead(item.id);
    const updated = res.success ? res.data : { ...item, is_read: true };

    setInquiries((prev) =>
      prev.map((inq) =>
        inq.id === item.id ? { ...inq, is_read: true } : inq
      )
    );

    setSelectedInquiry(updated || { ...item, is_read: true });
  } catch (error) {
    console.error(error);
  }
};

const handleSelect = (id) => {
  if (selectedRows.includes(id)) {
    setSelectedRows(
      selectedRows.filter((item) => item !== id)
    );
  } else {
    setSelectedRows([...selectedRows, id]);
  }
};

const handleSelectAll = () => {
  if (selectedRows.length === currentRecords.length) {
    setSelectedRows([]);
  } else {
    setSelectedRows(
      currentRecords.map((item) => item.id)
    );
  }
};

const handleBulkDelete = async () => {

  if (selectedRows.length === 0) {
    toast.warning("Select at least one inquiry.");
    return;
  }

  try {

    const res = await bulkDeleteInquiries(selectedRows);
    if (res.success) {
      setInquiries((prev) =>
        prev.filter(
          (item) => !selectedRows.includes(item.id)
        )
      );

      setSelectedRows([]);

      toast.success("Selected inquiries deleted.");
    } else {
      toast.error("Bulk delete failed.");
    }

  } catch (error) {

    console.error(error);

    toast.error("Bulk delete failed.");

  }
};

const handleBulkRead = async () => {

  if (selectedRows.length === 0) {
    toast.warning("Select at least one inquiry.");
    return;
  }

  try {

    const res = await bulkReadInquiries(selectedRows);
    if (res.success) {
      setInquiries((prev) =>
        prev.map((item) =>
          selectedRows.includes(item.id)
            ? { ...item, is_read: true }
            : item
        )
      );

      setSelectedRows([]);

      toast.success("Selected inquiries marked as read.");
    } else {
      toast.error("Failed to mark as read.");
    }

  } catch (error) {
    console.error(error);
    toast.error("Failed to mark as read.");
  }
};

  const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Delete Inquiry?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#facc15",
    cancelButtonColor: "#ef4444",
    confirmButtonText: "Yes, Delete",
    cancelButtonText: "Cancel",
    background: "#0f172a",
    color: "#ffffff",
  });


  if (!result.isConfirmed) return;

  try {
    const res = await deleteInquiry(id);
    if (res.success) {
      setInquiries((prev) =>
        prev.filter((item) => item.id !== id)
      );

      toast.success("Inquiry Deleted Successfully");
    } else {
      toast.error("Failed to Delete Inquiry");
    }
  } catch (error) {
    console.error(error);

    toast.error("Failed to Delete Inquiry");
  }
};


  const exportToExcel = () => {
    const exportData = inquiries.map((item) => ({
      ID: item.id,
      Name: item.name,
      Email: item.email,
      Phone: item.phone,
      Message: item.message,
      Date: new Date(item.created_at).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Inquiries"
    );

    XLSX.writeFile(
      workbook,
      "Textura_Global_Inquiries.xlsx"
    );
  };

  const totalInquiries = inquiries.length;

  const today = new Date().toDateString();

  const todayInquiries = inquiries.filter(
    (item) =>
      new Date(item.created_at).toDateString() === today
  ).length;

  const totalEmails = new Set(
    inquiries.map((item) => item.email)
  ).size;

  const totalPhones = new Set(
    inquiries.map((item) => item.phone)
  ).size;

  const filteredInquiries = inquiries.filter((item) => {

  const search = searchTerm.toLowerCase();

  const matchesSearch =
    item.name.toLowerCase().includes(search) ||
    item.email.toLowerCase().includes(search) ||
    item.phone.toLowerCase().includes(search);


  let matchesStatus = true;

  if (statusFilter === "Read") {
    matchesStatus = item.is_read === true;
  }

  if (statusFilter === "Unread") {
    matchesStatus = item.is_read === false;
  }

  let matchesDate = true;

  const inquiryDate = new Date(item.created_at);
  const today = new Date();

  if (dateFilter === "Today") {
    matchesDate =
      inquiryDate.toDateString() === today.toDateString();
  }

  if (dateFilter === "Week") {

    const firstDay = new Date(today);

    firstDay.setDate(today.getDate() - 7);

    matchesDate = inquiryDate >= firstDay;

  }

  if (dateFilter === "Month") {

    matchesDate =
      inquiryDate.getMonth() === today.getMonth() &&
      inquiryDate.getFullYear() === today.getFullYear();

  }

 

  return (
    matchesSearch &&
    matchesStatus &&
    matchesDate
  );

});

  const sortedInquiries = [...filteredInquiries].sort((a, b) => {
    if (sortBy === "Newest") {
      return new Date(b.created_at) - new Date(a.created_at);
    }

    if (sortBy === "Oldest") {
      return new Date(a.created_at) - new Date(b.created_at);
    }

    if (sortBy === "AZ") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "ZA") {
      return b.name.localeCompare(a.name);
    }

    return 0;
  });

  const totalPages = Math.ceil(
    sortedInquiries.length / recordsPerPage
);

  const startIndex = (currentPage - 1) * recordsPerPage;

  const currentRecords = sortedInquiries.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  if (loading) {
  return <DashboardSkeleton />;
}

const handleLogout = () => {
  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (!confirmLogout) return;

  localStorage.removeItem("token");

  navigate("/login");
};

 const unreadCount = inquiries.filter(
  (item) => !item.is_read
).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <Header
        adminName="Admin"
        onExport={exportToExcel}
        unreadCount={unreadCount}
      />

      {/* Statistics */}

      <StatsCards
        totalInquiries={totalInquiries}
        todayInquiries={todayInquiries}
        totalEmails={totalEmails}
        totalPhones={totalPhones}
      />

      {/* Search */}

      <div className="flex flex-col lg:flex-row gap-4 mb-8">

  <input
    type="text"
    placeholder="🔍 Search..."
    value={searchTerm}
    onChange={(e) => {
      setSearchTerm(e.target.value);
      setCurrentPage(1);
    }}
    className="flex-1 p-4 rounded-xl bg-slate-900 border border-slate-700"
  />

  <select
    value={statusFilter}
    onChange={(e) => {
      setStatusFilter(e.target.value);
      setCurrentPage(1);
    }}
    className="p-4 rounded-xl bg-slate-900 border border-slate-700"
  >
    <option value="All">All</option>
    <option value="Read">Read</option>
    <option value="Unread">Unread</option>
  </select>

  <select
    value={dateFilter}
    onChange={(e) => {
      setDateFilter(e.target.value);
      setCurrentPage(1);
    }}
    className="p-4 rounded-xl bg-slate-900 border border-slate-700"
  >
    <option value="All">All Time</option>
    <option value="Today">Today</option>
    <option value="Week">This Week</option>
    <option value="Month">This Month</option>
  </select>

    <select
      value={sortBy}
      onChange={(e) => {
        setSortBy(e.target.value);
        setCurrentPage(1);
      }}
      className="p-4 rounded-xl bg-slate-900 border border-slate-700"
    >
      <option value="Newest">Newest First</option>
      <option value="Oldest">Oldest First</option>
      <option value="AZ">Name (A-Z)</option>
      <option value="ZA">Name (Z-A)</option>
    </select>

  <button
    onClick={() => {
      setSearchTerm("");
      setStatusFilter("All");
      setDateFilter("All");
      setSortBy("Newest");
      setCurrentPage(1);
    }}
    className="bg-red-600 hover:bg-red-500 px-6 rounded-xl"
  >
    Reset
  </button>

</div>

      <InquiryCharts inquiries={inquiries} />
      <TrendChart inquiries={inquiries} />

    {/*delete selected and read all button */}
<div className="flex gap-4 mb-6">

  <button
    onClick={handleBulkDelete}
    className="bg-red-600 px-5 py-3 rounded-xl"
  >
    Delete Selected
  </button>

  <button
  onClick={handleBulkRead}
  className="bg-green-600 hover:bg-green-500 px-5 py-3 rounded-xl"
>
  Mark Read ({selectedRows.length})
</button>

</div>


      {/* Table */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto"
      >

        <table className="w-full">

          <thead className="bg-yellow-400 text-black">

            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  checked={
                    currentRecords.length > 0 &&
                    selectedRows.length === currentRecords.length
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Message</th>
              <th className="p-4">Date</th>
              <th>Status</th>
              <th className="p-4">View</th>
              <th className="p-4">Action</th>
            </tr>

          </thead>

          <tbody>

            {currentRecords.length === 0 ? (

              <tr>

                <td
                  colSpan={9}
                  className="text-center py-10 text-gray-400"
                >
                  No inquiries found.
                </td>

              </tr>

            ) : (

              currentRecords.map((item, index) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-700 hover:bg-slate-900"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />
                  </td>
                  <td className="p-4">{startIndex + index + 1}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.email}</td>
                  <td className="p-4">{item.phone}</td>
                  <td className="p-4 max-w-xs">
                    {item.message.length > 35
                      ? item.message.substring(0, 35) + "..."
                      : item.message}
                  </td>
                  <td>
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                  
                  <td>
                    {item.is_read ? (
                      <span className="px-3 py-1 rounded-full bg-green-500 text-white text-sm">
                        Read
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm">
                        Unread
                      </span>
                    )}
                  </td>

                <td className="p-4">

                <button
                    onClick={() => handleView(item)}
                    className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
                >
                    View
                </button>

                </td>

                    

                <td className="p-4">

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>
                </tr>

              ))

            )}

          </tbody>

        </table>

      </motion.div>

      {/* Pagination */}

      <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-10"
        >

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
          }
          disabled={currentPage === 1}
          className="bg-slate-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-yellow-400 font-semibold">
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, totalPages || 1)
            )
          }
          disabled={
            currentPage === totalPages || totalPages === 0
          }
          className="bg-slate-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>

      </motion.div>

          {/* Inquiry Details Modal */}

          {selectedInquiry && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-slate-900 w-full max-w-2xl rounded-2xl p-8">

              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Inquiry Details
              </h2>

              <div className="space-y-4">

                <p><strong>Name:</strong> {selectedInquiry.name}</p>

                <p><strong>Email:</strong> {selectedInquiry.email}</p>

                <p><strong>Phone:</strong> {selectedInquiry.phone}</p>

                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(selectedInquiry.created_at).toLocaleString()}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {selectedInquiry.is_read ? "Read" : "Unread"}
                </p>

                <div>

                  <strong>Message:</strong>

                  <div className="bg-slate-800 rounded-xl p-4 mt-2">
                    {selectedInquiry.message}
                  </div>

                </div>

              </div>

              <button
                onClick={() => setSelectedInquiry(null)}
                className="mt-8 bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl"
              >
                Close
              </button>

            </div>

          </div>
)}

    </div>
  );
}

export default AdminDashboard;