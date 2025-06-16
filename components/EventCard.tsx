import Link from 'next/link'

type EventProps = {
  id: string
  title: string
  date: string
  price: string | number
  image: string
  description?: string
}

export default function EventCard({ id, title, date, price, image, description }: EventProps) {
  const eventDate = new Date(date)

  const formattedDate = eventDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const formattedTime = eventDate.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  })

  return (
    <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden max-w-xs">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover object-center rounded-t-2xl"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="text-zinc-400 text-sm">
          <p>📅 {formattedDate}</p>
          <p>🕒 {formattedTime}</p>
        </div>
        {description && <p className="text-sm text-white">{description}</p>}
        <p className="text-lg font-semibold text-pink-400 mt-2">${price} USD</p>
        <Link href={`/reserve/${id}`}>
          <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  )
}
