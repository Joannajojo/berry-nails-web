import mongoose from "mongoose";
import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  const user = req.body;

  if (!user.name || !user.email || !user.password) {
    return res.status(400).json({ success: false, message: "Invalid object" });
  }

  const newUser = new User(user);
  try {
    await newUser.save();
    console.log(`New user created in database: ${newUser}`);
    return res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.body;
  console.log("REQ BODY:", req.body);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `Invalid user ID ${id}` });
  }

  try {
    const user = await User.findById(id);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log("Error in fetching single user");
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const verifyUserData = async (req, res) => {
  const { email, password } = req.body;
  if (email == "" || password == "") {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Password or Email" });
  }
  try {
    const user = await User.findOne({ email: email, password: password });
    console.log("USER:", user);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log("Error in fetching single user");
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
