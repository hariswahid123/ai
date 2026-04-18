import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helplytics AI",
  description: "Community Support Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-[#00A86B] text-white flex items-center justify-center font-bold text-lg">
              H
            </div>
            <span className="font-semibold text-gray-900 tracking-tight">Helplytics AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/explore" className="hover:text-gray-900 transition-colors">Explore</Link>
            <Link href="/dashboard" className="hover:text-gray-900 transition-colors">Dashboard</Link>
            <Link href="/messages" className="hover:text-gray-900 transition-colors">Messages</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link href="/login" className="btn-primary text-sm px-4 py-2">
              Join platform
            </Link>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
