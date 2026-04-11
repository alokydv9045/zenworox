import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, X, Wifi, Zap, Rocket, MapPin } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/ui/button";

export function FreeLabSetupPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/lab 6.png", "/lab 7.png", "/lab 8.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Slideshow Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
                Zero Investment
              </span>
              <span className="text-white block"> Lab Setup</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Complete infrastructure, expert trainers, and advanced curriculum with no upfront costs for schools.
            </p>
            <Button size="lg" className="bg-[#00F5FF] text-black hover:bg-white transition-colors font-bold px-8 py-6 rounded-xl">
              Partner With Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm h-[350px] md:h-[450px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="ZenworoX lab"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">See It In <span className="text-[#00F5FF]">Action</span></h2>
            <p className="text-gray-400">Experience how we transform educational spaces</p>
          </div>
          <GlassCard className="overflow-hidden p-0 max-w-5xl mx-auto border-white/10 shadow-[0_0_50px_rgba(0,245,255,0.1)]">
            <div className="relative aspect-video">
              <video
                src="/conceptual-zenworox.mp4"
                controls
                className="w-full h-full object-cover"
                poster="/lab 4.png"
              />
            </div>
          </GlassCard>
        </motion.div>

        {/* Comparison Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-white">Traditional vs </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              ZenworoX Model
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <GlassCard className="border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-500" />
                </div>
                Traditional Lab
              </h3>
              <div className="space-y-4">
                {[
                  "₹50L+ Initial Investment",
                  "Equipment Depreciation",
                  "Hiring & Training Costs",
                  "Maintenance Burden",
                  "Technology Obsolescence",
                  "Limited Curriculum Updates"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* ZenworoX */}
            <GlassCard className="border-[#00F5FF]/20 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                ZenworoX Model
              </h3>
              <div className="space-y-4">
                {[
                  "No Initial Investment",
                  "Always Latest Equipment",
                  "Expert Trainers Included",
                  "Full Maintenance Support",
                  "Annual Tech Upgrades",
                  "Continuous Curriculum Updates"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#00F5FF] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Space & <span className="text-[#00F5FF]">Infrastructure</span></h2>
            <p className="text-gray-400 text-lg">What we need from your school to get started</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Dedicated Space", items: ["Minimum 600-800 sq. ft.", "Proper Ventilation", "Secure Entry/Exit"] },
              { icon: Zap, title: "Power Supply", items: ["UPS/Inverter Backup", "Standard 15A Sockets", "Safe Grounding"] },
              { icon: Wifi, title: "Connectivity", items: ["100 Mbps Dedicated Line", "Internal LAN Cabling", "Secure Wi-Fi Access"] }
            ].map((req, i) => {
              const Icon = req.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="h-full border-t-2 border-t-[#00F5FF]/10">
                    <Icon className="h-10 w-10 text-[#00F5FF] mb-6" />
                    <h4 className="text-xl font-bold text-white mb-4">{req.title}</h4>
                    <ul className="space-y-2">
                      {req.items.map((item, j) => (
                        <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#00F5FF]"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selection Criteria */}
        <div className="mb-20">
          <GlassCard glow className="p-12 border-l-4 border-l-[#6A5BFF]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">School Selection <span className="text-[#6A5BFF]">Criteria</span></h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  We partner with schools that share our vision for the future of education. To ensure the success of our Zero Investment model, we look for:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Scalable Student Base",
                    "Management Commitment",
                    "Long-term Partnership",
                    "Dedicated Staff Support",
                    "Active Parent Engagement",
                    "Commitment to Innovation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white font-medium">
                      <CheckCircle2 className="h-5 w-5 text-[#6A5BFF]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#000000]/40 p-8 rounded-3xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6A5BFF] to-[#0099CC] flex items-center justify-center mx-auto mb-6">
                    <Rocket className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Ready to Start?</h4>
                  <p className="text-gray-500 mb-6">Begin your school's transformation today</p>
                  <Button className="w-full bg-[#6A5BFF] hover:opacity-90 transition-opacity">Request Site Survey</Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Partnership Flow */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Initial Consultation", desc: "Understand your school's needs and customize the lab setup" },
              { step: "2", title: "Agreement & Planning", desc: "Sign partnership agreement and plan the installation timeline" },
              { step: "3", title: "Lab Installation", desc: "Complete setup in 2 weeks with all equipment and training" },
              { step: "4", title: "Launch & Training", desc: "Trainer deployment and student program commencement" },
              { step: "5", title: "Ongoing Support", desc: "Continuous maintenance, updates, and technical support" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
