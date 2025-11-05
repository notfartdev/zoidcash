"use client"

import { useEffect, useRef } from "react"

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Gradient orbs/blobs
    const orbs = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        radius: 400,
        vx: 0.3,
        vy: 0.2,
        color: { r: 99, g: 102, b: 241 }, // Indigo
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.7,
        radius: 350,
        vx: -0.2,
        vy: -0.3,
        color: { r: 139, g: 92, b: 246 }, // Purple
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        radius: 300,
        vx: 0.15,
        vy: -0.25,
        color: { r: 59, g: 130, b: 246 }, // Blue
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.6,
        radius: 250,
        vx: -0.15,
        vy: 0.2,
        color: { r: 168, g: 85, b: 247 }, // Violet
      },
    ]

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update time
      time += 0.01

      // Update orb positions with smooth easing
      orbs.forEach((orb, index) => {
        const speed = 0.5 + (index % 3) * 0.2 // Vary speeds
        orb.x += orb.vx * Math.sin(time * speed) * 0.8
        orb.y += orb.vy * Math.cos(time * speed * 1.3) * 0.8

        // Smooth wrapping around edges
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius
      })

      // Create gradient mesh
      const gradient = ctx.createRadialGradient(
        orbs[0].x,
        orbs[0].y,
        0,
        orbs[0].x,
        orbs[0].y,
        orbs[0].radius,
      )

      // Add color stops from multiple orbs
      orbs.forEach((orb, index) => {
        const stop = index / orbs.length
        gradient.addColorStop(
          stop,
          `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.15)`,
        )
      })

      // Draw orbs with blur effect (simulated with multiple circles)
      orbs.forEach((orb) => {
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius,
        )

        gradient.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.15)`)
        gradient.addColorStop(0.3, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.08)`)
        gradient.addColorStop(0.6, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.04)`)
        gradient.addColorStop(1, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connecting lines between nearby orbs
      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          const dx = orbs[i].x - orbs[j].x
          const dy = orbs[i].y - orbs[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 600) {
            const opacity = (1 - distance / 600) * 0.05
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(orbs[i].x, orbs[i].y)
            ctx.lineTo(orbs[j].x, orbs[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ mixBlendMode: "screen", opacity: 0.4 }}
      />
      {/* Animated gradient overlay */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 gradient-animate"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
          `,
        }}
      />
    </>
  )
}

