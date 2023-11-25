'use client'

// components/SmokeCanvas.js
import SmokeMachine from '@bijection/smoke'
import { ReactNode, useEffect } from 'react'

const SmokeCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('smokeCanvas') as HTMLCanvasElement

    if (typeof window === 'undefined' || !canvas) return

    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '100'

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const smoke = SmokeMachine(ctx, [128, 128, 128])

    smoke.start()

    const offsetX = -30
    const offsetY = 30

    const handleMouseMove = (e) => {
      smoke.addSmoke(
        e.clientX + offsetX,
        e.clientY + offsetY,
        1,
        Math.random() * 100 + 3800,
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      smoke.stop()
    }
  }, [])

  return <canvas id="smokeCanvas"></canvas>
}

export default SmokeCanvas
