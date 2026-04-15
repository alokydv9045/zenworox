import { motion } from "motion/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { GlassCard } from "../../components/GlassCard";
import { CheckCircle2, Sparkles, Check } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function DemoBookingSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [studentRange, setStudentRange] = useState("");

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
      setStudentRange("");
      setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
      console.error('Email failed:', error);
      setIsSubmitting(false);
      alert("Failed to schedule demo. Please try again later.");
    });
  };
  return (
    <section id="demo-booking" className="py-24 relative overflow-hidden bg-black/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 border border-[#00F5FF]/30 backdrop-blur-sm mb-6">
                <Sparkles className="h-4 w-4 text-[#00F5FF]" />
                <span className="text-sm text-[#00F5FF]">Experience the Future</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Book a Free <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">Demo</span>
              </h2>
              <p className="text-xl text-gray-300">
                See the future of education in action. Join us for a personalized tour of our technology labs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "No obligation",
                "Free consultation",
                "Quick response within 24 hours"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <CheckCircle2 className="h-5 w-5 text-[#00F5FF]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <GlassCard className="p-8 border-[#00F5FF]/20">
              <div className="text-[#00F5FF] font-bold mb-2">Pro Tip</div>
              <p className="text-gray-300">
                Want to see real student projects? Request a "Live Project Showcase" in your message!
              </p>
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard glow className="p-8 md:p-10 border-white/10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="student_count" value={studentRange} />
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Full Name</label>
                    <Input name="full_name" placeholder="John Doe" className="bg-white/5 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">School Name</label>
                    <Input name="school_name" placeholder="Delhi Public School" className="bg-white/5 border-white/10" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email Address</label>
                    <Input name="user_email" placeholder="john@school.com" type="email" className="bg-white/5 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Phone Number</label>
                    <Input name="user_phone" placeholder="+91 78170 45062" type="tel" className="bg-white/5 border-white/10" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">City</label>
                    <Input name="city" placeholder="New Delhi" className="bg-white/5 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Number of Students</label>
                    <Select value={studentRange} onValueChange={setStudentRange} required>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100-500">100 - 500</SelectItem>
                        <SelectItem value="500-1000">500 - 1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Message (Optional)</label>
                  <Textarea name="message" placeholder="Tell us about your requirements..." className="bg-white/5 border-white/10 h-32" />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white font-bold py-6 text-lg hover:scale-[1.02] transition-transform"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2"><Check className="h-5 w-5" /> Demo Scheduled!</span>
                  ) : (
                    "Schedule My Demo"
                  )}
                </Button>
                
                <p className="text-center text-xs text-gray-500 italic">
                  *Your students deserve a future-ready lab — let’s make it happen.*
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6A5BFF]/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
