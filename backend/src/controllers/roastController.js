import { generateRoast } from "../services/geminiService.js";
import AppError from "../utils/appError.js";
import Idea from "../models/Idea.js";

export const createRoast = async (req, res, next) => {
  try {
    const { pitch, problem, solution, audience } = req.body;

    if (!pitch || !problem) {
      return next(
        new AppError("You need a pitch and a problem to get roasted.", 400)
      );
    }

    // 1. Generate Roast (AI)
    const roastResult = await generateRoast({
      pitch,
      problem,
      solution,
      audience,
    });

    // 2. Save to DB (Now including competitors and pivots)
    const newIdea = await Idea.create({
      user: req.user ? req.user._id : undefined,
      pitch,
      problem,
      solution,
      audience,
      roast: roastResult.roast,
      score: roastResult.score,
      verdict: roastResult.verdict,
      competitors: roastResult.competitors, // <--- ADD THIS
      pivots: roastResult.pivots, // <--- ADD THIS
    });

    res.status(200).json({
      status: "success",
      data: newIdea,
    });
  } catch (error) {
    next(error);
  }
};

export const getHallOfFlame = async (req, res, next) => {
  try {
    // Fetch last 12 roasts, sorted by newest first
    // We only want fields necessary for the card (hide user details if needed)
    const feed = await Idea.find()
      .select("pitch problem roast score verdict createdAt") // Select specific fields
      .sort({ createdAt: -1 }) // Newest first
      .limit(12);

    res.status(200).json({
      status: "success",
      results: feed.length,
      data: feed,
    });
  } catch (error) {
    next(error);
  }
};
