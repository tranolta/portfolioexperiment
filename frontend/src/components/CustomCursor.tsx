import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springX = useSpring(x, { damping: 22, stiffness: 400, mass: 0.4 })
  const springY = useSpring(y, { damping: 22, stiffness: 400, mass: 0.4 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: springX, y: springY }}
    />
  )
}
