import express from "express";
import roastRoutes from "./roastRoutes.js";
import authRoutes from "./authRoutes.js";
import chatRoutes from "./chatRoutes.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// ✅ Public Routes (No Protection Here)
router.use("/roast", roastRoutes);
router.use("/auth", authRoutes);

// ✅ Protected Routes (The protection is inside chatRoutes.js, NOT here)
router.use("/chat", chatRoutes);

export default router;
