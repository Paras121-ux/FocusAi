'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../components/navigation/Footer';

const keyFeatures = [
  {
    title: 'Smart Focus Timer',
    description: 'AI-powered timer that adapts to your study patterns',
    icon: '⏱️',
    gradient: 'from-[#00BFFF] to-blue-600',
    highlight: 'Personalized study sessions'
  },
  {
    title: 'Lo-Fi Collection',
    description: 'Curated music to enhance your concentration',
    icon: '🎵',
    gradient: 'from-purple-500 to-indigo-600',
    highlight: 'Ambient soundscapes'
  },
  {
    title: 'AI Study Assistant',
    description: 'Get instant help with your study questions',
    icon: '🤖',
    gradient: 'from-pink-500 to-purple-600',
    highlight: 'Real-time support'
  },
  {
    title: 'Progress Analytics',
    description: 'Track your study habits and improvements',
    icon: '📊',
    gradient: 'from-orange-500 to-pink-600',
    highlight: 'Data-driven insights'
  }
];

const values = [
  {
    title: 'Student-First Approach',
    description: 'Every feature we build starts with student needs and feedback.',
    icon: '🎓',
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Continuous Innovation',
    description: 'We constantly evolve our platform with cutting-edge AI technology.',
    icon: '🚀',
    gradient: 'from-[#00BFFF] to-blue-600'
  },
  {
    title: 'Community Driven',
    description: 'Building a supportive environment where students help each other grow.',
    icon: '🤝',
    gradient: 'from-purple-400 to-indigo-500'
  },
  {
    title: 'Quality Focus',
    description: 'Ensuring high-quality study resources and distraction-free experience.',
    icon: '⭐',
    gradient: 'from-pink-400 to-purple-600'
  }
];

const teamMembers = [
  {
    name: 'Paras Rana',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with expertise in AI and web technologies',
    image: '/team/paras.jpg'
  },
  {
    name: 'Kashish',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on intuitive user experiences',
    image: '/team/kashish.jpg'
  },
  {
    name: 'Palak',
    role: 'Product Manager',
    bio: 'Strategic product leader driving innovation and user engagement',
    image: '/team/palak.jpg'
  },
  {
    name: 'Payal',
    role: 'Technical Lead',
    bio: 'Expert in system architecture and technical implementation',
    image: '/team/payal.jpg'
  }
];

const timelineSteps = [
  {
    step: '01',
    title: 'Sign Up',
    description: 'Create your account and join our focused learning community',
    gradient: 'from-blue-400 to-[#00BFFF]'
  },
  {
    step: '02',
    title: 'Set Your Goals',
    description: 'Define your study objectives and preferred learning style',
    gradient: 'from-[#00BFFF] to-purple-500'
  },
  {
    step: '03',
    title: 'Choose Your Environment',
    description: 'Select from our curated collection of lo-fi music and ambient sounds',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    step: '04',
    title: 'Start Learning',
    description: 'Begin your focused study session with AI-powered assistance',
    gradient: 'from-pink-500 to-orange-500'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1C]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(0,191,255,0.3)]">
              Empowering Students <br />
              <span className="text-[#00BFFF] text-glow">Through Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize how students study, focus, and achieve their academic goals.
            </p>
          </motion.div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-[#00BFFF]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl" />
      </section>

      {/* Key Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to maximize your study efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className={`h-full rounded-2xl p-[1px] bg-gradient-to-br ${feature.gradient}`}>
                  <div className="h-full rounded-2xl bg-[#1a1a2e]/95 p-6 backdrop-blur-xl">
                    {/* Icon */}
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">
                      {feature.description}
                    </p>

                    {/* Highlight */}
                    <div className="text-sm font-medium text-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity">
                      {feature.highlight} →
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00BFFF] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-[#00BFFF]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl" />
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To create an AI-powered study environment that adapts to each student's unique learning style, 
                helping them maintain focus, stay motivated, and achieve their academic goals efficiently.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the world's leading AI-driven study companion, making effective studying accessible 
                to students everywhere, regardless of their background or circumstances.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <Image
                  src="/about-illustration.svg"
                  alt="Mission illustration"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`h-full rounded-2xl p-[1px] bg-gradient-to-br ${value.gradient}`}>
                  <div className="h-full rounded-2xl bg-[#1a1a2e]/95 p-8 backdrop-blur-xl">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00BFFF] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h2>
            <p className="text-xl text-gray-300">Meet the minds behind Focus AI</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20">
                  <div className="rounded-2xl bg-[#1a1a2e]/95 p-6 backdrop-blur-xl">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00BFFF] to-purple-600 animate-pulse-slow" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="rounded-full object-cover relative z-10"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#00BFFF] font-medium mb-2">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-gray-300">Your journey to focused learning starts here</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[45px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00BFFF]/20 to-purple-500/20" />
            
            {/* Continuous Light Beam */}
            <div className="absolute left-[45px] top-0 bottom-0 w-[2px] overflow-hidden">
              <div className="absolute inset-0 animate-beam-flow">
                <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-[#00BFFF] to-transparent" />
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-16">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative flex items-start gap-8">
                    {/* Step Number Circle */}
                    <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${step.gradient} p-[1px] relative`}>
                      <div className="w-full h-full rounded-full bg-[#1a1a2e]/95 flex items-center justify-center backdrop-blur-xl relative z-10">
                        <span className={`text-2xl font-bold transition-colors duration-300 animate-step-highlight-${index + 1}`}>
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3">
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 animate-step-highlight-${index + 1}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes beam-flow {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }

          .animate-beam-flow {
            animation: beam-flow 8s linear infinite;
          }

          @keyframes step-highlight-1 {
            0%, 12.5%, 100% { color: #ffffff; }
            2.5%, 10% { color: #00BFFF; }
          }

          @keyframes step-highlight-2 {
            0%, 37.5%, 100% { color: #ffffff; }
            27.5%, 35% { color: #00BFFF; }
          }

          @keyframes step-highlight-3 {
            0%, 62.5%, 100% { color: #ffffff; }
            52.5%, 60% { color: #00BFFF; }
          }

          @keyframes step-highlight-4 {
            0%, 87.5%, 100% { color: #ffffff; }
            77.5%, 85% { color: #00BFFF; }
          }

          .animate-step-highlight-1 {
            animation: step-highlight-1 8s linear infinite;
          }

          .animate-step-highlight-2 {
            animation: step-highlight-2 8s linear infinite;
          }

          .animate-step-highlight-3 {
            animation: step-highlight-3 8s linear infinite;
          }

          .animate-step-highlight-4 {
            animation: step-highlight-4 8s linear infinite;
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
} 