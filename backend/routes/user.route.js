import express from "express";

//Router object to handle requests
const router = express.Router();

//Basic route
router.get("/", (req, res) => {
  res.send("Hello World");
});

//Retrieve specific product
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Id of the user is: ${userId}`);
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router.put("/:id", (req, res) => {
  res.send("Update user");
});

router.delete("/:id", (req, res) => {
  res.send("Deleted user");
});

//Export router
export default router;
