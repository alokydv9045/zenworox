import { motion } from "motion/react";
import { Link } from "react-router";
import { GlassCard } from "../components/GlassCard";
import { ChevronRight, Layout, BookOpen, Building2, ShieldCheck, Mail } from "lucide-react";

export function SitemapPage() {
    const sections = [
        {
            title: "Main Navigation",
            icon: Layout,
            links: [
                { name: "Home", path: "/" },
                { name: "Our Modules", path: "/modules" },
                { name: "Free Lab Setup", path: "/free-lab-setup" },
                { name: "Annual Tech Event", path: "/annual-event" },
                { name: "Internship", path: "/internship" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
            ]
        },
        {
            title: "Our Modules",
            icon: BookOpen,
            links: [
                { name: "Robotics & Prototyping", path: "/modules/robotics" },
                { name: "Animation & Graphics", path: "/modules/animation" },
                { name: "Coding & AI/ML", path: "/modules/coding" },
                { name: "Game Development", path: "/modules/game-dev" },
                { name: "3D Printing", path: "/modules/3d-printing" },
                { name: "STEM Integration", path: "/modules/stem" },
            ]
        },
        {
            title: "Company",
            icon: Building2,
            links: [
                { name: "Success Stories", path: "/success-stories" },
                { name: "Our Journey", path: "/about#journey" },
                { name: "Mission & Vision", path: "/about#mission" },
                { name: "Message from Founder", path: "/about#founder" },
            ]
        },
        {
            title: "Legal & Support",
            icon: ShieldCheck,
            links: [
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Contact Support", path: "/contact" },
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sitemap</h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A complete map of all content and sections available on the ZenworoX platform.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <GlassCard className="h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center">
                                            <Icon className="h-5 w-5 text-[#00F5FF]" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{section.title}</h3>
                                    </div>

                                    <ul className="space-y-4">
                                        {section.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link
                                                    to={link.path}
                                                    className="group flex items-center gap-2 text-gray-400 hover:text-[#00F5FF] transition-colors"
                                                >
                                                    <ChevronRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Support Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <Mail className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                            <div className="text-white font-medium">Need help finding something?</div>
                            <div className="text-sm text-gray-400">Our support team is always here for you.</div>
                        </div>
                    </div>
                    <Link to="/contact">
                        <button className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 hover:border-[#00F5FF]/50 transition-all">
                            Contact Support
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
