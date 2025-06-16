'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="text-white text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Reservation Confirmed!</h1>
      <p>Session ID: {sessionId}</p>
    </div>
  )
}
export const dynamic = 'force-dynamic'


export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="text-white text-center">Loading...</p>}>
      <SuccessContent />
    </Suspense>
  )
}
