const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Define the user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true, // Enforce uniqueness of email
      required: true,
    },
    phone: Number,
    password: {
      type: String,
      required: true, // Password is required
    },
  },
  {
    timestamps: true, // Add timestamps for created_at and updated_at
  }
);

// Create and export the User model based on the schema
module.exports = User = model("User", userSchema);
