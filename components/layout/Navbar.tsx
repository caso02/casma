"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#27272A]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ opacity: 0.8 }}
            className="font-syne font-extrabold text-xl text-[#F5F5F5] tracking-tight relative z-50"
            onClick={() => setMenuOpen(false)}
          >
            CASMA<span className="gradient-text">.</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                className="text-sm text-[#71717A] hover:text-[#F5F5F5] transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#contact">
              Kontakt
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-px bg-[#F5F5F5]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#F5F5F5]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-px bg-[#F5F5F5]"
            />
          </button>
        </nav>
      </motion.header>

      {/* Fullscreen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col"
          >
            {/* Gradient orb */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
              }}
            />

            {/* Nav links */}
            <div className="flex flex-col justify-center flex-1 px-8 gap-2 mt-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-4 py-4 border-b border-[#27272A] last:border-b-0"
                >
                  <span className="font-mono text-xs text-[#3f3f46] w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-syne font-extrabold text-3xl text-[#71717A] group-hover:text-[#F5F5F5] transition-colors duration-300">
                    {link.label}
                  </span>
                  <span className="ml-auto text-[#3f3f46] group-hover:text-accent transition-colors duration-300">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="px-8 pb-12"
            >
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 rounded-xl font-inter font-medium text-white text-base"
                style={{
                  background: "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
                }}
              >
                Projekt starten
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
