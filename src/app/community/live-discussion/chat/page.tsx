'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Users, MessageSquare, Hash, MessageCircle } from 'lucide-react';

const LiveDiscussionChat = () => {
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFFF] to-purple-600 p-[1px]">
              <div className="w-full h-full rounded-xl bg-[#1A1A2E] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#00BFFF]" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Live Discussions</h1>
              <p className="text-gray-400">Connect and chat with fellow learners</p>
            </div>
          </div>
        </motion.div>

        {/* Chat Interface */}
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
          {/* Left Sidebar - Topics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-3 bg-[#1A1A2E]/80 rounded-2xl p-6 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <Hash className="w-5 h-5 text-[#00BFFF]" />
              <h2 className="text-xl font-bold text-white">Topics</h2>
            </div>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  className="w-full p-3 rounded-lg bg-[#1A1A2E] hover:bg-[#00BFFF]/10 transition-colors group text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {topic.name}
                    </span>
                    <span className="text-sm text-[#00BFFF] bg-[#00BFFF]/10 px-2 py-1 rounded-full">
                      {topic.active}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main Chat Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-6 bg-[#1A1A2E]/80 rounded-2xl backdrop-blur-xl border border-white/10 flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#00BFFF]" />
                <h2 className="text-xl font-bold text-white">Study Tips</h2>
                <span className="text-sm text-[#00BFFF] bg-[#00BFFF]/10 px-2 py-1 rounded-full">
                  967 online
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00BFFF] to-purple-600 p-[1px]">
                    <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center">
                      {msg.user[0]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white group-hover:text-[#00BFFF] transition-colors">{msg.user}</span>
                      <span className="text-sm text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-gray-300 bg-[#1A1A2E] rounded-lg p-3 inline-block">{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-white/10">
              <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#1A1A2E] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/50"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#00BFFF] to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-[#00BFFF] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[#00BFFF]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Sidebar - Online Users */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-3 bg-[#1A1A2E]/80 rounded-2xl p-6 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-[#00BFFF]" />
              <h2 className="text-xl font-bold text-white">Online Users</h2>
            </div>
            <div className="space-y-4">
              {onlineUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BFFF] to-purple-600 p-[1px]">
                      <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center text-white group-hover:text-[#00BFFF] transition-colors">
                        {user.name[0]}
                      </div>
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1A1A2E] ${
                      user.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-[#00BFFF] transition-colors">{user.name}</p>
                    <p className="text-sm text-gray-400 capitalize">{user.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default LiveDiscussionChat; 