import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { modulesData } from "../data/modulesData";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModulesDropdownOpen, setIsModulesDropdownOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isPartnershipDropdownOpen, setIsPartnershipDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsModulesDropdownOpen(false);
    setIsProgramsDropdownOpen(false);
    setIsPartnershipDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/modules", label: "Our Modules" },
    { path: "/programs", label: "Programs", isDropdown: true },
    { path: "/free-lab-setup", label: "Free Lab Setup" },
    { path: "/impact", label: "Our Impact" },
    { path: "/about", label: "About Us" },
  ];

  const programLinks = [
    { path: "/annual-event", label: "Annual Tech Event" },
    { path: "/internship", label: "Internship" },
    { path: "/gallery", label: "Gallery" },
  ];

  const partnershipLinks = [
    { path: "/join-as-trainer", label: "Join as Trainer" },
    { path: "/join-as-school", label: "Join as School" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] z-[100] origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#000000]/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-28 h-28 flex items-center justify-center">
                <img src="/zen logo.png" alt="ZenworoX Logo" className="w-full h-full object-contain" />
              </div>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || 
                  (link.path === "/modules" && location.pathname.startsWith("/modules")) ||
                  (link.path === "/programs" && programLinks.some(p => location.pathname === p.path));

                if (link.path === "/modules") {
                  return (
                    <div
                      key={link.path}
                      className="relative group py-2"
                      onMouseEnter={() => setIsModulesDropdownOpen(true)}
                      onMouseLeave={() => setIsModulesDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-[#00F5FF]" : "text-gray-300 hover:text-white"}`}
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isModulesDropdownOpen ? 'rotate-180' : ''}`} />
                      </Link>

                      <AnimatePresence>
                        {isModulesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-64 pt-2"
                          >
                            <div className="bg-[#000000]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                              {modulesData.map((module) => (
                                <Link
                                  key={module.id}
                                  to={`/modules/${module.id}`}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${module.gradient} flex items-center justify-center`}>
                                    <module.icon className="h-4 w-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-white group-hover/item:text-[#00F5FF] transition-colors">{module.title}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF]"
                        />
                      )}
                    </div>
                  );
                }

                if (link.path === "/programs") {
                  return (
                    <div
                      key={link.path}
                      className="relative group py-2"
                      onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                      onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-[#00F5FF]" : "text-gray-300 hover:text-white"}`}
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isProgramsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-64 pt-2"
                          >
                            <div className="bg-[#000000]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                              {programLinks.map((p) => (
                                <Link
                                  key={p.path}
                                  to={p.path}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                >
                                  <div className="text-sm font-bold text-white group-hover/item:text-[#00F5FF] transition-colors">{p.label}</div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF]"
                        />
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-medium transition-colors group"
                  >
                    <span className={isActive ? "text-[#00F5FF]" : "text-gray-300 hover:text-white"}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <div
                className="relative group py-2"
                onMouseEnter={() => setIsPartnershipDropdownOpen(true)}
                onMouseLeave={() => setIsPartnershipDropdownOpen(false)}
              >
                <Button
                  className="relative overflow-hidden bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Partner With Us
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isPartnershipDropdownOpen ? 'rotate-180' : ''}`} />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>

                <AnimatePresence>
                  {isPartnershipDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 w-64 pt-2"
                    >
                      <div className="bg-[#000000]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                        {partnershipLinks.map((p) => (
                          <Link
                            key={p.path}
                            to={p.path}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                          >
                            <div className="text-sm font-bold text-white group-hover/item:text-[#00F5FF] transition-colors">{p.label}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 bg-[#000000]/95 backdrop-blur-xl"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || 
                    (link.path === "/modules" && location.pathname.startsWith("/modules")) ||
                    (link.path === "/programs" && programLinks.some(p => location.pathname === p.path));

                  if (link.path === "/modules") {
                    return (
                      <div key={link.path} className="flex flex-col">
                        <button
                          onClick={() => setIsModulesDropdownOpen(!isModulesDropdownOpen)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${isActive
                            ? "bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 text-[#00F5FF]"
                            : "hover:bg-white/5 text-gray-300"
                            }`}
                        >
                          {link.label}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isModulesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isModulesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden flex flex-col pl-4 mt-2 gap-2"
                            >
                              <Link
                                to="/modules"
                                className="px-4 py-2 text-sm text-[#00F5FF] hover:bg-white/5 rounded-lg transition-colors font-bold"
                              >
                                View All Modules
                              </Link>
                              {modulesData.map((module) => (
                                <Link
                                  key={module.id}
                                  to={`/modules/${module.id}`}
                                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                  {module.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.path === "/programs") {
                    return (
                      <div key={link.path} className="flex flex-col">
                        <button
                          onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${isActive
                            ? "bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 text-[#00F5FF]"
                            : "hover:bg-white/5 text-gray-300"
                            }`}
                        >
                          {link.label}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isProgramsDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden flex flex-col pl-4 mt-2 gap-2"
                            >
                              {programLinks.map((p) => (
                                <Link
                                  key={p.path}
                                  to={p.path}
                                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                  {p.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-lg transition-colors ${isActive
                        ? "bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 text-[#00F5FF]"
                        : "hover:bg-white/5 text-gray-300"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                
                {/* Mobile Partnership Dropdown */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsPartnershipDropdownOpen(!isPartnershipDropdownOpen)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${partnershipLinks.some(p => location.pathname === p.path)
                      ? "bg-gradient-to-r from-[#00F5FF]/20 to-[#6A5BFF]/20 text-[#00F5FF]"
                      : "hover:bg-white/5 text-gray-300"
                      }`}
                  >
                    Partner With Us
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isPartnershipDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isPartnershipDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden flex flex-col pl-4 mt-2 gap-2"
                      >
                        {partnershipLinks.map((p) => (
                          <Link
                            key={p.path}
                            to={p.path}
                            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            {p.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
