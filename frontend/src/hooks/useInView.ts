import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean indicating whether the element is in the viewport.
 * Once in-view, it stays true (fires once, then unobserves) for the scroll
 * reveal animation pattern.
 */
export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
