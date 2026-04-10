import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqs = [
  {
    question: "What does ZenworoX actually provide?",
    answer: "We provide complete end-to-end tech lab solutions including setup, curriculum, trainers, software, and maintenance."
  },
  {
    question: "Do schools need to invest upfront?",
    answer: "No. We offer free lab setup. Schools only pay a nominal annual running cost."
  },
  {
    question: "What age group is this for?",
    answer: "Our programs are designed for middle school to senior secondary students."
  },
  {
    question: "What subjects are covered?",
    answer: "Robotics, Animation, Coding, 3D Printing, and Game Development."
  },
  {
    question: "Are trainers qualified?",
    answer: "Yes. All trainers go through a strict hiring process, in-house training, and yearly certification renewal."
  },
  {
    question: "How is this different from traditional computer labs?",
    answer: "Traditional labs focus on theory. We focus on hands-on, project-based learning with real tools and technologies."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We handle maintenance, upgrades, and continuous support throughout the year."
  },
  {
    question: "Can students participate in competitions?",
    answer: "Absolutely! We organize hackathons, tech fests, and innovation challenges regularly."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-black/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-400 text-xl text-center max-w-2xl mx-auto">
            Everything you need to know about our technology labs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 bg-white/5 rounded-2xl px-6 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="text-white hover:text-[#00F5FF] transition-colors text-lg font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F5FF]/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
