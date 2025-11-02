'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [bulletStyle, setBulletStyle] = useState({ left: 0 })

  const linkRefs = {
    '/': useRef<HTMLAnchorElement>(null),
    '/about': useRef<HTMLAnchorElement>(null),
    '/experience': useRef<HTMLAnchorElement>(null),
    '/achievements': useRef<HTMLAnchorElement>(null),
    '/projects': useRef<HTMLAnchorElement>(null),
    '/contact': useRef<HTMLAnchorElement>(null),
  }

  useEffect(() => {
    const activeRef = linkRefs[pathname as keyof typeof linkRefs]?.current
    if (activeRef) {
      const rect = activeRef.getBoundingClientRect()
      const parentRect = activeRef.parentElement!.getBoundingClientRect()
      setBulletStyle({
        // Custom offset (-30) based on your visual alignment
        left: rect.left - parentRect.left + rect.width / 2 - 30,
      })
    }
  }, [pathname])

  return (
    <header className="fixed top-0 w-full bg-transparent border-b border-transparent text-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Brand Name */}
        <Link href="/" className="text-xl font-bold whitespace-nowrap">IqraDev</Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden md:flex space-x-8 items-center">
          <Link
            ref={linkRefs['/']}
            href="/"
            className={`relative transition-colors ${
              pathname === '/' ? 'text-pink-500 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            ref={linkRefs['/about']}
            href="/about"
            className={`relative transition-colors ${
              pathname === '/about' ? 'text-pink-500 font-semibold' : ''
            }`}
          >
            About
          </Link>
          <Link
            ref={linkRefs['/experience']}
            href="/experience"
            className={`relative transition-colors ${
              pathname === '/experience' ? 'text-pink-500 font-semibold' : ''
            }`}
          >
            Experience
          </Link>
          <Link
            ref={linkRefs['/achievements']}
            href="/achievements"
            className={`relative transition-colors ${
              pathname === '/achievements' ? 'text-pink-500 font-semibold' : ''
            }`}
          >
            Achievements
          </Link>
          <Link
            ref={linkRefs['/projects']}
            href="/projects"
            className={`relative transition-colors ${
              pathname === '/projects' ? 'text-pink-500 font-semibold' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            ref={linkRefs['/contact']}
            href="/contact"
            className={`relative transition-colors ${
              pathname === '/contact' ? 'text-pink-500 font-semibold' : ''
            }`}
          >
            Contact
          </Link>

          {/* Dot under active item */}
          <div
            className="absolute -bottom-2 h-2 w-2 bg-pink-500 rounded-full transition-all duration-300"
            style={{ left: bulletStyle.left }}
          />
        </nav>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/experience" className="block">Experience</Link>
          <Link href="/achievements" className="block">Achievements</Link>
          <Link href="/projects" className="block">Projects</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  )
}
