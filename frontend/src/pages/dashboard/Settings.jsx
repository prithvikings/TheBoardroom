import { Save, User, Lock, Bell, Shield, Upload } from "lucide-react";

const Toggle = ({ label, description, checked }) => (
  <div className="flex items-center justify-between py-4">
    <div>
      <h4 className="font-medium text-white">{label}</h4>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
    <div
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? "bg-executive-gold" : "bg-gray-700"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </div>
  </div>
);

const Settings = () => {
  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">
            Account Settings
          </h2>
          <p className="text-gray-400">
            Manage your personal dossier and access credentials.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="rounded-lg border border-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/5">
            Cancel
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-executive-gold px-4 py-2 text-sm font-bold text-boardroom-black hover:bg-executive-gold-hover">
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      {/* 1. Profile Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-executive-gold font-bold uppercase tracking-widest text-sm">
          <User size={16} /> Profile Information
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Avatar */}
          <div className="md:col-span-3">
            <div className="text-sm font-medium text-gray-400 mb-2">
              Profile Photo
            </div>
            <div className="h-32 w-32 rounded-xl bg-boardroom-card border border-white/10 flex items-center justify-center overflow-hidden relative group cursor-pointer">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=random"
                alt="Profile"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload className="text-white" size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">Max file size: 5MB.</p>
          </div>

          {/* Inputs */}
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                defaultValue="Johnathan Doe"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-executive-gold focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Job Title</label>
              <input
                type="text"
                defaultValue="CEO & Founder"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-executive-gold focus:outline-none"
              />
            </div>
            <div className="col-span-full space-y-2">
              <label className="text-sm text-gray-400">Company Name</label>
              <input
                type="text"
                defaultValue="OmniCorp Industries"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-executive-gold focus:outline-none"
              />
            </div>
            <div className="col-span-full space-y-2">
              <label className="text-sm text-gray-400">Bio</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white h-24 focus:border-executive-gold focus:outline-none resize-none">
                Experienced executive building the future of automated synergy.
              </textarea>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Security Section */}
      <section className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-executive-gold font-bold uppercase tracking-widest text-sm">
          <Lock size={16} /> Security
        </div>

        <div className="rounded-xl border border-white/10 bg-boardroom-card p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Email Address</label>
            <div className="flex items-center justify-between rounded-lg bg-black/20 px-4 py-2 border border-white/5">
              <span className="text-gray-300">john.doe@omnicorp.com</span>
              <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded border border-green-800">
                Verified
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Privacy & Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
        {/* Notifications */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-executive-gold font-bold uppercase tracking-widest text-sm">
            <Bell size={16} /> Notifications
          </div>
          <div className="rounded-xl border border-white/10 bg-boardroom-card p-6">
            <Toggle
              label="Weekly Boardroom Digest"
              description="Receive a summary of your AI interactions."
              checked={true}
            />
            <div className="border-t border-white/5 my-2"></div>
            <Toggle
              label="Real-time Alerts"
              description="Notify me when a persona completes an analysis."
              checked={true}
            />
            <div className="border-t border-white/5 my-2"></div>
            <Toggle
              label="Product Updates"
              description="News about new AI personas and features."
              checked={false}
            />
          </div>
        </section>

        {/* Privacy */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-executive-gold font-bold uppercase tracking-widest text-sm">
            <Shield size={16} /> Privacy Settings
          </div>
          <div className="rounded-xl border border-executive-gold/30 bg-yellow-900/10 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 text-executive-gold opacity-10">
              <Shield size={100} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-white">
                  Hall of Flame Opt-in{" "}
                  <span className="bg-executive-gold text-black text-[10px] px-1 rounded ml-2">
                    BETA
                  </span>
                </h4>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-4">
                Allow your validation reports to be publicly roasted in the Hall
                of Flame. This grants you +5 bonus credits per month.
              </p>
            </div>

            <div className="border-t border-white/10 my-4"></div>

            <Toggle
              label="Data Retention"
              description="Automatically delete session history after 30 days."
              checked={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
