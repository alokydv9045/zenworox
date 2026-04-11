import { motion } from "motion/react";
import { useEffect } from "react";
import { Rocket, ShieldCheck, Trophy, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";



export function ImpactPage() {
    useEffect(() => {
        document.title = "ZenworoX | Our Global Impact";
    }, []);

    return (
        <div className="min-h-screen bg-[#020202] text-white selection:bg-[#00F5FF]/30 overflow-x-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#00F5FF]/5 blur-[150px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#6A5BFF]/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Section 1: Refined Hero */}
            <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 relative pt-32">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00F5FF] font-bold tracking-[0.2em] uppercase text-[10px] mb-8">
                            Our Transformation Journey
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-10">
                            Building the <br />
                            <span className="bg-gradient-to-r from-[#00F5FF] via-[#6A5BFF] to-[#00F5FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Future Academy.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12">
                            ZenworoX provides the missing links in modern education: world-class infrastructure, industry-certified mentors, and an evolving futuristic curriculum.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link to="/join-as-school">
                                <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-[#00F5FF] transition-all text-base font-bold">
                                    Partner With Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Section 3: The Pillars (Tighter Cards) */}
            <section className="py-40 px-6">
                <div className="container mx-auto">
                    <div className="max-w-3xl mb-24">
                        <div className="text-[#00F5FF] font-bold uppercase tracking-widest text-xs mb-4">Core Foundations</div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Pillars of <span className="text-gray-500">Excellence.</span></h2>
                        <p className="text-lg text-gray-400 leading-relaxed">We focus on high-end engineering and meticulous execution across four key domains.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { 
                                title: "Smart Infrastructure", 
                                desc: "Futuristic lab designs with synchronized RGB environments and high-performance industrial workstations.", 
                                icon: Rocket
                            },
                            { 
                                title: "Expert Mentorship", 
                                desc: "Dedicated on-site resident trainers who are industry-certified to deliver real-world project experience.", 
                                icon: GraduationCap
                            },
                            { 
                                title: "Modern Modules", 
                                desc: "Dynamic curricula in AI, AR/VR, and Game Development that stay ahead of global technology trends.", 
                                icon: ShieldCheck
                            },
                            { 
                                title: "Nationwide Network", 
                                desc: "A connected ecosystem of forward-thinking schools sharing resources and innovation highlights.", 
                                icon: Trophy
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-[#00F5FF]/30 transition-all group"
                            >
                                <pillar.icon className="h-8 w-8 text-[#00F5FF] mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{pillar.title}</h4>
                                <p className="text-base text-gray-400 leading-relaxed font-light">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Philosophy (Balanced Spacing) */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.98 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,245,255,0.05)]"
                    >
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00F5FF]/5 to-transparent -skew-x-12 translate-x-1/4"></div>
                        <div className="relative z-10 space-y-12">
                            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-4">
                                A Zero-Risk <br />
                                <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent italic opacity-90">Reality.</span>
                            </h2>
                            <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-300 max-w-3xl">
                                We've removed CAPEX and operational complexity. Schools can now deploy world-class technology labs with total confidence.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-6">
                                {["No Upfront Cost", "Certified Resident Faculty", "Annual Hardware Lifecycle"].map((badge, idx) => (
                                    <span key={idx} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-bold uppercase tracking-widest text-[10px] text-[#00F5FF]">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Conversion (Proper Scaling) */}
            <section className="py-40 text-center px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Let's build the <br /><span className="italic font-light opacity-50">Future.</span></h2>
                    <Link to="/join-as-school">
                        <Button className="h-16 px-12 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white text-xl font-bold hover:scale-105 transition-all shadow-xl shadow-[#00F5FF]/20">
                            Partner With Us
                        </Button>
                    </Link>
                    <p className="mt-12 text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold">ZenworoX Technology Labs — Innovation Redefined.</p>
                </div>
            </section>

            <style>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient 5s ease infinite;
                }
            `}</style>
        </div>
    );
}
