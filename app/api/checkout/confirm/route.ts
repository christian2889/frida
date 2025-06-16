import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// ✅ Inicializa Supabase usando claves desde Vercel
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, quantity, eventId } = body

  if (!name || !email || !quantity || !eventId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabase.from('reservations').insert([
    {
      name,
      email,
      quantity,
      event_id: eventId,
    },
  ])

  if (error) {
    console.error('❌ Supabase insert error:', error)
    return NextResponse.json({ error: 'Failed to save reservation' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Reservation confirmed and saved' }, { status: 200 })
}
