const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  authUser,
} = require("../controllers/userController");
const { userValidator, validate } = require("../middlewares/validators");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// Route: Create a new user
router.post("/add", userValidator, validate, createUser);

// Route: Get all users (requires authentication)
router.get("/all", protect, getUsers);

// Route: Get a specific user by ID
router.get("/:id", getUser);

// Route: Delete a user by ID
router.delete("/:id", deleteUser);

// Route: Update a user by ID
router.patch("/:id", updateUser);

// Route: User login
router.post("/login", authUser);

module.exports = router;
