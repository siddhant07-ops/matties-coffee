import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// ==============================
// API ROUTES
// ==============================

app.use("/api/auth", authRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/invoices", invoiceRoutes);

// ==============================
// TEST ROUTE
// ==============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mattie's Coffee backend is running!",
  });
});

// ==============================
// START SERVER
// ==============================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `Server is running on port ${PORT}`
    );
  });
};

startServer();