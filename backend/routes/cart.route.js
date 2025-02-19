import express from "express";
import {
  createItem,
  deleteItem,
  getAllItems,
  getSelectedItems,
  updateSelectedCartItemsStatus,
} from "../controller/cart.controller.js";

const router = express.Router();

router.post("/", createItem);
router.patch("/checkout", updateSelectedCartItemsStatus);
router.post("/checkout", getSelectedItems);
router.get("/", getAllItems);
router.delete("/:id", deleteItem);
export default router;
