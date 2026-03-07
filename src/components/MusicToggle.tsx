'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, VolumeX } from 'lucide-react'

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/music.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked by browser
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.button
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleMusic}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {isPlaying ? (
        <Music size={20} className="text-rose-700" />
      ) : (
        <VolumeX size={20} className="text-rose-400" />
      )}
    </motion.button>
  )
}
