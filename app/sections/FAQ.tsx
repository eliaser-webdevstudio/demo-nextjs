'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'What happens if I fail the evaluation?',
    answer: 'You can retake the evaluation as many times as needed. Each attempt requires a new evaluation fee. Many traders learn from their first attempt and pass on their second try.',
  },
  {
    question: 'How quickly can I get paid?',
    answer: 'We process payouts bi-weekly. Once you request a withdrawal, funds are typically sent within 1-2 business days to your chosen payment method.',
  },
  {
    question: 'What trading platforms do you support?',
    answer: 'We support MT4, MT5, and cTrader. All platforms are available on desktop, web, and mobile devices so you can trade from anywhere.',
  },
  {
    question: 'Are there any monthly fees?',
    answer: 'No! You pay a one-time evaluation fee. Once you pass, there are no monthly fees for your funded account. We only make money when you make money.',
  },
  {
    question: 'Can I use EAs and trading bots?',
    answer: 'Yes, we welcome algorithmic trading. You can use EAs, trading bots, and copy trading as long as they comply with our risk management rules.',
  },
  {
    question: 'What markets can I trade?',
    answer: 'Trade forex pairs, indices, commodities, and cryptocurrencies. We offer competitive spreads and fast execution on all major markets.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-4"
          >
            Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted"
          >
            Everything you need to know about trading with us
          </motion.p>
        </div>

        <div ref={ref} className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`bg-bg-light border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary' : 'border-white/10 hover:border-primary/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base font-semibold pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-text-muted text-[0.95rem] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
