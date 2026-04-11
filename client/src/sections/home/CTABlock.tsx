import { motion } from "motion/react";
import { Button } from "../../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function CTABlock() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/10 to-[#6A5BFF]/10"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#00F5FF 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] mb-8 shadow-[0_0_50px_rgba(0,245,255,0.5)]"
          >
            <Sparkles className="h-10 w-10 text-white" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white">Transform Learning.</span>
            <span className="block bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              Build Your School's Innovation Lab.
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join forward-thinking schools preparing students for the future.
            Setup takes just 2 weeks with minimal hassle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-as-school">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white text-[#000000] hover:bg-gray-100 text-lg px-10 py-7 shadow-[0_0_40px_rgba(255,255,255,0.3)] shadow-[0_0_40px_rgba(0,245,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>

            <Link to="/modules">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7"
              >
                Explore Our Modules
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00F5FF] rounded-full"></div>
              <span>98% Satisfaction Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#6A5BFF] rounded-full"></div>
              <span>Industry-Certified Mentors</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-[#00F5FF] opacity-30 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-[#6A5BFF] opacity-30 rounded-br-3xl"></div>
    </section>
  );
}
