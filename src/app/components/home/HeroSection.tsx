'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { FlipText } from '../ui/FlipText';

const HeroSection = () => {
  return (
    <div className="min-h-screen pt-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Centered Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-[#00BFFF] text-glow-lg tracking-wider mb-6">
            FOCUS AI
          </h2>
          <div className="text-gray-300 text-2xl md:text-3xl flex items-center justify-center">
            <span>Your</span>
            <FlipText />
            <span>Study Companion</span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Main Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left mb-10 lg:mb-0 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1">
              Study Smarter,{' '}
              <span className="text-[#00BFFF] text-glow">Stress Less</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Relax, focus, and stay productive with our comprehensive study tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/signup"
                  className="bg-[#00BFFF] text-white px-8 py-3 rounded-md hover:bg-[#00BFFF]/90 transition-all btn-glow inline-block text-lg font-semibold"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/features"
                  className="bg-transparent text-white px-8 py-3 rounded-md border-2 border-[#00BFFF]/30 hover:border-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all inline-block text-lg font-semibold"
                >
                  Explore Features
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Illustration with ContainerScroll */}
          <div className="flex-1 relative z-10">
            <ContainerScroll
              titleComponent={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-[#00BFFF]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-[#00BFFF]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#00BFFF]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </motion.div>
              }
            >
              <Image
                src="/hero-illustration.svg"
                alt="Student studying with music"
                width={600}
                height={500}
                priority
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </ContainerScroll>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00BFFF]/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00BFFF]/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default HeroSection; 