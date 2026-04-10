import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Star, School, GraduationCap, Quote } from "lucide-react";
import { Link } from "react-router";

export function SuccessStoriesPage() {
    const stories = [
        {
            type: "Student",
            name: "Aryan Sharma",
            school: "Greenwood High, Bangalore",
            story: "ZenworoX's robotics module completely changed my career path. I went from having no coding knowledge to building an autonomous drone that won the National Innovation Summit.",
            image: "/lab 1.png",
            icon: GraduationCap,
            gradient: "from-[#00F5FF] to-[#00D1FF]"
        },
        {
            type: "School",
            name: "St. Xavier's International",
            school: "Delhi NCR",
            story: "Implementing the ZenworoX model was the best decision for our technology curriculum. The zero-investment lab setup allowed us to provide world-class VFX and AI training to our students without any financial burden.",
            image: "/lab 2.png",
            icon: School,
            gradient: "from-[#6A5BFF] to-[#9B7FFF]"
        },
        {
            type: "Student",
            name: "Priya Patel",
            school: "Heritage School, Mumbai",
            story: "The VFX & Animation module gave me the tools to express my creativity. My final project was shortlisted for an international student film festival, thanks to the high-end workstations and expert guidance.",
            image: "/lab 5.png",
            icon: GraduationCap,
            gradient: "from-[#FF6B6B] to-[#FF8E53]"
        }
    ];



    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-white">Real Impact, </span>
                        <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
                            Success Stories
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        See how ZenworoX is transforming the educational landscape across India, one student and school at a time.
                    </p>
                </motion.div>



                {/* Stories */}
                <div className="space-y-24">
                    {stories.map((story, i) => {
                        const Icon = story.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                            >
                                <div className="flex-1 w-full">
                                    <div className="relative group">
                                        <div className={`absolute -inset-4 bg-gradient-to-r ${story.gradient} rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                                            <ImageWithFallback
                                                src={story.image}
                                                alt={story.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                        <Icon className="h-4 w-4 text-[#00F5FF]" />
                                        <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{story.type} Spotlight</span>
                                    </div>

                                    <div className="relative">
                                        <Quote className="absolute -top-4 -left-4 h-12 w-12 text-[#00F5FF]/10" />
                                        <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{story.name}</h3>
                                        <div className="text-[#00F5FF] font-medium mb-6">{story.school}</div>
                                        <p className="text-lg text-gray-300 leading-relaxed italic">
                                            "{story.story}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-[#00F5FF] text-[#00F5FF]" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32"
                >
                    <GlassCard className="bg-gradient-to-r from-[#00F5FF]/10 to-[#6A5BFF]/10 border-white/20 p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join the hundreds of schools that have empowered their students with ZenworoX Technology Labs.
                        </p>
                        <Link to="/join-as-school" className="inline-block">
                            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all">
                                Partner With Us Today
                            </button>
                        </Link>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
