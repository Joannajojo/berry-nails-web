import { create } from "zustand";
// import { createProduct } from "../../../backend/controller/product.controller";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  // createProduct: async (newProduct) => {
  //   if (
  //     !newProduct.name ||
  //     !newProduct.price ||
  //     !newProduct.description ||
  //     !newProduct.category ||
  //     !newProduct.color ||
  //     !newProduct.sizes ||
  //     !newProduct.images ||
  //     !newProduct.stock ||
  //     !newProduct.tags
  //   ) {
  //     return {
  //       success: false,
  //       message: "Please fill in all fields",
  //     };
  //   }
  //   const res = await fetch("/products", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newProduct),
  //   });
  //   const data = await res.json();
  //   set((state) => ({ products: [...state.products, data.data] }));
  //   return { success: true, message: "Product created successfully" };
  // },
  fetchProducts: async (category = "") => {
    try {
      const endpoint = category
        ? `http://localhost:3000/prod/${category}`
        : "http://localhost:3000/prod";
      const res = await fetch(endpoint);
      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  },
  fetchSingleProduct: async (id = "") => {
    try {
      const endpoint = id
        ? `http://localhost:3000/${id}`
        : "http://localhost:3000/";
      const res = await fetch(endpoint);
      const data = await res.json();
      set({ products: data.data });
      return data.data;
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  },
  // deleteProduct: async (id) => {
  //   const res = await fetch(`/api/products/${id}`, {
  //     method: "DELETE",
  //   });
  //   const data = await res.json();
  //   if (!data.success) return { success: false, message: data.message };
  //   set((state) => ({
  //     products: state.products.filter((product) => product._id !== id),
  //   }));
  //   return { success: true, message: data.message };
  // },
}));
