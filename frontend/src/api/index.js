// import { supabase } from "./supabaseClient";

// export const getQueue = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("queues")
//       .select("*, user_profiles(name, gender)");
//     if (error) {
//       console.error("Error fetching queue list:", error);
//       throw error;
//     }
//     return data;
//   } catch (error) {
//     console.error("Error fetching queue list:", error);
//     throw error;
//   }
// };

// export const addQueueByUserProfileId = async (userProfileId) => {
//   try {
//     const { data, error } = await supabase
//       .from("queues")
//       .insert([{ user_profile_id: userProfileId }])
//       .select();

//     if (error) {
//       console.error("Error adding queue:", error);
//       throw error;
//     }
//     return data;
//   } catch (error) {
//     console.error("Error adding queue:", error);
//     throw error;
//   }
// };

// Replace supabase calls with localStorage operations

if (!localStorage.getItem("queues")) {
  const initialQueue = [
    {
      id: "0",
      user_profile_id: "1",
      user_profiles: { name: "William", gender: "Male" },
      queue_entry: Date.now(),
      shower_start: null,
      status: "waiting",
    },
    {
      id: "1",
      user_profile_id: "2",
      user_profiles: { name: "Lily", gender: "Female" },
      queue_entry: Date.now(),
      shower_start: null,
      status: "waiting",
    },
  ];
  localStorage.setItem("queues", JSON.stringify(initialQueue));
}

export const getQueue = async () => {
  // Get queue data from localStorage
  const data = JSON.parse(localStorage.getItem("queues")) || [];
  return data;
};

export const addQueue = async (userProfileId) => {
  // Get current queue
  const queue = JSON.parse(localStorage.getItem("queues")) || [];
  // Add new entry
  queue.push({ user_profile_id: userProfileId });
  // Save updated queue back to localStorage
  localStorage.setItem("queues", JSON.stringify(queue));
  return queue;
};
