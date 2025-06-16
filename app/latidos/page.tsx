'use client'

import EventCard from '@/components/EventCard'
import Navbar from '@/components/Navbar'

export default function LatidosPage() {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white p-10 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-8">Latidos – Rooftop Events</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <EventCard
            title="DJ Rooftop Party"
            date="July 20, 2025 – 7:00 PM"
            price="$30 USD"
            image="https://source.unsplash.com/400x300/?rooftop,dj"
          />
          <EventCard
            title="Electronic Vibes"
            date="August 3, 2025 – 9:00 PM"
            price="$40 USD"
            image="https://source.unsplash.com/400x300/?dance,night"
          />
        </div>
      </section>
    </>
  )
}
