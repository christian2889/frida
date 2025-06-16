'use client'

import Navbar from '@/components/Navbar'

export default function CorazonPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white text-black p-10">
        <h1 className="text-4xl font-bold mb-6">Corazón D’ Petra Restaurant</h1>
        <p className="mb-6 max-w-2xl">
          Savor the flavors of Casa Frida at Corazón D’ Petra – a culinary journey through Baja’s finest wine and gastronomy.
        </p>

        {/* Aquí irán los eventos o reservaciones del restaurante */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* <EventCard ... /> */}
        </div>
      </section>
    </>
  )
}
