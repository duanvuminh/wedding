import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Đám cưới Tân và Duẩn',
  description: 'Mời cưới Tân và Duẩn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className='bg-slate-800'>
      <body>{children}</body>
    </html>
  )
}
