'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const dynamic = 'force-dynamic'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const [sessionId, setSessionId] = useState<string | null>(null)

  useEffect(() => {
    const id = searchParams.get('session_id')
    setSessionId(id)
  }, [searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Reservation Complete</h1>
        <p className="text-lg">Thank you for your reservation.</p>
        {sessionId && (
          <p className="mt-2 text-sm opacity-70">Session ID: {sessionId}</p>
        )}
      </div>
    </div>
  )
}
