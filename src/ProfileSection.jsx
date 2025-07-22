import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  Squares2X2Icon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true); // ✅ Helps mobile scroll work correctly
ScrollTrigger.config({ ignoreMobileResize: true }); // ✅ Avoid mobile reflow bugs

const features = [
  {
    title: "Real-Time Analytics",
    description:
      "Track user behavior and performance with live data dashboards. Make faster, smarter decisions backed by real-time insights.",
    icon: <ChartBarIcon className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools—Slack, Zapier, Stripe, and more. Our platform fits right into your existing workflow.",
    icon: <PuzzlePieceIcon className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with end-to-end encryption, SOC 2 compliance, and robust access controls.",
    icon: <ShieldCheckIcon className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "AI-Powered Automation",
    description:
      "Automate repetitive tasks and boost productivity using smart AI features that learn and adapt to your needs.",
    icon: <CpuChipIcon className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Customizable Workflows",
    description:
      "Tailor every workflow to your business needs with flexible, drag-and-drop functionality—no coding required.",
    icon: <Squares2X2Icon className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Whether you're a startup or scaling fast, our cloud-based architecture ensures high performance and zero downtime.",
    icon: <CloudArrowUpIcon className="w-10 h-10 text-orange-500" />,
  },
];

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const progressBarRef = useRef(null);
  const stepRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const updateScroll = () => {
        if (!cardsWrapperRef.current || !containerRef.current) return;

        const container = containerRef.current;
        const wrapper = cardsWrapperRef.current;
        const cardCount = wrapper.children.length;
        const cardWidth = wrapper.children[0].offsetWidth;
        const totalScrollWidth = cardCount * cardWidth + (cardCount - 1) * 32;

        gsap.to(wrapper, {
          x: () => `-${totalScrollWidth - container.offsetWidth}`,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Progress bar animation
        gsap.fromTo(
          progressBarRef.current,
          { width: "0%" },
          {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${totalScrollWidth}`,
              scrub: true,
            },
          }
        );

        // Circle animation
        stepRefs.current.forEach((step, i) => {
          const start = (i / cardCount) * totalScrollWidth;
          const end = ((i + 1) / cardCount) * totalScrollWidth;

          gsap.fromTo(
            step,
            { scale: 1 },
            {
              scale: 1.3,
              ease: "power1.out",
              scrollTrigger: {
                trigger: container,
                start: () => `top top+=${start}`,
                end: () => `top top+=${end}`,
                scrub: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      };

      updateScroll();
      window.addEventListener("resize", updateScroll);
      return () => window.removeEventListener("resize", updateScroll);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    ref={containerRef}
    className="min-h-screen h-[100dvh] overflow-hidden flex flex-col items-start justify-center relative text-white"
    style={{
      background: 'linear-gradient(to top left, rgba(255, 107, 44, 0.25) 10%, black 40%)'
    }}
  >
  
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-28 text-center w-full ">
        Features We Provide
      </h2>

      {/* Progress Line and Steps */}
      <div className="w-full px-8 mb-10 relative">
        <div className="relative h-2 bg-white/20 rounded">
          <div
            ref={progressBarRef}
            className="absolute h-2 bg-orange-500 top-0 left-0 rounded"
            style={{ width: "0%" }}
          />
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between">
            {features.map((_, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black text-xs font-bold border-2 border-orange-500 transition-transform"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={cardsWrapperRef}
        className="flex gap-8 px-8 will-change-transform"
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="min-w-[300px] h-[250px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 text-white flex flex-col items-center justify-center text-center transition-transform duration-200 hover:scale-105"
          >
            <div className="mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
            <p className="text-xs text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
