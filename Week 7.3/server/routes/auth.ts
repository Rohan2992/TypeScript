import jwt from "jsonwebtoken";
import express from "express";
import { authenticateJwt, SECRET } from "../middleware/"
import { User } from "../db";
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
  if (typeof req.body.username !== "string") {
    res.status(403).send({ message: "Username should be a string" })
    return;
  }
  if (typeof req.body.password !== "string") {
    res.status(403).send({ message: "password should be a string" })
    return;
  }

  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.post("/signup", async (req, res) => {

  if (typeof req.body.username !== "string") {
    res.status(403).send({ message: "Username should be a string" })
    return;
  }
  if (typeof req.body.password !== "string") {
    res.status(403).send({ message: "password should be a string" })
    return;
  }

  const { username, password } = req.body;
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