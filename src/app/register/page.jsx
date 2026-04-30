"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FiMail, FiLock, FiUser, FiImage, FiSun, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      const result = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.photoUrl || undefined,
      });

      if (result.error) {
        setError(result.error.message || "Registration failed. Try again.");
        toast.error("Registration failed.");
      } else {
        toast.success("Account created! Please sign in. ☀️");
        router.push("/login");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-coral-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-sun-400/8 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="glass rounded-3xl p-8 sm:p-10 border border-white/8 animate__animated animate__fadeInUp">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FiSun className="text-3xl text-sun-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-display text-2xl font-bold gradient-text">SunCart</span>
            </div>
            <h1 className="font-display text-3xl font-black text-sand-100 mb-2">Create Account</h1>
            <p className="text-sand-100/50 text-sm">Join thousands of summer enthusiasts</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 glass border border-white/10 hover:border-sun-400/30 py-3.5 rounded-xl text-sand-100/80 hover:text-sand-100 transition-all mb-5 font-medium"
          >
            <FcGoogle className="text-xl" />
            Sign up with Google
          </button>

          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-sand-100/30 text-xs uppercase tracking-widest">or email</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sand-100/60 text-sm font-medium mb-1.5">Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-100/30" />
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Alex Johnson"
                  className={`summer-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm ${errors.name ? 'border-red-500/50' : ''}`}
                />
              </div>
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sand-100/60 text-sm font-medium mb-1.5">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-100/30" />
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  placeholder="you@example.com"
                  className={`summer-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm ${errors.email ? 'border-red-500/50' : ''}`}
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sand-100/60 text-sm font-medium mb-1.5">
                Photo URL <span className="text-sand-100/30 font-normal">(optional)</span>
              </label>
              <div className="relative">
                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-100/30" />
                <input
                  type="url"
                  {...register("photoUrl")}
                  placeholder="https://example.com/photo.jpg"
                  className="summer-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sand-100/60 text-sm font-medium mb-1.5">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-100/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { 
                    required: "Password is required",
                    minLength: { value: 8, message: "Must be at least 8 characters" }
                  })}
                  placeholder="Min. 8 characters"
                  className={`summer-input w-full pl-11 pr-12 py-3.5 rounded-xl text-sm ${errors.password ? 'border-red-500/50' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sand-100/30 hover:text-sand-100/60"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password ? (
                <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
              ) : (
                <p className="text-sand-100/30 text-xs mt-1">Must be at least 8 characters</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-summer py-3.5 rounded-xl font-bold mt-2 disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Creating account...
                </span>
              ) : (
                "Create Account ✨"
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sand-100/40 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-sun-400 hover:text-sun-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
