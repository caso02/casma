import { navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#27272A] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#hero"
          className="font-syne font-extrabold text-lg text-[#F5F5F5]"
        >
          CASMA<span className="gradient-text">.</span>
        </a>

        {/* Nav */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-[#71717A] hover:text-[#F5F5F5] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright + back to top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#71717A]">
            © {year} CASMA Studio
          </span>
          <a
            href="#hero"
            className="text-xs font-mono text-[#71717A] hover:text-accent transition-colors border border-[#27272A] rounded-full px-3 py-1 hover:border-accent"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
