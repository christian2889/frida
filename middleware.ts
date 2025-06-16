import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

// 🔐 Solo protege rutas privadas (las demás son públicas)
export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/((my-reservations|admin|dashboard|checkout).*)',
  ],
}
