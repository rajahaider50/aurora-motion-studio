import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "Aurora — Premium Motion Studio", description: "Animated premium glass UI built with Next.js and Framer Motion." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="aurora"><i /><i /><i /></div>
        <Loader /><Cursor /><Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
