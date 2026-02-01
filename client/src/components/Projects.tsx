import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

// Import images directly to ensure they are bundled
import vaulteraImg from "../assets/images/vaultera.png";
import cmsImg from "../assets/images/cms.png";
import nammapgImg from "../assets/images/nammapg.png";

interface Project {
  id: number;
  title: string;
  problem: string;
  tags: string[];
  image: string;
  link: string;
  contributions: string[];
}

function ProjectCard({ project, isActive }: { project: Project; isActive: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset flip when becoming inactive
  useEffect(() => {
    if (!isActive && isFlipped) {
      setIsFlipped(false);
    }
  }, [isActive, isFlipped]);

  function handleFlip() {
    if (!isActive) return; // Only active card flips
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <motion.div
      className={`relative h-[500px] w-full max-w-xl cursor-pointer transition-all duration-500`}
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
      animate={{
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.5,
        zIndex: isActive ? 10 : 0,
        filter: isActive ? "blur(0px)" : "blur(2px)",
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full glass-card rounded-xl overflow-hidden backface-hidden bg-gray-900 group"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Holographic Glare Effect */}
          <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine" />
          </div>

          <div className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-300">Active</span>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain relative z-10 bg-gray-950 p-6 transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              console.error(`Failed to load image: ${project.image}`);
              e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
            }}
          />

          <div className="absolute inset-x-0 bottom-0 p-6 z-20 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent border-t border-white/5">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex gap-2 text-blue-400 text-sm font-medium items-center">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              {/* Tech preview dots */}
              <div className="flex gap-1">
                {project.tags.slice(0, 3).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-600" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full glass-card rounded-xl p-8 border border-gray-700 bg-background flex flex-col backface-hidden overflow-y-auto custom-scrollbar"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-blue-400 mb-1 uppercase tracking-wider">Problem</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Backend Contributions</h4>
            <ul className="list-disc pl-4 space-y-1">
              {project.contributions.map((item, idx) => (
                <li key={idx} className="text-gray-300 text-sm leading-snug">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "NammaPG – PG Management Platform",
      problem:
        "Managing PG (Paying Guest) accommodations requires coordination between owners, tenants, and admins — streamlining listings, bookings, and access control was needed.",
      tags: [
        "Spring Boot",
        "Hibernate (JPA)",
        "MySQL",
        "REST API",
        "JWT Authentication",
        "RBAC",
      ],
      contributions: [
        "Designed and implemented RESTful API architecture for PG listings, user management, and owner operations",
        "Built role-based access control with separate dashboards for Admin, PG Owner, and User roles",
        "Designed normalized database schema with proper entity relationships and indexing",
        "Implemented authentication & authorization workflows using JWT",
        "Gained experience with scalable, API-driven backend architecture",
      ],
      image: nammapgImg,
      link: "https://github.com/Rakshan-03/Namma-PG",
    },
    {
      id: 2,
      title: "Central Management System (CMS)",
      problem:
        "Startups need centralized systems to manage users, devices, and operational data with role-based visibility and control.",
      tags: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "REST API",
        "Role-Based Dashboards",
      ],
      contributions: [
        "Built a backend CMS platform for user and device management",
        "Developed RESTful APIs for CRUD operations and data visualization",
        "Implemented authentication system and role-based dashboards",
        "Designed database schema following normalization principles",
        "Focused on scalable, maintainable architecture patterns",
      ],
      image: cmsImg,
      link: "https://github.com/Rakshan-03/CMS-Project",
    },
    {
      id: 3,
      title: "Vaultera – Virtual Depository",
      problem:
        "Schools need a digital platform for document management, timetable sharing, and role-based collaboration.",
      tags: [
        "React.js",
        "Node.js/Express",
        "MySQL",
        "Gemini API",
        "RBAC",
        "Cloud Storage",
      ],
      contributions: [
        "Developed full-stack application with React frontend and Node.js backend",
        "Implemented role-based access control (Student, Teacher, Admin)",
        "Designed MySQL database for structured data management",
        "Integrated Gemini AI API for intelligent features",
        "Built secure authentication and document upload workflows",
      ],
      image: vaulteraImg,
      link: "https://github.com/Rakshan-03/Vaultera-2.0",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background border-t border-gray-800 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mx-auto" />
        </ScrollReveal>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[600px]">

          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="absolute left-0 z-20 p-3 rounded-full glass-card hover:bg-blue-500/20 transition-colors text-white hidden md:block"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Cards Display - 3 Slot Layout */}
          <div className="flex items-center justify-center w-full">
            {/* Prev Card Slot */}
            <div
              className="hidden md:block transform scale-90 opacity-50 select-none pointer-events-none transition-all duration-500 absolute left-4 lg:left-12 w-[350px]"
              onClick={prevProject}
            >
              <ProjectCard project={projects[(activeIndex - 1 + projects.length) % projects.length]} isActive={false} />
            </div>

            {/* Active Card Slot */}
            <div className="z-10 w-full md:w-[500px] lg:w-[600px] transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={projects[activeIndex]} isActive={true} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Card Slot */}
            <div
              className="hidden md:block transform scale-90 opacity-50 select-none pointer-events-none transition-all duration-500 absolute right-4 lg:right-12 w-[350px]"
              onClick={nextProject}
            >
              <ProjectCard project={projects[(activeIndex + 1) % projects.length]} isActive={false} />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="absolute right-0 z-20 p-3 rounded-full glass-card hover:bg-blue-500/20 transition-colors text-white hidden md:block"
            aria-label="Next Project"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button onClick={prevProject} className="p-3 rounded-full glass-card hover:bg-gray-800"><ChevronLeft className="w-6 h-6" /></button>
          <span className="self-center text-gray-400 font-medium">{activeIndex + 1} / {projects.length}</span>
          <button onClick={nextProject} className="p-3 rounded-full glass-card hover:bg-gray-800"><ChevronRight className="w-6 h-6" /></button>
        </div>

      </div>
    </section>
  );
}

