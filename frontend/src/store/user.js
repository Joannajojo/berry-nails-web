import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  userItem: [],
  selectedUserItems: [],
  setUserItem: (userItem) => set({ userItem }),

  /**
   * Creates a new user item in the database and adds it to the userItem state array.
   * @param {Object} newUserItem - The user item to be created. Requires name, password, and email.
   * @returns {Promise<Object>} - A promise that resolves to an object with a success flag and a message.
   */
  createUserItem: async (newUserItem) => {
    if (!newUserItem.name || !newUserItem.password || !newUserItem.email) {
      return { success: false, message: "Please fill all in all fields" };
    }
    const res = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserItem),
    });
    const data = await res.json();
    set((state) => ({
      userItem: [...state.userItem, data.data],
    })); // Update cartQuantity based on newCItem.product.quantity }

    return { success: true, message: "User store Object created successfully" };
  },

  // Verify user from database for login purposes
  verifyUserForLogin: async (email, password) => {
    if (password == "" || email == "") {
      return { success: false, message: "Please fill all in all fields" };
    }
    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log("DATA:", data);
      if (!data.success) {
        return { success: false, message: data.message };
      } else {
        set({ userItem: data.data });
        return { success: true, message: "User login successfully" };
      }
    } catch (error) {
      console.log("Error fetching user data for login:", error);
    }
  },
  // and update to the same cart id in cartitem
}));
