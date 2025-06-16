'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-70 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">Casa Frida</Link>
      </h1>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-black md:static md:block md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
          <li>
            <Link href="/latidos" className="hover:underline">
              Latidos (Lounge)
            </Link>
          </li>
          <li>
            <Link href="/corazon" className="hover:underline">
              Corazón D' Petra
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:underline">
              All Events
            </Link>
          </li>
          <li>
            <Link href="/my-reservations" className="hover:underline">
              My Reservations
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
