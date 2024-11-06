import express from "express";

//Router object to handle requests
const router = express.Router();

//Basic route
router.get("/", (req, res) => {
  res.send("Hello World");
});

//Retrieve specific product
router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Id of the item is: ${productId}`);
});

//Get All products
router.get("/prod", (req, res) => {
  res.send("Obtained all nails");
});

router.post("/", (req, res) => {
  res.send("Create nails");
});

router.put("/:id", (req, res) => {
  res.send("Update nails");
});

router.delete("/:id", (req, res) => {
  res.send("Deleted nails");
});

//Export router
export default router;
