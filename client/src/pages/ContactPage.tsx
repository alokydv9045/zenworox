import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = "ZenworoX | Contact Us";
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
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Animated tech map background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00F5FF 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Partner With </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              ZenworoX
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your school into a technology innovation hub. Get started today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard glow>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name</label>
                    <Input
                      name="first_name"
                      placeholder="John"
                      className="bg-white/5 border-white/10 focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                    <Input
                      name="last_name"
                      placeholder="Doe"
                      className="bg-white/5 border-white/10 focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">School Name</label>
                  <Input
                    name="school_name"
                    placeholder="ABC International School"
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <Input
                    name="user_email"
                    type="email"
                    placeholder="principal@school.edu"
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <Input
                    name="user_phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className="bg-white/5 border-white/10 focus:border-[#00F5FF] focus:ring-[#00F5FF]/20 transition-all resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0 hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] transition-all duration-300 text-lg py-6 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-2xl"
                      >
                        <Check className="h-6 w-6" />
                      </motion.span>
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <GlassCard glow>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-2">Send us an email anytime</p>
                  <a href="mailto:info@zenworox.com" className="text-[#00F5FF] hover:text-[#6A5BFF] transition-colors">
                    info@zenworox.com
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard glow>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6A5BFF] to-[#9B7FFF] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400 mb-2">Mon-Sat, 9AM-6PM IST</p>
                  <a href="tel:+917817045062" className="text-[#00F5FF] hover:text-[#6A5BFF] transition-colors">
                    +91 78170 45062
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard glow>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400">
                    KHASRA 260 KHATA 00061, C/O MAMTA YADAV SUPERCITY,<br />
                    R.K.University, Bareilly,<br />
                    Bareilly- 243006, Uttar Pradesh
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Quick Stats */}
            <GlassCard className="bg-gradient-to-br from-[#00F5FF]/10 to-[#6A5BFF]/10">
              <h3 className="text-lg font-bold text-white mb-4">Why Partner With Us?</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">20+</div>
                  <div className="text-xs text-gray-400">Schools</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">10K+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">98%</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
