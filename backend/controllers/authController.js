const User = require("../models/user");

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.json({ message: "Signup successful!" });
  } catch (err) {
    res.status(400).json({ message: "Signup failed!" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ message: "Login successful!" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};
