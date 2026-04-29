'use client'

import { Twitter, MessageCircle, Send } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Help Center', href: '#' },
    { name: 'Trading Rules', href: '#' },
    { name: 'Affiliates', href: '#' },
    { name: 'API', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Risk Disclosure', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Discord', icon: MessageCircle, href: '#' },
  { name: 'Telegram', icon: Send, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-light border-t border-white/10 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 text-white no-underline mb-5">
              <span className="w-10 h-10 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center font-extrabold text-sm">
                TP
              </span>
              <span className="text-xl font-bold">TradePro</span>
            </a>
            <p className="text-text-muted max-w-xs mb-6">
              Empowering traders worldwide with the capital they need to succeed.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-bg-lighter rounded-xl flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-sm">© 2024 TradePro. All rights reserved.</p>
          <p className="text-text-dim text-sm">Trading involves risk. Past performance does not guarantee future results.</p>
        </div>
      </div>
    </footer>
  )
}
