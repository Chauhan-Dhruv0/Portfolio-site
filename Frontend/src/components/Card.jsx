import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProject() {
  // Create refs for animated elements
  // const headerRef = useRef(null);
  const projectsRef = useRef([]);
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;

    gsap.fromTo(
      header,
      { opacity: 0, y: 30, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    );

    // Project section animations
    projectsRef.current.forEach((project, i) => {
      const text = project.querySelector(".project-text");
      const image = project.querySelector(".project-image");

      // Set initial state
      gsap.set([text, image], { opacity: 0, y: 30 });

      // Create timeline with scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 85%",
        },
      });

      tl.to(text, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }).to(
        image,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          rotate: i % 2 === 0 ? -2 : 2,
        },
        "<0.2"
      ); // Overlap animations slightly
    });
  }, []);

  // Add projects to ref array
  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Section Header */}
      <header ref={headerRef} className="text-center mt-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-lime-200">
          Featured Projects
        </h2>
        <div className="w-36 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 shadow-lg" />
      </header>

      {/* Project 1 */}
      <section
        ref={addToRefs}
        className="relative w-full px-4 py-16 flex justify-center items-center text-white"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:ml-10 lg:ml-32 xl:ml-60">
          {/* Left Text */}
          <div className="project-text flex-1 space-y-4 z-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-300 drop-shadow-sm">
              The Drip (Online Store)
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-5 shadow-lg border border-white/10">
              <p className="text-base text-slate-100/90 leading-relaxed font-light tracking-wide">
                The Drip Project is a full-stack e-commerce web application
                built using the MERN stack (MongoDB, Express.js, React.js,
                Node.js). It showcases my ability to build responsive,
                end-to-end web applications with integrated frontend and backend
                functionality.
              </p>
            </div>
            {/* Tags Below Description */}
            <div className="flex flex-wrap gap-3 ml-5">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Postman",
                "Vercel",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-white/30 text-white text-sm font-medium bg-white/5 backdrop-blur-sm 
                 transition-all duration-300 ease-out
                 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="project-image flex relative md:right-20 lg:right-40 xl:right-60 h-auto">
            <div className="rounded-xl overflow-hidden rotate-[-2deg] max-w-xs md:max-w-sm lg:max-w-md">
              <img
                src="/image/website/thedrip.png"
                alt="Project screenshot"
                className="w-full h-60  object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 (reversed) */}
      <section
        ref={addToRefs}
        className="relative w-full px-4 py-16 flex justify-center items-center text-white"
      >
<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:mr-10 lg:mr-32 xl:mr-60">
          {/* Image */}
          <div className="project-image flex relative md:left-20 lg:left-40 xl:left-60 h-auto">
            <div className="rounded-xl overflow-hidden rotate-[1deg] max-w-xs md:max-w-sm lg:max-w-md">
              <img
                src="/image/website/darknote.png"
                alt="Project screenshot"
                className="w-full h-60  object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="project-text flex-1 space-y-4 z-10 max-w-xl">
            <h2 className="text-2xl  sm:text-left lg:text-right md:text-3xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-300 drop-shadow-sm">
              Dark Note
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-5 shadow-lg border border-white/10">
              <p className="text-base text-slate-100/90  leading-relaxed font-light tracking-wide">
               Dark Note is a sleek note-taking application built with React, Node.js, Express, and MongoDB. 
               It features a minimalist dark-themed interface styled with Tailwind CSS. Users can create, organize, 
               and manage notes using titles, tags, and detailed content—all within a fast, intuitive, and 
               responsive experience.
              </p>
            </div>
            {/* Tags Below Description */}
<div className="flex flex-wrap gap-3 ml-5 justify-start md:justify-end">
              
              {["Tailwind", "React", "Express.js", "Node.js", "MongoDB"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full border border-white/30 text-white text-sm font-medium bg-white/5 backdrop-blur-sm 
                 transition-all duration-300 ease-out
                 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project 3 */}
      <section
        ref={addToRefs}
        className="relative w-full px-4 py-16 flex justify-center items-center text-white"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-12 md:ml-10 lg:ml-32 xl:ml-60">
          {/* Left Text */}
          <div className="project-text flex-1 space-y-4 z-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-300 drop-shadow-sm">
              Authentication system
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-5 shadow-lg border border-white/10">
              <p className="text-base text-slate-100/90 leading-relaxed font-light tracking-wide">
                Implemented secure user authentication in a MERN stack app using
                bcrypt for password hashing and JSON Web Tokens (JWT) for
                session management. Auth flows were tested and validated using
                Postman, ensuring secure login, registration, and protected
                route access.
              </p>
            </div>
            {/* Tags Below Description */}
            <div className="flex flex-wrap gap-3 ml-5">
              {[
                "JWT",
                "Bcrypt",
                "React",
                "MongoDB",
                "Node.js",
                "Express.js",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-white/30 text-white text-sm font-medium bg-white/5 backdrop-blur-sm 
                 transition-all duration-300 ease-out
                 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="project-image flex relative md:right-20 lg:right-40 xl:right-60 h-auto">
            <div className="rounded-xl overflow-hidden rotate-[-2deg] max-w-xs md:max-w-sm lg:max-w-md">
              <img
                src="/image/website/auth.png"
                alt="Project screenshot"
                className="w-full h-60  object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
