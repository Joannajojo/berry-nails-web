import express from "express";
import {
  createProduct,
  getAllProducts,
  getAllProductsByCategory,
  getSingleProduct,
} from "../controller/product.controller.js";

//Router object to handle requests
const router = express.Router();

//Basic route
router.get("/", (req, res) => {
  res.send("Hello World");
});

//Get All products
router.get("/prod", getAllProducts);

//Create product
router.post("/", createProduct);

//Retrieve specific product
router.get("/:id", getSingleProduct);

//Retrieve by category
router.get("/prod/:category", getAllProductsByCategory);

// router.put("/:id", (req, res) => {
//   res.send("Update nails");
// });

// router.delete("/:id", (req, res) => {
//   res.send("Deleted nails");
// });

//Export router
export default router;
