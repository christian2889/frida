'use client'

import EventCard from '@/components/EventCard'

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-pink-500">Casa Frida</span>
        </h1>
        <p className="text-xl max-w-xl mx-auto">
          Where DJs, music, and unforgettable nights come alive in Baja California.
        </p>
      </section>

      <section id="events" className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <EventCard
          title="DJ Sunset Session"
          date="June 29, 2025 – 6:00 PM"
          price="$20 USD"
          image="https://source.unsplash.com/400x300/?dj,party"
        />
        <EventCard
          title="Frida Nights: Wine & Beats"
          date="July 6, 2025 – 8:00 PM"
          price="$35 USD"
          image="https://source.unsplash.com/400x300/?nightclub,lights"
        />
        <EventCard
          title="Electronic Garden"
          date="July 13, 2025 – 5:00 PM"
          price="$25 USD"
          image="https://source.unsplash.com/400x300/?festival,dance"
        />
      </section>
    </main>
  )
}
