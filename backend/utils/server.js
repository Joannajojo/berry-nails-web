import cors from "cors";
import express from "express";
import productRouter from "../routes/product.route.js";
import cartRouter from "../routes/cart.route.js";
import orderRouter from "../routes/order.route.js";
import userRouter from "../routes/user.route.js";
const createServer = () => {
  const app = express();

  //middleware
  app.use(express.json());
  app.use(cors()); //only allow to deal with frontend

  //routes
  app.use("/cart", cartRouter);
  app.use("/order", orderRouter);
  app.use("/user", userRouter);
  app.use("/", productRouter);
  return app;
};

export default createServer;
