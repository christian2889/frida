'use client'

import Navbar from '@/components/Navbar'

export default function LatidosPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold mb-6">Latidos Rooftop Lounge</h1>
        <p className="mb-6 max-w-2xl">
          Discover electrifying nights at Latidos – rooftop DJ sessions, dance, and immersive experiences under the stars.
        </p>

        {/* Aquí irán los eventos específicos de Latidos */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* <EventCard ... /> */}
        </div>
      </section>
    </>
  )
}
