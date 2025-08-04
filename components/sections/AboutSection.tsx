'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const reviews = [
  {
    name: 'Sarah Malik',
    role: 'Startup Founder',
    review:
      'Iqra delivered beyond expectations. The AI module she built helped us reduce manual work by 60%. Highly recommended!',
  },
  {
    name: 'Adeel Asif',
    role: 'CTO, MedTech',
    review:
      'Her deep learning model and integration were top-notch. We worked in sprints and every milestone was perfectly executed.',
  },
  {
    name: 'Emily Chen',
    role: 'Design Lead',
    review:
      'Working with Iqra was a delight. She blends beautiful UI with powerful backend logic and AI. Would hire again!',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-gradient-to-br from-black via-purple-950 to-black text-white">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-purple-300 mb-8 text-center">About Me</h2>

        <p className="text-purple-100 text-lg leading-relaxed mb-6">
          I'm <span className="text-purple-400 font-semibold">Iqra Azam</span>, a passionate Full Stack Developer and
          AI/ML Engineer based in Lahore, Pakistan. With over 3 years of experience building scalable web and mobile
          applications, I specialize in combining elegant design with intelligent functionality. From working on complex
          neural network models to crafting pixel-perfect UIs, I thrive at the intersection of AI and modern software
          development.
        </p>

        <p className="text-purple-100 text-lg leading-relaxed mb-6">
          My technical arsenal includes <strong>React, Next.js, Flutter, Node.js, TensorFlow, PyTorch</strong> and more.
          Whether it's a startup MVP or a large-scale application, I ensure clean architecture, optimized performance, and
          exceptional user experience.
        </p>

        <p className="text-purple-100 text-lg leading-relaxed mb-6">
          I'm available for freelance, remote, hybrid, or full-time roles. My current freelance rate is
          <span className="text-pink-400 font-semibold"> $25/hr</span> and I typically work
          <span className="text-purple-300 font-semibold"> 20–30 hrs/week</span>.
        </p>

        <h3 className="text-2xl font-semibold text-purple-200 mt-12 mb-4">🌟 Client Reviews</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-purple-800/20 border border-purple-500/20 rounded-xl p-5 backdrop-blur-lg"
            >
              <p className="text-purple-100 text-sm mb-4">“{rev.review}”</p>
              <div className="text-sm font-medium text-purple-300">{rev.name}</div>
              <div className="text-xs text-purple-400">{rev.role}</div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-purple-200 mt-12 mb-4">🔗 Connect With Me</h3>
        <div className="flex flex-wrap gap-6 text-lg justify-center mb-12">
          <Link href="https://github.com/iqraazam" target="_blank" className="hover:text-pink-400 flex items-center gap-2">
            <FaGithub /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/iqraa-aazam/"
            target="_blank"
            className="hover:text-pink-400 flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </Link>
          <Link
            href="https://instagram.com/"
            target="_blank"
            className="hover:text-pink-400 flex items-center gap-2"
          >
            <FaInstagram /> Instagram
          </Link>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-purple-700/30 border border-purple-500 text-white hover:bg-purple-700/50 transition backdrop-blur"
          >
            ✉️ Let’s Work Together
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
