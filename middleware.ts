import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

// Protege solo rutas privadas
export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/my-reservations*',
    '/admin*',
    '/dashboard*',
    '/checkout*',
  ],
}
