'use client'

import { motion } from 'framer-motion'

const images = [
  { src: '/1.jpg', rotation: 'rotate-2' },
  { src: '/2.jpg', rotation: '-rotate-3' },
  { src: '/3.jpg', rotation: 'rotate-1' },
  { src: '/4.jpg', rotation: '-rotate-2' },
  { src: '/5.jpg', rotation: 'rotate-3' },
  { src: '/6.jpg', rotation: '-rotate-1' },
  { src: '/7.jpg', rotation: 'rotate-2' },
  { src: '/8.jpg', rotation: '-rotate-3' },
  { src: '/9.jpg', rotation: 'rotate-1' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export default function PolaroidGallery() {
  return (
    <motion.div
      className="flex flex-col gap-8 items-center mb-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {images.map((img, index) => (
        <motion.div
          key={index}
          className={`polaroid ${img.rotation} w-[85%] max-w-[320px]`}
          variants={item}
        >
          <div className="w-full overflow-hidden">
            <img
              src={img.src}
              alt={`Memory ${index + 1}`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="pt-3 pb-1 text-center">
            <p className="font-serif text-xs text-gray-400 italic">
              {index === 0 && '💕 Khoảnh khắc đẹp'}
              {index === 1 && '🌸 Nụ cười của em'}
              {index === 2 && '✨ Ánh mắt lấp lánh'}
              {index === 3 && '🌷 Ngày nắng đẹp'}
              {index === 4 && '💐 Hoa cho em'}
              {index === 5 && '🌙 Đêm lung linh'}
              {index === 6 && '☀️ Sáng trong veo'}
              {index === 7 && '🦋 Nhẹ nhàng thôi'}
              {index === 8 && '💫 Mãi bên nhau'}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
