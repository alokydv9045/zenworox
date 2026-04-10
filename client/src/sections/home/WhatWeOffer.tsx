import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";
import { modulesData } from "../../data/modulesData";
import { Link } from "react-router";

export function WhatWeOffer() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 border border-[#00F5FF]/30 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-[#00F5FF]" />
            <span className="text-sm text-[#00F5FF]">What We Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">What </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Students Learn
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Practical, real-world skills in AI, Robotics, Animation, and more.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modulesData.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Link to={`/modules/${module.id}`}>
                  <GlassCard glow className="h-full group cursor-pointer relative overflow-hidden">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00F5FF] transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed line-clamp-2">
                      {module.description}
                    </p>

                    {/* Features list (Skills) */}
                    <div className="space-y-2 mb-6">
                      {module.skills.slice(0, 3).map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.gradient}`}></div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-[#00F5FF] font-medium">
                      <span>Explore Module</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Hover border effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
