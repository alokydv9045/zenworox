import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GlassCard } from "../components/GlassCard";
import { Camera, LucideIcon, Sparkles, Cpu, GraduationCap } from "lucide-react";

interface GalleryItem {
  url: string;
  title: string;
  category: string;
  icon: LucideIcon;
  type: 'image' | 'video';
}

const galleryItems: GalleryItem[] = [
  {
    url: "/conceptual-zenworox.mp4",
    title: "Project Vision",
    category: "Concept",
    icon: Sparkles,
    type: 'video'
  },
  {
    url: "/robotics.png",
    title: "Robotics & AI Lab",
    category: "Infrastructure",
    icon: Cpu,
    type: 'image'
  },
  {
    url: "/vfx animation.jpeg",
    title: "Animation & VFX Studio",
    category: "Creative",
    icon: Camera,
    type: 'image'
  },
  {
    url: "/lab 3.png",
    title: "Computer Science Hub",
    category: "Engineering",
    icon: Cpu,
    type: 'image'
  },
  {
    url: "/lab 4.png",
    title: "Game Development Zone",
    category: "Workshops",
    icon: Sparkles,
    type: 'image'
  },
  {
    url: "/3d printing.jpeg",
    title: "3D Printing Lab",
    category: "Infrastructure",
    icon: Cpu,
    type: 'image'
  },
  {
    url: "/lab 6.png",
    title: "STEM Integration Center",
    category: "Education",
    icon: GraduationCap,
    type: 'image'
  },
  {
    url: "/lab 7.png",
    title: "Electronics & IoT Lab",
    category: "Engineering",
    icon: Cpu,
    type: 'image'
  },
  {
    url: "/lab 8.png",
    title: "Future Innovation Lab",
    category: "Infrastructure",
    icon: Sparkles,
    type: 'image'
  },
  {
    url: "/lab 11.png",
    title: "Digital Creativity Lab",
    category: "Creative",
    icon: Camera,
    type: 'image'
  }
];

import { useEffect } from "react";

export function GalleryPage() {
  useEffect(() => {
    document.title = "ZenworoX | Innovation Gallery";
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-[#00F5FF]/30 pt-32 pb-20 overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#00F5FF]/5 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#6A5BFF]/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00F5FF] font-bold tracking-[0.2em] uppercase text-[10px] mb-8">
            Visual Experience
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            Inside Our <br />
            <span className="bg-gradient-to-r from-[#00F5FF] via-[#6A5BFF] to-[#00F5FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Innovation Labs.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
            A glimpse into the spaces where cutting-edge technology meets creative exploration. Witness the transformation of Indian education.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <GlassCard className="p-0 overflow-hidden border-white/10 rounded-3xl md:rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl h-full shadow-2xl">
                <div className="relative h-80 overflow-hidden group">
                  {item.type === 'video' ? (
                    <video 
                      src={item.url} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <ImageWithFallback 
                      src={item.url} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-[#00F5FF]">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00F5FF] transition-colors">{item.title}</h3>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-12"></div>
          <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">ZenworoX Technology Labs — Visual Archive</p>
          <p className="text-sm font-light text-gray-400">Capturing the heartbeat of modern innovation, one school at a time.</p>
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
