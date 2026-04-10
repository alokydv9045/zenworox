import { motion, useInView } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";

const steps = [
  {
    number: "01",
    title: "Free Setup",
    description: "Complete lab installation with all equipment, furniture, and software. Zero capital investment required.",
    items: ["Hardware & Software", "Furniture & Fixtures", "Initial Training", "Curriculum Material"]
  },
  {
    number: "02",
    title: "Full Maintenance",
    description: "Ongoing technical support, trainer deployment, and equipment maintenance throughout the partnership.",
    items: ["Expert Trainers", "24/7 Tech Support", "Equipment Upkeep", "Regular Assessments"]
  },
  {
    number: "03",
    title: "Yearly Upgrades",
    description: "Annual technology updates to keep your lab cutting-edge with the latest tools and curriculum.",
    items: ["Latest Hardware", "Updated Software", "New Modules", "Trend Integration"]
  }
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <div ref={ref}>{count}</div>;
}

export function ZeroInvestment() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#000000]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00F5FF]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#6A5BFF]/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Zero Risk </span>
            <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
              for Schools
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No capital investment required. We design, install, and operate your lab.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5FF] via-[#6A5BFF] to-[#00F5FF] opacity-30"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
                  }`}
              >
                {/* Timeline dot */}
                <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  } w-6 h-6 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] border-4 border-[#000000] z-10`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] blur-md animate-pulse"></div>
                </div>

                <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                  {/* Step number */}
                  <div className="text-6xl font-bold bg-gradient-to-br from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent opacity-20 mb-4">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>

                  {/* Items checklist */}
                  <div className="grid grid-cols-2 gap-3">
                    {step.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#00F5FF] flex-shrink-0" />
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 max-w-2xl">
            <div className="text-7xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">
                ₹<CountUp end={0} />
              </span>
            </div>
            <div className="text-2xl text-white mb-2">Capital Expense</div>
            <p className="text-gray-400">Transform your school into a tech hub with zero upfront investment</p>
            <Link
              to="/free-lab-setup"
              className="mt-8 flex items-center justify-center gap-2 text-[#00F5FF] hover:gap-3 transition-all group pointer-events-auto"
            >
              <span>Learn more about our model</span>
              <ArrowRight className="h-5 w-5 animate-pulse group-hover:animate-none" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
