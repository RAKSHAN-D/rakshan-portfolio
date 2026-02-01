import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-gray-800 pt-20 pb-10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Top Row: Links & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-xl text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-xl text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-xl text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-xl text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Socials</h4>
            <nav className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/in/rakshan-doddamani-055766319/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/RAKSHAN-D" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-white transition-colors">GitHub</a>
              <a href="mailto:rakshandn@gmail.com" className="text-xl text-gray-300 hover:text-green-400 transition-colors">Email</a>
            </nav>
          </div>

          <button
            onClick={scrollToTop}
            className="md:ml-auto p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Massive Interactive Type */}
        <div className="relative border-b border-gray-800 mb-10 pb-10">
          <motion.h1
            className="text-[12vw] font-black leading-[0.8] text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 select-none pointer-events-none"
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            LET'S BUILD
          </motion.h1>
          <motion.h1
            className="text-[12vw] font-black leading-[0.8] text-center text-white/5 absolute top-0 left-0 right-0 pointer-events-none"
            aria-hidden="true"
          >
            LET'S BUILD
          </motion.h1>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© {currentYear} Rakshan D. Engineered in India.</p>
          <p>Designed with React, Tailwind & Framer Motion</p>
        </div>

      </div>
    </footer>
  );
}
