import { useEffect, useRef } from 'react';

export function useCursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    // Create cursor glow element
    const cursorGlow = document.createElement('div');
    cursorGlow.id = 'cursor-glow';
    cursorGlow.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(59, 130, 246, 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.1);
      display: none;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursorGlow);
    cursorRef.current = cursorGlow;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Show cursor glow
      if (cursorGlow.style.display === 'none') {
        cursorGlow.style.display = 'block';
      }
    };

    // Hide cursor glow when mouse leaves window
    const handleMouseLeave = () => {
      if (cursorGlow) {
        cursorGlow.style.display = 'none';
      }
    };

    // Smooth animation loop
    const animateCursor = () => {
      // Smooth follow with easing
      cursorX.current += (mouseX.current - cursorX.current) * 0.2;
      cursorY.current += (mouseY.current - cursorY.current) * 0.2;

      if (cursorGlow) {
        cursorGlow.style.left = cursorX.current - 20 + 'px';
        cursorGlow.style.top = cursorY.current - 20 + 'px';
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
      if (cursorGlow && cursorGlow.parentNode) {
        cursorGlow.parentNode.removeChild(cursorGlow);
      }
    };
  }, []);
}
