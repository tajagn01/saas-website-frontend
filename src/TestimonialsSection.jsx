import React from "react"

const testimonials = [
  {
    quote: "Thanks to SAAA, my harvest doubled! I'm now able to send my children to school.",
    name: "S. Patel",
    role: "Farmer, long-timer",
  },
  {
    quote: "Modern tools from SAAA improved soil health and my profits.",
    name: "P. Beni",
    role: "SAAA Farmer",
  },
  {
    quote: "Through Tajgan's guidance, applying for SAAA was easy and stress-free!",
    name: "A. Mehra",
    role: "Young Grower",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white font-bold text-2xl mb-8 text-center">Stories from the Field</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow text-white flex flex-col">
              <div className="mb-4 italic text-gray-300">"{t.quote}"</div>
              <div className="font-bold text-sm mt-auto text-white">{t.name}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 