"use client";

import { useRef, useState, useTransition } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  MessageSquare,
  CheckCircle,
  Loader2,
  User,
  FileText,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { submitContactForm, ActionResult } from "./actions";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "support@tradepro.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 8pm",
    value: "+1 (888) 123-4567",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "Miami, FL 33101, USA",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Support Hours",
    description: "We're here to help",
    value: "24/7 Live Chat Support",
    gradient: "from-orange-500 to-red-500",
  },
];

const faqs = [
  {
    question: "How long does the evaluation process take?",
    answer: "Most traders complete our evaluation process in 7-14 days.",
  },
  {
    question: "What trading platforms do you support?",
    answer: "We support MetaTrader 4, MetaTrader 5, cTrader, and TradingView.",
  },
  {
    question: "How do I withdraw my profits?",
    answer: "Simply submit a withdrawal request through your dashboard.",
  },
  {
    question: "Can I use automated trading systems?",
    answer: "Yes! We allow EAs, algos, and custom trading bots.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef(null);
  const faqRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<ActionResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    startTransition(async () => {
      const res = await submitContactForm(fd);
      setResult(res);
      if (res.success) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => {
          setSubmitted(false);
          setResult(null);
        }, 5000);
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              We&apos;re Here to{" "}
              <span className="gradient-text">Help You Succeed</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Have questions? Our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={infoRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-bg-light border border-white/10 rounded-2xl p-6"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{info.title}</h3>
                <p className="text-text-muted text-sm mb-2">
                  {info.description}
                </p>
                <p className="text-primary-light font-medium">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Other Ways */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-text-muted">{result?.message}</p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-text-muted mb-1">
                        <User className="w-4 h-4 text-primary-light" /> Your
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full bg-bg-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-text-muted mb-1">
                        <Mail className="w-4 h-4 text-primary-light" /> Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-bg-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-text-muted mb-1">
                      <FileText className="w-4 h-4 text-primary-light" />{" "}
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      required
                      className="w-full bg-bg-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  {result && !result.success && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center text-red-400 text-sm">
                      {result.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Other Ways to Reach Us */}
            <div className="space-y-8">
              <div className="bg-bg-light border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Live Chat",
                      description: "Instant support",
                    },
                    {
                      icon: Headphones,
                      title: "Discord",
                      description: "Join 10,000+ traders",
                    },
                    {
                      icon: MessageSquare,
                      title: "Telegram",
                      description: "Get updates",
                    },
                  ].map((opt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-background/50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <opt.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{opt.title}</h4>
                        <p className="text-text-muted text-sm">
                          {opt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-background border border-white/10 rounded-2xl overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold">
                    {faq.question}
                    <span className="text-primary-light">+</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-text-muted">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
