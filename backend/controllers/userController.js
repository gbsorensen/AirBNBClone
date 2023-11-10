const User = require("../models/userModel");

const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return res.status(400).json({ error: "Username is taken." });
    }

    const newUser = await User.create({ username, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });

    if (!existingUser) {
      return res.status(404).json({ error: "No user found" });
    }

    if (req.body.password != existingUser.password) {
      return res.status(404).json({ error: "Incorrect Password" });
    }

    res
      .status(201)
      .json({ username: req.body.username, message: "hello user" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
};
