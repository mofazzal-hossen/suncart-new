const brands = [
  { name: "SunShade", tagline: "UV Protection Experts", logo: "🕶️" },
  { name: "CoastalWear", tagline: "Born at the Beach", logo: "🏄" },
  { name: "DermaSun", tagline: "Science of Skincare", logo: "💊" },
  { name: "WaveRunner", tagline: "Ride Every Wave", logo: "🌊" },
];

const TopBrands = () => {
  return (
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
  );
};

export default TopBrands;