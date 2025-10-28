'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'DermaDiagnostics',
    description: 'AI-powered skin disease classification system using CNNs and advanced image preprocessing achieving 92% accuracy.',
    tech: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
    github: 'https://github.com/iqraazam',
    category: 'AI'
  },
  {
    title: 'Stylique - AI Fashion Advisor',
    description: 'Modern styling web app offering personalized outfit suggestions using real-time AI and machine learning models.',
    tech: ['Next.js', 'Node.js', 'Supabase', 'AI/ML'],
    github: 'https://github.com/iqraazam',
    category: 'AI'
  },
  {
    title: 'Face Spoof Detection System',
    description: 'Security model using Vision Transformers and Contrastive Pretraining to prevent facial recognition spoof attacks.',
    tech: ['Python', 'ViT', 'Transformers', 'PyTorch'],
    github: 'https://github.com/iqraazam',
    category: 'AI'
  },
  {
    title: 'Social Media Platform',
    description: 'Full-featured social app with real-time messaging, news feeds, profiles, and scalable backend architecture.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/iqraazam',
    category: 'Flutter'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-gradient-to-br from-black via-purple-950 to-black text-white min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-40 right-20 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.03, 
                y: -12,
                rotateX: 2,
                rotateY: 2
              }}
              className="glass-card-3d p-8 text-left group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.h3 
                  className="text-2xl font-bold text-purple-200 group-hover:text-pink-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {proj.title}
                </motion.h3>
                <motion.span 
                  className="px-3 py-1 bg-purple-600/40 text-xs rounded-full text-purple-100 border border-purple-400/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {proj.category}
                </motion.span>
              </div>
              
              <p className="text-sm text-purple-100 mb-6 leading-relaxed">{proj.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((tech, j) => (
                  <motion.span
                    key={j}
                    className="px-3 py-1 bg-purple-800/40 text-xs rounded-full text-purple-100 border border-purple-400/20"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <Link
                href={proj.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold group/link"
              >
                <motion.svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </motion.svg>
                <span className="group-hover/link:translate-x-1 transition-transform inline-block">View on GitHub →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
