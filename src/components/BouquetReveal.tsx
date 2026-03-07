'use client'

import { motion, AnimatePresence } from 'framer-motion'

const bouquetFlowers = [
  // Center large flowers
  { emoji: '🌹', x: 0, y: 0, scale: 2.2, delay: 0.3, rotate: 0 },
  { emoji: '🌷', x: -35, y: -30, scale: 1.8, delay: 0.5, rotate: -15 },
  { emoji: '🌷', x: 35, y: -30, scale: 1.8, delay: 0.5, rotate: 15 },
  { emoji: '🌸', x: -60, y: -15, scale: 1.5, delay: 0.7, rotate: -25 },
  { emoji: '🌸', x: 60, y: -15, scale: 1.5, delay: 0.7, rotate: 25 },
  // Mid ring
  { emoji: '💐', x: 0, y: -55, scale: 1.6, delay: 0.6, rotate: 0 },
  { emoji: '🌺', x: -45, y: 20, scale: 1.4, delay: 0.8, rotate: -20 },
  { emoji: '🌺', x: 45, y: 20, scale: 1.4, delay: 0.8, rotate: 20 },
  { emoji: '🪻', x: -75, y: -45, scale: 1.3, delay: 0.9, rotate: -30 },
  { emoji: '🪻', x: 75, y: -45, scale: 1.3, delay: 0.9, rotate: 30 },
  // Outer ring
  { emoji: '🌼', x: -90, y: 10, scale: 1.1, delay: 1.0, rotate: -35 },
  { emoji: '🌼', x: 90, y: 10, scale: 1.1, delay: 1.0, rotate: 35 },
  { emoji: '🌻', x: 0, y: -80, scale: 1.2, delay: 1.0, rotate: 0 },
  { emoji: '💮', x: -55, y: -65, scale: 1.0, delay: 1.1, rotate: -18 },
  { emoji: '💮', x: 55, y: -65, scale: 1.0, delay: 1.1, rotate: 18 },
  // Small accent flowers
  { emoji: '✿', x: -100, y: -30, scale: 0.9, delay: 1.2, rotate: -40 },
  { emoji: '✿', x: 100, y: -30, scale: 0.9, delay: 1.2, rotate: 40 },
  { emoji: '🌸', x: -30, y: 35, scale: 1.0, delay: 1.1, rotate: -10 },
  { emoji: '🌸', x: 30, y: 35, scale: 1.0, delay: 1.1, rotate: 10 },
]

const sparkles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  angle: (i / 24) * 360,
  distance: 120 + Math.random() * 80,
  delay: 0.8 + Math.random() * 0.8,
  scale: 0.5 + Math.random() * 0.8,
}))

export default function BouquetReveal({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 0.5 } }}
        >
          {/* Radial glow behind bouquet */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(255,182,193,0.5) 0%, rgba(255,218,185,0.3) 40%, transparent 70%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.5, 2], opacity: [0, 0.8, 0.6] }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* Sparkle burst ring */}
          {sparkles.map((sparkle) => {
            const rad = (sparkle.angle * Math.PI) / 180
            const tx = Math.cos(rad) * sparkle.distance
            const ty = Math.sin(rad) * sparkle.distance
            return (
              <motion.div
                key={sparkle.id}
                className="absolute text-lg"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: tx,
                  y: ty,
                  opacity: [0, 1, 1, 0],
                  scale: [0, sparkle.scale, sparkle.scale, 0],
                }}
                transition={{
                  duration: 2,
                  delay: sparkle.delay,
                  ease: 'easeOut',
                }}
              >
                ✨
              </motion.div>
            )
          })}

          {/* Bouquet flowers */}
          {bouquetFlowers.map((flower, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ fontSize: `${flower.scale * 24}px` }}
              initial={{
                x: 0,
                y: 50,
                opacity: 0,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: flower.x,
                y: flower.y,
                opacity: [0, 1, 1],
                scale: [0, 1.3, 1],
                rotate: flower.rotate,
              }}
              transition={{
                duration: 1.2,
                delay: flower.delay,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {flower.emoji}
            </motion.div>
          ))}

          {/* Title text */}
          <motion.div
            className="absolute text-center"
            style={{ bottom: '25%' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1.2 }}
          >
            <p className="font-serif text-2xl text-white drop-shadow-lg"
              style={{ textShadow: '0 2px 20px rgba(255,105,135,0.5)' }}
            >
              Dành tặng em 💕
            </p>
          </motion.div>

          {/* Floating mini hearts rising up */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`heart-${i}`}
              className="absolute text-sm"
              style={{ bottom: '10%' }}
              initial={{
                x: (Math.random() - 0.5) * 200,
                y: 0,
                opacity: 0,
              }}
              animate={{
                y: [0, -150, -300],
                opacity: [0, 0.8, 0],
                x: (Math.random() - 0.5) * 200,
              }}
              transition={{
                duration: 3,
                delay: 1.5 + i * 0.2,
                ease: 'easeOut',
              }}
            >
              {['💕', '💗', '💖', '💝', '♥️', '🩷'][i % 6]}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
