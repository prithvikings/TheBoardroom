import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  pitch: { type: String, required: true },
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  audience: { type: String, required: true },

  // AI Output
  roast: { type: String },
  score: { type: Number },
  verdict: { type: String },

  // --- NEW FIELDS ---
  competitors: [
    {
      name: String,
      url: String,
      reason: String,
    },
  ],
  pivots: [
    {
      type: { type: String }, // e.g. "B2C Pivot"
      idea: String,
    },
  ],

  createdAt: { type: Date, default: Date.now },
});

const Idea = mongoose.model("Idea", ideaSchema);
export default Idea;
