'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Clock, Shield, Monitor, Users, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: '90% Profit Split',
    description: 'Industry-leading profit sharing. Keep more of what you earn with our competitive payout structure.',
  },
  {
    icon: Clock,
    title: 'Fast Evaluation',
    description: 'Complete your evaluation in as little as 7 days. No minimum trading days required.',
  },
  {
    icon: Shield,
    title: 'Zero Risk',
    description: 'Trade with our capital, not yours. Never risk your personal funds while trading.',
  },
  {
    icon: Monitor,
    title: 'Any Strategy',
    description: 'Scalp, day trade, or swing trade. Use EAs and algos. No restrictions on your style.',
  },
  {
    icon: Users,
    title: 'Scaling Plan',
    description: 'Consistent traders can scale up to $2M in capital. Grow with us as you prove yourself.',
  },
  {
    icon: TrendingUp,
    title: 'Bi-Weekly Payouts',
    description: 'Get paid every two weeks. Fast, reliable withdrawals to your preferred method.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted"
          >
            Industry-leading conditions designed for serious traders
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative bg-background border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-400 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

              <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-muted text-[0.95rem] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
