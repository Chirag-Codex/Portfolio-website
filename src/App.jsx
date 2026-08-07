import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import FloatingContact from './components/FloatingContact'
import Home from './pages/Home'
import ProjectsIndex from './pages/ProjectsIndex'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-signal-violet selection:text-ink">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsIndex />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
