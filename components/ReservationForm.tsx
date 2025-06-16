'use client'

import { useState } from 'react'

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

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId,
          name: form.name,
          email: form.email,
          quantity: form.quantity,
        }),
      })

      const data = await res.json()

      if (data?.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('There was a problem with your reservation. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded text-black"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded text-black"
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded text-black"
        required
      />
      <input
        name="quantity"
        type="number"
        min={1}
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded text-black"
        required
      />
      <textarea
        name="notes"
        placeholder="Notes (optional)"
        value={form.notes}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded text-black"
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
