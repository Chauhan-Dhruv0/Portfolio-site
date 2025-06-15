import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 4.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={footerRef}
      className="relative flex items-center mt-10 h-auto sm:h-20 w-[85%] sm:w-[75%] md:w-[70%] lg:w-[60%] xl:w-[950px] mx-auto bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full px-6 py-4"
    >
      {/* Center: Resume Text + Button */}
      <div className="mx-auto flex items-center gap-3 text-white">
        <span className="text-lg font-medium">Here is my Resume</span>
        <a href="https://drive.google.com/file/d/1_r761x7o6ISmZQuBMceSOrU7BvdKU-gi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/60 hover:border-white transition duration-300 ease-in-out hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white transform transition-transform duration-[600ms] rotate-[450deg] group-hover:rotate-[360deg]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
