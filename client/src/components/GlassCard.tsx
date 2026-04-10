import { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className = "", hover = true, glow = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`
        relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6
        ${hover ? "transition-all duration-300" : ""}
        ${glow ? "shadow-[0_0_30px_rgba(0,245,255,0.1)] hover:shadow-[0_0_50px_rgba(0,245,255,0.2)]" : ""}
        ${className}
      `}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
