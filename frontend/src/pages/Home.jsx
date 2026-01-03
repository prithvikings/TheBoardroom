import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flame, TrendingUp, ShieldAlert } from "lucide-react";
import API from "../services/api";

const Home = () => {
  const [ticker, setTicker] = useState([]);

  // Fetch Hall of Flame for the ticker
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const { data } = await API.get("/roast/feed");
        setTicker(data.data || []);
      } catch (error) {
        console.error("Failed to load feed");
      }
    };
    fetchFeed();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* 1. The Ticker (Hall of Flame) */}
      <div className="bg-boardroom-gold text-black text-xs font-bold py-2 overflow-hidden whitespace-nowrap flex gap-8">
        {/* Simple CSS animation would go here, for now just static list */}
        {ticker.map((item, index) => (
          <span
            key={index}
            className="uppercase tracking-widest flex items-center gap-2 opacity-80"
          >
            <Flame className="w-3 h-3" />
            {item.pitch.substring(0, 30)}... : {item.verdict} ({item.score}/100)
          </span>
        ))}
        {ticker.length === 0 && (
          <span>
            LOADING MARKET DATA... ANALYZING FAILURES... CRUSHING DREAMS...
          </span>
        )}
      </div>

      {/* 2. Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boardroom-dark border border-boardroom-gray text-xs text-boardroom-gold mb-6 animate-pulse">
          <ShieldAlert className="w-3 h-3" />
          <span>Warning: Brutal Honesty Inside</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Get <span className="text-boardroom-gold">Roasted</span>
          <br />
          to Get Rich.
        </h1>

        <p className="text-xl text-boardroom-muted mb-10 max-w-2xl mx-auto">
          90% of startups fail because founders lie to themselves. Our AI Sharks
          don't have feelings. They have data. Validate your idea before you
          waste your life.
        </p>

        {/* 3. The Input Area (Placeholder for Component) */}
        <div className="bg-boardroom-dark border border-boardroom-gray p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-boardroom-gold" />
            Pitch Your Idea (Anonymous)
          </h3>

          {/* We will build the RoastForm component next and put it here */}
          <div className="border border-dashed border-boardroom-gray rounded-lg p-12 text-center text-boardroom-muted">
            [Roast Form Component Will Go Here]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
