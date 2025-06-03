// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import dependencies
import express from "express";
import mongoose from "mongoose";

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// MongoDB connection function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process if connection fails
  }
};

// Start server only after DB connection
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Run the server
startServer();
