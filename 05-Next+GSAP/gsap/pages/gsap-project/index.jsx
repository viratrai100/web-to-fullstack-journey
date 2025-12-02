import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

// Client-only components (GSAP, matchMedia, video refs, etc.)
const Navbar = dynamic(() => import('./Navbar'), { ssr: false })
const Hero = dynamic(() => import('./Hero'), { ssr: false })
const Cocktails = dynamic(() => import('./Cocktails'), { ssr: false })
const About = dynamic(() => import('./About'), { ssr: false })
const Art = dynamic(() => import('./Art'), { ssr: false })
const Menu = dynamic(() => import('./Menu'), { ssr: false })
const Contact = dynamic(() => import('./Contact'), { ssr: false })

const GsapPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)
    }
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      {/* <div className='h-dvh bg-black' /> for demo purpose in video masking  */}
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default GsapPage
