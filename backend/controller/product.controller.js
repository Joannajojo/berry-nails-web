import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid product ID ${id}` });
  }

  try {
    const product = await Product.findById(id);
    return res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.log("Error in fetching single product");
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  if (
    !product.name ||
    !product.price ||
    !product.description ||
    !product.category ||
    !product.color ||
    !product.sizes ||
    !product.images ||
    !product.stock ||
    !product.tags
  ) {
    return res.status(404).json({ success: false, message: "Invalid object" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in creating product");
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const products = await Product.find({ category });
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// export const getAllProductsByMostOrder = async (req, res) => {

//   try {
//     const products = await Product.find({ tags: tag });
//     res.status(201).json({ success: true, data: products });
//   } catch (error) {
//     console.log("error in fetching products", error.message);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };
