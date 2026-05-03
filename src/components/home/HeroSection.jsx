import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0f0f1a] to-[#0a0a14]" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sun-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-coral-500/8 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate__animated animate__fadeInLeft">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sun-400 text-sm font-medium mb-6">
              <span>🔥</span>
              <span>Hot Deals – Limited Time Only</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              <span className="text-sand-100">Sun-Ready</span>
              <br />
              <span className="gradient-text">Summer Sale</span>
              <br />
              <span className="text-sand-100 text-4xl sm:text-5xl lg:text-6xl">50% OFF</span>
            </h1>

            <p className="text-sand-100/60 text-lg leading-relaxed mb-8 max-w-lg">
              Discover premium summer essentials — from UV-protective eyewear to reef-safe sunscreens. Gear up for your best summer yet.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-summer px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-2">
                Shop Summer Deals
                <FiArrowRight />
              </Link>
              <Link href="#popular" className="px-8 py-4 rounded-2xl text-base font-medium glass text-sand-100/80 hover:text-sun-400 transition-colors">
                View Products
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5">
              {[
                { value: "500+", label: "Products" },
                { value: "50K+", label: "Happy Customers" },
                { value: "4.8★", label: "Avg. Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text font-display">{stat.value}</div>
                  <div className="text-sand-100/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Product Cards */}
          <div className="relative hidden lg:flex justify-center items-center h-[500px]">
            {/* Central sun icon */}
            <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-sun-400/30 to-sun-600/10 blur-2xl animate-pulse" />
            <div className="text-[120px] animate-float">☀️</div>

            {/* Floating product badges */}
            {[
              { emoji: "🕶️", label: "UV Sunglasses", top: "10%", left: "5%", delay: "0s" },
              { emoji: "🧴", label: "SPF 50+", top: "10%", right: "5%", delay: "0.5s" },
              { emoji: "👙", label: "Beachwear", bottom: "15%", left: "5%", delay: "1s" },
              { emoji: "👒", label: "Sun Hat", bottom: "15%", right: "5%", delay: "1.5s" },
            ].map((item, i) => (
              <div
                key={i}
                className="absolute glass px-4 py-3 rounded-2xl text-center animate-float shadow-lg"
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                  animationDelay: item.delay,
                }}
              >
                <div className="text-2xl">{item.emoji}</div>
                <div className="text-xs text-sand-100/70 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand-100/30 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-sun-400/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;