import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiMail, FiEdit2, FiCalendar, FiShoppingBag, FiHeart } from "react-icons/fi";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;
  const joinedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8 animate__animated animate__fadeInDown">
          <h1 className="font-display text-4xl font-black text-sand-100">
            My <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-sand-100/40 mt-1">Manage your account information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="glass rounded-3xl p-8 border border-white/8 text-center animate__animated animate__fadeInLeft">
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-sun-400/40 sun-glow">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sun-400 to-coral-500 flex items-center justify-center text-black font-black text-4xl font-display">
                      {user.name?.[0]?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full ring-2 ring-[#0a0a14]" />
              </div>

              <h2 className="font-display text-2xl font-bold text-sand-100 mb-1">{user.name}</h2>
              <p className="text-sand-100/40 text-sm mb-6">{user.email}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-2xl p-4">
                  <FiShoppingBag className="text-sun-400 text-xl mx-auto mb-2" />
                  <div className="text-lg font-bold text-sand-100">12</div>
                  <div className="text-xs text-sand-100/40">Orders</div>
                </div>
                <div className="glass rounded-2xl p-4">
                  <FiHeart className="text-coral-400 text-xl mx-auto mb-2" />
                  <div className="text-lg font-bold text-sand-100">8</div>
                  <div className="text-xs text-sand-100/40">Wishlist</div>
                </div>
              </div>

              <Link
                href="/my-profile/update"
                className="w-full flex items-center justify-center gap-2 btn-summer py-3 rounded-xl font-semibold"
              >
                <FiEdit2 />
                Update Profile
              </Link>
            </div>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-6 animate__animated animate__fadeInRight">
            {/* Account Info */}
            <div className="glass rounded-3xl p-8 border border-white/8">
              <h3 className="font-display text-xl font-bold text-sand-100 mb-6 flex items-center gap-2">
                <FiUser className="text-sun-400" />
                Account Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-white/3 rounded-2xl">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-sun-400 shrink-0">
                    <FiUser />
                  </div>
                  <div>
                    <div className="text-xs text-sand-100/40 uppercase tracking-widest font-medium mb-1">Full Name</div>
                    <div className="text-sand-100 font-semibold">{user.name || "Not set"}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/3 rounded-2xl">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-ocean-400 shrink-0">
                    <FiMail />
                  </div>
                  <div>
                    <div className="text-xs text-sand-100/40 uppercase tracking-widest font-medium mb-1">Email Address</div>
                    <div className="text-sand-100 font-semibold">{user.email}</div>
                    <div className="text-xs text-green-400 mt-1">✓ Verified</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/3 rounded-2xl">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-coral-400 shrink-0">
                    <FiCalendar />
                  </div>
                  <div>
                    <div className="text-xs text-sand-100/40 uppercase tracking-widest font-medium mb-1">Member Since</div>
                    <div className="text-sand-100 font-semibold">{joinedDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-3xl p-8 border border-white/8">
              <h3 className="font-display text-xl font-bold text-sand-100 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/products"
                  className="flex items-center gap-3 p-4 glass rounded-2xl hover:border-sun-400/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-sun-400/10 rounded-xl flex items-center justify-center text-sun-400 group-hover:bg-sun-400/20 transition-colors">
                    <FiShoppingBag />
                  </div>
                  <div>
                    <div className="text-sand-100 font-semibold text-sm">Browse Products</div>
                    <div className="text-sand-100/40 text-xs">Discover summer items</div>
                  </div>
                </Link>

                <Link
                  href="/my-profile/update"
                  className="flex items-center gap-3 p-4 glass rounded-2xl hover:border-sun-400/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-coral-400/10 rounded-xl flex items-center justify-center text-coral-400 group-hover:bg-coral-400/20 transition-colors">
                    <FiEdit2 />
                  </div>
                  <div>
                    <div className="text-sand-100 font-semibold text-sm">Edit Profile</div>
                    <div className="text-sand-100/40 text-xs">Update name & photo</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
