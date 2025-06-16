'use client'

import { useParams } from 'next/navigation'
import ReservationForm from '@/components/ReservationForm'

export default function ReservePage() {
  const { eventId } = useParams()

  if (!eventId || typeof eventId !== 'string') {
    return <p className="text-center mt-10 text-red-500">Invalid event ID</p>
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Reserve Your Spot</h1>
      <ReservationForm eventId={eventId} />
    </div>
  )
}
