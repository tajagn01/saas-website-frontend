import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    if (!left || !right) return;

    gsap.fromTo(
      left,
      { opacity: 0, x: -40 },
      {
        scrollTrigger: {
          trigger: left,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      right,
      { opacity: 0, x: 40 },
      {
        scrollTrigger: {
          trigger: right,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Branding / Description */}
        <div
          ref={leftRef}
          className="space-y-4 text-white bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg shadow-lg shadow-orange-500/10"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-bold">Ravel</span>
          </div>
          <p className="text-gray-400 text-sm">
            Ravel is dedicated to turning complex data into smart, intuitive solutions that power businesses forward.
          </p>
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Ravel Inc. All rights reserved.</p>
        </div>

        {/* Right: Links / Contact */}
        <div
          ref={rightRef}
          className="bg-white/5 border border-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-lg shadow-orange-500/10 text-white space-y-6"
        >
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">FAQs</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 invert" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" className="w-6 h-6 invert" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6 invert" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
