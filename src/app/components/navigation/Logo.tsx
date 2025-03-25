'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link href="/" className="logo-container group">
      <div className="flex items-center space-x-1">
        {/* Logo Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 bg-[#00BFFF] rounded-lg flex items-center justify-center mr-2 shadow-lg shadow-[#00BFFF]/20"
        >
          <span className="text-white font-bold text-lg">F</span>
        </motion.div>
        
        {/* Logo Text */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-100 logo-text logo-text-focus transition-colors">Focus</span>
          <span className="text-2xl font-bold text-[#00BFFF] logo-text logo-text-ai transition-colors">AI</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo; 