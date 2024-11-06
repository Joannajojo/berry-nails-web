import express from "express";

//import router to be used here
import productRouter from "./routes/product.route.js";
//import userRouter from "./routes/product.route.js";

const app = express();

//Define port
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", productRouter);
//Start server
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
