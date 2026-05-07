import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";

import authRoutes from "./server/routes/auth.js";
import jobRoutes from "./server/routes/jobs.js";
import tutorRoutes from "./server/routes/tutors.js";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Connect to MongoDB
  const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/hometuitionnepal";
  try {
    // Only attempt to connect if it's explicitly set or we're ready - 
    // for this demo we'll wrap it in try/catch so the app doesn't crash if MongoDB is not available in the environment
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.warn("Could not connect to MongoDB. Have you started your database service?", error);
    console.warn("The app will still run, but API calls requiring DB will fail.");
  }

  // --- API Routes ---
  
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Home Tuition Master API is running" });
  });

  // Use API Routes
  app.use("/api/auth", authRoutes);
  app.use("/api/jobs", jobRoutes);
  app.use("/api/tutors", tutorRoutes);

  // --- /API Routes ---

  // Vite middleware for development or Static files for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the dist folder
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
