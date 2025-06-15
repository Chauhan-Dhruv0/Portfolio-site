
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Herosection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Herosection() {
  const textRef = useRef(null);
  const leftRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const buttonRef = useRef(null);
  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Text animation
    const texts = ["Dhruv Chauhan", "Web Developer"];
    let index = 0;

    const animateText = () => {
      if (!textRef.current) return;

      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          textRef.current.innerText = texts[index];
          gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.5,
          });
          index = (index + 1) % texts.length;
        },
      });
    };

    // Initial animations on page load
    gsap.set([leftRef.current, headingRef.current, paragraph1Ref.current, paragraph2Ref.current, buttonRef.current], {
      opacity: 0,
      y: 30
    });

    const tl = gsap.timeline();
    tl.to(heroRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(leftRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.4)",
    })
    .to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.4")
    .to(paragraph1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.3")
    .to(paragraph2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.3")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.8)",
      onComplete: () => {
        // Start text animation after initial load
        animateText();
        intervalRef.current = setInterval(animateText, 2500);
      }
    }, "-=0.3");

    // Scroll animations
    gsap.fromTo(".responsive-line",
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".responsive-line",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(".hero-image",
      { rotation: -3 },
      {
        rotation: 3,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }
    );

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div 
    // ref={leftRef} 
      ref={heroRef}
      className="opacity-0 flex flex-col sm:flex-row 
        w-[90%] sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-[1250px] 
        mt-10 mx-auto 
        bg-white/20 backdrop-blur-md border border-white/30 
        shadow-xl/20 shadow-black rounded-3xl p-6 text-white text-center sm:text-left"
    >
      {/* Left Column - Image */}
      <div ref={leftRef} className="flex flex-col items-center sm:items-start">
        <div className="hero-image relative w-60 h-80 rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/image/bg/picarts.jpg"
            alt="sneaker"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute bottom-4 right-4 
              bg-black/50 p-2 rounded-full 
              hover:scale-110 transition duration-300"
          >
            <FaSearch className="text-white text-lg" />
          </button>
        </div>

        <div className="mt-4 w-60 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-sm text-white/80 text-center">
          <span ref={textRef}>Dhruv Chauhan</span>
        </div>
      </div>

      {/* Right Column - Text */}
      <div className="flex flex-col w-full mb-6 sm:mb-0 sm:pl-20 sm:mt-10 gap-6">
        <h1 ref={headingRef} className="text-4xl font-bold mb-2">
          Hi, I'M Dhruv
        </h1>

        <div className="flex flex-col sm:flex-row pl-6 gap-4 items-center justify-center text-center sm:text-left">
          <p ref={paragraph1Ref} className="font-oswald-regular tracking-wide leading-snug">
            👨‍💻 — a passionate MERN Stack Developer who loves <br />
            turning complex problems into elegant, full-stack
            <br /> web solutions with clean UI, fast performance, and <br />
            real-world functionality.
          </p>

          <div className="responsive-line"></div>

          <p ref={paragraph2Ref} className="font-oswald-regular tracking-wide leading-snug">
            Bringing ideas to life with JavaScript — crafting websites <br />
            that are fast, fluid, and full of personality by <br />
            merging design and code to build striking, <br />
            functional experiences.
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <button 
            ref={buttonRef}
            className="relative px-6 py-2 text-white hover:text-black font-medium cursor-pointer group overflow-hidden rounded-lg"
          >
            <span className="absolute inset-0 bg-[#31473A] rounded-lg transition-transform duration-400 ease-in-out group-hover:scale-110 group-hover:translate-y-1"></span>
            <span className="absolute w-9 h-9 bg-white/30 backdrop-blur-sm rounded-full -bottom-2 -right-2 group-hover:w-full group-hover:h-full group-hover:rounded-lg group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400 ease-in-out"></span>
            <span className="relative z-10"><Link to="/contact">Let's Work Together</Link></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;