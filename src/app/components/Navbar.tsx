'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A1A2E]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-purple-600 rounded-xl transform group-hover:rotate-45 transition-transform duration-300" />
              <div className="absolute inset-0.5 bg-[#1A1A2E] rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#00BFFF] to-purple-600 bg-clip-text text-transparent">F</span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-purple-600 bg-clip-text text-transparent">
              FocusAI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-4 py-2 group"
              >
                <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                  pathname === item.path ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}

            {/* Community Button */}
            <Link
              href="/community"
              className="group relative px-6 py-2 overflow-hidden rounded-lg ml-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-purple-600 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[url('/sparkles.svg')] animate-sparkle" />
              </div>
              <div className="relative flex items-center space-x-2">
                <span className="text-sm font-medium text-white">Community</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="relative px-6 py-2 ml-2 overflow-hidden group rounded-lg"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-sm font-medium text-white">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 