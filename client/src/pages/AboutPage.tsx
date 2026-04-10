import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Target, Eye, Heart, Shield, Award, Users, Rocket, Briefcase, ShieldCheck, Quote } from "lucide-react";

export function AboutPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ["/lab 6.png", "/lab 7.png", "/lab 8.png"];

    useEffect(() => {
        document.title = "ZenworoX | About Us";
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const values = [
      {
        title: "Innovation First",
        desc: "We don't settle for status quo. We constantly evolve our curriculum and tech to stay ahead of global trends.",
        icon: Rocket,
        gradient: "from-[#00F5FF] to-[#00D1FF]"
      },
      {
        title: "Democratizing Tech",
        desc: "Quality tech education shouldn't be a luxury. Our zero-investment model makes high-end labs accessible to all.",
        icon: Target,
        gradient: "from-[#6A5BFF] to-[#9B7FFF]"
      },
      {
        title: "Student-Centric",
        desc: "Every module, every trainer, and every piece of equipment is chosen to maximize student potential and curiosity.",
        icon: Heart,
        gradient: "from-[#FF6B6B] to-[#FF8E53]"
      },
      {
        title: "Operational Excellence",
        desc: "From specialized hiring to daily on-site support, we ensure our labs run at peak performance 365 days a year.",
        icon: Shield,
        gradient: "from-[#4FACFE] to-[#00F2FE]"
      }
    ];

    const model_points = [
        { label: "No CAPEX", title: "Zero Upfront Investment", desc: "We handle the design, installation, and hardware costs. Schools only pay annual operation costs." },
        { label: "Full Operations", title: "We Manage Everything", desc: "From certified trainers to hardware maintenance, the lab runs autonomously under our care." },
        { label: "Continuous Upgrades", title: "Never Outdated", desc: "Annual hardware and software renewals ensure your lab stays future-ready every single year." }
    ];

    const faculty_points = [
        { title: "National Hiring", desc: "Specialized hiring from top institutions across India.", icon: Briefcase },
        { title: "Certified Expertise", desc: "Rigorous 4-week in-house training program and mandatory licensing.", icon: Award },
        { title: "Active Mentorship", desc: "Daily on-site support focusing on real-world industrial projects.", icon: Users }
    ];

    return (
        <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00F5FF]/30 overflow-x-hidden relative">
            {/* Animated Grid Background */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div 
                    className="absolute inset-0" 
                    style={{ 
                        backgroundImage: 'linear-gradient(rgb(0, 245, 255) 1px, transparent 1px), linear-gradient(90deg, rgb(0, 245, 255) 1px, transparent 1px)', 
                        backgroundSize: '50px 50px', 
                        animation: 'gridMove 20s linear infinite' 
                    }}
                ></div>
            </div>
            
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] opacity-90 pointer-events-none"></div>
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F5FF] rounded-full opacity-10 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6A5BFF] rounded-full opacity-10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Top Progress-like Gradient Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] z-[100] origin-left"></div>

            <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
                {/* Hero section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]"></span>
                        <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Who we are</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tight">
                        Transforming <br /> <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">Education Forever</span>
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic font-light">
                        "ZenworoX is not just a technology provider; we are a transformation partner for schools across India. We believe every student deserves access to the tools that will shape the 21st century."
                    </p>
                </motion.div>

                {/* Our Core Identity */}
                <div className="grid lg:grid-cols-2 gap-20 mb-40 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10 order-1 lg:order-1"
                    >
                        <h2 className="text-5xl font-bold text-white leading-tight">Bridging the <br /><span className="text-[#00F5FF]">Digital Divide</span></h2>
                        <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-light">
                            <p>
                                ZenworoX stands as a premier technology transformation partner specialized in building **21st-century Innovation Labs** for schools. We bridge the critical gap between traditional theoretical learning and real-world industrial expertise.
                            </p>
                            <p>
                                Our turnkey solution is designed to remove every friction point for school managements. From infrastructure design and futuristic hardware to professional mentorship and annual upgrades, we handle it all.
                            </p>
                            <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-2xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="h-6 w-6 text-[#00F5FF]" />
                                </div>
                                <p className="text-sm italic">"Our goal is to transform standard classrooms into vibrant industry-level hubs of innovation."</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-full order-2 lg:order-2"
                    >
                        <div className="relative p-1 bg-gradient-to-br from-[#00F5FF]/30 to-[#6A5BFF]/30 rounded-3xl md:rounded-[3rem] aspect-video overflow-hidden h-[300px] md:h-[400px] max-w-2xl">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={images[currentImage]}
                                    alt="ZenworoX Innovation Lab"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-[2.9rem]"></div>
                        </div>
                    </motion.div>
                </div>

                {/* The Business Model section */}
                <div className="mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">High Impact, <span className="text-[#00F5FF]">Low Risk</span></h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">Our unique business model ensures top-tier tech is accessible to every school.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {model_points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <GlassCard className="p-10 h-full border-white/5 hover:border-[#00F5FF]/30 transition-all group">
                                    <div className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4 font-bold">{point.label}</div>
                                    <h4 className="text-2xl font-bold text-white mb-6 underline decoration-[#00F5FF]/30 underline-offset-8 decoration-2">{point.title}</h4>
                                    <p className="text-gray-400 leading-relaxed font-light">{point.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Power of Mentorship section - NOW IN DARK THEME */}
                <div className="mb-40 p-12 md:p-24 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl font-bold tracking-tight text-white">Our Biggest Strength: <br /> <span className="text-[#00F5FF]/70 text-3xl">The ZenworoX Faculty</span></h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-12 font-light">
                                We believe great tools need great mentors. Our trainers are not just teachers; they are industry-certified experts who rotate annually to maintain fresh industry-standards in their teaching.
                            </p>
                            <div className="space-y-6">
                                {faculty_points.map((p, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                            <p.icon className="h-6 w-6 text-[#00F5FF]" />
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold text-white">{p.title}</h5>
                                            <p className="text-gray-500">{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <GlassCard className="bg-black/60 backdrop-blur-2xl text-white p-12 rounded-[3.5rem] relative z-10 border-white/10 shadow-[0_0_50px_rgba(0,245,255,0.05)]">
                                    <blockquote className="text-3xl italic font-light leading-relaxed mb-10">
                                        “Students learn from evolving industry experts, not outdated teaching methods.”
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center">
                                        <Users className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-white">ZenworoX Faculty</div>
                                        <div className="text-[#00F5FF] text-xs uppercase tracking-widest font-bold">On-site, Daily Support</div>
                                    </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                            <div className="absolute -inset-10 bg-[#00F5FF]/5 rounded-[4rem] blur-3xl -z-0"></div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision section */}
                <div className="grid md:grid-cols-2 gap-12 mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="h-full p-12 relative overflow-hidden group">
                           <Eye className="h-16 w-16 text-[#00F5FF] mb-8" />
                           <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                           <p className="text-xl text-gray-300 leading-relaxed font-light">
                               To be the catalyst that transforms every school in India into a hub of innovation, where students graduate not just with grades, but with the skills to build the 21st-century economy.
                           </p>
                        </GlassCard>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="h-full p-12 relative overflow-hidden group">
                           <Target className="h-16 w-16 text-[#6A5BFF] mb-8" />
                           <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                           <p className="text-xl text-gray-300 leading-relaxed font-light">
                               To provide world-class technology infrastructure and expert mentorship to K-12 schools through a zero-risk, high-impact partnership model.
                           </p>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Founder Section */}
                <div className="mb-40 relative">
                    <div className="absolute inset-0 bg-[#00F5FF]/5 rounded-[4rem] blur-3xl -z-0"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <GlassCard className="p-8 md:p-12 lg:p-20 rounded-3xl md:rounded-[4rem] border border-white/10 overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-1 lg:order-1 space-y-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-[#00F5FF] text-xs font-bold uppercase tracking-widest">
                                        Founder & Visionary
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white">Pawan Yadav</h2>
                                    <div className="relative">
                                        <Quote className="absolute -top-6 -left-4 md:-left-8 h-8 md:h-12 w-8 md:w-12 text-[#00F5FF]/20" />
                                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic font-light relative z-10">
                                            "At ZenworoX, we aren't just building labs; we're building the infrastructure for the next generation of innovators. Our mission is to ensure that no student is left behind in the rapidly evolving technological landscape. We bring the industry directly to the classroom, empowering young minds to dream, design, and deliver."
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                        <div className="w-12 h-px bg-gradient-to-r from-[#00F5FF] to-transparent"></div>
                                        <span className="text-gray-500 font-medium tracking-widest uppercase text-sm">Empowering Future Leaders</span>
                                    </div>
                                </div>
                                <div className="order-2 lg:order-2">
                                    <div className="relative aspect-square max-w-md mx-auto group">
                                        {/* Animated background glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                                        
                                        {/* Image Container */}
                                        <div className="relative h-full w-full rounded-2xl md:rounded-[3rem] border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm p-2">
                                            <div className="h-full w-full rounded-xl md:rounded-[2.5rem] overflow-hidden">
                                                <img 
                                                    src="/Pawan yadav.png" 
                                                    alt="Pawan Yadav - Founder of ZenworoX" 
                                                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                                                />
                                            </div>
                                            {/* Decorative Corner */}
                                            <div className="absolute top-0 right-0 p-8">
                                                <div className="w-12 h-12 border-t-2 border-r-2 border-[#00F5FF] rounded-tr-3xl"></div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 p-8">
                                                <div className="w-12 h-12 border-b-2 border-l-2 border-[#6A5BFF] rounded-bl-3xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Values section */}
                <div className="mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase">Our Core <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">Values</span></h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">The principles that guide every decision at ZenworoX.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <GlassCard className="h-full group hover:bg-[#111] transition-all text-center p-12">
                                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                                        <v.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4">{v.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline section */}
                <div className="mb-40">
                   <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 underline decoration-[#00F5FF]/30 underline-offset-8 decoration-4 tracking-tighter uppercase">The ZenworoX Journey</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
                        <div className="space-y-20">
                            {[
                                { year: "The Genesis", title: "Identifying the Gap", desc: "Our founders noticed a massive disconnect between traditional schooling and the rapidly evolving tech industry." },
                                { year: "Model Creation", title: "The Zero-Investment Lab", desc: "Developed our unique turnkey model to remove financial barriers for premium tech education." },
                                { year: "Expansion", title: "Nationwide Presence", desc: "Partnering with 20+ top-tier schools and training over 10,000 students daily." },
                                { year: "Present Day", title: "21st-Century Leaders", desc: "Graduating students who are proficient in AI, Robotics, and Animation with real-world project portfolios." }
                            ].map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-[#00F5FF]/30 transition-all">
                                            <div className="text-[#00F5FF] font-bold text-sm mb-4 tracking-widest uppercase">{m.year}</div>
                                            <h4 className="text-3xl font-bold text-white mb-6 leading-tight">{m.title}</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed font-light">{m.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-[#00F5FF] relative z-10 shadow-[0_0_20px_rgba(0,245,255,1)] hidden md:block"></div>
                                    <div className="flex-1 hidden md:block"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <GlassCard glow className="p-20 text-center rounded-[5rem] border border-white/5 shadow-[0_0_50px_rgba(0,245,255,0.1)] hover:shadow-[0_0_70px_rgba(0,245,255,0.2)] transition-shadow">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.1]">Join the <br /> <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent italic">Innovation Revolution</span></h2>
                        <p className="text-2xl text-gray-400 max-w-2xl mx-auto mb-16 font-light">
                            Together, let's build the future that India's students deserve.
                        </p>
                        <div className="flex justify-center flex-wrap gap-10">
                            {[
                                { title: "20+ Schools", desc: "Partner Institutions" },
                                { title: "10K+ Students", desc: "Innovators Trained" },
                                { title: "50+ Projects", desc: "Industrial Level" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center group">
                                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors">{stat.title}</div>
                                    <div className="text-gray-500 text-sm tracking-widest uppercase font-bold">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            <style>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
            `}</style>
        </div>
    );
}
