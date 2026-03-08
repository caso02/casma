"use client";

import { motion } from "framer-motion";
import { services, additionalServices } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col gap-6 rounded-2xl border border-[#27272A] bg-[#111111] p-8 overflow-hidden cursor-default"
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Animated bottom line */}
      <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent to-accent-purple w-0 group-hover:w-full transition-all duration-500 ease-out" />

      {/* Number */}
      <span
        className="font-syne font-extrabold leading-none select-none transition-all duration-300"
        style={{
          fontSize: "clamp(48px, 6vw, 80px)",
          color: "transparent",
          WebkitTextStroke: "1px #27272A",
        }}
      >
        <motion.span
          className="inline-block"
          style={{ WebkitTextStroke: "1px #27272A" }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </span>

      {/* Title + Arrow */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-syne font-bold text-[#F5F5F5] text-2xl leading-tight group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <motion.div
          className="shrink-0 w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-[#71717A] group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300"
          animate={{ rotate: 0 }}
          whileHover={{ rotate: -45 }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-[#71717A] text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-6 md:px-12">
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Leistungen
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              variants={fadeInUp}
              className="font-syne font-extrabold text-[#F5F5F5]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Was wir{" "}
              <span className="gradient-text">anbieten</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#71717A] text-base max-w-sm md:text-right">
              Von einfachen Onepagern bis zu komplexen Web-Apps — die passende Lösung für jedes Projekt.
            </motion.p>
          </div>
        </motion.div>

        {/* Service cards — 2x2 grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        {/* Additional services — animated pill tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#27272A] bg-[#111111] p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <p className="font-mono text-xs text-accent tracking-widest uppercase">
              Zusatzservices
            </p>
            <div className="h-px flex-1 bg-[#27272A] hidden sm:block mx-6" />
            <p className="text-xs text-[#71717A] font-mono">
              Als Erweiterung zu jedem Paket buchbar
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap gap-3"
          >
            {additionalServices.map((service, i) => (
              <motion.div
                key={service}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#27272A] bg-[#0A0A0A] hover:border-accent/60 hover:bg-accent/5 transition-all duration-200 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#27272A] group-hover:bg-accent transition-colors duration-200 shrink-0" />
                <span className="text-sm text-[#71717A] group-hover:text-[#F5F5F5] transition-colors duration-200 whitespace-nowrap">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
