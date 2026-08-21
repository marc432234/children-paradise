import { cache } from "react";

import { getSupabaseClient } from "./supabase";

export type ContactSettings = {
  phone: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;
};

const fallback: ContactSettings = {
  phone: "(305) 827-1772",
  email: "info@childrensparadise.com",
  address: "Hialeah & Miami Lakes, FL",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

export const getContactSettings = cache(async (): Promise<ContactSettings> => {
  try {
    const { data, error } = await getSupabaseClient()
      .from("settings")
      .select("value")
      .eq("key", "contact")
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!data) return fallback;

    return data.value as ContactSettings;
  } catch {
    return fallback;
  }
});
