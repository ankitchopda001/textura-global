import { createClient } from "@supabase/supabase-js";

let rawUrl = (import.meta.env.VITE_SUPABASE_URL || "").trim();
let rawKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || "").trim();

// Strip /rest/v1 or trailing slashes if user pasted REST endpoint URL
rawUrl = rawUrl.replace(/\/rest\/v1\/?$/i, "").replace(/\/+$/, "");

export const isSupabaseConfigured = () => {
  return (
    Boolean(rawUrl) &&
    Boolean(rawKey) &&
    !rawUrl.includes("your-supabase-project") &&
    !rawKey.includes("your-supabase-anon-key")
  );
};

// Ensure valid URL format to prevent Supabase SDK initialization throw
const getValidUrl = () => {
  if (!rawUrl) return "https://placeholder-project.supabase.co";
  if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
    return `https://${rawUrl}`;
  }
  return rawUrl;
};

const validUrl = getValidUrl();
const validKey = rawKey || "placeholder-anon-key";

let client;
try {
  client = createClient(validUrl, validKey);
} catch (e) {
  console.warn("Supabase client fallback init:", e);
  client = createClient("https://placeholder-project.supabase.co", "placeholder-key");
}

export const supabase = client;
