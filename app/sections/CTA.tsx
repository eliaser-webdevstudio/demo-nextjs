'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-purple-500/30 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to start trading?</h2>
          <p className="text-lg text-text-muted mb-8">
            Join thousands of successful traders worldwide. Start your evaluation today.
          </p>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, '#pricing')}
            className="inline-block px-10 py-4 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            Get Funded Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
