import express from "express";
import {
  createUser,
  getUser,
  verifyUserData,
} from "../controller/user.controller.js";
//Router object to handle requests
const router = express.Router();

//Basic route
//Retrieve specific user using post
router.post("/login", verifyUserData);

router.post("/register", createUser);

router.put("/edit/:id", (req, res) => {
  res.send("Update user");
});

router.delete("/delete/:id", (req, res) => {
  res.send("Deleted user");
});

//Export router
export default router;
