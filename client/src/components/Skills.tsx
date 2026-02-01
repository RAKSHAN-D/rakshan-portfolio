import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";

const skillsData = {
  row1: ["Java", "JavaScript", "C", "MySQL", "PostgreSQL", "MongoDB", "Spring Boot", "Node.js"],
  row2: ["Express.js", "RESTful APIs", "Microservices", "JWT", "OAuth", "Role-Based Access", "Hibernate (JPA)"],
  row3: ["Git & GitHub", "Docker", "Postman", "System Design", "Data Structures", "Clean Architecture", "Debugging"]
};

// Marquee Component
const MarqueeRow = ({ skills, direction = "left", speed = 20 }: { skills: string[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="relative flex overflow-hidden py-4 group">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      {/* Scrolling Content */}
      <motion.div
        className="flex gap-8 flex-nowrap"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Doubled list for seamless loop */}
        {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
          <span
            key={idx}
            className="whitespace-nowrap px-6 py-3 rounded-full text-lg font-medium glass-card border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background border-t border-gray-800 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mx-auto mb-6" />
          <p className="text-gray-400 text-lg">The tools and technologies I use to build scalable systems.</p>
        </ScrollReveal>

        {/* Marquees */}
        <div className="flex flex-col gap-8">
          <MarqueeRow skills={skillsData.row1} direction="left" speed={40} />
          <MarqueeRow skills={skillsData.row2} direction="right" speed={50} />
          <MarqueeRow skills={skillsData.row3} direction="left" speed={45} />
        </div>
      </div>
    </section>
  );
}
