'use client'

import EventCard from '@/components/EventCard'
import Navbar from '@/components/Navbar'

export default function CorazonPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black p-10 min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-8">Corazón D' Petra – Dining Experiences</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <EventCard
            title="Wine & Jazz Night"
            date="July 12, 2025 – 7:30 PM"
            price="$50 USD"
            image="https://source.unsplash.com/400x300/?wine,restaurant"
          />
          <EventCard
            title="Chef's Table Dinner"
            date="August 5, 2025 – 8:00 PM"
            price="$80 USD"
            image="https://source.unsplash.com/400x300/?gourmet,food"
          />
        </div>
      </section>
    </>
  )
}
