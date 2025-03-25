'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          details: 'We collect information that you provide directly to us, including:',
          items: [
            'Name and email address when you create an account',
            'Profile information such as your photo and educational background',
            'Study preferences and learning goals',
            'Usage data and study patterns'
          ]
        },
        {
          subtitle: 'Automatically Collected Information',
          details: 'When you use our platform, we automatically collect:',
          items: [
            'Device information and identifiers',
            'Usage statistics and interaction data',
            'Study session duration and frequency',
            'Performance metrics and progress data'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        {
          details: 'We use the collected information to:',
          items: [
            'Personalize your study experience and recommendations',
            'Improve our AI algorithms and study tools',
            'Analyze usage patterns to enhance platform features',
            'Send important updates and notifications',
            'Provide customer support and address technical issues'
          ]
        }
      ]
    },
    {
      title: 'Data Protection',
      content: [
        {
          details: 'We implement various security measures to protect your data:',
          items: [
            'End-to-end encryption for sensitive information',
            'Regular security audits and updates',
            'Secure data storage and processing',
            'Limited access to personal information by authorized personnel'
          ]
        }
      ]
    },
    {
      title: 'Your Rights',
      content: [
        {
          details: 'You have the right to:',
          items: [
            'Access your personal data',
            'Request data correction or deletion',
            'Opt-out of marketing communications',
            'Export your study data',
            'Close your account and request data removal'
          ]
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0F1C] py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none mb-16"
        >
          <p className="text-gray-300 text-lg">
            At FocusAI, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, and protect your personal information when you use our platform. By using FocusAI,
            you agree to the collection and use of information in accordance with this policy.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20">
                <div className="rounded-2xl bg-[#1a1a2e]/95 p-8 backdrop-blur-xl">
                  <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-[#00BFFF] transition-colors">
                    {section.title}
                  </h2>
                  
                  {section.content.map((contentBlock, blockIndex) => (
                    <div key={blockIndex} className="mb-6 last:mb-0">
                      {contentBlock.subtitle && (
                        <h3 className="text-xl font-semibold text-[#00BFFF] mb-3">
                          {contentBlock.subtitle}
                        </h3>
                      )}
                      
                      <p className="text-gray-300 mb-4">{contentBlock.details}</p>
                      
                      <ul className="space-y-2">
                        {contentBlock.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 flex items-start">
                            <span className="text-[#00BFFF] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@focusai.com" className="text-[#00BFFF] hover:underline">
              privacy@focusai.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
} 