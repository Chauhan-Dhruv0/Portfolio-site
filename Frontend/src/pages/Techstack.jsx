import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Techstack() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const ctx = gsap.context(() => {
      // Scroll animations
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

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
        }
      );

      // Card hover animation
      cards.forEach((card) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(card, {
          scale: 1.03,
          boxShadow: "0px 8px 20px rgba(94,234,212,0.2)",
          duration: 0.3,
          ease: "power2.out",
        });

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });

      // Icon hover animation
      const iconBoxes = container.querySelectorAll(".icon-box");

      iconBoxes.forEach((el) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(el, {
          y: -4,
          rotate: 2,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });

        el.addEventListener("mouseenter", () => tl.play());
        el.addEventListener("mouseleave", () => tl.reverse());
      });

    }, container);

    return () => ctx.revert();
  }, []);

  const stacks = [
    {
      label: "Frontend",
      items: [
        { src: "/image/frontend/html.png", name: "HTML" },
        { src: "/image/frontend/css.png", name: "CSS" },
        { src: "/image/frontend/js.png", name: "JavaScript" },
        { src: "/image/frontend/react.png", name: "React" },
        { src: "/image/frontend/bootstrap.png", name: "Bootstrap" },
        { src: "/image/frontend/tailwind.png", name: "Tailwind" },
      ],
    },
    {
      label: "Backend",
      items: [
        { src: "/image/backend/node.png", name: "Node.js" },
        { src: "/image/backend/express.png", name: "Express" },
        { src: "/image/backend/postman.png", name: "Postman" },
      ],
    },
    {
      label: "Deployment",
      items: [
        { src: "/image/deploy/netlify.png", name: "Netlify" },
        { src: "/image/deploy/vercel.png", name: "Vercel" },
        { src: "/image/deploy/git.png", name: "Git" },
      ],
    },
    {
      label: "Database",
      items: [{ src: "/image/database/mongodb.png", name: "MongoDB" }],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6"
    >
      {/* section heading */}
      <header ref={headerRef} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-lime-200">
          Tech&nbsp;Stack&nbsp;&amp;&nbsp;Tools
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400" />
      </header>

      {/* tech stack cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stacks.map((stack, index) => (
          <article
            key={stack.label}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gradient-to-br from-[#3b5244] to-[#2c4034] border border-[#55796a]/60
                       rounded-2xl p-6 shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 bg-clip-text text-transparent
                           bg-gradient-to-r from-emerald-200 to-teal-100">
              {stack.label}
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {stack.items.map((tech) => (
                <div key={tech.name} className="group flex flex-col items-center">
                  <div
                    className="icon-box w-16 h-16 flex items-center justify-center p-2 rounded-xl
                               bg-[#2f4638] border border-[#55796a]/60
                               transition-all duration-300
                               group-hover:bg-[#395c4a]
                               group-hover:border-emerald-300/40"
                  >
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-200 transition-colors group-hover:text-emerald-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Techstack;
