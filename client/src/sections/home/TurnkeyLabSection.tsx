import { motion } from "motion/react";
import { Laptop, BookOpen, Users, ShieldCheck, Trophy, CreditCard } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";

export function TurnkeyLabSection() {
    const features = [
        {
            title: "Lab Design & Setup",
            desc: "Custom-designed interiors with high-end PCs, RGB setups, and seamless wireless technology.",
            icon: Laptop,
            gradient: "from-[#00F5FF] to-[#00D1FF]"
        },
        {
            title: "Modern Curriculum",
            desc: "Hands-on, project-based learning in AI, Robotics, VFX, and Coding – designed for industry readiness.",
            icon: BookOpen,
            gradient: "from-[#6A5BFF] to-[#9B7FFF]"
        },
        {
            title: "Resident Trainers",
            desc: "Expert mentors stationed at your school for continuous support and real-world guidance.",
            icon: Users,
            gradient: "from-[#FF6B6B] to-[#FF8E53]"
        },
        {
            title: "Annual Upgrades",
            desc: "Regular software and curriculum updates to keep the lab at the cutting edge of tech.",
            icon: ShieldCheck,
            gradient: "from-[#4FACFE] to-[#00F2FE]"
        },
        {
            title: "Tech Events",
            desc: "Hackathons, exhibitions, and innovation challenges held throughout the year for students.",
            icon: Trophy,
            gradient: "from-[#FAD961] to-[#F76B1C]"
        },
        {
            title: "Zero Capital Risk",
            desc: "No upfront investment required. Schools only pay for operation and maintenance.",
            icon: CreditCard,
            gradient: "from-[#B4ED50] to-[#429321]"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-[#00F5FF] text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <span>💡 Our Complete Solution</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Complete <span className="text-[#00F5FF]">Turnkey Lab</span> Solution
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                        We transform schools into innovation hubs with zero hassle for the management.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="h-full border-white/5 hover:border-[#00F5FF]/20 transition-all group overflow-hidden p-0">
                                <div className="p-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
