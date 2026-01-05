import { Eye, AlertTriangle, ExternalLink, Zap, Target } from "lucide-react";

const CompetitorCard = ({ name, description, threat, type, funding }) => {
  const isHighThreat = threat === "High";

  return (
    <div
      className={`rounded-xl border ${
        isHighThreat
          ? "border-alert-red/50 bg-red-900/5"
          : "border-white/10 bg-boardroom-card"
      } p-6 relative overflow-hidden transition-all hover:border-executive-gold/30`}
    >
      {isHighThreat && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-alert-red/20 to-transparent rounded-bl-3xl"></div>
      )}

      <div className="flex justify-between items-start mb-4 relative z-10">
        <span
          className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
            isHighThreat
              ? "bg-alert-red text-white"
              : "bg-yellow-600 text-white"
          }`}
        >
          {threat} Threat
        </span>
        <a
          href="#"
          className="text-executive-gold hover:underline text-xs flex items-center gap-1"
        >
          Verify Existence <ExternalLink size={10} />
        </a>
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
        <span>{type}</span> • <span>{funding}</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/5 rounded px-3 py-2 text-center">
          <span className="block text-xs text-gray-500 uppercase">
            Features
          </span>
          <span className="text-white font-bold text-sm">90% Match</span>
        </div>
        <div className="bg-white/5 rounded px-3 py-2 text-center">
          <span className="block text-xs text-gray-500 uppercase">Pricing</span>
          <span className="text-white font-bold text-sm">Lower</span>
        </div>
      </div>
    </div>
  );
};

const CompetitorRecon = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-executive-gold font-bold uppercase tracking-widest text-sm mb-2">
          <Eye size={16} /> Competitor Reconnaissance
        </div>
        <h1 className="text-3xl font-serif font-bold text-white mb-2">
          Intelligence Report #2049
        </h1>
        <p className="text-gray-400 italic">
          "You claimed zero competition. Our deep scan detected 3 established
          entities operating in your target vector."
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-white/10 bg-boardroom-card p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
            <Zap size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Market Saturation
            </p>
            <h3 className="text-2xl font-bold text-white">Moderate</h3>
            <span className="text-xs text-green-500">+15% YoY Growth</span>
          </div>
        </div>

        <div className="rounded-xl border border-alert-red/30 bg-red-900/10 p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-alert-red/10 flex items-center justify-center text-alert-red">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Direct Threats
            </p>
            <h3 className="text-2xl font-bold text-white">2 Detected</h3>
            <span className="text-xs text-alert-red font-bold animate-pulse">
              Action Required
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-boardroom-card p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400">
            <Target size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Indirect Threats
            </p>
            <h3 className="text-2xl font-bold text-white">1 Detected</h3>
            <span className="text-xs text-yellow-500">Monitor Closely</span>
          </div>
        </div>
      </div>

      {/* Main Content: List + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Competitor Cards */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">
            Identified Entities
          </h3>

          <CompetitorCard
            name="TechNova Solutions"
            type="SaaS B2B"
            funding="Series B Funded"
            threat="High"
            description="Offers a similar AI-driven analysis tool but focuses on enterprise clients with deep integrations. They own the enterprise space."
          />

          <CompetitorCard
            name="MarketWatch AI"
            type="Marketplace"
            funding="Bootstrapped"
            threat="Medium"
            description="Cheaper alternative, though lacks the persona-based validation engine. They represent the 'Good Enough' low-cost competitor."
          />

          <CompetitorCard
            name="Valid8r Inc."
            type="Consultancy Firm"
            funding="Service Based"
            threat="Low"
            description="Traditional consultancy offering manual validation services. High touch, high cost, slow delivery. Your exact opposite."
          />
        </div>

        {/* Right: Boardroom Verdict & Map */}
        <div className="space-y-6">
          <div className="rounded-xl border border-executive-gold bg-boardroom-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap
                size={20}
                className="text-executive-gold fill-executive-gold"
              />
              <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                Boardroom Verdict
              </h4>
            </div>
            <p className="italic text-gray-300 mb-6 text-sm leading-relaxed">
              "You are walking into a minefield blindly. TechNova owns the
              enterprise space. Pivot pricing model to freemium to undercut
              their enterprise lock-in."
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Confidence Score</span>
                <span className="text-white">85%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full">
                <div className="h-full bg-gradient-to-r from-red-500 to-executive-gold w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Matrix Placeholder */}
          <div className="rounded-xl border border-white/10 bg-boardroom-card p-6 h-64 flex flex-col items-center justify-center relative">
            <h4 className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase">
              Market Positioning
            </h4>

            {/* Simplified CSS Grid Graph */}
            <div className="relative h-40 w-40 border-l border-b border-gray-600">
              <span className="absolute -left-6 top-1/2 -rotate-90 text-[10px] text-gray-500">
                General
              </span>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
                Niche
              </span>

              {/* Dots */}
              <div
                className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"
                title="TechNova"
              ></div>
              <div
                className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-yellow-500"
                title="MarketWatch"
              ></div>

              {/* YOU */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full border-2 border-white bg-transparent flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-executive-gold rounded-full"></div>
              </div>
              <span className="absolute top-1/2 left-1/2 mt-3 ml-2 text-[10px] font-bold text-white">
                YOU
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorRecon;
