import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/utils/supabase/admin'

// POST: guarda reserva después de pago exitoso
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, quantity, eventId, sessionId } = body

  if (!name || !email || !quantity || !eventId || !sessionId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const { error } = await supabaseAdmin.from('reservations').insert([
      {
        name,
        email,
        quantity,
        event_id: eventId,
        stripe_session_id: sessionId,
      },
    ])

    if (error) {
      console.error('❌ Supabase insert error:', error)
      return NextResponse.json({ error: 'Error saving reservation' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ Unexpected error:', err)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
