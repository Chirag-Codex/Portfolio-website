import React, { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    let ringX = 0, ringY = 0, targetX = 0, targetY = 0

    const move = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`
      }
    }

    const raf = () => {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      requestAnimationFrame(raf)
    }

    const onDown = () => ringRef.current?.classList.add('scale-75')
    const onUp = () => ringRef.current?.classList.remove('scale-75')

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    const id = requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(id)
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-signal-amber"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-signal-violet/70 transition-transform duration-150"
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}
