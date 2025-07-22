import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const headlineRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-orange-500/30 via-orange-400/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 scale-150 z-0"></div>
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-tl from-white/20 via-orange-300/15 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 scale-150 z-0"></div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 md:px-8 md:py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold">Ravel</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Benefits</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Testimonials</a>
          <a href="#" className="text-gray-300 hover:text-white transition">FAQs</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition text-sm md:text-base">
          Get Started
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 md:px-8 text-center">
        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl"
        >
          Transform your Data into
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-white font-bold bg-clip-text text-transparent">
            Powerful and Smart Solutions
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mb-10 sm:mb-12 leading-relaxed"
        >
          Discover insights, enhance choices, and grow your business using advanced data-driven innovations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-16">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
            Get Started
          </button>
          <button className="border border-gray-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:border-gray-500 hover:bg-white/5 transition-all duration-200">
            See Features
          </button>
        </div>

        {/* Client Logos */}
        <div className="w-full max-w-4xl overflow-hidden">
          <div className="flex items-center animate-scroll space-x-10 sm:space-x-12">
            {[
              'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
              'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
              'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
              'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
              'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
              'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
              'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
            ]
              .concat(
                [
                  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
                  'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
                  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
                  'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
                  'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
                  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
                  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
                ]
              )
              .map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 h-6 sm:h-8"
                >
                  <img
                    src={logo}
                    alt={`Client ${index}`}
                    className="h-5 sm:h-6 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Inline Animation CSS */}
        <style jsx>{`
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {/* Extra Gradients */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-orange-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
}
