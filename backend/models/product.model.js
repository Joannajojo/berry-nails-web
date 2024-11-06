import mongoose from "mongoose";

//Define schema
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    color: String,
    sizes: Array,
    images: Array,
    stock: Number,
    tags: Array,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
