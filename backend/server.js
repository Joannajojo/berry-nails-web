import express from "express";
import dotenv from "dotenv";
//import router to be used here
import productRouter from "./routes/product.route.js";
import { connectDB } from "./config/db.js";
//import userRouter from "./routes/product.route.js";
import cors from "cors";
const app = express();

//Define port
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

app.use(cors());
app.use("/", productRouter);

//use mongodb url
dotenv.config();
console.log(process.env.MONGO_URI);
//Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running http://localhost:${PORT}`);
});
