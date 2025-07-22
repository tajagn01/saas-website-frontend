import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    if (!left || !right) return;

    gsap.fromTo(
      left,
      { opacity: 0, x: -60 },
      {
        scrollTrigger: {
          trigger: left,
          start: "top 90%",
          toggleActions: "play none none none",
          // markers: true, // uncomment to debug
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      right,
      { opacity: 0, x: 60 },
      {
        scrollTrigger: {
          trigger: right,
          start: "top 90%",
          toggleActions: "play none none none",
          // markers: true, // uncomment to debug
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-neutral-900 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div ref={leftRef} className="text-white space-y-6">
          <h2 className="text-4xl font-bold leading-snug">
            Let's Build Something <span className="text-orange-500">Amazing</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have questions or need support? Our team is here to help you unlock
            the power of your data with smart, intuitive solutions.
          </p>
          <p className="text-gray-400">
            Reach out anytime and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right: Form */}
        <div
          ref={rightRef}
          className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl shadow-orange-500/10"
        >
          <h3 className="text-white text-2xl font-semibold mb-6 text-center">
            Contact Us
          </h3>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
