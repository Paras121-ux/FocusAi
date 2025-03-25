'use client';

import { motion } from 'framer-motion';
import { Users, MessageCircle, Trophy, Sparkles, ArrowRight, BookOpen, Target, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
  const features = [
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join or create study groups based on your subjects and goals',
      color: 'from-[#00BFFF] to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Discussions',
      description: 'Engage in real-time discussions with fellow learners',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Earn badges and rewards for your study milestones',
      color: 'from-orange-500 to-rose-500'
    },
    {
      icon: Share2,
      title: 'Resource Sharing',
      description: 'Share and access study materials within the community',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const testimonials = [
    {
      text: "The study community has transformed my learning experience. I've found amazing study partners!",
      author: "Sarah K.",
      role: "Computer Science Student"
    },
    {
      text: "Being part of study groups helped me stay accountable and motivated throughout my journey.",
      author: "Mike R.",
      role: "Medical Student"
    },
    {
      text: "The community features make studying less isolating and more engaging.",
      author: "Alex M.",
      role: "Language Learner"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20 backdrop-blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00BFFF] to-purple-600 bg-clip-text text-transparent">
              Join Our Study Community
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with fellow learners, share knowledge, and achieve your study goals together in our vibrant community.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00BFFF] to-purple-600 px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="relative p-8">
                <feature.icon className="w-12 h-12 mb-4 text-[#00BFFF]" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Active Members' },
              { value: '500+', label: 'Study Groups' },
              { value: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold text-[#00BFFF]">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-xl"
            >
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#00BFFF]/10 to-purple-600/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey with thousands of motivated learners and take your study experience to the next level.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00BFFF] to-purple-600 px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 