'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-purple-900/30 backdrop-blur-lg border-b border-purple-500/20 text-white z-50 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">IqraDev</Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/projects" className="block">Projects</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  )
}
