import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

export async function POST(req: NextRequest) {
  try {
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
      success_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/reserve/${eventId}`,
      customer_email: email,
      metadata: {
        name,
        quantity,
        eventId,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('❌ Stripe checkout error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
