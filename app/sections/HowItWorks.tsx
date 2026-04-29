'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, TrendingUp, Shield, DollarSign, Users, ArrowRight, Play, Award, Target } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Choose Your Challenge',
    description: 'Select an evaluation account size that matches your trading style. From $10K to $200K — you decide the challenge level.',
    icon: Target,
    features: ['Instant access', 'One-time fee', 'All strategies allowed'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Prove Your Skills',
    description: 'Complete your trading objectives within the evaluation period. Show consistency, risk management, and profitability.',
    icon: TrendingUp,
    features: ['5% profit target', '5% max drawdown', 'No minimum trading days'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Get Funded & Scale',
    description: 'Once you pass, receive your funded account within 24 hours. Trade with real capital and keep up to 90% of profits.',
    icon: Award,
    features: ['$10K - $200K capital', '90% profit split', 'Scaling up to $2M'],
    color: 'from-green-500 to-emerald-500',
  },
]

const accountDetails = [
  { size: '$10K', price: '$99' },
  { size: '$25K', price: '$199' },
  { size: '$50K', price: '$349' },
  { size: '$100K', price: '$599' },
  { size: '$200K', price: '$999' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function HowItWorks() {
  const ref = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-4">
            Your Path to Funding
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Three straightforward steps to access professional trading capital.
            No hidden rules, no surprises — just pure trading.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg shadow-primary/30'
                      : 'bg-bg-light text-text-muted hover:text-white border border-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      activeStep === index ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="hidden sm:inline">{step.title.split(' ')[0]}</span>
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-text-dim mx-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${steps[activeStep].color} rounded-2xl flex items-center justify-center mb-6`}>
                    {(() => {
                      const Icon = steps[activeStep].icon
                      return <Icon className="w-8 h-8 text-white" />
                    })()}
                  </div>
                  <div className="text-5xl lg:text-6xl font-extrabold gradient-text mb-4">
                    {steps[activeStep].number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-text-muted text-lg mb-8 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid sm:grid-cols-3 gap-4 mb-8"
                >
                  {steps[activeStep].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-6 h-6 bg-gradient-to-br ${steps[activeStep].color} rounded-full flex items-center justify-center`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-text-muted">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 text-primary-light font-semibold hover:gap-3 transition-all"
                  >
                    View Pricing <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].color} opacity-20 rounded-3xl blur-3xl`} />

                <div className="relative bg-bg-light border border-white/10 rounded-3xl p-8 overflow-hidden">
                  {activeStep === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold">Select Account Size</span>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {accountDetails.map((account, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer group"
                          >
                            <span className="font-bold text-lg">{account.size}</span>
                            <div className="flex items-center gap-4 text-sm text-text-muted">
                              <span>{account.price}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary-light" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold">Evaluation Progress</span>
                      </div>

                      <div className="flex justify-center">
                        <div className="relative w-40 h-40">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#252542" strokeWidth="8" />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="url(#progressGradient)"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="283"
                              initial={{ strokeDashoffset: 283 }}
                              animate={{ strokeDashoffset: 85 }}
                              transition={{ duration: 1.5, ease: 'easeOut' }}
                            />
                            <defs>
                              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#ec4899" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                              className="text-3xl font-bold"
                            >
                              70%
                            </motion.span>
                            <span className="text-text-muted text-sm">Complete</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-background/50 rounded-xl">
                          <div className="text-green-500 font-bold">+$3,240</div>
                          <div className="text-text-muted text-xs">Profit</div>
                        </div>
                        <div className="text-center p-3 bg-background/50 rounded-xl">
                          <div className="text-blue-500 font-bold">2.1%</div>
                          <div className="text-text-muted text-xs">Drawdown</div>
                        </div>
                        <div className="text-center p-3 bg-background/50 rounded-xl">
                          <div className="text-purple-500 font-bold">12</div>
                          <div className="text-text-muted text-xs">Trading Days</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold">Funded Account</span>
                      </div>

                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-2xl p-6 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: 'spring' }}
                          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <Check className="w-10 h-10 text-white" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-green-500 mb-2">Congratulations!</h4>
                        <p className="text-text-muted text-sm">Your $100K funded account is ready</p>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl">
                          <DollarSign className="w-8 h-8 text-green-500" />
                          <div>
                            <div className="font-bold">90%</div>
                            <div className="text-text-muted text-xs">Profit Split</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl">
                          <Users className="w-8 h-8 text-blue-500" />
                          <div>
                            <div className="font-bold">$2M</div>
                            <div className="text-text-muted text-xs">Scaling Potential</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-4 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-lg font-semibold"
          >
            <Play className="w-5 h-5" />
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}