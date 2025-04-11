const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, username, contact, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ firstname, lastname, username, contact, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
