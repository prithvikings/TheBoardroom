import { motion } from "motion/react";
import { LayoutGrid } from "lucide-react";

const Scorecard = ({ score = 42, metrics }) => {
  // Calculate circle properties for SVG
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = (value) => {
    if (value < 50) return "#d62828"; // Red
    if (value < 80) return "#FFD700"; // Gold
    return "#2d6a4f"; // Green
  };

  return (
    <div className="h-full rounded-xl bg-executive-gold p-1 text-boardroom-black shadow-[0_0_40px_rgba(255,215,0,0.1)]">
      <div className="flex h-full flex-col justify-between rounded-lg bg-[#1a1915] p-6 text-white border border-white/10 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-executive-gold uppercase">
            The Boardroom Scorecard
          </span>
          <LayoutGrid size={16} className="text-gray-500" />
        </div>

        {/* The Main Circular Gauge */}
        <div className="relative flex flex-col items-center justify-center py-8">
          <div className="relative h-48 w-48">
            {/* Background Circle */}
            <svg
              className="h-full w-full rotate-[-90deg]"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="#333"
                strokeWidth="8"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={getColor(score)}
                strokeWidth="8"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                strokeLinecap="round"
              />
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="font-serif text-6xl font-bold text-white"
              >
                {score}
              </motion.span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                Viability
              </span>
            </div>
          </div>
        </div>

        {/* Sub-Metrics */}
        <div className="mt-auto space-y-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-300">{metric.name}</span>
                <span
                  className={
                    metric.score < 50 ? "text-alert-red" : "text-executive-gold"
                  }
                >
                  {metric.score}/100
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: getColor(metric.score) }}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.score}%` }}
                  transition={{ duration: 1, delay: 1 + index * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
