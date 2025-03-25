'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Zap, Target, Gamepad2, Music, Brain, ChevronLeft, ChevronRight, Trophy, BarChart2, Target as TargetIcon } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeFeature, setActiveFeature] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const features = [
    {
      id: 'timer',
      title: 'Smart Timer',
      icon: Clock,
      color: 'from-purple-500 to-[#00BFFF]',
      description: 'AI-powered focus timer that adapts to your study patterns',
      modes: [
        {
          name: 'Gentle Flow',
          duration: '25/5',
          description: 'Classic pomodoro with smart breaks',
          icon: '🌊'
        },
        {
          name: 'Sprint Pace',
          duration: '45/15',
          description: 'Deep work sessions for complex tasks',
          icon: '⚡'
        },
        {
          name: 'AI Adaptive',
          duration: 'Dynamic',
          description: 'Personalized intervals based on your energy',
          icon: '🧠'
        }
      ]
    },
    {
      id: 'games',
      title: 'Study Games',
      icon: Gamepad2,
      color: 'from-emerald-500 to-cyan-500',
      description: 'Learn through interactive games and challenges',
      games: [
        {
          name: 'Memory Match',
          description: 'Train your recall abilities',
          icon: '🎯'
        },
        {
          name: 'Knowledge Quest',
          description: 'Compete in subject challenges',
          icon: '🏆'
        },
        {
          name: 'Mind Map Master',
          description: 'Connect concepts visually',
          icon: '🗺️'
        }
      ]
    },
    {
      id: 'music',
      title: 'Focus Music',
      icon: Music,
      color: 'from-rose-500 to-orange-500',
      description: 'AI-curated soundscapes for optimal focus',
      playlists: [
        {
          name: 'Deep Focus',
          description: 'Minimal beats for concentration',
          icon: '🎵'
        },
        {
          name: 'Nature Calm',
          description: 'Soothing environmental sounds',
          icon: '🌿'
        },
        {
          name: 'Energy Boost',
          description: 'Upbeat tracks for motivation',
          icon: '⚡'
        }
      ]
    }
  ];

  const stats = [
    { label: 'Focus Score', value: '92%', icon: '📈' },
    { label: 'Study Streak', value: '7 days', icon: '🔥' },
    { label: 'Tasks Completed', value: '24', icon: '✅' }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-[#1A1A2E]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              {['dashboard', 'features'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-[#00BFFF]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            <Link
              href="/community"
              className="group relative px-6 py-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#00BFFF] to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <div className="relative flex items-center space-x-2">
                <span>Join Community</span>
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
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Welcome Message */}
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-transparent rounded-xl p-8 backdrop-blur-xl border border-white/10">
                <h1 className="text-3xl font-bold mb-3">Welcome back! 👋</h1>
                <p className="text-gray-400">Here's an overview of your study progress and achievements.</p>
              </div>

              {/* Quick Stats with Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    label: 'Focus Score',
                    value: '92%',
                    icon: '📈',
                    trend: '+5% from last week',
                    detail: 'Based on your last 10 study sessions',
                    color: 'text-emerald-400'
                  },
                  {
                    label: 'Study Streak',
                    value: '7 days',
                    icon: '🔥',
                    trend: '3 days until next milestone',
                    detail: 'Your longest streak: 12 days',
                    color: 'text-orange-400'
                  },
                  {
                    label: 'Tasks Completed',
                    value: '24',
                    icon: '✅',
                    trend: '8 tasks this week',
                    detail: '85% completion rate',
                    color: 'text-[#00BFFF]'
                  }
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-8 backdrop-blur-xl border border-white/10 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{stat.icon}</span>
                        <span className={`text-4xl font-bold ${stat.color}`}>
                          {stat.value}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-medium text-white">{stat.label}</p>
                        <p className="text-sm text-gray-400">{stat.detail}</p>
                        <p className={`text-sm ${stat.color}`}>{stat.trend}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity with Categories */}
              <div className="bg-white/5 rounded-xl backdrop-blur-xl border border-white/10">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-2xl font-semibold">Recent Activity</h2>
                  <p className="text-gray-400 text-sm mt-1">Your learning journey in the last 24 hours</p>
                </div>
                <div className="p-6 space-y-6">
                  {[
                    {
                      text: 'Completed a 45-minute focus session',
                      time: '2h ago',
                      icon: '⚡',
                      category: 'Focus Timer',
                      detail: 'Sprint Pace mode • 90% focus score',
                      color: 'text-yellow-400'
                    },
                    {
                      text: 'Achieved new high score in Memory Match',
                      time: '4h ago',
                      icon: '🎯',
                      category: 'Study Games',
                      detail: 'Level 5 completed • 12 perfect matches',
                      color: 'text-emerald-400'
                    },
                    {
                      text: 'Started a new study streak',
                      time: '1d ago',
                      icon: '🔥',
                      category: 'Achievement',
                      detail: 'Keep going to unlock rewards!',
                      color: 'text-orange-400'
                    }
                  ].map((activity, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-white/5 ${activity.color}`}>
                          <span className="text-xl">{activity.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${activity.color}`}>
                              {activity.category}
                            </span>
                            <span className="text-sm text-gray-500">{activity.time}</span>
                          </div>
                          <p className="mt-1 text-white">{activity.text}</p>
                          <p className="mt-1 text-sm text-gray-400">{activity.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-[#1A1A2E]/80 backdrop-blur-lg p-8 transition-all duration-500 group-hover:bg-[#1A1A2E]/40">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <feature.icon className="h-8 w-8" />
                        <h2 className="text-2xl font-bold">{feature.title}</h2>
                      </div>
                      <Link
                        href={`/${feature.id}`}
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                      >
                        Try Now
                      </Link>
                    </div>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(feature.modes || feature.games || feature.playlists)?.map((item) => (
                        <motion.div
                          key={item.name}
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{item.icon}</span>
                            <h3 className="font-medium">{item.name}</h3>
                          </div>
                          <p className="text-sm text-gray-400">{item.description}</p>
                          {item.duration && (
                            <span className="mt-2 inline-block px-2 py-1 rounded-full bg-white/10 text-xs">
                              {item.duration}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 