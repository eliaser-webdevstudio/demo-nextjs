"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  TrendingUp,
  Shield,
  Users,
  Globe,
  Award,
  Rocket,
  Heart,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Image from "next/image";

const stats = [
  { value: "$500M+", label: "Capital Funded" },
  { value: "10,000+", label: "Traders Worldwide" },
  { value: "90%", label: "Profit Split" },
  { value: "24/7", label: "Support" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in complete transparency. No hidden fees, no surprise verifications. What you see is what you get.",
  },
  {
    icon: TrendingUp,
    title: "Performance First",
    description:
      "Your success is our success. We reward consistent performance with increasing capital allocation.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Join thousands of traders who share insights, strategies, and support each other's growth journey.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We continuously evolve our platform and evaluation process to match the dynamic markets.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "TradePro was founded with a simple mission: democratize access to professional trading capital.",
  },
  {
    year: "2022",
    title: "Scaling Up",
    description:
      "Expanded to serve 1,000+ traders with our innovative evaluation model and achieved $50M in funded accounts.",
  },
  {
    year: "2023",
    title: "Going Global",
    description:
      "Launched in 50+ countries with multi-language support and 24/7 trading desk access.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description:
      "Reached $500M+ in funded capital and introduced our revolutionary scaling plan up to $2M.",
  },
];

const team = [
  {
    name: "Marcus Chen",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Former hedge fund manager with 15+ years of experience in quantitative trading.",
  },
  {
    name: "Sarah Williams",
    role: "Head of Trading",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Ex-Morgan Stanley trader specializing in risk management and market analysis.",
  },
  {
    name: "Alex Rodriguez",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Tech leader building trading infrastructure for the next generation of traders.",
  },
  {
    name: "Emma Thompson",
    role: "Head of Community",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Passionate about trader education and building thriving trading communities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function About() {
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const teamRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-6">
              About TradePro
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Traders to{" "}
              <span className="gradient-text">Reach Their Potential</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              We&apos;re on a mission to democratize access to professional
              trading capital. Join thousands of traders who are building their
              financial future with TradePro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-bg-light relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-6">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Breaking Barriers in Trading
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Traditional prop trading firms have long kept the doors to
                capital locked behind expensive barriers and opaque processes.
                We&apos;re changing that.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                TradePro was built on the belief that talented traders
                shouldn&apos;t need years of experience or large personal
                fortunes to access institutional-level capital. Our streamlined
                evaluation process focuses on your trading skills, not your
                wallet size.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Traders First</h4>
                  <p className="text-text-muted text-sm">
                    Every decision we make puts traders first
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-3xl blur-3xl" />
              <div className="relative bg-bg-light border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: Target,
                      label: "Mission",
                      value: " democratize trading capital",
                    },
                    { icon: Globe, label: "Presence", value: "50+ countries" },
                    {
                      icon: Award,
                      label: "Achievement",
                      value: "Industry leading",
                    },
                    {
                      icon: Users,
                      label: "Community",
                      value: "10,000+ traders",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-primary-light" />
                      </div>
                      <div className="text-text-muted text-xs mb-1">
                        {item.label}
                      </div>
                      <div className="font-semibold text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Drives Us
            </h2>
            <p className="text-text-muted text-lg">
              These core values guide every decision we make
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group bg-background border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-text-muted text-[0.95rem] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Growing Together
            </h2>
            <p className="text-text-muted text-lg">
              The milestones that shaped TradePro into what it is today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-primary hidden lg:block transform -translate-x-1/2" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
              className="space-y-12 lg:space-y-0"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`lg:flex items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div className="bg-bg-light border border-white/10 rounded-2xl p-6 lg:p-8">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-purple-500 rounded-full text-sm font-semibold text-white mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-text-muted">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:w-1/2 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-light mb-4">
              Meet The Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The People Behind TradePro
            </h2>
            <p className="text-text-muted text-lg">
              Industry veterans dedicated to your trading success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group bg-background border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"

                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold mb-1"
                    whileHover={{ color: "#818cf8" }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-primary-light text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-text-muted text-sm">{member.bio}</p>
                </div>
                <motion.div className="h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/10 to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are building their financial future
              with TradePro. Get funded today and keep up to 90% of your
              profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-4 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-lg font-semibold"
              >
                Get Started
              </a>
              <a
                href="/"
                className="px-8 py-4 text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all text-lg font-semibold"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
