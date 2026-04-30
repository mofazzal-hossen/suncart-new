import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FiStar, FiArrowLeft, FiShield, FiPackage, FiTruck, FiRefreshCw } from "react-icons/fi";

export default async function ProductDetailPage({ params }) {
  // Check authentication
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect(`/login?redirect=/products/${params.id}`);
  }

  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-sand-100/40 mb-8">
          <Link href="/" className="hover:text-sun-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sun-400 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-sand-100/70">{product.name}</span>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-xl text-sand-100/60 hover:text-sun-400 transition-all mb-8 text-sm"
        >
          <FiArrowLeft /> Back to Products
        </Link>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden glass border border-white/10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-sun-400 text-black text-sm font-bold rounded-full badge-glow">
                    {product.badge}
                  </span>
                </div>
              )}
              {/* Discount */}
              {discount > 0 && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-coral-500 text-white text-sm font-bold rounded-xl">
                    -{discount}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate__animated animate__fadeInRight">
            <span className="px-3 py-1 glass text-sun-400/70 text-xs font-bold uppercase tracking-widest rounded-full">
              {product.category} · {product.brand}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl font-black text-sand-100 mt-4 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className={`text-lg ${
                      star <= Math.floor(product.rating)
                        ? "text-sun-400"
                        : "text-sand-100/20"
                    }`}
                    fill={star <= Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sand-100/70 font-semibold">{product.rating}</span>
              <span className="text-sand-100/40 text-sm">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6 p-5 glass rounded-2xl">
              <div>
                <span className="text-4xl font-black gradient-text font-display">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="ml-3 text-sand-100/30 line-through text-xl">${product.originalPrice}</span>
                )}
              </div>
              {discount > 0 && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? "bg-green-400" : "bg-red-400"}`} />
              <span className={`text-sm font-medium ${product.stock > 0 ? "text-green-400" : "text-red-400"}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
              </span>
            </div>

            {/* Description */}
            <p className="text-sand-100/60 leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            {product.features && (
              <div className="mb-8">
                <h3 className="font-display text-lg font-bold text-sand-100 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-sand-100/60">
                      <span className="w-1.5 h-1.5 bg-sun-400 rounded-full flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <button className="w-full btn-summer py-4 rounded-2xl text-base font-bold mb-4 disabled:opacity-50 disabled:cursor-not-allowed" disabled={product.stock === 0}>
              {product.stock > 0 ? "🛒 Add to Cart" : "Out of Stock"}
            </button>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: FiShield, label: "Secure Payment" },
                { icon: FiTruck, label: "Free Shipping $50+" },
                { icon: FiRefreshCw, label: "30-Day Returns" },
                { icon: FiPackage, label: "Premium Packaging" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-sand-100/40">
                  <item.icon className="text-sun-400/60" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display text-3xl font-black text-sand-100 mb-8">
              You Might Also <span className="gradient-text">Like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <div key={rp.id} className="glass rounded-2xl overflow-hidden card-hover">
                  <div className="relative h-44">
                    <Image src={rp.image} alt={rp.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display font-bold text-sand-100 mb-2">{rp.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="gradient-text font-bold">${rp.price}</span>
                      <Link href={`/products/${rp.id}`} className="btn-summer px-4 py-1.5 rounded-lg text-xs">View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
