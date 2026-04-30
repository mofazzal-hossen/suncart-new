
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Your ultimate summer shopping destination. UV protection, beachwear, skincare & more.",
  keywords: ["summer", "sunglasses", "beachwear", "skincare", "accessories"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="suncart">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a2e',
              color: '#f0e6d3',
              border: '1px solid rgba(255, 181, 32, 0.3)',
            },
            success: {
              iconTheme: { primary: '#ffb520', secondary: '#0a0a14' },
            },
            error: {
              iconTheme: { primary: '#f43f5e', secondary: '#0a0a14' },
            },
          }}
        />
      </body>
    </html>
  );
}
