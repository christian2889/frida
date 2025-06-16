'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase/client'

interface EventInfo {
  title: string
}

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    const fetchAndSave = async () => {
      const sessionId = searchParams.get('session_id')
      if (!sessionId) {
        setStatus('error')
        return
      }

      try {
        // Obtener datos del pago desde Stripe (desde tu backend si es necesario)
        const response = await fetch(`/api/stripe-session?session_id=${sessionId}`)
        const session = await response.json()

        if (!session || !session.metadata) {
          throw new Error('Missing session metadata')
        }

        const { name, quantity, eventId, email } = session.metadata

        // Insertar reserva en Supabase
        const { error } = await supabase.from('reservations').insert([
          {
            name,
            email,
            quantity: Number(quantity),
            event_id: eventId,
          },
        ])

        if (error) throw error

        setStatus('success')
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
    }

    fetchAndSave()
  }, [searchParams])

  if (status === 'loading') {
    return <p className="text-center text-white">Processing your reservation...</p>
  }

  if (status === 'error') {
    return <p className="text-center text-red-500">There was a problem confirming your reservation.</p>
  }

  return <p className="text-center text-green-500">Reservation confirmed! 🎉</p>
}
