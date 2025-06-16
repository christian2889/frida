'use client'

import EventCard from '@/components/EventCard'
import Navbar from '@/components/Navbar'

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white p-10 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-8">All Upcoming Events</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-pink-500">Latidos</h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="DJ Rooftop Party"
              date="July 20, 2025 – 7:00 PM"
              price="$30 USD"
              image="https://source.unsplash.com/400x300/?rooftop,dj"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">Corazón D' Petra</h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Wine & Jazz Night"
              date="July 12, 2025 – 7:30 PM"
              price="$50 USD"
              image="https://source.unsplash.com/400x300/?wine,dining"
            />
          </div>
        </div>
      </section>
    </>
  )
}
