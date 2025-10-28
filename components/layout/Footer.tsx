'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full mt-20 py-8 px-4 bg-gradient-to-r from-purple-900/30 to-black/30 backdrop-blur-md border-t border-purple-500/20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-6 text-2xl">
            <Link href="https://github.com/iqraazam" target="_blank" className="hover:text-pink-400 transition-colors">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/iqraa-aazam/" target="_blank" className="hover:text-pink-400 transition-colors">
              <FaLinkedin />
            </Link>
            <Link href="https://instagram.com/" target="_blank" className="hover:text-pink-400 transition-colors">
              <FaInstagram />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Iqra Azam</span>. All rights reserved.
            <div className="mt-1 text-xs text-purple-300">
              Designed & Built by Iqra Azam
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-sm text-center md:text-right">
            Built with <span className="text-purple-300 font-semibold">Next.js</span> + <span className="text-purple-300 font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
