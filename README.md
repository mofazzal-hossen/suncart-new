# ☀️ SunCart – Summer Essentials Store

> Your ultimate summer shopping destination — UV protection, beachwear, skincare & more.

![SunCart Banner](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80)

---

## 🌐 Live URL

**[https://suncart.vercel.app](https://suncart.vercel.app)**

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

## 🗂️ Project Structure

```
suncart/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout (Navbar + Footer)
│   │   ├── globals.css           # Global styles
│   │   ├── products/
│   │   │   ├── page.tsx          # Products listing
│   │   │   └── [id]/page.tsx     # Product detail (protected)
│   │   ├── login/page.tsx        # Login page
│   │   ├── register/page.tsx     # Register page
│   │   ├── my-profile/
│   │   │   ├── page.tsx          # Profile view (protected)
│   │   │   └── update/page.tsx   # Update profile
│   │   └── api/auth/[...all]/    # BetterAuth API handler
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Site footer
│   │   └── ProductCard.tsx       # Reusable product card
│   ├── data/
│   │   └── products.json         # 8 summer products data
│   └── lib/
│       ├── auth.ts               # BetterAuth server config
│       └── auth-client.ts        # BetterAuth client config
├── .env.local                    # Environment variables (gitignored)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/suncart.git
cd suncart

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Environment Variables

```env
# BetterAuth
BETTER_AUTH_SECRET=your-super-secret-key
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL=file:./dev.db
```

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

---

## 📝 Git Commits (10+ meaningful commits)

```
feat: init Next.js project with Tailwind + DaisyUI custom theme
feat: add BetterAuth configuration with email + Google OAuth
feat: create products JSON data with 8 summer items
feat: build Home page with hero section and popular products
feat: add Summer Care Tips and Top Brands sections
feat: create Products listing page with category display
feat: implement protected Product Detail page with SSR auth check
feat: build Login page with email form and Google social button
feat: build Register page with name, email, photo-url, password
feat: add My Profile page showing user info and stats
feat: implement Update Profile page with BetterAuth updateUser
feat: create responsive Navbar with scroll effect and mobile menu
feat: add Footer with contact info, social links, privacy policy
feat: add Animate.css animations for page entry effects
feat: add toast notifications for auth feedback
```

---

## 👨‍💻 Author

Built for the **SunCart – Summer Essentials Store** assignment (category-A8-Jackfruit).

---

*Made with ☀️ and lots of sunscreen*
