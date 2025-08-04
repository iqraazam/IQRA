'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-28 bg-gradient-to-br from-black via-purple-950 to-black text-white"
    >
      <motion.div
        className="max-w-2xl w-full glass p-10 rounded-2xl border border-purple-500/20 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-purple-300 mb-6 text-center">📬 Contact Me</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-1 text-purple-200">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-xl bg-purple-800/20 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-purple-200">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-purple-800/20 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-purple-200">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-2 rounded-xl bg-purple-800/20 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-2 bg-purple-600/30 border border-purple-500 rounded-xl hover:bg-purple-700/50 transition text-white backdrop-blur"
            >
              🚀 Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-sm text-purple-300">
          Or email me directly at:
          <br />
          <a href="mailto:azamiqra178@gmail.com" className="text-pink-400 hover:underline">
            azamiqra178@gmail.com
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-xl text-purple-200">
          <Link href="https://github.com/iqraazam" target="_blank" className="hover:text-pink-400">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/iqraa-aazam/" target="_blank" className="hover:text-pink-400">
            <FaLinkedin />
          </Link>
          <Link href="https://instagram.com/" target="_blank" className="hover:text-pink-400">
            <FaInstagram />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
