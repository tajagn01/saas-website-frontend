import React from "react"

export default function Header() {
  return (
    <header className="bg-black py-6 px-4 relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/src/assets/kH4osWoEMFaxAoLTDAHn3JScM.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-white">Harvest<span className="text-xs align-top ml-1">&#174;</span></span>
        </div>
        <nav className="hidden md:flex gap-8 text-white font-medium text-base">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Crops</a>
          <a href="#" className="hover:underline">Guide</a>
        </nav>
        <button className="px-4 py-2 bg-black text-white rounded font-semibold text-sm hover:bg-gray-900">Menu</button>
      </div>
    </header>
  )
} 