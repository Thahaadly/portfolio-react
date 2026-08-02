import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if the hovered element is clickable (a, button, input, or has cursor-pointer)
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") ||
        target.closest("button");

      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide cursor on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* The Outer Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-[#17171c] transition-all duration-300 ease-out hidden md:block"
        style={{
          width: isHovering ? "40px" : "24px",
          height: isHovering ? "40px" : "24px",
          transform: `translate(${position.x - (isHovering ? 20 : 12)}px, ${position.y - (isHovering ? 20 : 12)}px)`,
          opacity: isHovering ? 0.3 : 1,
        }}
      />
      {/* The Inner Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full bg-[#17171c] transition-all duration-150 ease-out hidden md:block"
        style={{
          width: "6px",
          height: "6px",
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
          opacity: isHovering ? 0 : 1, // Hide dot when hovering to focus on ring
        }}
      />
    </>
  );
}
