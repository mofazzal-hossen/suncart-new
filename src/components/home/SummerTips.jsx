import { FiDroplet, FiSun, FiShield, FiHeart } from "react-icons/fi";

const summerTips = [
  {
    icon: FiSun,
    title: "Sun Protection First",
    tip: "Apply SPF 30+ sunscreen 15 minutes before sun exposure. Reapply every 2 hours and after swimming.",
    color: "from-sun-500/20 to-sun-900/5",
    iconColor: "text-sun-400",
  },
  {
    icon: FiDroplet,
    title: "Stay Hydrated",
    tip: "Drink at least 8–10 glasses of water daily. Carry a reusable water bottle everywhere you go.",
    color: "from-ocean-500/20 to-ocean-700/5",
    iconColor: "text-ocean-400",
  },
  {
    icon: FiShield,
    title: "Smart Skincare Routine",
    tip: "Use lightweight, oil-free moisturizers. Aloe vera gel soothes sunburned skin naturally.",
    color: "from-green-500/20 to-green-900/5",
    iconColor: "text-green-400",
  },
  {
    icon: FiHeart,
    title: "Seek Shade Wisely",
    tip: "UV rays are strongest between 10 AM – 4 PM. Take breaks in shade and wear protective clothing.",
    color: "from-coral-500/20 to-coral-600/5",
    iconColor: "text-coral-400",
  },
];

const SummerTips = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a14] via-[#0d0d1a] to-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="px-4 py-1.5 glass text-ocean-400 text-xs font-bold uppercase tracking-widest rounded-full">
            ☀️ Expert Advice
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-sand-100 mt-4 mb-4">
            Summer Care <span className="gradient-text-ocean">Tips</span>
          </h2>
          <p className="text-sand-100/50 max-w-xl mx-auto">
            Stay safe, hydrated, and radiant all summer long with these expert-curated tips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summerTips.map((tip, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${tip.color} glass card-hover border border-white/5 animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center mb-5 ${tip.iconColor}`}>
                <tip.icon className="text-xl" />
              </div>
              <h3 className="font-display text-lg font-bold text-sand-100 mb-3">{tip.title}</h3>
              <p className="text-sand-100/50 text-sm leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerTips;