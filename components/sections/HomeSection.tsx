'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Typed from 'typed.js'
import Link from 'next/link'

const hobbies = [
  {
    title: 'AI + ML 🧠',
    description: 'I love training deep learning models and building smart, data-driven systems that solve real-world problems.'
  },
  {
    title: '3D Design 🎮',
    description: 'Exploring WebGL, Three.js, and immersive UI to create stunning, interactive experiences.'
  },
  {
    title: 'UI/UX ✨',
    description: 'Crafting interfaces that are not just beautiful but also intuitive and user-focused.'
  },
  {
    title: 'Problem Solving 🧩',
    description: 'Enjoy breaking down complex challenges into elegant, optimized solutions — especially in real-world apps.'
  }
]

const languages = [
  'JavaScript', 'TypeScript', 'Python', 'Dart', 'C#',
  'HTML', 'CSS', 'React', 'Next.js', 'Angular',
  'Flutter', 'Node.js', 'Nest.js', 'Express.js', '.NET',
  'MongoDB', 'Firebase', 'Supabase', 'SQL', 'TensorFlow',
  'PyTorch', 'Scikit-learn', 'Keras', 'Unity', 'Figma'
]

export default function HomeSection() {
  const typedEl = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        'Full Stack Developer 💻',
        'AI/ML Engineer 🤖',
        'Creative Problem Solver ✨',
        'Lover of Glassmorphism 💎'
      ],
      typeSpeed: 40,
      backSpeed: 25,
      loop: true
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 bg-gradient-to-br from-black via-purple-950 to-black overflow-hidden"
    >
      {/* Glowing background blob */}
      <motion.div
        className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-purple-600 blur-3xl opacity-30 animate-pulse"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* Hero content */}
      <motion.div
        className="glass p-10 rounded-xl max-w-3xl border border-purple-400/20 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-4">
          I’m Iqra Azam
        </h1>

        <span
          ref={typedEl}
          className="text-lg md:text-xl text-purple-200 block min-h-[32px]"
        />

        <p className="mt-6 text-sm text-purple-100">
          I design & develop intelligent web and mobile apps using AI & modern frameworks.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link
            href="/projects"
            className="px-6 py-2 rounded-xl border border-purple-500 text-white bg-purple-700/30 hover:bg-purple-700/60 transition backdrop-blur"
          >
            🚀 View Projects
          </Link>
          <a
  href="/assets/IQRA.pdf"
  download="Iqra_Resume.pdf"
  className="px-6 py-2 rounded-xl border border-purple-500 text-white bg-black/30 hover:bg-purple-900/60 transition backdrop-blur"
>
  📄 Download Resume
</a>
        </div>
      </motion.div>

      {/* Interests */}
      <div className="mt-20 max-w-5xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6 text-center">✨ My Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {hobbies.map((hob, index) => (
            <InterestCard key={index} title={hob.title} description={hob.description} />
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-20 max-w-6xl w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">🌐 Tools & Languages I Use</h2>
        <div className="flex flex-wrap gap-3 justify-center px-4">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="px-5 py-2 rounded-full text-sm text-purple-100 bg-purple-800/40 border border-purple-500/30 backdrop-blur transition hover:bg-purple-600/50 shadow-md"
            >
              {lang}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 🔹 Expandable Card for Interests
function InterestCard({ title, description }: { title: string; description: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer rounded-xl p-6 text-white font-medium text-center bg-gradient-to-br from-purple-800/40 to-black/40 border border-purple-400/30 backdrop-blur-xl shadow-lg relative overflow-hidden"
      whileHover={{ scale: 1.03 }}
      initial={false}
      animate={{ height: isOpen ? 'auto' : 'auto' }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-lg font-semibold mb-2">{title}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.p
            key="desc"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-purple-100 mt-2"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
