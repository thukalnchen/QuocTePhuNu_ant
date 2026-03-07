'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LockScreen from '@/components/LockScreen'
import MainContent from '@/components/MainContent'
import BouquetReveal from '@/components/BouquetReveal'

type Phase = 'lock' | 'unlocked' | 'bouquet' | 'transition' | 'main'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('lock')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const musicStartedRef = useRef(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const startMusic = useCallback(() => {
    if (musicStartedRef.current) return
    musicStartedRef.current = true

    const audio = new Audio('/music.mp3')
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio
    audio.play().catch(() => {
      // Autoplay might be blocked, will retry on next interaction
      musicStartedRef.current = false
    })
  }, [])

  // Auto-scroll slowly when main content appears
  useEffect(() => {
    if (phase !== 'main') return

    // Wait for content to render
    const startDelay = setTimeout(() => {
      const scrollSpeed = 1.2 // pixels per frame (~60fps)
      let animationId: number

      const smoothScroll = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        if (window.scrollY < maxScroll) {
          window.scrollBy(0, scrollSpeed)
          animationId = requestAnimationFrame(smoothScroll)
        }
      }

      animationId = requestAnimationFrame(smoothScroll)

      // Stop auto-scroll if user manually scrolls or touches
      const stopScroll = () => {
        cancelAnimationFrame(animationId)
      }

      window.addEventListener('wheel', stopScroll, { once: true })
      window.addEventListener('touchstart', stopScroll, { once: true })

      return () => {
        cancelAnimationFrame(animationId)
        window.removeEventListener('wheel', stopScroll)
        window.removeEventListener('touchstart', stopScroll)
      }
    }, 2000) // Wait 2s for content to fully appear

    return () => clearTimeout(startDelay)
  }, [phase])

  const handleUnlock = () => {
    // Ensure music is playing
    startMusic()

    // Step 1: Lock screen success glow (short moment)
    setPhase('unlocked')

    // Step 2: Show bouquet after a brief pause
    setTimeout(() => {
      setPhase('bouquet')
    }, 600)

    // Step 3: Transition to dawn
    setTimeout(() => {
      setPhase('transition')
    }, 5000)

    // Step 4: Show main content
    setTimeout(() => {
      setPhase('main')
    }, 7000)
  }

  const isNight = phase === 'lock' || phase === 'unlocked' || phase === 'bouquet'

  const nightGradient = 'linear-gradient(135deg, #0a0a2e 0%, #1a0533 30%, #2d1b69 60%, #0d0d3f 100%)'
  const dawnGradient = 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 25%, #f8b4c8 50%, #ffd1dc 75%, #fff5ee 100%)'

  return (
    <motion.div
      ref={scrollContainerRef}
      className={`min-h-screen w-full relative ${phase === 'main' ? 'overflow-auto' : 'overflow-hidden'}`}
      animate={{
        background: isNight ? nightGradient : dawnGradient,
      }}
      transition={{ duration: 2.5, ease: 'easeInOut' }}
    >
      {/* Success flash overlay */}
      <AnimatePresence>
        {phase === 'unlocked' && (
          <motion.div
            key="flash"
            className="fixed inset-0 z-[60]"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 70%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.3] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* Bouquet overlay */}
      <BouquetReveal show={phase === 'bouquet'} />

      <AnimatePresence mode="wait">
        {(phase === 'lock' || phase === 'unlocked' || phase === 'bouquet') && (
          <motion.div
            key="lock"
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <LockScreen onUnlock={handleUnlock} onFirstInteraction={startMusic} />
          </motion.div>
        )}

        {phase === 'transition' && (
          <motion.div
            key="transition"
            className="min-h-screen w-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="text-center px-8">
              {/* Sunrise icon */}
              <motion.div
                className="text-6xl mb-6"
                initial={{ y: 40, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                🌅
              </motion.div>

              <motion.p
                className="text-2xl font-serif text-rose-800/80 drop-shadow-sm leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Bầu trời đang sáng dần...
              </motion.p>

              <motion.p
                className="text-lg font-serif text-rose-600/60 italic mt-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                vì có em ở đây ✨
              </motion.p>
            </motion.div>
          </motion.div>
        )}

        {phase === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

