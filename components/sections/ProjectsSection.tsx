"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative flex flex-col rounded-2xl border border-[#27272A] bg-[#111111] overflow-hidden cursor-pointer max-w-3xl mx-auto w-full"
    >
      {/* Screenshot / Preview */}
      <div className="relative overflow-hidden aspect-[16/9] bg-[#0A0A0A]">
        {project.screenshot ? (
          <>
            <Image
              src={project.screenshot}
              alt={`${project.title} Preview`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle dark overlay — lightens on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
          />
        )}

        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 text-white font-inter text-sm font-medium border border-white/40 rounded-full px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Projekt ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3 font-mono text-xs text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-syne font-bold text-[#F5F5F5] text-xl leading-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <Badge>{project.tag}</Badge>
        </div>
        <p className="text-[#71717A] text-sm leading-relaxed">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 transition-colors"
        >
          {project.url.replace("https://", "")}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 md:px-12">
      {/* Section header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto mb-16"
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Ausgewählte Projekte
          </span>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="font-syne font-extrabold text-[#F5F5F5] mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Projekte, die{" "}
          <span className="gradient-text">Exzellenz definieren</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-[#71717A] text-lg max-w-xl">
          Eine Auswahl unserer Arbeit — von Brand Identity über digitale Produkte bis hin zu immersiven Erlebnissen.
        </motion.p>
      </motion.div>

      {/* Centered card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto flex justify-center"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
