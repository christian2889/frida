import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/utils/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  const { sessionId } = await req.json()

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session ID' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)

  const { name, email, eventId, quantity } = session.metadata as {
    name: string
    email: string
    eventId: string
    quantity: string
  }

  const { error } = await supabase.from('reservations').insert([
    {
      name,
      email,
      event_id: eventId,
      quantity: parseInt(quantity),
    },
  ])

  if (error) {
    return NextResponse.json({ error: 'Failed to save reservation' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
