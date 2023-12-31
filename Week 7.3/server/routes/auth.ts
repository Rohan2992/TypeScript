import jwt from "jsonwebtoken";
import express from "express";
import { authenticateJwt, SECRET } from "../middleware/";
import { User } from "../db";
import { inputValidation } from "@rohan2992/common";
const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ _id: req.headers["userId"] });
  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(403).json({ message: "User not logged in" });
  }
});

router.post("/login", async (req, res) => {
  const input = inputValidation.safeParse(req.body);

  if (!input.success) {
    res.status(411).json({ message: input.error });
    return;
  }
  const { username, password } = input.data;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.post("/signup", async (req, res) => {
  const input = inputValidation.safeParse(req.body);

  if (!input.success) {
    res.status(411).json({ message: input.error });
    return;
  }
  const { username, password } = input.data;

  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "User created successfully", token });
  }
});

export default router;
