import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: String,
    products: [
      {
        productId: String,
        name: String,
        quantity: Number,
        size: String,
        price: Number,
        image: String,
      },
    ],
    totalPrice: Number,
    name: String,
    address: String,
    phone: String,
    email: String,
    note: String,
    collectionMethod: String,
    paymentMethod: String,
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
