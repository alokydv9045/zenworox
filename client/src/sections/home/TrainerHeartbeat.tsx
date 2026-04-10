import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";

export function TrainerHeartbeat() {
    const trainers_details = [
        { text: "Specialized hiring from top national institutions.", icon: Briefcase },
        { text: "Rigorous 4-week in-house training program before deployment.", icon: GraduationCap },
        { text: "Certified & licensed experts only.", icon: Award },
        { text: "Annual license renewal ensures continuous upskilling.", icon: ShieldCheck },
        { text: "Mentorship goes beyond teaching – focus on real-world guidance.", icon: Heart }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-0.5 bg-[#00F5FF]/30"></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Our Biggest Strength</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">Our Trainers, <br /> Your <span className="text-[#00F5FF]">Heartbeat.</span></h2>
                        </div>
                        
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            We don't just provide equipment; we provide expertise. Our resident trainers are the heartbeat of the ZenworoX experience.
                        </p>

                        <div className="space-y-6">
                            {trainers_details.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-5"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                        <item.icon className="h-5 w-5 text-[#00F5FF]" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-300">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link to="/join-as-trainer">
                                <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-[#00F5FF]/10 to-[#6A5BFF]/10 border border-[#00F5FF]/50 text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black transition-all font-bold group">
                                    Join Our Trainer Network
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="bg-black text-white p-12 rounded-[3.5rem] border-0 shadow-2xl relative overflow-hidden group">
                           <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00F5FF]/10 rounded-full blur-[80px] group-hover:bg-[#00F5FF]/20 transition-all duration-700"></div>
                           
                           <div className="relative z-10">
                               <div className="flex items-center gap-4 mb-10">
                                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center">
                                       <Users className="h-8 w-8 text-white" />
                                   </div>
                                   <div>
                                       <div className="text-xl font-bold">Expert Mentorship</div>
                                       <div className="text-[#00F5FF] text-sm uppercase tracking-widest font-bold">On-site, Daily Support</div>
                                   </div>
                               </div>

                               <blockquote className="text-3xl font-medium italic leading-relaxed mb-10 text-gray-200">
                                   “Students learn from evolving industry experts, not outdated teaching methods.”
                               </blockquote>

                               <div className="flex items-center justify-between pt-10 border-t border-white/10">
                                   <div className="flex -space-x-3">
                                       {[1, 2, 3, 4].map(i => (
                                           <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800"></div>
                                       ))}
                                   </div>
                                   <div className="text-right">
                                       <div className="text-white font-bold text-lg">ZenworoX Faculty</div>
                                       <div className="text-gray-500 text-xs uppercase tracking-widest">Industry Certified</div>
                                   </div>
                               </div>
                           </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Users({ className }: { className?: string }) {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );
}
