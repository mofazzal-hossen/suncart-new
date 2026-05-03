"use client";

import Link from "next/link";
import { FiSun, FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center bg-black text-white">

      <div className="max-w-xl space-y-6">

        {/* Icon */}
        <FiSun className="text-7xl text-yellow-400 mx-auto animate-pulse" />

        {/* 404 */}
        <h1 className="text-8xl font-black">404</h1>

        {/* Message */}
        <h2 className="text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="text-gray-400">
          Sorry, the page you are looking for is not available.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

          {/* Home Link */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition"
          >
            <FiHome />
            Home
          </Link>

          {/* Back Button */}


        </div>
      </div>
    </div>
  );
}