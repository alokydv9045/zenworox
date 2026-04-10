import { motion } from "motion/react";
import { Bot, Printer, Clapperboard, Brain } from "lucide-react";

export function VideoStrip() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Video container with overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[500px]"
      >
        {/* Video background using consolidated asset */}
        <div className="absolute inset-0">
          <video
            src="/conceptual-zenworox.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm z-10 flex items-center justify-center group-hover:bg-[#000000]/60 transition-all duration-300"></div>

          {/* Animated scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white">Future Skills.</span>
                <span className="block text-white">Real Infrastructure.</span>
                <span className="block bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
                  Zero Investment.
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience hands-on learning in cutting-edge labs without any capital expense
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {[
                  { label: "Robotics Lab", icon: Bot },
                  { label: "3D Printing", icon: Printer },
                  { label: "Animation Studio", icon: Clapperboard },
                  { label: "AI/ML Lab", icon: Brain },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full"
                  >
                    <item.icon className="w-6 h-6 text-[#00F5FF]" />
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#00F5FF] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#6A5BFF] opacity-50"></div>
      </motion.div>
    </section>
  );
}
