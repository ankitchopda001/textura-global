import { supabase } from "../lib/supabase";

/**
 * Create Inquiry
 * Inserts a new inquiry into contact_messages
 */
export const sendInquiry = async (inquiryData) => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([inquiryData])
      .select();

    if (error) {
      throw error;
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return {
      success: false,
      error: error.message || error,
    };
  }
};

/**
 * Get All Inquiries
 * Fetches all inquiries from contact_messages
 */
export const getAllInquiries = async () => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error fetching all inquiries:", error);
    return {
      success: false,
      error: error.message || error,
    };
  }
};

/**
 * Get Inquiry By Id
 * Fetches a single inquiry by its ID
 */
export const getInquiryById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error fetching inquiry by id:", error);
    return {
      success: false,
      error: error.message || error,
    };
  }
};

/**
 * Delete Inquiry
 * Deletes an inquiry by ID
 */
export const deleteInquiry = async (id) => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return {
      success: false,
      error: error.message || error,
    };
  }
};

/**
 * Bulk Delete Inquiries
 * Deletes multiple inquiries by array of IDs
 */
export const bulkDeleteInquiries = async (ids) => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .delete()
      .in("id", ids);

    if (error) {
      throw error;
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error bulk deleting inquiries:", error);
    return {
      success: false,
      error: error.message || error,
    };
  }
};

/**
 * Mark Inquiry as Read
 * Updates is_read flag to true for a single inquiry
 */
export const markInquiryAsRead = async (id) => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .update({ is_read: true })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error marking inquiry as read:", error);
    return {
      success: false,
      error: error.message || error,
    };
  }
};

/**
 * Bulk Read Inquiries
 * Updates is_read flag to true for multiple inquiries
 */
export const bulkReadInquiries = async (ids) => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .update({ is_read: true })
      .in("id", ids)
      .select();

    if (error) {
      throw error;
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error bulk marking inquiries as read:", error);
    return {
      success: false,
      error: error.message || error,
    };
  }
};
