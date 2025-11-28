'use client'

import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [bulletStyle, setBulletStyle] = useState({ left: 0 })

  const linkRefs = {
    home: useRef<HTMLAnchorElement>(null),
    about: useRef<HTMLAnchorElement>(null),
    experience: useRef<HTMLAnchorElement>(null),
    achievements: useRef<HTMLAnchorElement>(null),
    projects: useRef<HTMLAnchorElement>(null),
    contact: useRef<HTMLAnchorElement>(null),
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'achievements', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update bullet position when active section changes
  useEffect(() => {
    const activeRef = linkRefs[activeSection as keyof typeof linkRefs]?.current
    if (activeRef) {
      const rect = activeRef.getBoundingClientRect()
      const parentRect = activeRef.parentElement!.getBoundingClientRect()
      setBulletStyle({
        left: rect.left - parentRect.left + rect.width / 2 - 30,
      })
    }
  }, [activeSection])

  return (
    <header className="fixed top-0 w-full bg-transparent border-b border-transparent text-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Brand Name */}
        <button onClick={() => scrollToSection('home')} className="text-xl font-bold whitespace-nowrap cursor-pointer">
          IqraDev
        </button>

        {/* Desktop Navigation */}
        <nav className="relative hidden md:flex space-x-8 items-center">
          <a
            ref={linkRefs.home}
            onClick={() => scrollToSection('home')}
            className={`relative transition-colors cursor-pointer ${
              activeSection === 'home' ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            Home
          </a>
          <a
            ref={linkRefs.about}
            onClick={() => scrollToSection('about')}
            className={`relative transition-colors cursor-pointer ${
              activeSection === 'about' ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            About
          </a>
          <a
            ref={linkRefs.experience}
            onClick={() => scrollToSection('experience')}
            className={`relative transition-colors cursor-pointer ${
              activeSection === 'experience' ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            Experience
          </a>
          <a
            ref={linkRefs.achievements}
            onClick={() => scrollToSection('achievements')}
            className={`relative transition-colors cursor-pointer ${
              activeSection === 'achievements' ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            Achievements
          </a>
          <a
            ref={linkRefs.projects}
            onClick={() => scrollToSection('projects')}
            className={`relative transition-colors cursor-pointer ${
              activeSection === 'projects' ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            Projects
          </a>
          <a
            ref={linkRefs.contact}
            onClick={() => scrollToSection('contact')}
            className={`relative transition-colors cursor-pointer ${
              activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            Contact
          </a>

          {/* Dot under active item */}
          <div
            className="absolute -bottom-2 h-2 w-2 bg-white rounded-full transition-all duration-300"
            style={{ left: bulletStyle.left }}
          />
        </nav>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-black/90 p-4 rounded-lg">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2">About</button>
          <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2">Experience</button>
          <button onClick={() => scrollToSection('achievements')} className="block w-full text-left py-2">Achievements</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">Contact</button>
        </div>
      )}
    </header>
  )
}
