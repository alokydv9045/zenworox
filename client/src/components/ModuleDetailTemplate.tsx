import { motion, AnimatePresence } from "motion/react";
import { GlassCard } from "./GlassCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LucideIcon, ArrowLeft, CheckCircle2, ChevronDown, HelpCircle, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

interface CurriculumItem {
    title: string;
    description: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

interface ModuleDetailTemplateProps {
    title: string;
    description: string;
    longDescription: string;
    gradient: string;
    image: string;
    icon: LucideIcon;
    equipment: string[];
    careers: string[];
    skills: string[];
    outcomes: string;
    curriculum?: CurriculumItem[];
    faqs?: FAQItem[];
}

export function ModuleDetailTemplate({
    title,
    description,
    longDescription,
    gradient,
    image,
    icon: Icon,
    equipment = [],
    careers = [],
    skills = [],
    outcomes,
    curriculum = [],
    faqs = []
}: ModuleDetailTemplateProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    if (!Icon || !title) {
        return (
            <div className="min-h-screen pt-32 text-center bg-[#020202]">
                <h1 className="text-4xl text-white font-bold mb-6">Module Not Found</h1>
                <Link to="/modules" className="text-[#00F5FF] hover:text-[#6A5BFF] transition-colors font-medium">
                    ← Back to All Modules
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${gradient} blur-[150px] opacity-10 -z-10 animate-pulse`}></div>

                {/* Back Link */}
                <Link to="/modules" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00F5FF] transition-colors mb-12 group">
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium tracking-wide">Back to Modules</span>
                </Link>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-[0_0_50px_rgba(0,245,255,0.3)] mb-8`}>
                            <Icon className="h-12 w-12 text-white" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                                {title}
                            </h1>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-[#00F5FF] to-transparent rounded-full"></div>
                        </div>
                        <p className="text-2xl text-[#00F5FF] font-semibold tracking-wide">
                            {description}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                            {longDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative h-[600px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <ImageWithFallback
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80`}></div>
                    </motion.div>
                </div>

                {/* Detailed Sections */}
                <div className="grid lg:grid-cols-3 gap-12 mb-32">
                    {/* Left Column: Equipment & Skills */}
                    <div className="lg:col-span-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard glow className="p-8">
                                <h3 className="text-2xl font-bold text-[#00F5FF] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center">
                                        <Icon className="h-4 w-4" />
                                    </div>
                                    Equipment
                                </h3>
                                <div className="space-y-4">
                                    {equipment.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]"></div>
                                            <span className="text-base font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <GlassCard glow className="p-8">
                                <h3 className="text-2xl font-bold text-[#6A5BFF] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#6A5BFF]/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    Expertise Gained
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, i) => (
                                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-[#00F5FF]/10 to-[#6A5BFF]/10 border border-white/10 rounded-xl text-sm text-white font-medium hover:border-[#00F5FF]/50 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>

                    {/* Middle Column: Curriculum */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                                <BookOpen className="h-8 w-8 text-[#00F5FF]" />
                                Learning Journey
                            </h3>
                            <div className="space-y-6">
                                {curriculum.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <GlassCard className="p-6 border-l-4 border-l-[#00F5FF] hover:translate-x-2 transition-transform">
                                            <div className="flex gap-6">
                                                <div className="text-4xl font-black text-white/10 flex-shrink-0">
                                                    {(i + 1).toString().padStart(2, '0')}
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Row: Outcomes & FAQ */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Program Outcomes</h3>
                        <GlassCard glow className="h-full p-8 border-t-4 border-t-[#6A5BFF]">
                            <p className="text-2xl text-white leading-relaxed font-light italic">
                                "{outcomes}"
                            </p>
                            <div className="mt-12 space-y-6">
                                <h4 className="text-[#6A5BFF] font-bold uppercase tracking-widest text-sm">Career Opportunities</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {careers.map((career, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                                            <div className="w-2 h-2 rounded-full bg-[#6A5BFF]"></div>
                                            <span className="text-sm text-gray-300 font-medium">{career}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                            <HelpCircle className="h-8 w-8 text-[#00F5FF]" />
                            Common Queries
                        </h3>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="group">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full p-6 text-left bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between transition-all hover:bg-white/10"
                                    >
                                        <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                                        <ChevronDown className={`h-5 w-5 text-[#00F5FF] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 text-gray-400 leading-relaxed border-x border-b border-white/10 rounded-b-2xl bg-white/5">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <Link to="/contact">
                        <button className="group relative px-16 py-6 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white font-black text-2xl shadow-[0_0_50px_rgba(0,245,255,0.4)] hover:shadow-[0_0_80px_rgba(0,245,255,0.6)] transition-all duration-300 transform hover:-translate-y-2">
                            <span className="relative z-10">Enroll Your School Now</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                        </button>
                    </Link>
                    <p className="mt-8 text-gray-400 text-lg">Join 20+ schools transforming education with ZenworoX</p>
                </motion.div>
            </div>
        </div>
    );
}
