import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

function Navbar() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Engineer. Designer. Creator.";
    const chars = text.split("");
    textRef.current.innerHTML = "";

    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0;
      textRef.current.appendChild(span);

      gsap.to(span, {
        opacity: 2,
        duration: 0.2,
        delay: index * 0.15,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 h-auto sm:h-20 w-[90%] sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-[1250px] mx-auto bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full p-4 sm:p-6">
      {/* Left: Logo + Links */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 w-full sm:w-auto">
        {/* LOGO */}
        <div className="flex items-center w-auto h-auto">
          <a href="/">
            <img
              src="image/Logo/logo.png"
              className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
              alt="Company logo"
            />
          </a>
        </div>

        {/* Navbar Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-white font-oswald-regular">
          {[
            { name: "Home", href: "/" },
            { name: "Tech Stack", href: "/techstack" },
            { name: "Project", href: "/project" },
            { name: "Contact", href: "/contact" },
            // { name: "About", href: "/about" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `px-4 py-1 rounded-full text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? "bg-white/20 text-black font-semibold"
                    : "hover:bg-white/20 hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right: Icons + Typing text */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-black">
        <div className="flex gap-2 sm:gap-4">
  {[
    {
      src: "insta.png",
      alt: "Instagram",
      href: "https://www.instagram.com/_.dhruv.x",
    },
    {
      src: "Linkedin.png",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/dhruv-chauhan-123360304/",
    },
    {
      src: "github.png",
      alt: "GitHub",
      href: "https://github.com/Chauhan-Dhruv0",
    },
  ].map(({ src, alt, href }, idx) => (
    <a href={href} key={idx} target="_blank" rel="noopener noreferrer">
      <img
        src={`image/Logo/${src}`}
        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        alt={alt}
      />
    </a>
  ))}
</div>


        {/* Typing Animation */}
        <p
          ref={textRef}
          className="whitespace-nowrap font-mono text-xs sm:text-sm mt-2 sm:mt-0 hover:text-white"
        ></p>
      </div>
    </div>
  );
}

export default Navbar;
