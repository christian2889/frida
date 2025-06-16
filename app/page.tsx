'use client'

import EventCard from '@/components/EventCard'
import Navbar from '@/components/Navbar'

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
      </section>

      {/* Events section */}
      <section id="events" className="bg-black text-white p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="bg-white text-black p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">Email: info@casafridaevents.com</p>
        <p>Instagram: @CasaFridaEvents</p>
      </section>
    </>
  )
}
