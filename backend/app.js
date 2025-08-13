import express from "express";
import cors from "cors";

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
