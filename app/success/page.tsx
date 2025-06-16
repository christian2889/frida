'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase/client'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    const saveReservation = async () => {
      const sessionId = searchParams.get('session_id')
      if (!sessionId) {
        setStatus('error')
        return
      }

      // 🔍 Llama a tu backend para obtener la sesión y metadata
      const res = await fetch(`/api/checkout/confirm?session_id=${sessionId}`)
      const data = await res.json()

      if (!res.ok || !data || data.error) {
        setStatus('error')
        return
      }

      const { name, email, quantity, eventId } = data

      // 📦 Guarda la reservación en Supabase
      const { error } = await supabase.from('reservations').insert([
        {
          name,
          email,
          quantity,
          event_id: eventId,
          phone: '', // Opcional: puedes usar metadata adicional
          notes: '',
        },
      ])

      if (error) {
        console.error(error)
        setStatus('error')
      } else {
        setStatus('success')
      }
    }

    saveReservation()
  }, [])

  if (status === 'loading') return <p className="text-center mt-20">Verifying payment...</p>
  if (status === 'error') return <p className="text-center text-red-500 mt-20">Something went wrong.</p>

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Reservation Confirmed ✅</h1>
      <p>Thank you! We’ve received your reservation.</p>
    </div>
  )
}
