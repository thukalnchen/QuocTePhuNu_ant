'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const message =
  'Chúc em một ngày 8/3 thật dịu dàng. Bầu trời này, những bông hoa này là dành cho em. Hãy luôn mỉm cười như những vì sao lấp lánh nhé.'

export default function TypewriterMessage() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      setIsTyping(true)
    }
  }, [isInView, hasStarted])

  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 60)

    return () => clearInterval(interval)
  }, [isTyping])

  return (
    <motion.div
      ref={ref}
      className="mb-16 px-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-6">
        <span className="text-3xl">💌</span>
      </div>
      <p className="font-serif text-lg text-rose-800/80 leading-relaxed text-center italic">
        &ldquo;{displayedText}&rdquo;
        {isTyping && <span className="typewriter-cursor" />}
      </p>
    </motion.div>
  )
}
