"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { FiSun, FiShoppingBag, FiUser, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <FiSun className="text-3xl text-sun-400 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <span
              className="font-display text-2xl font-bold gradient-text tracking-tight"
            >
              SunCart
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sand-100/80 hover:text-sun-400 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sand-100/80 hover:text-sun-400 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Products
            </Link>
            {session && (
              <Link
                href="/my-profile"
                className="text-sand-100/80 hover:text-sun-400 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                My Profile
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-3">
                <Link href="/my-profile" className="flex items-center gap-2 group">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-sun-400/50 group-hover:ring-sun-400 transition-all">
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-sun-400 to-coral-500 flex items-center justify-center text-black font-bold text-sm">
                        {session.user?.name?.[0]?.toUpperCase() || "U"}
                      </div>
                    )}
                  </div>
                  <span className="text-sand-100/80 text-sm font-medium hidden lg:block">
                    {session.user?.name?.split(" ")[0]}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-sand-100/80 hover:text-red-400 hover:bg-red-400/10 transition-all"
                >
                  <FiLogOut />
                  <span className="hidden lg:block">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-5 py-2 rounded-xl text-sm font-medium text-sand-100/80 hover:text-sun-400 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn-summer px-5 py-2 rounded-xl text-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-sand-100 text-2xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-dark mt-2 mx-4 rounded-2xl p-5 animate__animated animate__fadeInDown animate__faster">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-sand-100/80 hover:text-sun-400 transition-colors font-medium">Home</Link>
            <Link href="/products" onClick={() => setMenuOpen(false)} className="text-sand-100/80 hover:text-sun-400 transition-colors font-medium">Products</Link>
            {session && (
              <Link href="/my-profile" onClick={() => setMenuOpen(false)} className="text-sand-100/80 hover:text-sun-400 transition-colors font-medium">My Profile</Link>
            )}
            <div className="border-t border-white/10 pt-4">
              {session ? (
                <button
                  onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="flex items-center gap-2 text-red-400 font-medium"
                >
                  <FiLogOut /> Logout
                </button>
              ) : (
                <div className="flex gap-3">
                  <Link href="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center py-2 border border-sun-400/30 rounded-xl text-sand-100/80 hover:text-sun-400 transition-colors text-sm">Login</Link>
                  <Link href="/register" onClick={() => setMenuOpen(false)} className="flex-1 text-center btn-summer py-2 rounded-xl text-sm">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
