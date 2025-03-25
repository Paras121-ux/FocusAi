'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X, Brain, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0F1C]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center relative"
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ rotate: isLogoHovered ? 360 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="mr-2"
                >
                  <Brain className="w-8 h-8 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                </motion.div>
                <div className="flex items-center relative">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                    Focus
                  </span>
                  <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">AI</span>
                  <AnimatePresence>
                    {isLogoHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-1 -right-6"
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium transition-colors"
              >
                <span className={`relative z-10 ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {link.label}
                </span>
                <motion.div
                  className="absolute inset-0 bg-blue-500/10 rounded-lg -z-0"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={false}
                  />
                )}
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/login"
                className="relative px-6 py-2 text-sm font-medium text-white overflow-hidden rounded-lg group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 opacity-0 group-hover:opacity-90" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-[#0A0F1C]/95 backdrop-blur-md"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-white bg-blue-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-blue-500/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
} 