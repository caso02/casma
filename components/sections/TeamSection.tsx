"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { team } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

function TeamCard({ member }: { member: (typeof team)[0] }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group flex flex-col rounded-2xl border border-[#27272A] bg-[#111111] p-8 gap-6 hover:border-accent/40 transition-colors duration-300"
    >
      {/* Avatar */}
      <div className="relative w-20 h-20">
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-syne font-bold text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500`}
        >
          {member.initials}
        </div>
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="font-syne font-bold text-[#F5F5F5] text-xl mb-2">
            {member.name}
          </h3>
          <Badge variant="accent">{member.role}</Badge>
        </div>
        <p className="text-[#71717A] text-sm leading-relaxed">{member.bio}</p>
      </div>

      {/* Social placeholder */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-[#27272A]">
        {["in", "x"].map((icon) => (
          <motion.a
            key={icon}
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-[#71717A] hover:border-accent hover:text-accent text-xs font-mono transition-colors duration-200"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.article>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="relative py-20 md:py-32 px-6 md:px-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Unser Team
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-syne font-extrabold text-[#F5F5F5] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Die Köpfe hinter{" "}
            <span className="gradient-text">der Magie</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#71717A] text-lg max-w-xl">
            Ein kleines, erfahrenes Team mit einer gemeinsamen Obsession: Dinge zu bauen, die schnell, schön und unvergesslich sind.
          </motion.p>
        </motion.div>

        {/* Cards — 2 columns centered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
        >
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
