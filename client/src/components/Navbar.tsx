import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Briefcase, Zap, Mail, GraduationCap } from "lucide-react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"];
            const scrollPasition = window.scrollY + 300; // Offset

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPasition && (element.offsetTop + element.offsetHeight) > scrollPasition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "hero", icon: Home, label: "Home" },
        { id: "about", icon: User, label: "About" },
        { id: "skills", icon: Zap, label: "Skills" },
        { id: "projects", icon: Code, label: "Projects" },
        { id: "experience", icon: Briefcase, label: "Experience" },
        { id: "education", icon: GraduationCap, label: "Education" },
        { id: "contact", icon: Mail, label: "Contact" },
    ];

    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass-card px-4 py-3 rounded-full border border-white/10 shadow-2xl bg-black/50 backdrop-blur-md pointer-events-auto flex items-center gap-2"
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-3
                ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-blue-600 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <item.icon className="w-4 h-4" />
                                <span className="hidden md:inline">{item.label}</span>
                            </span>
                        </button>
                    );
                })}
            </motion.nav>
        </div>
    );
}
