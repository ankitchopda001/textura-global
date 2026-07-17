import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


// ===============================
// Create Inquiry
// ===============================
export const sendInquiry = async (data) => {
  const response = await axios.post(
    `${API_URL}/`,
    data
  );

  return response.data;
};

// ===============================
// Get All Inquiries
// ===============================
export const getAllInquiries = async () => {
  const response = await axios.get(
    `${API_URL}/`
  );

  return response.data;
};

// ===============================
// Get Single Inquiry
// ===============================
export const getInquiryById = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`
  );

  return response.data;
};

// ===============================
// Mark Inquiry as Read
// ===============================
export const markInquiryAsRead = async (id) => {
  const response = await axios.put(
    `${API_URL}/${id}/read`
  );

  return response.data;
};

// ===============================
// Delete Inquiry
// ===============================
export const deleteInquiry = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};  

export const bulkDeleteInquiries = async (ids) => {
  const response = await axios.delete(
    `${API_URL}/bulk-delete`,
    {
      data: ids,
    }
  );

  return response.data;
};

export async function bulkReadInquiries(ids) {

  const response = await fetch(
    `${API_URL}/bulk-read`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids }),
    }
  );

  if (!response.ok) {
    throw new Error("Bulk read failed");
  }

  return await response.json();
}