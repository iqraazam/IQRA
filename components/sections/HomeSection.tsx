'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaHeart, FaLanguage } from 'react-icons/fa'

export default function HomeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random()
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
        ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 bg-gradient-to-br from-black via-purple-950 to-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />
      <motion.div className="absolute -z-10 w-[600px] h-[600px] rounded-full bg-purple-600 blur-3xl opacity-20" animate={{ scale: [1, 1.2, 1], x: [-50, 50, -50], y: [-50, 50, -50] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute -z-10 w-[400px] h-[400px] rounded-full bg-pink-600 blur-3xl opacity-20" animate={{ scale: [1.2, 1, 1.2], x: [50, -50, 50], y: [50, -50, 50] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div 
        className="glass-card-3d p-12 rounded-2xl max-w-4xl w-full relative"
        initial={{ opacity: 0, y: 50, rotateX: 10 }} 
        animate={{ opacity: 1, y: 0, rotateX: 0 }} 
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl -z-10" />
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #a855f7 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            paddingBottom: '0.1em'
          }}
        >
          Hi, I&apos;m Iqra Azam
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-purple-200 mb-6 font-light" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI Engineer & Full Stack Developer
        </motion.p>
        
        <motion.p 
          className="text-md md:text-lg text-purple-100 mb-6 max-w-2xl mx-auto" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building intelligent digital solutions that scale.
        </motion.p>

        {/* Availability Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-green-500 rounded-full"
          />
          <span className="text-purple-200 font-medium flex items-center gap-2">
            <FaBriefcase className="text-pink-400" />
            Open for Freelance Work
          </span>
        </motion.div>

        {/* Quick Info Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Education */}
          <motion.div 
            className="glass-card p-4 rounded-xl text-left"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-pink-400 text-xl" />
              <h3 className="text-purple-200 font-semibold">Education</h3>
            </div>
            <div className="text-sm text-purple-100 space-y-1">
              <p>🎓 BS CS (Robotics & AI) - FAST NUCES Lahore (2021-2025)</p>
              <p>📚 Pre-Engineering - Punjab College (2018-2021)</p>
              <p>📖 Pre-Medical - Divisional Public School (2006-2018)</p>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="glass-card p-4 rounded-xl text-left"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FaLanguage className="text-pink-400 text-xl" />
              <h3 className="text-purple-200 font-semibold">Languages</h3>
            </div>
            <div className="text-sm text-purple-100 space-y-1">
              <p>🗣️ Urdu (Native)</p>
              <p>🗣️ English (Fluent)</p>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div 
            className="glass-card p-4 rounded-xl text-left"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FaHeart className="text-pink-400 text-xl" />
              <h3 className="text-purple-200 font-semibold">Hobbies</h3>
            </div>
            <div className="text-sm text-purple-100 space-y-1">
              <p>✍️ Writing</p>
              <p>📚 Reading</p>
              <p>🎨 Crafting</p>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div 
            className="glass-card p-4 rounded-xl text-left"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-pink-400 text-xl">🔗</span>
              <h3 className="text-purple-200 font-semibold">Connect</h3>
            </div>
            <div className="flex gap-4 text-2xl">
              <motion.a
                href="https://github.com/iqraazam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.2, rotateZ: 10 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/iqraa-aazam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.2, rotateZ: -10 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex gap-4 justify-center flex-wrap" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.1, rotateZ: 2 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" className="btn-primary-3d px-8 py-3 rounded-xl text-white font-semibold inline-block">
              🚀 View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotateZ: -2 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="btn-primary-3d px-8 py-3 rounded-xl text-white font-semibold inline-block">
              ✉️ Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
