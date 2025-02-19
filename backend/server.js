// import express from "express";
import dotenv from "dotenv";
dotenv.config();
//import router to be used here
// import productRouter from "./routes/product.route.js";
// import cartRouter from "./routes/cart.route.js";
// import orderRouter from "./routes/order.route.js";
import { connectDB } from "./config/db.js";
import createServer from "./utils/server.js";
//import userRouter from "./routes/product.route.js";
import cors from "cors";

//Define port
const PORT = process.env.PORT || 3000;

// const app = express();

// //middleware
// app.use(express.json());
// app.use(cors());

// //routes
// app.use("/cart", cartRouter);
// app.use("/order", orderRouter);
// app.use("/", productRouter);
const app = createServer();
//use mongodb url

// console.log(process.env.MONGO_URI);
//Start server
const startServer = async () => {
  app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running http://localhost:${PORT}`);
  });
};

startServer();

export default app;
