'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '✓ Basic Lo-Fi Music Collection',
      '✓ Standard Focus Timer',
      '✓ Basic Achievement Badges',
      '✓ Community Access',
      '✓ Daily Study Streak',
      '× No Ads',
    ],
    buttonText: 'Get Started',
    href: '/signup',
    gradient: 'from-blue-400 to-indigo-400',
    hoverGradient: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Pro',
    price: '10',
    period: 'month',
    description: 'Best for dedicated students',
    features: [
      '✓ Everything in Free, plus:',
      '✓ Ad-Free Experience',
      '✓ Premium Music Library',
      '✓ Advanced Timer Features',
      '✓ Custom Study Analytics',
      '✓ Priority Support'
    ],
    buttonText: 'Start Pro Plan',
    href: '/signup?plan=pro',
    gradient: 'from-[#00BFFF] to-blue-600',
    hoverGradient: 'from-[#00BFFF] to-blue-700',
    isPopular: true
  },
  {
    name: 'Annual',
    price: '90',
    period: 'year',
    description: 'Save 25% with yearly billing',
    features: [
      '✓ Everything in Pro, plus:',
      '✓ Exclusive Music Releases',
      '✓ AI Study Recommendations',
      '✓ Group Study Rooms',
      '✓ Advanced Statistics',
      '✓ Early Access Features'
    ],
    buttonText: 'Start Annual Plan',
    href: '/signup?plan=annual',
    gradient: 'from-purple-400 to-indigo-400',
    hoverGradient: 'from-purple-500 to-indigo-500'
  }
];

export const PricingSection = () => {
  return (
    <section className="py-32 bg-[#0A0F1C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(0,191,255,0.3)]">
            Choose Your Study Journey
          </h2>
          <p className="text-xl text-gray-300">
            Select the plan that best fits your learning style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group pt-6"
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-[#00BFFF] to-blue-600 text-white text-sm font-semibold py-1.5 px-3 text-center shadow-xl border border-white/10 backdrop-blur-xl">
                  Most Popular
                </div>
              )}
              <div className={`h-full rounded-2xl p-[1px] relative transition-all duration-300 bg-gradient-to-br ${plan.gradient}/20 group-hover:bg-gradient-to-br group-hover:${plan.hoverGradient}/30`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="h-full rounded-2xl bg-[#1a1a2e]/95 p-8 backdrop-blur-xl relative z-[1]">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.p 
                        key={i}
                        initial={false}
                        whileHover={{ x: 5 }}
                        className={`text-base flex items-center space-x-2 ${feature.startsWith('×') ? 'text-gray-500' : 'text-gray-300'}`}
                      >
                        <span className="group-hover:text-[#00BFFF] transition-colors duration-300">{feature}</span>
                      </motion.p>
                    ))}
                  </div>
                  <Link
                    href={plan.href}
                    className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-white font-semibold transition-all
                      ${plan.isPopular 
                        ? 'bg-gradient-to-r from-[#00BFFF] to-blue-600 hover:from-[#00BFFF] hover:to-blue-700 btn-glow' 
                        : 'bg-white/10 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 border border-white/20'
                      } transform group-hover:scale-105 transition-transform duration-300`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-[#00BFFF]/10 to-transparent blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl animate-pulse-slow" />
    </section>
  );
}; 