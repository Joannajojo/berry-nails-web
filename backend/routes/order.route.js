import express from "express";
import {
  createOrder,
  getMostOrderedItems,
} from "../controller/order.controller.js";

const router = express.Router();
router.get("/", getMostOrderedItems);
router.post("/", createOrder);

export default router;
