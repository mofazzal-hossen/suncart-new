import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { FiGrid } from "react-icons/fi";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden glass border border-white/5 p-10 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-sun-400/10 blur-3xl" />
          <div className="relative">
            <span className="px-4 py-1.5 glass text-sun-400 text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-4">
              <FiGrid className="inline mr-2" />
              All Products
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-sand-100 mb-3">
              Summer <span className="gradient-text">Collection</span>
            </h1>
            <p className="text-sand-100/50 max-w-xl mx-auto">
              {products.length} premium summer products — UV protection, beachwear, skincare & more.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter (Static display) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-5 py-2 glass rounded-full text-sm font-medium text-sand-100/60 border border-white/5 cursor-pointer hover:border-sun-400/40 hover:text-sun-400 transition-all"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
