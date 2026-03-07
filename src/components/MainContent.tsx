'use client'

import FallingPetals from './FallingPetals'
import PolaroidGallery from './PolaroidGallery'
import TypewriterMessage from './TypewriterMessage'
import HeartBurst from './HeartBurst'

export default function MainContent() {
  return (
    <div className="min-h-screen w-full relative">
      <FallingPetals />

      <div className="max-w-md mx-auto px-5 py-12 relative z-20">
        {/* Header */}
        <div className="text-center mb-12 pt-6">
          <h1 className="font-serif text-4xl text-rose-800/90 mb-2 leading-tight">
            Happy Women&apos;s Day
          </h1>
          <p className="font-serif text-lg text-rose-600/70 italic">
            Ngày 8 tháng 3
          </p>
          <div className="mt-4 flex justify-center gap-2 text-2xl">
            <span>🌸</span>
            <span>💐</span>
            <span>🌸</span>
          </div>
        </div>

        {/* Polaroid Gallery */}
        <PolaroidGallery />

        {/* Typewriter Message */}
        <TypewriterMessage />

        {/* Heart Burst Button */}
        <HeartBurst />

        {/* Footer */}
        <div className="text-center mt-16 mb-8">
          <p className="text-rose-400/50 text-xs tracking-widest font-light">
            ✧ made with love ✧
          </p>
        </div>
      </div>
    </div>
  )
}
