'use client';

import { Music, Timer, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Music className="w-8 h-8 text-[#00BFFF]" />,
    title: 'Study Lo-Fi Music',
    description: 'Enhance your focus with curated lo-fi music playlists.',
  },
  {
    icon: <Timer className="w-8 h-8 text-[#00BFFF]" />,
    title: 'Focus Timer',
    description: 'Stay productive with customizable study sessions.',
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#00BFFF]" />,
    title: 'Gamification',
    description: 'Earn coins and compete on the leaderboard.',
  },
  {
    icon: <Users className="w-8 h-8 text-[#00BFFF]" />,
    title: 'Community',
    description: 'Connect with fellow students and share experiences.',
  },
];

const FeaturePreview = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Everything You Need to Study Better
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover tools designed to enhance your study experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="feature-icon w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-[#00BFFF]/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-[#00BFFF]/5 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
    </section>
  );
};

export default FeaturePreview; 