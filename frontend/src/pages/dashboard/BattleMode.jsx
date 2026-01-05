import { Pause, Swords, Play } from "lucide-react";
import { motion } from "motion/react";

const PersonaAvatar = ({ name, role, align, image }) => (
  <div
    className={`flex flex-col items-center ${
      align === "right" ? "order-last" : ""
    }`}
  >
    <div
      className={`relative h-20 w-20 rounded-full border-2 ${
        align === "right" ? "border-executive-gold" : "border-blue-400"
      } p-1`}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full rounded-full object-cover grayscale"
      />
      <div
        className={`absolute -bottom-2 px-2 py-0.5 text-[10px] font-bold uppercase rounded text-black ${
          align === "right" ? "right-0 bg-executive-gold" : "left-0 bg-blue-400"
        }`}
      >
        Active
      </div>
    </div>
    <div
      className={`mt-3 text-center ${
        align === "right" ? "items-end" : "items-start"
      }`}
    >
      <h3 className="font-bold text-white text-lg">{name}</h3>
      <p className="text-xs text-gray-500 uppercase">{role}</p>
    </div>
  </div>
);

const ChatBubble = ({ text, sender, align }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`max-w-[80%] rounded-2xl p-6 relative ${
      align === "right"
        ? "bg-boardroom-card border border-executive-gold/30 ml-auto"
        : "bg-blue-900/10 border border-blue-400/30 mr-auto"
    }`}
  >
    <span
      className={`text-xs font-bold uppercase mb-2 block ${
        align === "right" ? "text-executive-gold" : "text-blue-400"
      }`}
    >
      {sender}
    </span>
    <p className="text-gray-200 text-lg leading-relaxed font-serif">{text}</p>
  </motion.div>
);

const BattleMode = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      {/* Header - Fight Card */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 text-alert-red font-bold uppercase tracking-widest text-xs mb-2">
            <span className="w-2 h-2 rounded-full bg-alert-red animate-pulse"></span>
            Live Debate • Round 3 of 5
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">
            Financial Viability vs. User Experience
          </h2>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 border border-white/10 rounded-lg px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5">
            <Pause size={16} /> Pause
          </button>
          <button className="flex items-center gap-2 bg-executive-gold text-boardroom-black font-bold rounded-lg px-6 py-2 hover:bg-executive-gold-hover">
            <Swords size={16} /> Declare Winner
          </button>
        </div>
      </div>

      {/* The Arena */}
      <div className="flex-1 grid grid-cols-12 gap-8 overflow-hidden">
        {/* Left Corner - The Visionary */}
        <div className="col-span-2 flex justify-center pt-10">
          <PersonaAvatar
            name="The Visionary"
            role="Optimist & Strategist"
            align="left"
            image="https://ui-avatars.com/api/?name=V&background=000&color=fff"
          />
        </div>

        {/* Center - Chat Stream */}
        <div className="col-span-8 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto space-y-8 px-4 pb-20 scrollbar-thin scrollbar-thumb-white/10">
            <ChatBubble
              sender="The Visionary"
              align="left"
              text="You're too focused on immediate ROI. If we don't invest in a superior visual interface now, we're just another spreadsheet wrapper. The 'Pinterest-style' board isn't a feature; it's the entire value proposition for creative professionals."
            />

            <ChatBubble
              sender="The Shark"
              align="right"
              text="That's exactly why 90% of these tools fail. 'Delight' doesn't pay server bills. Freelancers are price-sensitive. If you spend 6 months perfecting a drag-and-drop board, you'll burn through the seed capital before acquiring your first 100 paying users. Show me the CAC reduction plan, not pretty pictures."
            />

            <div className="flex justify-center my-4">
              <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                Analysis in progress...
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-900/10 border border-blue-400/30 rounded-2xl p-6 mr-auto max-w-[80%]"
            >
              <span className="text-xs font-bold uppercase mb-2 block text-blue-400 flex items-center gap-2">
                The Visionary{" "}
                <span className="text-[10px] text-gray-500 font-normal normal-case">
                  is typing...
                </span>
              </span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </motion.div>
          </div>

          {/* User Interjection */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Interject with a new fact..."
              className="w-full bg-boardroom-card border border-white/10 rounded-lg py-4 pl-4 pr-32 text-white focus:border-executive-gold focus:outline-none"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 px-4 rounded font-bold text-xs uppercase tracking-wide">
              Interject
            </button>
          </div>
        </div>

        {/* Right Corner - The Shark */}
        <div className="col-span-2 flex justify-center pt-10">
          <PersonaAvatar
            name="The Shark"
            role="Skeptic & Financier"
            align="right"
            image="https://ui-avatars.com/api/?name=S&background=000&color=fff"
          />
        </div>
      </div>
    </div>
  );
};

export default BattleMode;
