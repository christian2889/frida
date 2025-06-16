import { createClient } from '@/utils/supabase/server'
import EventCard from '@/components/EventCard'

export default async function LatidosPage() {
  const supabase = createClient()

  const { data: events, error } = await supabase
    .from('events')
    .select('id, title, date, price, image, description')
    .eq('category', 'latidos')
    .eq('published', true)
    .order('date', { ascending: true })

  if (error) {
    console.error('Error fetching events:', error.message)
    return <p className="text-red-500">Error loading events.</p>
  }

  if (!events || events.length === 0) {
    return <p className="text-white text-center mt-10">No events found for Latidos.</p>
  }

  return (
    <section className="min-h-screen bg-black text-white p-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          price={event.price}
          image={event.image}
          description={event.description}
        />
      ))}
    </section>
  )
}
