"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const HEADLINE = ["Wir bauen", "digitale", "Zukunft."];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.6], [0.65, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient orb — right side */}
      <motion.div
        style={{
          y: orbY,
          opacity: orbOpacity,
          background:
            "radial-gradient(circle at 40% 40%, #6366F1, #A855F7 55%, transparent 80%)",
          filter: "blur(80px)",
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute right-[-10%] top-[10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden
      />
      {/* Smaller secondary orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="absolute left-[-5%] bottom-[15%] w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 border border-[#27272A] rounded-full px-4 py-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
            Digitale Agentur
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {HEADLINE.map((word, i) => (
            <motion.div key={i} variants={fadeInUp} className="overflow-hidden">
              <h1
                className={`font-syne font-extrabold leading-[0.95] tracking-tight ${
                  i === 2 ? "gradient-text" : "text-[#F5F5F5]"
                }`}
                style={{ fontSize: "clamp(56px, 9vw, 120px)" }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[#71717A] text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          Wir gestalten außergewöhnliche digitale Erlebnisse für zukunftsorientierte Marken.
          Aus mutigen Ideen machen wir Produkte, die bleiben.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <Button variant="primary" size="lg" href="#contact">
            Projekt starten
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button variant="ghost" size="lg" href="#projects">
            Unsere Arbeit
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 flex flex-wrap gap-12"
        >
          {[
            { value: "1+", label: "Projekte umgesetzt" },
            { value: "100%", label: "Kundenzufriedenheit" },
            { value: "5★", label: "Bewertung" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-syne font-bold text-3xl text-[#F5F5F5]">{stat.value}</div>
              <div className="text-sm text-[#71717A] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
          Scrollen
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#71717A] to-transparent"
        />
      </motion.div>
    </section>
  );
}
