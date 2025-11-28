'use client'

import { motion } from 'framer-motion'
import SilverCard from '@/components/common/SilverCard'

const highlights = [
  {
    icon: '💡',
    title: 'AI/ML Model Design',
    description: 'Expert in TensorFlow, PyTorch, Scikit-learn, and Keras for building intelligent systems.'
  },
  {
    icon: '💻',
    title: 'Full Stack Development',
    description: 'Proficient in Flutter, React, Next.js, Node.js, and modern web/mobile frameworks.'
  },
  {
    icon: '☁️',
    title: 'Cloud & Automation',
    description: 'Experience with Firebase, AWS, and cloud-based deployment solutions.'
  },
  {
    icon: '🔧',
    title: 'Research & Optimization',
    description: 'Specialized in model optimization using EfficientNet, Transformers, and advanced architectures.'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 text-white min-h-screen flex items-center overflow-hidden">
      {/* Floating 3D orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gray-600/20 blur-3xl"
        animate={{ 
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gray-400/20 blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="max-w-6xl mx-auto w-full relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-12 text-center">
          About Me
        </h2>

        <SilverCard className="glass-card p-10 rounded-2xl mb-12">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            I'm <span className="text-white font-semibold">Iqra Azam</span>, a passionate AI Engineer and Full-Stack Developer 
            with expertise in building intelligent, scalable digital solutions. I specialize in combining cutting-edge machine learning 
            with modern web and mobile development to create impactful applications.
          </p>

          <blockquote className="border-l-4 border-gray-400 pl-6 py-4 my-8 italic text-xl text-gray-300">
            "Passionate about building tech that bridges creativity and intelligence."
          </blockquote>

          <p className="text-gray-200 text-lg leading-relaxed">
            From designing neural networks to crafting pixel-perfect user interfaces, I thrive at the intersection of AI and software engineering. 
            My work spans AI/ML model development, full-stack web applications, mobile apps, and cloud solutions.
          </p>
        </SilverCard>

        <h3 className="text-3xl font-semibold text-gray-300 mb-8 text-center">
          🌟 Core Expertise
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, idx) => (
            <SilverCard key={idx} delay={idx * 100}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="glass-card-3d p-6 text-center cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-lg font-bold text-gray-300 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-200">{item.description}</p>
              </motion.div>
            </SilverCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
