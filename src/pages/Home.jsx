import React from 'react'
import Hero from '../components/Hero'
import PhotoStrip from '../components/PhotoStrip'
import FocusSection from '../components/FocusSection'
import SelectedWorks from '../components/SelectedWorks'
import SkillsMarquee from '../components/SkillsMarquee'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoStrip />
      <FocusSection />
      <SelectedWorks />
      <SkillsMarquee />
      <Education />
      <Contact />
    </>
  )
}
