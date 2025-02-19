import { create } from "zustand";

export const useOrderStore = create((set) => ({
  orders: [],
  topSelling: [],
  setOrders: (orders) => set({ orders }),
  setTopSelling: (topSelling) => set({ topSelling }),
  createOrder: async (newOrder) => {
    if (!newOrder || !newOrder.products || newOrder.totalPrice === 0) {
      return { success: false, message: "Please fill all in all fields" };
    }

    try {
      console.log("Sending new order to API:", newOrder);
      const res = await fetch("http://localhost:3000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      if (!res.ok) {
        console.error("Failed to create order:", await res.text());
        return { success: false, message: "Failed to create order" };
      }

      const data = await res.json();
      if (!data.success) {
        console.error("Error from server:", data.message);
        return { success: false, message: data.message };
      }

      set((state) => ({
        orders: [...state.orders, data.data],
      })); // Update cartQuantity based on newCItem.product.quantity }

      console.log("Order added in store:", data.data);
      return { success: true, data: data.data };
    } catch (error) {}
  },
  fetchMostOrdered: async () => {
    try {
      const endpoint = `http://localhost:3000/order/`;

      const res = await fetch(endpoint);
      const data = await res.json();
      set({ topSelling: data.data });
    } catch (error) {
      console.log("Error fetching most ordered items:", error);
    }
  },
}));
