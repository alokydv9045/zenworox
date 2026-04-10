import { motion } from "motion/react";
import { AlertTriangle, XCircle, Info, Ban } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";

export function GapSection() {
    const gaps = [
        {
            title: "Hands-on Deficit",
            desc: "Students lack practical, hands-on experience with modern tech, leaving them unprepared for industry roles.",
            icon: XCircle,
            color: "text-red-400"
        },
        {
            title: "Prohibitive Costs",
            desc: "High-tech labs like AI and Robotics are often too expensive for schools to setup and maintain.",
            icon: Ban,
            color: "text-orange-400"
        },
        {
            title: "Outdated Talent",
            desc: "A severe lack of specialized trainers who understand 21st-century fields like VFX and Game Dev.",
            icon: AlertTriangle,
            color: "text-yellow-400"
        },
        {
            title: "No Industry Exposure",
            desc: "Education remains purely theoretical with zero connection to real-world projects and professional standards.",
            icon: Info,
            color: "text-blue-400"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <span>⚠️ The Problem Statement</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        The Gap in Modern <span className="text-gray-500">Education</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                        Despite rapid technological advancement, most schools still face significant challenges in preparing students for the real world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {gaps.map((gap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="h-full border-white/5 hover:border-red-500/20 transition-all group p-8">
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${gap.color}`}>
                                    <gap.icon className="h-6 w-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{gap.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{gap.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
