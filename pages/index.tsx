import Main from '@/components/Main'
import About from '@/components/About'
import Projects from '@/components/Projects'
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"], weight: ["900", "400", "300", "100", "700"]})
const inter = Inter({ subsets: ['latin'], weight: ["800", "400"] })

export default function Home() {
  return (
    <div className={roboto.className}>
      <Main/>
      <About />
      <Projects />
    </div>
  )
}
