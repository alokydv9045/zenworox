import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../../components/ui/button";
import { ArrowRight, Play, ChevronDown, Rocket, X } from "lucide-react";
import { Link } from "react-router";

export function HeroSection() {
  const [showTour, setShowTour] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/lab 6.png", "/lab 7.png", "/lab 8.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F5FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-1 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 border border-[#00F5FF]/30 backdrop-blur-sm"
            >
              <Rocket className="h-4 w-4 text-[#00F5FF]" />
              <span className="text-sm text-[#00F5FF]">Empowering Future Innovators</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="block text-white">Future-Ready</span>
                <span className="block bg-gradient-to-r from-[#00F5FF] via-[#6A5BFF] to-[#00F5FF] bg-clip-text text-transparent animate-gradient-x" style={{
                  backgroundSize: '200% auto',
                }}>
                  Tech Labs for Schools
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-xl leading-relaxed"
              >
                Empowering students with real-world skills in <span className="text-[#00F5FF] font-semibold">AI</span>, <span className="text-[#6A5BFF] font-semibold">Robotics</span>, <span className="text-[#00F5FF] font-semibold">Animation</span>, and beyond.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-lg text-[#00F5FF]/80 font-medium italic"
              >
                “From setup to success — we handle everything.”
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/join-as-school">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0 group hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] transition-all duration-300 text-lg px-8 py-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('demo-booking');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF]/10 text-lg px-8 py-6 group"
              >
                <div className="flex items-center">
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Book a Demo
                </div>
              </Button>
            </motion.div>


            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-10 border-t border-white/5"
            >
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">Trusted & Recognized By</div>
              <div className="flex flex-wrap gap-6 items-center">
                {["ISO 9001:2015", "Make In India", "Startup India", "STEM Certified"].map((badge, i) => (
                  <div key={i} className="text-gray-400 text-sm font-medium border border-white/10 px-3 py-1 rounded-lg backdrop-blur-sm bg-white/5">
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative">
              {/* Floating glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm h-[350px] md:h-[450px] lg:h-[500px]">
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
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 shadow-[0_0_30px_rgba(0,245,255,0.3)] z-20"
              >
                <div className="text-[10px] md:text-sm text-gray-300">Setup Time</div>
                <div className="text-xl md:text-2xl font-bold text-[#00F5FF]">2 Weeks</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 shadow-[0_0_30px_rgba(106,91,255,0.3)] z-20"
              >
                <div className="text-[10px] md:text-sm text-gray-300">Success Rate</div>
                <div className="text-xl md:text-2xl font-bold text-[#6A5BFF]">98%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-[#00F5FF]" />
      </motion.div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {showTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setShowTour(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,245,255,0.3)]"
            >
              <button
                onClick={() => setShowTour(false)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors group"
              >
                <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform" />
              </button>

              <video
                src="/conceptual-zenworox.mp4"
                autoPlay
                controls
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                  <div className="text-[#00F5FF] font-bold">ZenworoX Innovation Lab</div>
                  <div className="text-white text-sm">Experience the future of education</div>
                </div>
                <Link to="/join-as-school" className="pointer-events-auto">
                  <Button className="bg-[#00F5FF] text-black hover:bg-white transition-colors font-bold px-8 py-4 rounded-xl">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
