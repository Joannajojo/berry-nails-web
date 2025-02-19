import cors from "cors";
import express from "express";
import productRouter from "../routes/product.route.js";
import cartRouter from "../routes/cart.route.js";
import orderRouter from "../routes/order.route.js";
const createServer = () => {
  const app = express();

  //middleware
  app.use(express.json());
  app.use(cors());

  //routes
  app.use("/cart", cartRouter);
  app.use("/order", orderRouter);
  app.use("/", productRouter);
  return app;
};

export default createServer;
