"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-inter font-medium rounded-full transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-accent text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "border border-[#27272A] text-text-primary hover:border-accent hover:text-accent hover:bg-accent/5",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-3",
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: variant === "primary" ? 1.03 : 1.01 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cls}
      whileHover={{ scale: variant === "primary" ? 1.03 : 1.01 }}
      whileTap={{ scale: 0.97 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
