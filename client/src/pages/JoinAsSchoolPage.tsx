import { motion } from "motion/react";
import { School, User, MapPin, ClipboardList, Send, Check } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function JoinAsSchoolPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = "ZenworoX | Join as School";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
      console.error('Email failed:', error);
      setIsSubmitting(false);
      alert("Failed to send partnership request. Please try again later.");
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#020202]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-[#00F5FF] font-bold tracking-widest uppercase text-[10px] mb-6">
            School Partnership
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Empower Your School <br />
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              With ZenworoX
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Deploy advanced technology labs with zero CAPEX and world-class faculty. Let's transform education together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <GlassCard glow className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#00F5FF] pl-4">Request Partnership Details</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <School className="h-4 w-4" /> School Name
                  </label>
                  <Input 
                    name="school_name"
                    placeholder="Enter school name"
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF]/50 transition-all h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <User className="h-4 w-4" /> Principal / Coordinator Name
                  </label>
                  <Input 
                    name="coordinator_name"
                    placeholder="Full Name"
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF]/50 transition-all h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> School Location
                  </label>
                  <Input 
                    name="location"
                    placeholder="City, State"
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF]/50 transition-all h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <ClipboardList className="h-4 w-4" /> Estimated Student Count
                  </label>
                  <Input 
                    name="student_count"
                    type="number"
                    placeholder="e.g. 500"
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF]/50 transition-all h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Lab Requirements & Interests</label>
                <Textarea 
                  name="requirements"
                  placeholder="Which modules (AI, Robotics, Printing, etc.) are you looking for?"
                  rows={4}
                  className="bg-white/5 border-white/10 focus:border-[#00F5FF]/50 transition-all resize-none p-4"
                  required
                />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <p className="text-sm text-gray-400 italic">
                  * By submitting this request, you agree to have a ZenworoX representative contact you for a detailed presentation and lab audit.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0 hover:shadow-[0_0_40px_rgba(0,245,255,0.4)] transition-all duration-500 py-7 text-lg font-bold group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                ) : isSuccess ? (
                  <span className="flex items-center gap-2"><Check className="h-6 w-6" /> Partnership Requested!</span>
                ) : (
                  <span className="flex items-center gap-2">Send Request <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
