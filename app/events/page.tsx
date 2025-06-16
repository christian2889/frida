import { createClient } from '@/utils/supabase/server'
import EventCard from '@/components/EventCard'

export default async function EventsPage() {
  const supabase = createClient()
  const { data: events } = await supabase
    .from('events')
    .select('*')
    .eq('published', true)
    .eq('category', 'latidos') // cambia a 'corazon' si es para Corazón D' Petra
    .order('date', { ascending: true })

  return (
    <div className="p-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {events?.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          price={event.price}
          image={event.image}
        />
      ))}
    </div>
  )
}
