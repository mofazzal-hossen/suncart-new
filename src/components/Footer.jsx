import Link from "next/link";
import { FiSun, FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#07070f] border-t border-white/5">
      {/* Top Wave */}
      <div className="h-16 bg-gradient-to-r from-sun-500/20 via-ocean-500/20 to-coral-500/20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FiSun className="text-3xl text-sun-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-display text-2xl font-bold gradient-text">SunCart</span>
            </div>
            <p className="text-sand-100/50 text-sm leading-relaxed mb-6">
              Your ultimate summer shopping destination. Premium quality products for sun, sand, and sea lovers.
            </p>



            <div className="flex gap-4">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-sand-100/50 hover:text-sun-400 hover:border-sun-400/50 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-sand-100 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "My Profile", href: "/my-profile" },
                { label: "Login", href: "/login" },
                { label: "Register", href: "/register" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sand-100/50 hover:text-sun-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-lg font-bold text-sand-100 mb-5">Categories</h3>
            <ul className="space-y-3">
              {["Sunglasses", "Clothing", "Skincare", "Accessories", "Footwear", "Beach Gear"].map((cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="text-sand-100/50 hover:text-sun-400 transition-colors text-sm"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold text-sand-100 mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sand-100/50 text-sm">
                <FiMapPin className="text-sun-400 mt-0.5 shrink-0" />
                <span>123 Beach Avenue, Miami, FL 33101, USA</span>
              </li>
              <li className="flex items-center gap-3 text-sand-100/50 text-sm">
                <FiPhone className="text-sun-400 shrink-0" />
                <span>+1 (800) SUN-CART</span>
              </li>
              <li className="flex items-center gap-3 text-sand-100/50 text-sm">
                <FiMail className="text-sun-400 shrink-0" />
                <a href="mailto:hello@suncart.shop" className="hover:text-sun-400 transition-colors">hello@suncart.shop</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sand-100/30 text-sm">
            © 2025 SunCart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-sand-100/30">
            <a href="#" className="hover:text-sun-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sun-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sun-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
