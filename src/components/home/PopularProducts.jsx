import Link from "next/link";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { FiArrowRight } from "react-icons/fi";

const PopularProducts = () => {
  const popularProducts = products.slice(0, 3);

  return (
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
  );
};

export default PopularProducts;