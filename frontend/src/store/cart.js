// create is a  function from Zustand that initializes the store.
import { create } from "zustand";

// useCartStore: A custom hook that provides access to the cart store.
export const useCartStore = create((set, get) => ({
  cartItem: [],
  selectedCartItems: [],
  cartQuantity: () => {
    const cartItems = get().cartItem;
    // console.log("Cart Items:", cartItems.length);
    return cartItems.reduce((total, item) => total + item.product.quantity, 0);
  },
  setCartItem: (cartItem) => set({ cartItem }),

  createCartItem: async (newCartItem) => {
    if (
      !newCartItem.userId ||
      !newCartItem.product ||
      !newCartItem.product.productId ||
      !newCartItem.product.name ||
      !newCartItem.product.category ||
      !newCartItem.product.price ||
      !newCartItem.product.quantity ||
      !newCartItem.product.size ||
      !newCartItem.product.image
    ) {
      return { success: false, message: "Please fill all in all fields" };
    }
    const res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCartItem),
    });
    const data = await res.json();
    set((state) => ({
      cartItem: [...state.cartItem, data.data],
    })); // Update cartQuantity based on newCItem.product.quantity }

    return { success: true, message: "CartItem created successfully" };
  },
  // createCartItem: async () => {
  //   console.log("createCartItem in store called!");
  // },
  fetchCartItems: async () => {
    try {
      const endpoint = `http://localhost:3000/cart/`;

      const res = await fetch(endpoint);
      const data = await res.json();
      set({ cartItem: data.data });
      return data.data;
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  },
  fetchSelectedItems: async (selectedItems) => {
    try {
      const endpoint =
        selectedItems.length > 0
          ? `http://localhost:3000/cart/checkout`
          : `http://localhost:3000/cart/`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedItems }),
      });

      const data = await res.json();
      set({ selectedCartItems: data.data });
      return data.data;
    } catch (error) {
      console.log("Error checking out cartitems:", error);
    }
  },
  deleteCartItem: async (id) => {
    const endpoint = `http://localhost:3000/cart/${id}`;
    const res = await fetch(endpoint, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      cartItem: state.cartItem.filter((cart) => cart._id !== id),
    }));
    return { success: true, message: data.message };
  },
  updateSelectedCartItemsStatus: async (selectedItems, newStatus) => {
    const endpoint = `http://localhost:3000/cart/checkout`;
    const res = await fetch(endpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ selectedItems, newStatus }),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // Get updated cart items from data
    //and update to the same cart id in cartitem
    // set((state) => ({
    //   cartItem: state.cartItem.map((cart) =>
    //     selectedItems.includes(cart._id)
    //       ? {
    //           ...cart,
    //           ...data.updatedItems.find((item) => item._id === cart._id),
    //         }
    //       : cart
    //   ),
    // }));

    set((state) => ({
      cartItem: state.cartItem.map((cart) => {
        const updatedItem = data.updatedItems?.find(
          (item) => item._id === cart._id
        );
        if (!updatedItem) {
          console.warn(`No updated item found for cart ID: ${cart._id}`);
          return cart; // Return the cart as-is if no update is found
        }
        return { ...cart, ...updatedItem }; // Merge updated data
      }),
    }));

    return { success: true, message: data.message };
  },
}));
