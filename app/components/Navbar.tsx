'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Homepage', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Close mobile menu for all links
    setMobileMenuOpen(false)

    // Skip for non-hash links (they'll navigate normally)
    if (!href.startsWith('#')) {
      return
    }
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-white/10 py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-white no-underline">
            <span className="w-10 h-10 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center font-extrabold text-sm">
              TP
            </span>
            <span className="text-xl font-bold">TradePro</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-text-muted hover:text-white text-[0.95rem] font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-6 py-2.5 text-white border border-white/10 rounded-xl hover:bg-white/5 hover:border-primary-light transition-all text-[0.95rem] font-semibold"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleLinkClick(e, '#pricing')}
              className="px-6 py-2.5 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-[0.95rem] font-semibold"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/98 z-40 flex items-center justify-center md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <ul className="list-none mb-10">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-white text-2xl font-semibold hover:text-primary-light transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="px-8 py-3 text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all font-semibold"
                >
                  Sign In
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => handleLinkClick(e, '#pricing')}
                  className="px-8 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
