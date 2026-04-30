import Image from "next/image";
import Link from "next/link";
import { FiStar, FiEye } from "react-icons/fi";

export default function ProductCard({ product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="glass rounded-2xl overflow-hidden card-hover group animate__animated animate__fadeInUp">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-sun-900/20 to-ocean-700/10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-sun-400 text-black text-xs font-bold rounded-full badge-glow">
              {product.badge}
            </span>
          </div>
        )}

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-coral-500 text-white text-xs font-bold rounded-lg">
              -{discount}%
            </span>
          </div>
        )}

        {/* Category */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 glass text-sand-100/80 text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sun-400/70 text-xs font-medium uppercase tracking-widest mb-1">{product.brand}</p>
        <h3 className="font-display text-lg font-bold text-sand-100 mb-3 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                className={`text-sm ${star <= Math.floor(product.rating) ? "text-sun-400 fill-sun-400" : "text-sand-100/20"}`}
                fill={star <= Math.floor(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-sand-100/50 text-xs">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold gradient-text">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sand-100/30 text-sm line-through">${product.originalPrice}</span>
            )}
          </div>
          <span className={`text-xs ${product.stock > 0 ? "text-green-400" : "text-red-400"}`}>
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/products/${product.id}`}
          className="flex items-center justify-center gap-2 w-full py-3 btn-summer rounded-xl text-sm font-semibold"
        >
          <FiEye />
          View Details
        </Link>
      </div>
    </div>
  );
}
