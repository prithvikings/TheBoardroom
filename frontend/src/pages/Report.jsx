import { Download, Zap, Settings, Bell, User } from "lucide-react";
import Scorecard from "../components/report/Scorecard";
import { motion } from "motion/react";

const Report = () => {
  // MOCK DATA - In Phase 2, this comes from Gemini API
  const reportData = {
    projectName: "Uber for Dog Walkers",
    verdict: "HARD PASS",
    verdictColor: "text-alert-red border-alert-red", // Logic needed for dynamic styling
    totalScore: 42,
    metrics: [
      { name: "Market Fit", score: 65 },
      { name: "Originality", score: 12 },
      { name: "Monetization", score: 48 },
    ],
    burnQuote:
      "This idea has all the structural integrity of a wet paper towel. It collapses under the slightest scrutiny.",
    persona: {
      name: "Reginald Sterling",
      title: "Chief Skeptic Officer",
      image:
        "https://ui-avatars.com/api/?name=Reginald+Sterling&background=333&color=fff", // Placeholder
    },
    analysis: [
      "We've reviewed thousands of pitch decks, and yours manages to stand out—for all the wrong reasons. The market for on-demand pet services is oversaturated, with margins thinner than the patience of a VC listening to this pitch.",
      "You claim to disrupt the industry, yet your 'innovation' is merely adding a surcharge to a neighborhood service that functions perfectly well via text message.",
      "Furthermore, your customer acquisition cost projections are laughably optimistic. Unless your plan involves training the dogs to walk themselves, the unit economics simply do not scale.",
    ],
    goldenNugget:
      "Innovation is not just doing something expensive poorly. It requires actual value addition.",
  };

  return (
    <div className="min-h-screen bg-boardroom-black pb-20 pt-24 px-4 md:px-8">
      {/* Top Header / Project Title */}
      <div className="container mx-auto max-w-6xl mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h4 className="text-executive-gold text-sm font-bold tracking-widest uppercase mb-2">
              Confidential Validation Report
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Project:{" "}
              <span className="italic text-gray-400">
                "{reportData.projectName}"
              </span>
            </h1>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
              Boardroom Verdict
            </span>
            <div
              className={`px-6 py-2 border-2 ${reportData.verdictColor} bg-red-900/10 rounded-lg`}
            >
              <span
                className={`text-2xl md:text-3xl font-bold font-serif ${reportData.verdictColor} uppercase tracking-widest`}
              >
                {reportData.verdict}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: The Roast & Analysis (Span 7) */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. The Burn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-xl bg-boardroom-card border-l-4 border-executive-gold p-8 shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-8xl font-serif text-white/5 select-none">
              “
            </div>

            <div className="relative z-10">
              <span className="text-xs font-bold text-executive-gold uppercase tracking-widest mb-4 block">
                The Burn
              </span>
              <h3 className="text-2xl md:text-3xl font-serif italic text-gray-200 leading-relaxed mb-6">
                "{reportData.burnQuote}"
              </h3>

              <div className="flex items-center gap-4">
                <img
                  src={reportData.persona.image}
                  alt="Persona"
                  className="w-12 h-12 rounded-full grayscale border border-white/20"
                />
                <div>
                  <p className="text-white font-bold text-sm">
                    {reportData.persona.name}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    {reportData.persona.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Detailed Analysis Text */}
          <div className="prose prose-invert max-w-none">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={20} className="text-gray-400" />
              <h3 className="text-xl font-bold text-white m-0">
                Detailed Analysis
              </h3>
            </div>

            {reportData.analysis.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="text-gray-400 text-lg leading-relaxed mb-4"
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="mt-8 border-l-2 border-executive-gold pl-4 py-2 bg-executive-gold/5">
              <p className="text-executive-gold italic font-medium m-0">
                "{reportData.goldenNugget}"
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Scorecard (Span 5) */}
        <div className="lg:col-span-5 h-full">
          <div className="sticky top-24">
            <Scorecard
              score={reportData.totalScore}
              metrics={reportData.metrics}
            />

            {/* Action Buttons */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-executive-gold px-4 py-4 font-bold text-boardroom-black transition-transform hover:scale-105">
                <Download size={18} />
                Save Report
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-4 font-bold text-white transition-colors hover:bg-white/5 hover:border-white/40">
                <Zap size={18} />
                VC Interrogation
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 italic mt-4">
              "Recover some dignity or face the firing squad."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
