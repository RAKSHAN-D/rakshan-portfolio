import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Briefcase, Zap, Mail, GraduationCap, Menu, X } from "lucide-react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(false);
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
        <>
            {/* Desktop Navbar - Centered Pill */}
            <div className="fixed top-6 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-card px-4 py-3 rounded-full border border-white/10 shadow-2xl bg-black/60 backdrop-blur-md flex items-center gap-2 pointer-events-auto"
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
                                    <span>{item.label}</span>
                                </span>
                            </button>
                        );
                    })}
                </motion.nav>
            </div>

            {/* Mobile Navbar - Side Pill & Stack */}
            <div className="fixed top-6 right-4 z-50 flex flex-col items-end gap-3 md:hidden">
                {/* Menu Toggle Button */}
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border shadow-2xl backdrop-blur-md
                    ${isOpen ? "bg-red-500/20 border-red-500/30 text-red-400" : "bg-blue-600/20 border-blue-500/30 text-blue-400"}`}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>

                {/* Vertical Icon Stack (Side Pile) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -20 }}
                            className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-3xl shadow-2xl flex flex-col gap-2"
                        >
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => scrollTo(item.id)}
                                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300
                                        ${isActive ? "bg-blue-600 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
