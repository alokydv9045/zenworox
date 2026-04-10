import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Users, Presentation, Award, Star, Calendar, MapPin } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/ui/button";

export function AnnualEventPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = ["/lab 10.jpeg", "/lab 6.png", "/lab 11.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const events = [
    { icon: Trophy, title: "Robotics Championship", desc: "India's premier school-level robotics league where innovation meets competition.", gradient: "from-[#00F5FF] to-[#6A5BFF]", delay: 0.1 },
    { icon: Presentation, title: "Grand Hackathons", desc: "48-hour intensive problem solving and product building marathons.", gradient: "from-[#6A5BFF] to-[#0099CC]", delay: 0.2 },
    { icon: Users, title: "VFX & Animation Expo", desc: "A spectacular showcase of student-created digital art and cinematic stories.", gradient: "from-[#0099CC] to-[#00F5FF]", delay: 0.3 },
    { icon: Award, title: "Annual Innovation Awards", desc: "Recognizing and rewarding the most impactful student-led tech projects.", gradient: "from-[#6A5BFF] to-[#00F5FF]", delay: 0.4 },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-[#00F5FF]/30 pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section with Video Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden mb-24 border border-white/10 shadow-2xl"
        >
          <video
            src="/conceptual-zenworox.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent flex items-center justify-center text-center p-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
              >
                <Star className="h-4 w-4 text-[#00F5FF]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#00F5FF]">The Landmark Event</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
                Annual <br />
                <span className="bg-gradient-to-r from-[#00F5FF] via-[#6A5BFF] to-[#00F5FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Innovation Summit.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Celebrating the fusion of education and technology. Witness the next generation of Indian innovators shaping the future.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info Bar */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Calendar, title: "Upcoming Date", val: "November 2026" },
            { icon: MapPin, title: "Location", val: "New Delhi, India" },
            { icon: Users, title: "Expected Guests", val: "5000+ Participants" }
          ].map((item, i) => (
            <GlassCard key={i} className="flex items-center gap-6 p-8 border-white/5 bg-white/[0.02]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{item.title}</div>
                <div className="text-lg font-bold text-white">{item.val}</div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Automated Slideshow Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A Platform for <br />
              <span className="text-[#00F5FF]">Real-World Impact.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our Annual Summit isn't just a competition – it's an ecosystem. Students showcase their projects directly to industry leaders, venture capitalists, and educators.
            </p>
            <div className="space-y-4">
              {["National Exposure", "Cash Prizes & Grants", "Incubation Support"].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00F5FF]/10 flex items-center justify-center">
                    <Star className="h-3 w-3 text-[#00F5FF]" />
                  </div>
                  <span className="text-white font-medium">{point}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-white text-black hover:bg-[#00F5FF] transition-all font-bold px-10 py-6 rounded-2xl">
              Register Your Interest
            </Button>
          </div>

          <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slideImages[currentSlide]}
                alt="Event Highlight"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] to-transparent"></div>
          </div>
        </div>

        {/* Event Highlights Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">Main <span className="text-[#6A5BFF]">Segments.</span></h2>
            <p className="text-gray-500 font-light">Diverse challenges designed to test every dimension of technical skill.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: event.delay }}
                  whileHover={{ y: -10 }}
                >
                  <GlassCard glow className="text-center p-8 h-full bg-white/[0.03] border-white/10 hover:border-[#00F5FF]/40 transition-all group">
                    <div className={`w-20 h-20 mx-auto mb-8 rounded-[2rem] bg-gradient-to-br ${event.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F5FF] transition-colors">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{event.desc}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Past <span className="text-[#00F5FF]">Glimpses.</span></h2>
            <p className="text-gray-500">Relive the intensity and excitement of our previous editions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-3xl cursor-pointer group ${i === 0 ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-60'}`}
              >
                <img
                  src={img}
                  alt={`Event ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white font-bold text-xl">Event Memories</h4>
                    <p className="text-blue-300 text-sm">ZenworoX Archives</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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

const images = [
  "/lab 7.png",
  "/lab 8.png",
  "/lab 9.jpeg",
  "/lab 10.jpeg",
  "/lab 11.png",
  "/1764855326996 (1).png"
];
