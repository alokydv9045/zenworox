import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative z-50 bg-[#000000] text-gray-300 border-t border-gray-800 font-sans tracking-wide">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={item} className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-40 h-40 flex items-center justify-center">
                <img src="/zen logo.png" alt="ZenworoX Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-bold tracking-wide">
              Empowering the next generation with future-ready technology education, innovation, and skills since 2018.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00F5FF] hover:border-[#00F5FF] hover:text-black transition-all duration-300 group"
                >
                  <Icon className="h-4 w-4 text-gray-400 group-hover:text-black transition-colors" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Programs</h3>
            <ul className="space-y-4">
              <li><Link to="/modules/coding" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">Coding & AI/ML</Link></li>
              <li><Link to="/modules/robotics" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">Robotics Lab</Link></li>
              <li><Link to="/modules/animation" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">VFX & Animation</Link></li>
              <li><Link to="/modules/game-dev" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">Game Development</Link></li>
              <li><Link to="/modules/3d-printing" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">3D Printing</Link></li>
              <li><Link to="/modules/stem" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">STEM Integration</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">Gallery</Link></li>
              <li><Link to="/join-as-trainer" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">Join as Trainer</Link></li>
              <li><Link to="/join-as-school" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">Join as School</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#00F5FF] transition-colors text-sm font-bold hover:pl-2 duration-300 block tracking-wide">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#00F5FF]/10 transition-colors">
                  <Mail className="h-4 w-4 text-[#00F5FF]" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-gray-400 font-bold group-hover:text-white transition-colors tracking-wide">info@zenworox.com</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#00F5FF]/10 transition-colors">
                  <Phone className="h-4 w-4 text-[#00F5FF]" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-gray-400 font-bold group-hover:text-white transition-colors tracking-wide">+91 90453 30310</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#00F5FF]/10 transition-colors">
                  <MapPin className="h-4 w-4 text-[#00F5FF]" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-gray-400 font-bold group-hover:text-white transition-colors tracking-wide">
                  SUPERCITY,<br />
                  R.K.University, Bareilly, Bareilly- 243006, Uttar Pradesh
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Map Location */}
          <motion.div variants={item} className="lg:col-span-1 space-y-6">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Find Us</h3>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-800 relative group">
              <iframe
                src="https://maps.google.com/maps?q=R.K.University%20Bareilly&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-xl"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-bold uppercase tracking-wide"
        >
          <p className="tracking-wide">&copy; {currentYear} ZENWOROX TECHNOLOGY LABS PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#00F5FF] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#00F5FF] transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-[#00F5FF] transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
