'use client'

import { useMemo } from 'react'

export default function FallingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 6}s`,
      animationDelay: `${Math.random() * 10}s`,
      size: Math.random() * 8 + 8,
      opacity: Math.random() * 0.4 + 0.3,
      rotate: Math.random() * 360,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="petal animate-petal-fall"
          style={{
            left: petal.left,
            top: '-20px',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            transform: `rotate(${petal.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
