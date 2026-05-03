import Link from "next/link";

const CTABanner = () => {
  return (
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
  );
};

export default CTABanner;