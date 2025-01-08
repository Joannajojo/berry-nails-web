import mongoose from "mongoose";

//Define schema
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: String,
    product: {
      //Object
      productId: String, // Reference to the Product model
      name: String, // Product name
      category: String,
      price: Number, // Price at the time added
      quantity: Number, // Number of items
      size: String,
      image: String, // Thumbnail URL
      status: {
        type: String,
        default: "pending",
      },
    },
    updatedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
