# ☀️ SunCart – Summer Essentials Store

> Your ultimate summer shopping destination — UV protection, beachwear, skincare & more.

![SunCart Banner](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80)

---

## 🌐 Live URL
[
https://suncart-new.vercel.app

---

## 🎯 Project Purpose

SunCart is a modern summer eCommerce platform where users can explore and purchase premium seasonal products. Browse UV-protective sunglasses, breezy sundresses, SPF skincare, beach accessories, and more — all in one place.

---

## ✨ Key Features

- **🏠 Home Page** – Dynamic hero section with summer sale banners, popular products, care tips, and top brand showcases
- **🛍️ Product Listing** – Browse all 8+ summer products with category filtering
- **🔒 Protected Product Details** – Full product info accessible only to authenticated users
- **🔐 Authentication (BetterAuth)**
  - Email & Password login/registration
  - Google OAuth social login
  - Secure session management
- **👤 My Profile** – View profile info (name, email, avatar, join date)
- **✏️ Update Profile** – Edit display name and profile photo via BetterAuth's `updateUser`
- **📱 Fully Responsive** – Mobile, tablet, and desktop layouts
- **🎨 Unique Dark Design** – Glassmorphism UI with animated sun glow effects, gradient text, and floating elements
- **🎭 Animate.css** – Smooth page-entry animations throughout the app

---

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| `next` | React framework with App Router |
| `react` / `react-dom` | UI library |
| `better-auth` | Authentication (email + Google OAuth) |
| `animate.css` | CSS animation library (bonus requirement) |
| `react-hot-toast` | Toast notifications |
| `react-icons` | Icon library (Feather, Google icons) |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind component library with custom theme |
| `embla-carousel-react` | Carousel/slider component |

---



## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **Next.js 15** | React framework, App Router, SSR |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Component library with custom `suncart` theme |
| **BetterAuth** | Full authentication solution |
| **Animate.css** | Entry animations |

---

## 📸 Design Highlights

- **Dark glassmorphism** aesthetic with blur effects
- **Gradient sun/ocean color palette** — amber, sky blue, coral
- **Playfair Display** (display font) + **DM Sans** (body font)
- Floating product badges on hero section
- Animated sun spin in logo and navbar
- Card hover lifts with golden glow shadows

---

## 🔐 Protected Routes

The following routes require authentication:
- `/products/[id]` — Product detail pages
- `/my-profile` — User profile
- `/my-profile/update` — Edit profile

Unauthenticated users are redirected to `/login` with a `redirect` query param to return after login.



## 👨‍💻 Author

Built for the **SunCart – Summer Essentials Store**

---

*Made with ☀️ and lots of sunscreen*
