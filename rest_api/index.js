// Import required modules
const express = require("express");
const app = express();

// Load environment variables from .env file
require("dotenv").config();

// Import the function to connect to the database
const connectDB = require("./config/connectDB");

// Import the user route
const userRoute = require("./routes/user");

// Use JSON middleware for parsing request bodies
app.use(express.json());

// Connect to the database
connectDB();

// Define the route for the user API
app.use("/api/user", userRoute);

// Define the port to listen on
const port = 3000;

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
