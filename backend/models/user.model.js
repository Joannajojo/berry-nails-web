import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  isAdmin: {
    type: Boolean, // or [Schema.Types.ObjectId] if referencing products
    default: false,
  },
  password: String,
  createdAt: Date,
  address: {
    type: [String], // or [Schema.Types.ObjectId] if referencing products
    default: "",
  },
  phone: {
    type: String, // or [Schema.Types.ObjectId] if referencing products
    default: "",
  },
  profileImage: {
    type: String, // or [Schema.Types.ObjectId] if referencing products
    default:
      "https://images.unsplash.com/photo-1557110437-0bcd0a636d62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVmYXVsdCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  wishlist: {
    type: [String], // or [Schema.Types.ObjectId] if referencing products
    default: [],
  },
  orders: {
    type: [Schema.Types.Mixed], // can adjust to match your order structure
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
