'use client'

import { useState } from 'react'
import { supabase } from '@/utils/supabase/client'

interface ReservationFormProps {
  eventId: string
}

export default function ReservationForm({ eventId }: ReservationFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from('reservations').insert([
      {
        ...form,
        event_id: eventId,
        quantity: parseInt(form.quantity.toString()),
      },
    ])

    setLoading(false)

    if (error) {
      alert('Error creating reservation')
      console.error(error)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return <p className="text-green-500 text-center">Reservation confirmed!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        name="quantity"
        type="number"
        min={1}
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />
      <textarea
        name="notes"
        placeholder="Notes (optional)"
        value={form.notes}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded w-full"
      >
        {loading ? 'Sending...' : 'Reserve'}
      </button>
    </form>
  )
}
