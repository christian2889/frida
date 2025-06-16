import Link from 'next/link'

type EventProps = {
  id: string
  title: string
  date: string
  price: string | number
  image: string
}

export default function EventCard({ id, title, date, price, image }: EventProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden max-w-xs">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-zinc-400">{date}</p>
        <p className="text-lg font-semibold text-pink-400 mt-2">${price} USD</p>
        <Link
          href={`/reserve/${id}`}
          className="mt-4 block w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full text-center"
          aria-label={`Book now for ${title}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
