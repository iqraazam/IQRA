'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import SilverCard from '@/components/common/SilverCard'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('sent')
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setStatus('')
        }, 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 text-white overflow-hidden"
    >
      {/* Floating background orbs */}
      <motion.div 
        className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gray-600/20 blur-3xl"
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-gray-400/20 blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          scale: [1.15, 1, 1.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <SilverCard className="max-w-3xl w-full relative z-10">
        <motion.div
          className="glass-card-3d p-12 rounded-2xl"
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.01 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8 text-center">
          📬 Get In Touch
        </h2>

        <p className="text-center text-gray-200 mb-10 text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2 text-gray-300 font-medium">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/20 border border-gray-500/30 text-white placeholder-gray-400/50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300 font-medium">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/20 border border-gray-500/30 text-white placeholder-gray-400/50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300 font-medium">Message</label>
            <textarea
              rows={6}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 rounded-xl bg-gray-800/20 border border-gray-500/30 text-white placeholder-gray-400/50 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none transition"
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary-3d px-10 py-3 rounded-xl text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === 'sending' ? '📤 Sending...' : status === 'sent' ? '✅ Message Sent!' : status === 'error' ? '❌ Failed - Try Again' : '🚀 Send Message'}
            </motion.button>
          </div>
        </form>

        <div className="mt-12 text-center text-sm text-gray-300">
          Or email me directly at:
          <br />
          <a href="mailto:azamiqra178@gmail.com" className="text-gray-400 hover:underline text-lg font-semibold">
            azamiqra178@gmail.com
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-8 text-3xl text-purple-200">
          <motion.div whileHover={{ scale: 1.2, rotateZ: 10 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://github.com/iqraazam" target="_blank" className="hover:text-pink-400 transition-colors inline-block">
              <FaGithub />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotateZ: -10 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.linkedin.com/in/iqraa-aazam/" target="_blank" className="hover:text-pink-400 transition-colors inline-block">
              <FaLinkedin />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotateZ: 10 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://instagram.com/" target="_blank" className="hover:text-pink-400 transition-colors inline-block">
              <FaInstagram />
            </Link>
          </motion.div>
        </div>
        </motion.div>
      </SilverCard>
    </section>
  )
}
