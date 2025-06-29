import { supabase } from "./supabaseClient";

export const getQueueList = async () => {
  try {
    const { data, error } = await supabase
      .from("queues")
      .select("*, user_profiles(name, gender)");
    if (error) {
      console.error("Error fetching queue list:", error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching queue list:", error);
    throw error;
  }
};

export const addToQueue = async () => {
  try {
    const { data, error } = await supabase
      .from("queues")
      .insert([{ user_profile_id: "1" }])
      .select();

    if (error) {
      console.error("Error adding queue:", error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error adding queue:", error);
    throw error;
  }
};
