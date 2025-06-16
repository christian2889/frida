'use client'

import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/videos/latidos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col items-center justify-center h-full px-6 text-center text-white bg-black/50">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-pink-500">Casa Frida</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Two worlds. One experience. Rooftop Lounge & Fine Dining in Baja California.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link
              href="/latidos"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full"
            >
              Enter Latidos
            </Link>
            <Link
              href="/corazon"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full"
            >
              Explore Corazón D' Petra
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
