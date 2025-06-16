import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',

})

// Supabase Admin Client (usa tu service_role)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, quantity, eventId } = body

    if (!name || !email || !quantity || !eventId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 🔍 Obtener datos del evento
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('title, price')
      .eq('id', eventId)
      .single()

    if (eventError || !event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    const unitAmount = parseFloat(event.price) * 100 // Stripe usa centavos

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: event.title },
            unit_amount: unitAmount,
          },
          quantity: quantity,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserve/${eventId}`,
      metadata: {
        name,
        email,
        eventId,
        quantity,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('❌ Error in Stripe checkout:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
