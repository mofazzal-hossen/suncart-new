"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiUser, FiImage, FiArrowLeft, FiSave } from "react-icons/fi";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-sun-400/30 border-t-sun-400 rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await authClient.updateUser({
        name: name || undefined,
        image: image || undefined,
      });
      toast.success("Profile updated successfully! ✨");
      router.push("/my-profile");
    } catch (err) {
      setError(err?.message || "Update failed. Please try again.");
      toast.error("Update failed.");
    } finally {
      setLoading(false);
    }
  };

  const previewImage = image || session.user?.image;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-ocean-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg mx-auto px-4 sm:px-6">
        <Link
          href="/my-profile"
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-xl text-sand-100/60 hover:text-sun-400 transition-all mb-6 text-sm"
        >
          <FiArrowLeft /> Back to Profile
        </Link>

        <div className="glass rounded-3xl p-8 border border-white/8 animate__animated animate__fadeInUp">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-black text-sand-100 mb-2">
              Update <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-sand-100/40 text-sm">Update your name and profile photo</p>
          </div>

          {/* Avatar Preview */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-sun-400/40">
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt="Preview"
                    fill
                    className="object-cover"
                    onError={() => {}}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-sun-400 to-coral-500 flex items-center justify-center text-black font-black text-3xl font-display">
                    {(name || session.user?.name)?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-sun-400 rounded-full flex items-center justify-center text-black text-sm">
                <FiImage />
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleUpdate} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sand-100/60 text-sm font-medium mb-1.5">Display Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-100/30" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your display name"
                  className="summer-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sand-100/60 text-sm font-medium mb-1.5">Photo URL</label>
              <div className="relative">
                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-100/30" />
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="summer-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm"
                />
              </div>
              <p className="text-sand-100/30 text-xs mt-1">Paste a direct link to an image (jpg, png, webp)</p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-summer py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Saving changes...
                </>
              ) : (
                <>
                  <FiSave />
                  Save Changes
                </>
              )}
            </button>
          </form>

          {/* Current Info */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-sand-100/30 text-xs text-center">
              Current email: <span className="text-sand-100/50">{session.user.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
