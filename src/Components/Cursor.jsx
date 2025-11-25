import React, { useState, useEffect, useRef } from "react";

const Cursor = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 }
  });

  const [isHovering, setIsHovering] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      const interactiveElements = document.querySelectorAll(
        "a, button, img, input, textarea, select, .shiny-cta, [role='button']"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    }, 100);

    const animate = () => {
      const lerp = (start, end, factor) => start + (end - start) * factor;

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);

      const interactiveElements = document.querySelectorAll(
        "a, button, img, input, textarea, select, .shiny-cta, [role='button']"
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block">
      {/* Dot */}
      <div
        className="absolute rounded-full bg-teal-400"
        style={{
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`
        }}
      />

      <div
        className={`absolute rounded-full border-2 border-teal-400 ${
          isHovering ? "bg-teal-400/20" : ""
        }`}
        style={{
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: "width 0.3s, height 0.3s, background-color 0.3s"
        }}
      />
    </div>
  );
};

export default Cursor;
