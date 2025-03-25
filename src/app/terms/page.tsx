'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        {
          details: 'By accessing and using FocusAI, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.',
          items: [
            'These terms apply to all users, visitors, and others who access or use FocusAI',
            'You must be at least 13 years old to use this service',
            'If you are under 18, you must have parental consent',
            'You are responsible for maintaining the confidentiality of your account'
          ]
        }
      ]
    },
    {
      title: 'User Accounts',
      content: [
        {
          subtitle: 'Account Creation',
          details: 'When creating an account on FocusAI:',
          items: [
            'You must provide accurate and complete information',
            'You are responsible for all activities under your account',
            'You must notify us immediately of any security breach',
            'We reserve the right to suspend accounts that violate our terms'
          ]
        },
        {
          subtitle: 'Account Termination',
          details: 'FocusAI reserves the right to terminate accounts that:',
          items: [
            'Violate these terms of service',
            'Engage in fraudulent or illegal activities',
            'Create risk or possible legal exposure for FocusAI',
            'Remain inactive for an extended period'
          ]
        }
      ]
    },
    {
      title: 'Platform Usage',
      content: [
        {
          subtitle: 'Acceptable Use',
          details: 'When using FocusAI, you agree to:',
          items: [
            'Use the platform for its intended purpose of studying and learning',
            'Respect other users and their privacy',
            'Not share account credentials with others',
            'Not attempt to circumvent any platform security measures'
          ]
        },
        {
          subtitle: 'Prohibited Activities',
          details: 'Users must not engage in:',
          items: [
            'Unauthorized access to other users\' accounts',
            'Distribution of malware or harmful code',
            'Spamming or harassment of other users',
            'Collection of user data without consent'
          ]
        }
      ]
    },
    {
      title: 'Content and Intellectual Property',
      content: [
        {
          subtitle: 'User Content',
          details: 'Regarding content you create or share:',
          items: [
            'You retain ownership of your content',
            'You grant FocusAI license to use and display your content',
            'You are responsible for content you share',
            'Content must not infringe on others\' rights'
          ]
        },
        {
          subtitle: 'FocusAI Content',
          details: 'Our platform content and features:',
          items: [
            'Are protected by intellectual property laws',
            'May not be copied or distributed without permission',
            'Include proprietary AI algorithms and study tools',
            'May be updated or modified at our discretion'
          ]
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        {
          details: 'FocusAI provides its service on an "as is" basis:',
          items: [
            'We do not guarantee uninterrupted or error-free service',
            'We are not liable for any indirect or consequential damages',
            'Our liability is limited to the amount paid for the service',
            'We maintain the right to modify or discontinue services'
          ]
        }
      ]
    },
    {
      title: 'Changes to Terms',
      content: [
        {
          details: 'FocusAI reserves the right to modify these terms:',
          items: [
            'We will notify users of significant changes',
            'Continued use after changes constitutes acceptance',
            'Users should regularly review these terms',
            'Changes become effective immediately upon posting'
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
            Terms of Service
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
            Welcome to FocusAI. These Terms of Service govern your use of our platform and services.
            Please read these terms carefully before using FocusAI. By using our platform, you agree
            to be bound by these terms and our Privacy Policy.
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
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h2>
          <p className="text-gray-300">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@focusai.com" className="text-[#00BFFF] hover:underline">
              legal@focusai.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
} 