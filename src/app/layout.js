import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Зволожувач повітря, нічник',
  description: 'Зволожувач Гриб принесе в оселю затишок і забезпечить природне зволоження повітря.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
