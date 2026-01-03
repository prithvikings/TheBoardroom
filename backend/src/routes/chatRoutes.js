import express from "express";
import { startChat, replyChat } from "../controllers/chatController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/start", startChat);
router.post("/reply", replyChat);

export default router;
