'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaHeart, FaLanguage, FaDownload } from 'react-icons/fa'
import SilverCard from '@/components/common/SilverCard'

export default function HomeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gridRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  // narrow types for inner functions
  const canvasEl = canvas as HTMLCanvasElement
  const ctx2 = ctx as CanvasRenderingContext2D

    // Use devicePixelRatio for crisp rendering on high-DPI displays
    const dpr = Math.max(window.devicePixelRatio || 1, 1)
    let animationId: number | null = null
    let running = true

    function resizeCanvas() {
      const w = window.innerWidth
      const h = window.innerHeight
      canvasEl.style.width = `${w}px`
      canvasEl.style.height = `${h}px`
      canvasEl.width = Math.floor(w * dpr)
      canvasEl.height = Math.floor(h * dpr)
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // Create particles adaptively based on viewport area
    type Particle = { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }
    let particles: Particle[] = []
    function createParticles() {
      particles = []
      const area = window.innerWidth * window.innerHeight
      // base count scaled by viewport; clamp to reasonable bounds
      const base = (area / (1366 * 768)) * 60
      const count = Math.max(30, Math.min(120, Math.floor(base)))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * (dpr > 1 ? 1.8 : 1.6),
          speedX: (Math.random() - 0.5) * (0.6 + Math.random() * 0.6),
          speedY: (Math.random() - 0.5) * (0.6 + Math.random() * 0.6),
          opacity: 0.2 + Math.random() * 0.8,
        })
      }
    }

    resizeCanvas()
    createParticles()

    // Skip frames to reduce CPU on lower-end devices (renders ~30fps)
    let frame = 0
    function animate() {
      if (!running) return
      animationId = requestAnimationFrame(animate)
      frame++
      if (frame % 2 !== 0) return // simple frame-skip

      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height)
      const w = window.innerWidth
      const h = window.innerHeight
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        ctx2.fillStyle = `rgba(168, 85, 247, ${p.opacity})`
        ctx2.beginPath()
        ctx2.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx2.fill()
      }
    }

    // Pause animation when canvas is not visible to save CPU
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!running) {
              running = true
              frame = 0
              animate()
            }
          } else {
            running = false
            if (animationId) cancelAnimationFrame(animationId)
            animationId = null
          }
        })
      },
      { threshold: 0.01 }
    )
    observer.observe(canvas)

    // handle resize with debounce
    let resizeTimer: any = null
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        resizeCanvas()
        createParticles()
      }, 120)
    }
    window.addEventListener('resize', handleResize)

    // Start animation
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      running = false
      if (animationId) cancelAnimationFrame(animationId)
      clearTimeout(resizeTimer)
    }
  }, [])

  // 3D perspective grid background (low-cost)
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const ctx = grid.getContext('2d')
    if (!ctx) return

    // narrow types
    const gridEl = grid as HTMLCanvasElement
    const ctx2 = ctx as CanvasRenderingContext2D

    const dpr = Math.max(window.devicePixelRatio || 1, 1)
    let animId: number | null = null
    let running = true

    function resize() {
      const w = window.innerWidth
      const h = window.innerHeight
      gridEl.style.width = `${w}px`
      gridEl.style.height = `${h}px`
      gridEl.width = Math.floor(w * dpr)
      gridEl.height = Math.floor(h * dpr)
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    // grid parameters
    let offset = 0
    const speed = 0.6 // lower speed for subtle movement

    function drawGrid() {
      if (!running) return
      animId = requestAnimationFrame(drawGrid)
      const w = gridEl.width / dpr
      const h = gridEl.height / dpr
      ctx2.clearRect(0, 0, w, h)

      // vanishing point slightly above center
      const vpX = w / 2
      const vpY = h * 0.45

      ctx2.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx2.lineWidth = 1

      const rows = 18
      const cols = 24

      // horizontal lines (perspective)
      for (let i = 0; i < rows; i++) {
        const t = (i + offset) / rows
        const y = vpY + (h - vpY) * Math.pow(t, 1.6)
        ctx2.beginPath()
        const steps = 60
        for (let s = 0; s <= steps; s++) {
          const x = (s / steps) * w
          const px = vpX + (x - vpX) * (1 - t)
          if (s === 0) ctx2.moveTo(px, y)
          else ctx2.lineTo(px, y)
        }
        ctx2.stroke()
      }

      // vertical lines converging to VP
      for (let j = 0; j < cols; j++) {
        const x = (j / (cols - 1)) * w
        ctx2.beginPath()
        ctx2.moveTo(x, h)
        ctx2.lineTo(vpX, vpY)
        ctx2.stroke()
      }

      offset += speed * 0.002
      if (offset > 1) offset -= 1
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!running) {
              running = true
              drawGrid()
            }
          } else {
            running = false
            if (animId) cancelAnimationFrame(animId)
            animId = null
          }
        })
      },
      { threshold: 0.01 }
    )
    observer.observe(gridEl)

    window.addEventListener('resize', resize)
    drawGrid()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
      running = false
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 overflow-hidden">
      {/* Background layers */}
      <canvas ref={gridRef} className="absolute inset-0 -z-20 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />
      <motion.div className="absolute -z-10 w-[600px] h-[600px] rounded-full bg-gray-600 blur-3xl opacity-20" animate={{ scale: [1, 1.2, 1], x: [-50, 50, -50], y: [-50, 50, -50] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute -z-10 w-[400px] h-[400px] rounded-full bg-gray-400 blur-3xl opacity-20" animate={{ scale: [1.2, 1, 1.2], x: [50, -50, 50], y: [50, -50, 50] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div 
        className="glass-card-3d p-12 rounded-2xl max-w-4xl w-full relative"
        initial={{ opacity: 0, y: 50, rotateX: 10 }} 
        animate={{ opacity: 1, y: 0, rotateX: 0 }} 
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-300/10 rounded-2xl blur-xl -z-10" />
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 50%, #ffffff 100%)',
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
          className="text-xl md:text-2xl text-gray-300 mb-6 font-light" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI Engineer & Full Stack Developer
        </motion.p>
        
        <motion.p 
          className="text-md md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto" 
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
          <span className="text-gray-300 font-medium flex items-center gap-2">
            <FaBriefcase className="text-gray-400" />
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
          <SilverCard delay={100}>
            <motion.div 
              className="glass-card p-4 rounded-xl text-left"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGraduationCap className="text-gray-400 text-xl" />
                <h3 className="text-gray-300 font-semibold">Education</h3>
              </div>
              <div className="text-sm text-gray-200 space-y-1">
                <p>🎓 BS CS (Robotics & AI) - FAST NUCES Lahore (2021-2025)</p>
                <p>📚 Pre-Engineering - Punjab College (2018-2021)</p>
                <p>📖 Pre-Medical - Divisional Public School (2006-2018)</p>
              </div>
            </motion.div>
          </SilverCard>

          {/* Languages */}
          <SilverCard delay={200}>
            <motion.div 
              className="glass-card p-4 rounded-xl text-left"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaLanguage className="text-gray-400 text-xl" />
                <h3 className="text-gray-300 font-semibold">Languages</h3>
              </div>
              <div className="text-sm text-gray-200 space-y-1">
                <p>🗣️ Urdu (Native)</p>
                <p>🗣️ English (Fluent)</p>
              </div>
            </motion.div>
          </SilverCard>

          {/* Hobbies */}
          <SilverCard delay={300}>
            <motion.div 
              className="glass-card p-4 rounded-xl text-left"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaHeart className="text-gray-400 text-xl" />
                <h3 className="text-gray-300 font-semibold">Hobbies</h3>
              </div>
              <div className="text-sm text-gray-200 space-y-1">
                <p>✍️ Writing</p>
                <p>📚 Reading</p>
                <p>🎨 Crafting</p>
              </div>
            </motion.div>
          </SilverCard>

          {/* Connect */}
          <SilverCard delay={400}>
            <motion.div 
              className="glass-card p-4 rounded-xl text-left"
              whileHover={{ scale: 1.05, y: -5 }}
            >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-400 text-xl">🔗</span>
              <h3 className="text-gray-300 font-semibold">Connect</h3>
            </div>
            <div className="flex gap-4 text-2xl">
              <motion.a
                href="https://github.com/iqraazam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotateZ: 10 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/iqraa-aazam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotateZ: -10 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
            </motion.div>
          </SilverCard>
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
            <a href="/IQRA.pdf" download className="btn-primary-3d px-8 py-3 rounded-xl text-white font-semibold inline-flex items-center gap-2">
              <FaDownload /> Download Resume
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotateZ: 2 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="btn-primary-3d px-8 py-3 rounded-xl text-white font-semibold inline-block">
              ✉️ Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
