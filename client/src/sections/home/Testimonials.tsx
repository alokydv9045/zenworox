import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { GlassCard } from "../../components/GlassCard";

const testimonials = [
    {
        name: "Dr. Sunita Kapoor",
        role: "Principal, Modern Public School, Delhi",
        content: "ZenworoX's Zero-Investment model is a game-changer for Indian schools. We now have a high-end AI and Robotics lab that rivals international standards without any upfront financial stress.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
        rating: 5
    },
    {
        name: "Mr. Rajesh Yadav",
        role: "Lab Coordinator, CMS Lucknow",
        content: "The on-site resident trainers provided by ZenworoX are exceptional. They don't just teach modules; they mentor our students for national-level hackathons and competitions.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
        rating: 5
    },
    {
        name: "Anjali Verma",
        role: "Grade 11 Student",
        content: "I built my first autonomous drone in the ZenworoX lab. The high-performance workstations and industrial grade 3D printers made it possible to turn my design into a reality.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
        rating: 5
    },
    {
        name: "Kabir Singh",
        role: "Grade 10 Innovator",
        content: "Learning Game Development at ZenworoX is the highlight of my week. We are building real-world projects, and the technical exposure we get here is far beyond any textbook.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        rating: 5
    },
    {
        name: "Mrs. Meenakshi Iyer",
        role: "Director, Heritage Global School",
        content: "We've seen a significant increase in parental interest after setting up the ZenworoX Tech Lab. It positions our school as a forward-thinking institution ready for the 21st century.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
        rating: 5
    },
    {
        name: "Vikram Malhotra",
        role: "ZenworoX Alumni, Startup Founder",
        content: "The foundational tech skills I learned in 10th grade at a ZenworoX lab gave me the confidence to launch my own EdTech startup later. Truly life-transforming mentorship.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
        rating: 5
    }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <GlassCard glow className="w-[400px] flex-shrink-0 flex flex-col p-8 mr-8">
            <Quote className="h-8 w-8 text-[#00F5FF]/40 mb-4" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6 italic flex-grow">
                "{testimonial.content}"
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00F5FF]/30">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-[#00F5FF] text-sm">{testimonial.role}</div>
                </div>
            </div>
        </GlassCard>
    );
}

export function Testimonials() {
    // Duplicate testimonials for seamless loop
    const row1 = [...testimonials, ...testimonials];

    return (
        <section className="py-24 relative overflow-hidden bg-black/20">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F5FF]/5 blur-[150px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6A5BFF]/5 blur-[150px] rounded-full -z-10"></div>

            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Voice of <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">Leadership</span>
                    </motion.h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        What school leaders say about their journey with ZenworoX
                    </p>
                </div>
            </div>

            {/* Marquee Row */}
            <div className="relative">
                {/* Fade overlays */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Row 1: Scrolls Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex"
                    >
                        {row1.map((t, i) => (
                            <TestimonialCard key={i} testimonial={t} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
