'use client'

import EventCard from '@/components/EventCard'

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero section with background video */}
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

        <div className="flex flex-col items-center justify-center h-full px-6 text-center text-white bg-black/60">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-pink-500">Casa Frida</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Music. Energy. Art. A unique DJ experience in Baja California.
          </p>
          <a
            href="#events"
            className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full"
          >
            View Events
          </a>
        </div>
      </section>

      {/* Events section */}
      <section
        id="events"
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-12"
      >
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
