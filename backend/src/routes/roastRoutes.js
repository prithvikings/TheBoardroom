import express from "express";
import { createRoast, getHallOfFlame } from "../controllers/roastController.js"; // Import it

const router = express.Router();

// POST /api/v1/roast (Create)
router.post("/", createRoast);

// GET /api/v1/roast/feed (Read Public Feed)
router.get("/feed", getHallOfFlame);

export default router;
