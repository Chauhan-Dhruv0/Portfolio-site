import React, { useState, useRef, useLayoutEffect } from "react";
import axios from "axios";
import { gsap } from "gsap";

function ContactForm() {
    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success",
    });

    const showToast = (message, type = "success") => {
        setToast({ show: true, message, type });
        setTimeout(
            () => setToast({ show: false, message: "", type: "success" }),
            3000
        );
    };

    /* ---------------- state & refs ---------------- */
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const cardRef = useRef(null);
    const inputRefs = useRef([]);

    /* ---------------- animation ------------------- */
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          

            tl.fromTo(
                cardRef.current,
                { scale: 0.92, autoAlpha: 0 },
                { scale: 1, autoAlpha: 1, duration: 0.9 },
                "-=0.4"
            );

            // 3) inputs rise in stagger (overlaps card)
            tl.from(
                inputRefs.current,
                { y: 40, autoAlpha: 0, stagger: 0.15, duration: 0.7 },
                "-=0.6"
            );

        });

        return () => ctx.revert(); // cleanup on unmount
    }, []);

    /* -------------- form handlers -------------- */
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.BackendURL}/contact`, formData);
            showToast("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            showToast("Failed to send message. Try again.");
        }
    };

    /* ---------------- JSX ---------------------- */
    return (
        <div className="flex items-center justify-center px-4">
            <div
                className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl text-sm font-medium z-50 
        transition-all duration-500 ease-in-out
        ${toast.show
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-8 pointer-events-none"
                    }
        ${toast.type === "success"
                        ? "bg-[#1e2f26] text-[#c7ffd8] border border-[#5de68d]"
                        : "bg-[#2d1f1f] text-[#ffbfbf] border border-[#ff5e5e]"
                    }`}
                style={{
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 0 20px rgba(93, 230, 141, 0.3)",
                }}
            >
                {toast.message}
            </div>
            <div className="w-full max-w-xl">
                {/* header */}
                <header className="text-center mt-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-lime-200">
                        Contact me
                    </h2>
                    <div className="w-36 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 shadow-lg" />
                </header>

                {/* card */}
                <div
                    ref={cardRef}
                    className="bg-gradient-to-br w-full from-[#3b5244] to-[#2c4034] border border-[#55796a]/60 rounded-2xl p-8 shadow-2xl mt-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* name */}
                            <div className="col-span-1 sm:col-span-2">
                                <label className="block text-white mb-2 text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    ref={(el) => (inputRefs.current[0] = el)}
                                    name="name"
                                    onChange={handleChange}
                                    value={formData.name}
                                    placeholder="e.g. Dhruv Chauhan"
                                    required
                                    className="w-full bg-transparent border-b-2 border-emerald-400 text-white placeholder-gray-500 px-2 py-2 focus:outline-none"
                                />
                            </div>

                            {/* email */}
                            <div className="col-span-1 sm:col-span-2">
                                <label className="block text-white mb-2 text-sm font-medium">
                                    Email Address
                                </label>
                                <input
                                    ref={(el) => (inputRefs.current[1] = el)}
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    placeholder="e.g. dhruv@gmail.com"
                                    required
                                    className="w-full bg-transparent border-b-2 border-emerald-400 text-white placeholder-gray-500 px-2 py-2 focus:outline-none"
                                />
                            </div>

                            {/* message */}
                            <div className="col-span-1 sm:col-span-2">
                                <label className="block text-white mb-2 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    ref={(el) => (inputRefs.current[2] = el)}
                                    name="message"
                                    onChange={handleChange}
                                    value={formData.message}
                                    placeholder="Let us know how I can help"
                                    required
                                    rows={5}
                                    className="w-full bg-transparent border-b-2 border-emerald-400 text-white placeholder-gray-500 px-2 py-2 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* button */}
                        <div className="text-center pt-4">
                            <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-400">
                                <button
                                    type="submit"
                                    className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition duration-200"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
