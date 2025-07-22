import React, { useEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const LiveMetricsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const chartRefs = useRef([]);
  const headlineRef = useRef(null);
  const buttonsRef = useRef(null);

  const revenueData = [
    { time: '09:00', value: 2400 },
    { time: '12:00', value: 3200 },
    { time: '15:00', value: 2800 },
    { time: '18:00', value: 3800 },
    { time: '21:00', value: 4200 },
    { time: '24:00', value: 4800 }
  ];

  const sessionData = [
    { hour: '18', sessions: 45 },
    { hour: '19', sessions: 62 },
    { hour: '20', sessions: 38 },
    { hour: '21', sessions: 75 },
    { hour: '22', sessions: 52 },
    { hour: '23', sessions: 68 }
  ];

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    document.head.appendChild(script2);

    script2.onload = () => {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      if (headlineRef.current) {
        tl.fromTo(headlineRef.current, 
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      if (buttonsRef.current) {
        tl.fromTo(buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      tl.fromTo(cardsRef.current,
        { opacity: 0, y: 40, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.2"
      );

      // Animate chart cards from left and right with ease-in
      if (chartRefs.current[0]) {
        gsap.fromTo(chartRefs.current[0],
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.in",
            scrollTrigger: {
              trigger: chartRefs.current[0],
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (chartRefs.current[1]) {
        gsap.fromTo(chartRefs.current[1],
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.in",
            scrollTrigger: {
              trigger: chartRefs.current[1],
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      setTimeout(() => {
        const linePath = document.querySelector('.recharts-line-curve');
        if (linePath) {
          const pathLength = linePath.getTotalLength();
          gsap.set(linePath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
          gsap.to(linePath, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: linePath,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          });
        }

        const bars = document.querySelectorAll('.recharts-bar-rectangle rect');
        bars.forEach((bar, index) => {
          gsap.fromTo(bar,
            { scaleY: 0, transformOrigin: "bottom" },
            {
              scaleY: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "bounce.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 95%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }, 500);
    };

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);


  return (
    <section
    ref={sectionRef}
    className="relative py-10 px-6 md:px-12 text-white"
    style={{
      background: 'linear-gradient(to bottom left, rgba(255, 107, 44, 0.25) 10%, black 40%)'
    }}
  >
  


      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-orange-500 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -z-10"></div>
      <div className="max-w-7xl mx-auto">
        <div ref={headlineRef} className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Live Metrics at a Glance</h2>
          <p className="text-gray-300">Track revenue, users, and engagement in real-time with our intuitive dashboard.</p>
        </div>
        <div ref={buttonsRef} className="flex justify-center gap-4 mb-16">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Try Dashboard</button>
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Explore Features</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <DollarSign className="w-6 h-6" />, title: "Revenue Today", value: "$12.4K", change: "+5.2%" },
            { icon: <Users className="w-6 h-6" />, title: "Active Users", value: "1,245", change: "+3.8%" },
            { icon: <TrendingUp className="w-6 h-6" />, title: "Conversion Rate", value: "8.3%", change: "-1.1%" },
            { icon: <Activity className="w-6 h-6" />, title: "Live Sessions", value: "273", change: "+2.5%" }
          ].map((metric, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="bg-zinc-800 p-6 rounded-2xl shadow-md flex flex-col items-start"
            >
              <div className="mb-2 text-orange-400">{metric.icon}</div>
              <p className="text-sm text-gray-400 mb-1">{metric.title}</p>
              <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
              <p className="text-sm text-green-400">{metric.change}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div ref={el => chartRefs.current[0] = el} className="bg-zinc-800 p-6 rounded-2xl shadow-md">
            <h4 className="text-lg font-semibold mb-4">Revenue Trend</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={revenueData}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, dy: 8 }} />
                <YAxis hide />
                <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div ref={el => chartRefs.current[1] = el} className="bg-zinc-800 p-6 rounded-2xl shadow-md">
            <h4 className="text-lg font-semibold mb-4">Live Sessions</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sessionData}>
                <XAxis
                  dataKey="hour"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(hour) => `${hour}:00`}
                  tick={{ fill: '#9CA3AF', fontSize: 12, dy: 8 }}
                />
                <YAxis hide />
                <Bar dataKey="sessions" fill="#f97316" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetricsSection;
