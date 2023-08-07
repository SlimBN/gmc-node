const mongoose = require("mongoose");

// Async function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Use the MONGO_URI from environment variables to connect
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

// Export the connectDB function to be used in other modules
module.exports = connectDB;
