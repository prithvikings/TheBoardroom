import {
  Lightbulb,
  TrendingUp,
  Hourglass,
  ArrowRight,
  Gavel,
  Eye,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
  <div className="rounded-xl border border-white/10 bg-boardroom-card p-6 transition-colors hover:border-white/20">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          {title}
        </p>
        <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>
      </div>
      <div className={`rounded-lg p-2 ${colorClass} bg-opacity-10`}>
        <Icon size={20} className={colorClass.replace("text-", "")} />
      </div>
    </div>
    <p className="mt-4 text-xs font-medium text-gray-400">{subtext}</p>
  </div>
);

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div>
        <h2 className="text-3xl font-serif font-bold text-white">
          Good evening, Director.
        </h2>
        <p className="text-gray-400">
          The Board is assembled and awaiting your proposals.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          title="Ideas Submitted"
          value="12"
          subtext="+2 this week"
          icon={Lightbulb}
          colorClass="text-executive-gold"
        />
        <StatCard
          title="Avg Viability Score"
          value="42%"
          subtext="Brutal honesty setting: Max"
          icon={TrendingUp}
          colorClass="text-emerald-500"
        />
        <StatCard
          title="Pending Reviews"
          value="1"
          subtext="Estimated wait: 2 mins"
          icon={Hourglass}
          colorClass="text-blue-400"
        />
      </div>

      {/* Hero CTA */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-boardroom-card to-[#1a1915] p-8 md:p-10">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-executive-gold/5 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h3 className="text-2xl font-serif font-bold text-white">
              Convene the Board
            </h3>
            <p className="mt-2 text-gray-400">
              Submit a new business idea for brutal validation by our AI
              personas representing VC, Legal, and Tech perspectives.
            </p>
          </div>
          <Link
            to="/#input-section"
            className="flex items-center gap-2 rounded-lg bg-executive-gold px-6 py-3 font-bold text-boardroom-black transition-transform hover:scale-105"
          >
            Start New Session <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Roasts Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Recent Roasts</h3>
            <Link
              to="/dashboard/archives"
              className="text-sm text-executive-gold hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-boardroom-card">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-white/5 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Proposal Name</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Viability</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">
                    Uber for Dog Walking
                  </td>
                  <td className="px-6 py-4">Oct 24, 2023</td>
                  <td className="px-6 py-4 text-emerald-500 font-bold">82</td>
                  <td className="px-6 py-4">
                    <span className="rounded bg-white/10 px-2 py-1 text-xs text-white">
                      Complete
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">
                    NFT Toaster
                  </td>
                  <td className="px-6 py-4">Oct 22, 2023</td>
                  <td className="px-6 py-4 text-alert-red font-bold">12</td>
                  <td className="px-6 py-4">
                    <span className="rounded bg-white/10 px-2 py-1 text-xs text-white">
                      Complete
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Tools - NOW CLICKABLE LINKS */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Quick Tools</h3>
          <div className="grid gap-3">
            {/* Link to Battle Mode (Pivot Generator placeholder) */}
            <Link
              to="/dashboard/tools/battle-mode"
              className="group cursor-pointer rounded-lg border border-white/10 bg-boardroom-card p-4 transition-all hover:border-executive-gold/50 block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-yellow-500/10 text-yellow-500">
                  <Gavel size={18} />
                </div>
                <h4 className="font-bold text-white">Battle Mode</h4>
              </div>
              <p className="text-xs text-gray-500">
                Watch two AI personas debate your idea live.
              </p>
            </Link>

            {/* Link to VC Interrogation */}
            <Link
              to="/dashboard/interrogation"
              className="group cursor-pointer rounded-lg border border-white/10 bg-boardroom-card p-4 transition-all hover:border-executive-gold/50 block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-purple-500/10 text-purple-500">
                  <MessageSquare size={18} />
                </div>
                <h4 className="font-bold text-white">VC Interrogation</h4>
              </div>
              <p className="text-xs text-gray-500">
                Simulate a hostile VC Q&A session.
              </p>
            </Link>

            {/* Link to Competitor Recon */}
            <Link
              to="/dashboard/tools/competitor-recon"
              className="group cursor-pointer rounded-lg border border-white/10 bg-boardroom-card p-4 transition-all hover:border-executive-gold/50 block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-blue-500/10 text-blue-500">
                  <Eye size={18} />
                </div>
                <h4 className="font-bold text-white">Competitor Recon</h4>
              </div>
              <p className="text-xs text-gray-500">
                See who else is building this idea.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
