import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { FiArrowRight, FiDroplet, FiSun, FiShield, FiHeart } from "react-icons/fi";

const popularProducts = products.slice(0, 3);

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

const brands = [
  { name: "SunShade", tagline: "UV Protection Experts", logo: "🕶️" },
  { name: "CoastalWear", tagline: "Born at the Beach", logo: "🏄" },
  { name: "DermaSun", tagline: "Science of Skincare", logo: "💊" },
  { name: "WaveRunner", tagline: "Ride Every Wave", logo: "🌊" },
];

const heroSlides = [
  {
    headline: "Summer Sale",
    subheadline: "50% OFF",
    description: "Limited time offers on premium summer essentials",
    badge: "🔥 Hot Deals",
    cta: "Shop Now",
    bg: "from-sun-900/80 via-[#0a0a14] to-ocean-900/40",
    accent: "#ffb520",
  },
  {
    headline: "New Arrivals",
    subheadline: "Just Dropped",
    description: "Fresh summer styles for the season ahead",
    badge: "✨ New In",
    cta: "Explore",
    bg: "from-ocean-900/80 via-[#0a0a14] to-coral-900/40",
    accent: "#38bdf8",
  },
];



export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO SECTION ─────────────────────────────── */}
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

      {/* ─── POPULAR PRODUCTS ─────────────────────────── */}
      <section id="popular" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14 animate__animated animate__fadeInUp">
          <span className="px-4 py-1.5 glass text-sun-400 text-xs font-bold uppercase tracking-widest rounded-full">
            🔥 Most Loved
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-sand-100 mt-4 mb-4">
            Popular <span className="gradient-text">Products</span>
          </h2>
          <p className="text-sand-100/50 max-w-xl mx-auto">
            Our best-selling summer essentials loved by thousands of happy customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl text-sand-100/80 hover:text-sun-400 hover:border-sun-400/30 transition-all font-medium"
          >
            See All Products <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* ─── SUMMER CARE TIPS ─────────────────────────── */}
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

      {/* ─── TOP BRANDS ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="px-4 py-1.5 glass text-coral-400 text-xs font-bold uppercase tracking-widest rounded-full">
              🏆 Premium Brands
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-sand-100 mt-4 mb-4">
              Top <span className="gradient-text">Brands</span>
            </h2>
            <p className="text-sand-100/50 max-w-xl mx-auto">
              Partnered with the best names in summer fashion and wellness.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 text-center card-hover group animate__animated animate__zoomIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:animate-bounce transition-all">{brand.logo}</div>
                <h3 className="font-display text-xl font-bold text-sand-100 mb-2">{brand.name}</h3>
                <p className="text-sand-100/40 text-sm">{brand.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass border border-sun-400/20 p-12 text-center">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sun-400/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-5xl font-black gradient-text mb-4">
                Ready for Summer? ☀️
              </h2>
              <p className="text-sand-100/60 text-lg mb-8 max-w-xl mx-auto">
                Sign up now to get early access to exclusive deals and summer collections.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/register" className="btn-summer px-8 py-4 rounded-2xl text-base font-semibold">
                  Get Started Free
                </Link>
                <Link href="/products" className="glass px-8 py-4 rounded-2xl text-base font-medium text-sand-100/80 hover:text-sun-400 transition-colors">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
