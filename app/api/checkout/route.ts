import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/utils/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20', // ✅ asegúrate que sea esta versión
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { eventId, quantity, name, email } = body

  if (!eventId || !quantity || !name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data: event, error } = await supabase
    .from('events')
    .select('title, price')
    .eq('id', eventId)
    .single()

  if (error || !event) {
    return NextResponse.json({ error: 'Event not found' }, { status: 404 })
  }

  const totalPrice = event.price * quantity

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: event.title,
          },
          unit_amount: Math.round(totalPrice * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserve/${eventId}`,
    customer_email: email,
    metadata: {
      name,
      quantity,
      eventId,
    },
  })

  return NextResponse.json({ url: session.url })
}
