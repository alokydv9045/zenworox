import { motion } from "motion/react";
import { Settings, Users, LineChart, Zap } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";

const steps = [
    {
        icon: Settings,
        title: "Lab Setup",
        description: "Deployment of high-end equipment, workstations, and safety infrastructure.",
        gradient: "from-[#00F5FF] to-[#0099CC]",
        duration: "Week 1-2"
    },
    {
        icon: Users,
        title: "Trainer Integration",
        description: "On-site resident trainers arrive to manage the lab and guide students.",
        gradient: "from-[#6A5BFF] to-[#9B7FFF]",
        duration: "Week 3"
    },
    {
        icon: Zap,
        title: "Hands-on Training",
        description: "Launch of project-based curriculum across Robotics, AI, and Gaming.",
        gradient: "from-[#00F5FF] to-[#6A5BFF]",
        duration: "Ongoing"
    },
    {
        icon: LineChart,
        title: "Measurable Impact",
        description: "Continuous assessment, project showcases, and competition readiness.",
        gradient: "from-[#FF6B6B] to-[#FF8E53]",
        duration: "Continuous"
    }
];

export function ProcessFlow() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Implementation <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">Lifecycle</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto"
                    >
                        A seamless journey from infrastructure setup to delivering world-class technology outcomes
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8 relative">
                    {/* Connecting arrow line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F5FF]/10 via-[#00F5FF]/40 to-[#00F5FF]/10 -translate-y-[100px] -z-10"></div>

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                <GlassCard glow className="h-full border-t-2 border-t-[#00F5FF]/20">
                                    <div className="absolute -top-4 -right-4 bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs font-bold text-[#00F5FF] backdrop-blur-md">
                                        {step.duration}
                                    </div>

                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon className="h-7 w-7 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    <div className="text-4xl font-black text-white/5 absolute bottom-4 right-6">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
