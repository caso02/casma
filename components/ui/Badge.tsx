import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono tracking-wide",
        variant === "default" && "border border-[#27272A] text-[#71717A]",
        variant === "accent" &&
          "bg-accent/10 border border-accent/30 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
