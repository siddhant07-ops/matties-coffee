import express from "express";

import {
  createOrder,
  getMyOrders,
  getSingleOrder,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);

router.get("/my-orders", protect, getMyOrders);

router.get("/:id", protect, getSingleOrder);

export default router;