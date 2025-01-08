import Cart from "../models/cart.model.js";
import mongoose from "mongoose";

export const getAllItems = async (req, res) => {
  try {
    //fetch all cart items where status is not confirmed
    const items = await Cart.find({
      "product.status": { $ne: "confirmed" },
    });
    if (items) return res.status(201).json({ success: true, data: items });
    else
      return res.status(404).json({ success: true, message: "No items found" });
  } catch (error) {
    console.log("Error in fetching cart items");
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createItem = async (req, res) => {
  const cartItem = req.body;

  if (!cartItem.product) {
    return res.status(404).json({ success: false, message: "Invalid object" });
  }
  const newCart = new Cart(cartItem);
  try {
    await newCart.save();
    return res.status(201).json({ success: true, data: newCart });
  } catch (error) {
    console.log("Error in creating cart");
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  console.log("Item to be deleted in controller", id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid cart ID ${id}` });
  }
  try {
    await Cart.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ success: true, message: `Cart item ${id} deleted` });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getSelectedItems = async (req, res) => {
  const { selectedItems } = req.body;

  if (!Array.isArray(selectedItems) || selectedItems.length == 0) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid cart ID ${items}` });
  }

  const invalidIds = selectedItems.filter(
    (id) => !mongoose.Types.ObjectId.isValid(id)
  );
  if (invalidIds.length > 0) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid cart ID ${invalidIds}` });
  }
  try {
    const items = await Cart.find({ _id: { $in: selectedItems } });
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    console.log("Error in fetching cart items");
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateSelectedCartItemsStatus = async (req, res) => {
  const { selectedItems, newStatus } = req.body;

  if (
    !Array.isArray(selectedItems) ||
    selectedItems.length == 0 ||
    !newStatus
  ) {
    return res.status(404).json({ success: false, message: `Invalid cart ID` });
  }

  const invalidIds = selectedItems.filter(
    (id) => !mongoose.Types.ObjectId.isValid(id)
  );

  if (invalidIds.length > 0) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid cart ID ${invalidIds}` });
  }

  try {
    const items = await Cart.updateMany(
      { _id: { $in: selectedItems } },
      { $set: { "product.status": newStatus, updatedAt: new Date() } } // Update status and updatedAt
    );
    res.status(200).json({
      success: true,
      message: `${items.modifiedCount} cart items updated.`,
    });
  } catch (error) {
    console.error("Error updating cart items:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
