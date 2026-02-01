import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string; // Allow merging classes
    threshold?: number; // Optional threshold customization
}

const ScrollReveal = ({ children, className = "", threshold = 0.1 }: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    } else {
                        entry.target.classList.remove("is-visible");
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully in view
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold]);

    return (
        <div ref={ref} className={`animate-on-scroll ${className}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
