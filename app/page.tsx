import { AudioIcon } from '@/components/AudioIcon'
import { Content } from '@/components/Content'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between dark:bg-slate-800">
      <Image className='z-0 object-cover' src='/bg.png' alt='background wedding' fill sizes="100vw"/>
      <Content/>
      <AudioIcon/>
    </main>
  )
}
