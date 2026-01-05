import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming Shadcn Button
// import { Input } from '@/components/ui/input'; // Use if you have Shadcn Input
// import { Textarea } from '@/components/ui/textarea'; // Use if you have Shadcn Textarea

// Fallback basic UI components if you haven't fully set up Shadcn Input/Textarea yet
// If you have them, swap these standard HTML tags for the Shadcn components.
import { useIdea } from "../context/IdeaContext";

const RoastForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    pitch: "",
    problem: "",
    solution: "",
    audience: "",
  });
  const { startRoast } = useIdea();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to backend API
    await startRoast(formData);
    setTimeout(() => {
      setLoading(false);
      alert("Roast Requested! (Backend Pending)");
    }, 2000);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
      {/* Header Strip - The "Premium" Touch */}
      <div className="h-2 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="p-6 md:p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-foreground">
            The Interrogation Room
          </h2>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase border border-primary/20">
            Confidential
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* THE PITCH */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              The Elevator Pitch (280 chars)
            </label>
            <textarea
              name="pitch"
              maxLength={280}
              required
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none font-mono"
              placeholder="e.g. Uber for dog walkers but on the blockchain..."
              value={formData.pitch}
              onChange={handleChange}
            />
            <div className="text-right text-xs text-muted-foreground">
              {formData.pitch.length}/280
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PROBLEM */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                The Problem
              </label>
              <input
                type="text"
                name="problem"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Who is suffering?"
                value={formData.problem}
                onChange={handleChange}
              />
            </div>

            {/* SOLUTION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                The Solution
              </label>
              <input
                type="text"
                name="solution"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="How do you fix it?"
                value={formData.solution}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* AUDIENCE */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Target Audience
            </label>
            <input
              type="text"
              name="audience"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Be specific. 'Everyone' is not an answer."
              value={formData.audience}
              onChange={handleChange}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-lg font-serif font-bold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" /> Analyzing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-5 w-5" /> ROAST MY IDEA
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RoastForm;
