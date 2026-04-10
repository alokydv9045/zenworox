import { motion } from "motion/react";
import { Users, School, Trophy } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";

const stats = [
    {
        icon: School,
        value: "20+",
        label: "Partner Schools",
        description: "Empowering educational institutions across India",
        gradient: "from-[#00F5FF] to-[#0099CC]"
    },
    {
        icon: Users,
        value: "10,000+",
        label: "Active Students",
        description: "Daily learners engaged in hands-on tech education",
        gradient: "from-[#6A5BFF] to-[#9B7FFF]"
    },
    {
        icon: Trophy,
        value: "50+",
        label: "Tech Projects",
        description: "Innovative solutions built by our young innovators",
        gradient: "from-[#00F5FF] to-[#6A5BFF]"
    }
];

export function StatsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F5FF]/5 blur-[120px] rounded-full -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(30%-2rem)] max-w-sm"
                            >
                                <GlassCard className="h-full text-center group hover:border-[#00F5FF]/30 transition-all duration-500">
                                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 shadow-lg transition-transform`}>
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-xl font-bold text-white tracking-wide uppercase text-sm">
                                            {stat.label}
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed pt-2">
                                            {stat.description}
                                        </p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Market Opportunity */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-24 border-t border-white/10"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                Growing <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">Market Opportunity</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Tech skill demand is growing at <span className="text-[#00F5FF] font-bold text-2xl">20%+</span> annually. 
                                    By 2027, over <span className="text-[#6A5BFF] font-bold text-2xl">2.5M+</span> jobs will be created in these domains.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {["3D Printing", "Robotics", "Animation", "Coding", "Game Development"].map((sector) => (
                                        <div key={sector} className="flex items-center gap-2 text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]"></div>
                                            {sector}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] rounded-3xl blur-3xl opacity-20"></div>
                            <GlassCard className="p-8 relative z-10 text-center">
                                <div className="text-6xl font-black text-white mb-2">20%</div>
                                <div className="text-[#00F5FF] font-bold uppercase tracking-wider mb-4">Annual Growth</div>
                                <p className="text-gray-400">In demand for industry-ready specialized skills globally.</p>
                            </GlassCard>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
