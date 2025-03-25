'use client';

import { BackgroundGradient } from "../ui/background-gradient";
import { motion } from "framer-motion";

const features = [
  {
    title: "Study Lo-Fi Music",
    description: "Enhance your focus with curated lo-fi music playlists. Get into the zone with carefully selected tracks that help you concentrate.",
    icon: "🎵",
    gradient: "from-[#6366f1] to-[#a855f7]"
  },
  {
    title: "Focus Timer",
    description: "Stay productive with customizable study sessions. Set your goals, track your progress, and maintain your study rhythm.",
    icon: "⏱️",
    gradient: "from-[#3b82f6] to-[#8b5cf6]",
    minHeight: true
  },
  {
    title: "Gamification",
    description: "Earn coins and compete on the leaderboard. Turn your study sessions into rewarding achievements and stay motivated.",
    icon: "🏆",
    gradient: "from-[#f59e0b] to-[#f43f5e]"
  },
  {
    title: "Community",
    description: "Connect with fellow students and share experiences. Join study groups, share tips, and grow together in your learning journey.",
    icon: "👥",
    gradient: "from-[#6366f1] to-[#ec4899]"
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-32 bg-[#0A0F1C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(0,191,255,0.3)]">
            Everything You Need to Study Better
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Discover tools designed to enhance your study experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <BackgroundGradient
                containerClassName="h-full"
                className="rounded-[32px] h-full"
              >
                <div className="relative bg-[#1a1a2e]/95 rounded-[32px] p-8 h-full backdrop-blur-xl flex flex-col">
                  <div className={`mb-6 bg-[#1E293B]/50 rounded-2xl w-14 h-14 flex items-center justify-center backdrop-blur-sm border border-white/5 text-3xl ${feature.minHeight ? 'mb-8' : ''}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className={`text-gray-300 text-lg leading-relaxed ${feature.minHeight ? 'min-h-[80px]' : ''}`}>
                    {feature.description}
                  </p>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-purple-500/10 to-blue-500/10 blur-3xl" />
    </section>
  );
}; 