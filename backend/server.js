// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "users"
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Schema and model
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  contact: String,
  password: String,
});

const User = mongoose.model("User", userSchema,"signup");

// POST /api/signup
app.post("/api/signup", async (req, res) => {
  try {
    const { firstname, lastname, username, contact, password } = req.body;

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const user = new User({ firstname, lastname, username, contact, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Signup Error:", error.message);
    res.status(500).json({ error: "Signup failed. Please try again." });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Received login:", username, password);

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid password!" });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ error: "Login failed!" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
