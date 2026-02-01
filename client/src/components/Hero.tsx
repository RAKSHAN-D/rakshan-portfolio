import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]); // Parallax effect

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/RAKSHAN_RESUME_BACKEND_DEV.pdf";
    link.download = "Rakshan_D_Resume.pdf";
    link.click();
  };

  const name = "Rakshan Doddamani";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 pt-24 md:pt-32">
        <div className="flex items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <ScrollReveal className="flex-1 text-center lg:text-left">
            {/* Location Badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-sm text-blue-300">📍 Bangalore, India</span>
            </div>

            {/* Main Heading with Typing Animation */}
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight min-h-[1.2em]">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.1,
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-blue-500 ml-1"
              >
                |
              </motion.span>
            </h1>

            {/* Title */}
            <p className="mb-6 text-xl md:text-2xl text-gray-300 font-medium">
              Backend Developer | API & Database Systems | ECE Graduate 2025
            </p>

            {/* Tagline */}
            <p className="mb-12 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg text-gray-400 leading-relaxed">
              Backend-focused engineer with hands-on experience building CMS platforms, role-based systems, RESTful APIs, and database-driven applications. Passionate about scalable system design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <Button
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                onClick={downloadResume}
                variant="outline"
                className="border-gray-600 text-foreground hover:bg-gray-900 px-8 py-6 text-base font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>

              <a
                href="https://www.linkedin.com/in/rakshan-doddamani-055766319"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-6 text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </ScrollReveal>

          {/* Right Avatar */}
          <ScrollReveal className="hidden lg:flex flex-1 justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Animated Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-full blur-3xl" />

              {/* Avatar Image */}
              <img
                src="/images/profile.jpg"
                alt="Rakshan D"
                className="floating-avatar avatar-glow relative w-full h-full object-cover rounded-full border-4 border-blue-500/30"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gray-500 text-sm">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
}
