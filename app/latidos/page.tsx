import { createClient } from '@/utils/supabase/server'
import EventCard from '@/components/EventCard'

export default async function LatidosPage() {
  const supabase = createClient()

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .eq('published', true)
    .eq('category', 'latidos')
    .order('date', { ascending: true })

  if (error) {
    console.error('Error fetching events:', error.message)
    return <p className="text-red-500 text-center">Failed to load events.</p>
  }

  if (!events || events.length === 0) {
    return <p className="text-white text-center mt-10">No events found for Latidos.</p>
  }

  return (
    <section className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          price={event.price}
          image={event.image}
        />
      ))}
    </section>
  )
}
