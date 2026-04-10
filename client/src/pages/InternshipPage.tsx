import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Megaphone, Code as CodeIcon, BarChart, Archive, Briefcase, Award, Zap, ArrowRight, Star } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/ui/button";

export function InternshipPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = ["/lab 3.png", "/lab 4.png", "/lab 2.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const domains = [
    { icon: Megaphone, title: "Media & Marketing", desc: "Craft compelling stories, manage social brands, and drive digital engagement.", gradient: "from-[#FF6B6B] to-[#FF8E53]", delay: 0.1 },
    { icon: CodeIcon, title: "Tech & Dev", desc: "Build scalable software, AI models, and innovative educational tools.", gradient: "from-[#00F5FF] to-[#6A5BFF]", delay: 0.2 },
    { icon: BarChart, title: "Operations", desc: "Master project management, logistical scaling, and strategic partnerships.", gradient: "from-[#6A5BFF] to-[#0099CC]", delay: 0.3 },
    { icon: Archive, title: "Data & Research", desc: "Analyze impact metrics, conduct educational research, and manage big data.", gradient: "from-[#4ECDC4] to-[#44A08D]", delay: 0.4 },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-[#00F5FF]/30 pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-[#00F5FF] font-bold tracking-[0.2em] uppercase text-[10px] mb-8"
          >
            Join the Revolution
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
            Build the <span className="bg-gradient-to-r from-[#00F5FF] via-[#6A5BFF] to-[#00F5FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Future.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Not just an internship, but a chance to redefine Indian education through technology and innovation.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#00F5FF] text-black hover:bg-white transition-all font-bold px-10 py-7 rounded-2xl text-lg group">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 px-10 py-7 rounded-2xl text-lg">
              View Openings
            </Button>
          </div>
        </motion.div>

        {/* Local Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Intern <span className="text-[#6A5BFF]">Experience.</span></h2>
            <p className="text-gray-500 font-light">See what life is like at the intersection of tech and education.</p>
          </div>
          <GlassCard className="p-0 overflow-hidden max-w-5xl mx-auto border-white/10 shadow-[0_0_50px_rgba(106,91,255,0.1)] rounded-[2.5rem]">
            <div className="relative aspect-video">
              <video
                src="/conceptual-zenworox.mp4"
                controls
                className="w-full h-full object-cover"
                poster="/lab 3.png"
              />
            </div>
          </GlassCard>
        </motion.div>

        {/* Lab Slideshow Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slideImages[currentSlide]}
                alt="ZenworoX lab culture"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] to-transparent"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Work on <br />
              <span className="text-[#00F5FF]">Real-World Labs.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Forget coffee runs. Our interns are deployed to actual school labs, working with cutting-edge robotics, 3D printers, and AI infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Star, text: "Mentorship" },
                { icon: Zap, text: "Rapid Growth" },
                { icon: Briefcase, text: "Networking" },
                { icon: Award, text: "Certification" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00F5FF]/30 transition-all">
                  <item.icon className="h-4 w-4 text-[#00F5FF]" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Domains Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">Focus <span className="text-[#6A5BFF]">Areas.</span></h2>
            <p className="text-gray-500 font-light">Wherever your passion lies, we have a place for you to innovate.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: domain.delay }}
                  whileHover={{ y: -10 }}
                >
                  <GlassCard glow className="text-center p-10 h-full bg-white/[0.03] border-white/10 hover:border-[#00F5FF]/40 transition-all group rounded-[2.5rem]">
                    <div className={`w-20 h-20 mx-auto mb-8 rounded-[2rem] bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F5FF] transition-colors">{domain.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{domain.desc}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Application Process */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Journey to <span className="text-[#00F5FF]">ZenworoX.</span></h2>
            <p className="text-gray-500 font-light">A transparent, four-step process to joining our team.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Apply Online", desc: "Submit resume & portfolio" },
              { step: 2, title: "Initial Screening", desc: "Introductory video call" },
              { step: 3, title: "Interview Round", desc: "Deep dive with the team" },
              { step: 4, title: "Offer", desc: "Welcome to the family" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl h-full hover:bg-white/[0.05] transition-all">
                  <div className="text-5xl font-bold text-white/10 absolute top-4 right-8 select-none">0{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center text-[#00F5FF] font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-20 bg-gradient-to-r from-[#00F5FF]/5 to-[#6A5BFF]/5 rounded-[3rem] border border-white/5"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to make an impact?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light">Applications are reviewed on a rolling basis. Join our mission today.</p>
          <Button size="lg" className="bg-white text-black hover:bg-[#00F5FF] px-12 py-7 transition-all font-bold rounded-2xl">
            Start Your Application
          </Button>
        </motion.div>
      </div>

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
