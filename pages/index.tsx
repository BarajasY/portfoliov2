import Main from '@/components/Main'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ["800", "400"] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Main/>
    </div>
  )
}
