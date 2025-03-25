'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Users, MessageSquare, Hash } from 'lucide-react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function LiveDiscussion() {
  const [message, setMessage] = useState('');

  // Example data - In a real app, these would come from your backend
  const onlineUsers = [
    { id: 1, name: 'Alex Thompson', status: 'active', avatar: '/avatars/alex.jpg' },
    { id: 2, name: 'Sarah Chen', status: 'active', avatar: '/avatars/sarah.jpg' },
    { id: 3, name: 'Mike Peters', status: 'idle', avatar: '/avatars/mike.jpg' },
    { id: 4, name: 'Emma Wilson', status: 'active', avatar: '/avatars/emma.jpg' },
  ];

  const topics = [
    { id: 1, name: 'Study Tips', active: 234 },
    { id: 2, name: 'Math Help', active: 156 },
    { id: 3, name: 'Science Discussion', active: 89 },
    { id: 4, name: 'Language Learning', active: 167 },
    { id: 5, name: 'Exam Prep', active: 321 },
  ];

  const messages = [
    { id: 1, user: 'Alex Thompson', message: 'Has anyone tried the new Pomodoro feature?', time: '2:30 PM', avatar: '/avatars/alex.jpg' },
    { id: 2, user: 'Sarah Chen', message: 'Yes! It\'s really helping me stay focused during long study sessions.', time: '2:32 PM', avatar: '/avatars/sarah.jpg' },
    { id: 3, user: 'Mike Peters', message: 'The customizable intervals are great!', time: '2:33 PM', avatar: '/avatars/mike.jpg' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <main className="min-h-screen bg-[#0A0F1C] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00BFFF] to-purple-600 p-[1px]">
              <div className="w-full h-full rounded-2xl bg-[#1A1A2E] flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-[#00BFFF]" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Live Discussions
              </h1>
              <p className="text-xl text-gray-300">
                Engage in real-time discussions with fellow learners
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/community/live-discussion/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BFFF] to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-[#00BFFF] transition-all duration-300 shadow-lg hover:shadow-[#00BFFF]/20"
              >
                Join Discussion
                <MessageCircle className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Discussion Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {[
            { title: 'Study Tips', count: '234 active' },
            { title: 'Math Help', count: '156 active' },
            { title: 'Science Discussion', count: '89 active' },
            { title: 'Language Learning', count: '167 active' },
            { title: 'Exam Prep', count: '321 active' },
            { title: 'General Chat', count: '432 active' },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -5 }}
              className="rounded-xl bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00BFFF] transition-colors">
                  {category.title}
                </h3>
                <span className="text-sm text-[#00BFFF] bg-[#00BFFF]/10 px-3 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
} 