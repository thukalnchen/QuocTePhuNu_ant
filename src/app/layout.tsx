import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy Women\'s Day 💐',
  description: 'Một bí mật nhỏ đang đợi em...',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
