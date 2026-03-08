"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/lib/data";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/lib/animations";

function SocialLink({ link }: { link: (typeof socialLinks)[0] }) {
  return (
    <motion.a
      href={link.href}
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 text-[#71717A] hover:text-[#F5F5F5] transition-colors duration-200 group"
    >
      <span className="text-sm font-mono">{link.label}</span>
      <span className="text-xs text-[#27272A] group-hover:text-accent transition-colors">
        {link.handle}
      </span>
      <svg
        className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </motion.a>
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(168,85,247,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Big CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center"
        >
          <h2
            className="font-syne font-extrabold text-[#F5F5F5] mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            Bereit, etwas{" "}
            <span className="gradient-text">Großartiges zu bauen?</span>
          </h2>
          <p className="text-[#71717A] text-lg max-w-lg mx-auto mb-8">
            Lass uns gemeinsam etwas Außergewöhnliches erschaffen. Erzähl uns von deinem Projekt.
          </p>
        </motion.div>

        {/* Split layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — contact info */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">
                Kontakt aufnehmen
              </p>
              <motion.a
                href="mailto:hello@casma.studio"
                whileHover={{ x: 4 }}
                className="block font-syne font-bold text-2xl md:text-3xl text-[#F5F5F5] hover:text-accent transition-colors duration-200 mb-2"
              >
                hello@casma.studio
              </motion.a>
              <p className="text-[#71717A] text-base leading-relaxed max-w-sm">
                Wir antworten in der Regel innerhalb von 24 Stunden. Bei dringenden Projekten melden wir uns noch am selben Tag.
              </p>
            </div>

            <div className="w-12 h-px bg-[#27272A]" />

            <div className="flex flex-col gap-4">
              <p className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                Folg uns
              </p>
              {socialLinks.map((link) => (
                <SocialLink key={link.label} link={link} />
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeInRight}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full min-h-[360px] gap-6 text-center border border-[#27272A] rounded-2xl bg-[#111111] p-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-syne font-bold text-[#F5F5F5] text-xl">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-[#71717A] text-sm">
                    Wir melden uns innerhalb von 24 Stunden.
                  </p>
                  <Button variant="ghost" size="sm" onClick={() => setSent(false)}>
                    Weitere Nachricht senden
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5 border border-[#27272A] rounded-2xl bg-[#111111] p-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Max Mustermann"
                        className="w-full bg-[#0A0A0A] border border-[#27272A] rounded-xl px-4 py-3 text-[#F5F5F5] text-sm placeholder-[#3F3F46] transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="max@unternehmen.ch"
                        className="w-full bg-[#0A0A0A] border border-[#27272A] rounded-xl px-4 py-3 text-[#F5F5F5] text-sm placeholder-[#3F3F46] transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                      Nachricht
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Erzähl uns von deinem Projekt…"
                      className="w-full bg-[#0A0A0A] border border-[#27272A] rounded-xl px-4 py-3 text-[#F5F5F5] text-sm placeholder-[#3F3F46] transition-all duration-200 resize-none"
                    />
                  </div>
                  <Button variant="primary" size="lg" className="w-full rounded-xl">
                    Nachricht senden
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
