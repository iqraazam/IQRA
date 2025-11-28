'use client'

import { motion } from 'framer-motion'
import SilverCard from '@/components/common/SilverCard'

const experiences = [
  {
    company: 'NEXIUM',
    role: 'Operations Officer | Freelancer | Software Development | AI Solutions - Chief Operating Officer',
    period: 'Feb 2025 – Present',
    description: 'I work as an Operations Officer and Freelance Software Developer, focusing on streamlining internal workflows. My role bridges business strategy and technology ensuring efficient execution, high-quality product delivery, and innovation through automation and machine learning.',
    highlights: ['Business strategy', 'Workflow automation', 'AI Solutions', 'Product delivery']
  },
  {
    company: 'OctaNet',
    role: 'AI/ML Intern',
    period: 'Jun 2024 – Sep 2024',
    description: 'Worked on machine learning and AI-based projects focusing on model training, evaluation, and deployment. Applied deep learning techniques for data analysis and automation, improving accuracy and performance in experimental pipelines.',
    highlights: ['Model training', 'Deep learning', 'Data automation', 'Performance optimization']
  },
  {
    company: 'entracloud',
    role: 'Web Development Intern',
    period: 'Jun 2023 – Aug 2023',
    description: 'Developed and optimized responsive web interfaces using HTML, CSS, and JavaScript. Improved website load times and implemented UI/UX enhancements, boosting overall site performance and user engagement.',
    highlights: ['Responsive design', 'Performance optimization', 'UI/UX enhancements', 'User engagement']
  },
  {
    company: 'Mindstorm Studios',
    role: 'Game Development Intern',
    period: 'Feb 2023 – May 2023',
    description: 'Contributed to game mechanics development using Unity and C#. Assisted in creating interactive gameplay features, testing prototypes, and optimizing performance for mobile platforms.',
    highlights: ['Unity & C#', 'Game mechanics', 'Interactive features', 'Mobile optimization']
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💼 Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 via-gray-400 to-gray-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex flex-col md:flex-row items-start md:items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-black transform -translate-x-1/2 shadow-lg shadow-gray-400/50"></div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <SilverCard delay={index * 150}>
                  <motion.div
                    className="glass-card p-6 rounded-2xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-300">{exp.company}</h3>
                  </div>
                  
                  <h4 className="text-lg text-gray-400 font-semibold mb-1">{exp.role}</h4>
                  
                  <p className="text-sm text-gray-300 mb-4 flex items-center gap-2">
                    <span>📅</span> {exp.period}
                  </p>
                  
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/40 text-xs rounded-full text-gray-200 border border-gray-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  </motion.div>
                </SilverCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
