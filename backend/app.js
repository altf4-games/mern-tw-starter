import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/database.js";

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple API endpoint for demonstration
app.get("/api/health", (_req, res) => {
  res.json({
    status: "OK",
    message: "MERN Template Backend is running!",
    timestamp: new Date().toISOString(),
  });
});

// Database connection status endpoint
app.get("/api/db-status", (_req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  res.json({
    status: "OK",
    database: {
      state: states[dbState],
      host: mongoose.connection.host || "Not connected",
      name: mongoose.connection.name || "Not connected",
    },
    timestamp: new Date().toISOString(),
  });
});

// Sample data endpoint
app.get("/api/features", (_req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        title: "React 19",
        description: "Latest React with modern features",
        icon: "⚛️",
      },
      {
        id: 2,
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
        icon: "🎨",
      },
      {
        id: 3,
        title: "Vite",
        description: "Lightning fast build tool",
        icon: "⚡",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
});
