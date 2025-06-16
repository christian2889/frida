import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/utils/supabase/admin'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { sessionId } = body

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session ID' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    const { name, email, eventId, quantity } = session.metadata || {}

    const { error } = await supabaseAdmin.from('reservations').insert([
      {
        name,
        email,
        event_id: eventId,
        quantity: parseInt(quantity || '1'),
      },
    ])

    if (error) {
      console.error('❌ Error saving reservation:', error)
      return NextResponse.json({ error: 'Failed to save reservation' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Reservation confirmed' })
  } catch (error) {
    console.error('❌ Stripe session error:', error)
    return NextResponse.json({ error: 'Failed to confirm session' }, { status: 500 })
  }
}
