'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-70 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Casa Frida</h1>

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
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <a href="#events" className="hover:underline">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <Link href="/my-reservations" className="hover:underline">
              My Reservations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
