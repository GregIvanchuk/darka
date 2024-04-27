import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Нічник 3D світильник місяць',
  description: 'Це чудовий подарунок для будь-якого, хто цінує красу природи та мріє про подорожі у віддалені космічні простори.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
