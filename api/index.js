// Load environment variables early
import dotenv from "dotenv";
dotenv.config();

// External dependencies
import express from "express";
import mongoose from "mongoose";

// Route modules
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

// Create Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware Setup

// Parse incoming JSON
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Global Error Handler

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// MongoDB Connection

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Start Server

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

// Run the app
startServer();
