'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCertificate, FaTrophy, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'
import SilverCard from '@/components/common/SilverCard'

const certifications = [
  {
    title: 'Machine Learning & AI Fundamentals',
    provider: 'Udemy',
    description: 'Completed hands-on training in ML model building and deployment using TensorFlow and Python.',
    link: 'https://www.udemy.com/certificate/UC-406f2de3-4673-426e-a1f7-81fc4e8f7128/',
    icon: '🤖',
    skills: ['TensorFlow', 'Python', 'ML Models', 'Model Deployment']
  },
  {
    title: 'AI Fundamentals',
    provider: 'Microsoft Learn',
    description: 'Certified in designing and integrating AI solutions using Azure cognitive services.',
    link: 'https://learn.microsoft.com/en-us/users/iqraazam-5544/achievements/9xr3xbxu?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    icon: '☁️',
    skills: ['Azure AI', 'Cognitive Services', 'AI Integration', 'Cloud AI']
  },
  {
    title: 'Cloud & Data Fundamentals',
    provider: 'Microsoft Learn',
    description: 'Certified in cloud computing, data storage, and analytics using Microsoft Azure.',
    link: 'https://learn.microsoft.com/en-us/users/iqraazam-5544/achievements/xmtszgry?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    icon: '💾',
    skills: ['Azure Cloud', 'Data Storage', 'Analytics', 'Cloud Computing']
  },
  {
    title: 'Digital Badge',
    provider: 'Credly',
    description: 'Verified digital credential badge demonstrating professional achievements and competencies.',
    link: 'https://www.credly.com/go/XSxbTR74',
    icon: '🏅',
    skills: ['Professional Credential', 'Digital Badge', 'Verification', 'Achievement']
  }
]

const achievements = [
  {
    title: 'Machine Learning Implementation',
    description: 'Implemented supervised and deep learning models for real-world applications.',
    icon: '🧠',
    category: 'Technical'
  },
  {
    title: 'Generative AI Development',
    description: 'Developed transformer-based text and image generation models using state-of-the-art architectures.',
    icon: '🎨',
    category: 'Technical'
  },
  {
    title: 'STACKS - Executive Team Member',
    description: 'Member of the executive team at STACKS, one of Pakistan\'s largest university tech and entrepreneurship societies, organizing hackathons and startup-focused events.',
    icon: '🚀',
    category: 'Leadership'
  },
  {
    title: 'Softech - Core Member (4 Years)',
    description: 'Long-term member of Softech, one of Pakistan\'s biggest and oldest university tech societies, contributing to software competitions, event management, and student innovation programs.',
    icon: '💻',
    category: 'Leadership'
  }
]

const researchPapers = [
  {
    title: 'IEEE Research Paper - Full Version',
    description: 'Published research paper on advanced topics in AI/ML and software engineering.',
    file: '/IEEE-Research-Paper.pdf',
    icon: '📄'
  },
  {
    title: 'Research Publication - S25_4',
    description: 'Academic research publication contributing to the field of technology and innovation.',
    file: '/Research-Publication-S25.pdf',
    icon: '📄'
  }
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 px-6 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🏆 Achievements & Certifications
        </motion.h1>

        <motion.p
          className="text-center text-gray-200 mb-16 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A showcase of professional certifications, technical achievements, and leadership contributions in technology and innovation.
        </motion.p>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaCertificate className="text-4xl text-gray-400" />
            <h2 className="text-3xl font-bold text-gray-300">Professional Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <SilverCard key={index} delay={index * 100}>
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-300 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-3 font-semibold">{cert.provider}</p>
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/40 text-xs rounded-full text-gray-200 border border-gray-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href={cert.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                >
                  View Certificate <FaExternalLinkAlt className="text-xs" />
                </Link>
                </motion.div>
              </SilverCard>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaTrophy className="text-4xl text-gray-400" />
            <h2 className="text-3xl font-bold text-gray-300">Key Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <SilverCard key={index} delay={index * 120}>
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-300">{achievement.title}</h3>
                      <span className="px-2 py-1 bg-gray-500/20 text-xs rounded-full text-gray-400 border border-gray-500/30">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
                </motion.div>
              </SilverCard>
            ))}
          </div>
        </div>

        {/* Research Papers Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaFilePdf className="text-4xl text-gray-400" />
            <h2 className="text-3xl font-bold text-gray-300">Research Publications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPapers.map((paper, index) => (
              <SilverCard key={index} delay={index * 150}>
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                <div className="flex items-start gap-4">
                  <div className="text-5xl text-gray-400">{paper.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-300 mb-2">{paper.title}</h3>
                    <p className="text-sm text-gray-200 mb-4 leading-relaxed">{paper.description}</p>
                    <a
                      href={paper.file}
                      download
                      className="inline-flex items-center gap-2 btn-primary px-6 py-2 rounded-xl text-white font-semibold hover:scale-105 transition-transform text-sm"
                    >
                      <FaFilePdf /> Download PDF
                    </a>
                  </div>
                </div>
                </motion.div>
              </SilverCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
