"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Globe component to avoid SSR issues with Three.js
const Globe = dynamic(() => import("../components/Globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <motion.div
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] animate-float"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary-light mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-slow" />
              Now Funding Traders Worldwide
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6"
            >
              Trade with <span className="gradient-text">up to $200K</span> in
              prop firm capital
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-muted max-w-xl mb-8"
            >
              Pass our evaluation, prove your skills, and trade with our
              capital. Keep up to 90% of your profits with zero risk to your
              personal funds.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, "#pricing")}
                className="px-8 py-4 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                Start Evaluation
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => handleLinkClick(e, "#how-it-works")}
                className="px-8 py-4 text-white border border-white/10 rounded-xl hover:bg-white/5 hover:border-primary-light transition-all font-semibold"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 sm:gap-12"
            >
              {[
                { value: "$50M+", label: "Paid to Traders" },
                { value: "15K+", label: "Funded Traders" },
                { value: "4.9/5", label: "Trust Score" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <span className="block text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-sm text-text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Glow behind globe */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl scale-75" />

              {/* Globe Component */}
              {mounted && (
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  }
                >
                  <Globe />
                </Suspense>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow"
      >
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-text-muted rounded-full animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}
