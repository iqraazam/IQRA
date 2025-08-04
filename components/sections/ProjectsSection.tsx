'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'DermaDiagnostics',
    description: 'AI-powered skin disease classification system using CNNs and image preprocessing with 92% accuracy.',
    tech: ['Python', 'TensorFlow', 'Deep Learning'],
    link: '#'
  },
  {
    title: 'Stylique',
    description: 'A modern styling web app offering personalized outfit suggestions using real-time AI.',
    tech: ['Next.js', 'Node.js', 'Supabase', 'AI'],
    link: '#'
  },
  {
    title: 'Face Spoof Detection',
    description: 'Security model using Vision Transformers and Contrastive Pretraining to prevent spoof attacks.',
    tech: ['Python', 'ViT', 'Generative AI'],
    link: '#'
  },
  {
    title: 'Social Media Platform',
    description: 'Real-time social app with messaging, feeds, profiles — built for scalability.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#'
  },
  {
    title: 'E-Hospital System',
    description: 'Cross-platform hospital management app with real-time sync and secure login.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    link: '#'
  },
  {
    title: 'Enterprise Job Portal',
    description: 'Feature-rich job portal with search, filtering, and robust backend.',
    tech: ['.NET', 'Next.js', 'REST API'],
    link: '#'
  },
  {
    title: 'Diabetes Prediction Model',
    description: 'Early diabetes detection using CNN & ANN with high precision analytics.',
    tech: ['Python', 'Machine Learning', 'ANN/CNN'],
    link: '#'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 bg-gradient-to-br from-black via-purple-950 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-300 mb-12">🚀 Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="glass rounded-2xl p-6 text-left border border-purple-500/20 backdrop-blur-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-200 mb-2">{proj.title}</h3>
              <p className="text-sm text-purple-100 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-purple-800/40 text-xs rounded-full text-purple-100 border border-purple-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {proj.link !== '#' && (
                <Link
                  href={proj.link}
                  target="_blank"
                  className="text-sm text-pink-400 underline hover:text-pink-300"
                >
                  View Project →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
