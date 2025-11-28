'use client'

import HomeSection from '@/components/sections/HomeSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import AchievementsSection from '@/components/sections/AchievementsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
