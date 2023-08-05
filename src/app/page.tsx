"use client"
import { useLayoutEffect, useRef } from 'react'
import { Navbar, Project } from '@/components'
import { gsap } from 'gsap'
import { sample, sample2 } from '@/assets'

export default function Home() {
  let app = useRef<HTMLDivElement>(null)
  let tl = gsap.timeline({delay: 0})

  useLayoutEffect(() => {
    const headline_first = app.current?.children[0].children[0]!
    const headline_second = headline_first?.nextSibling

    gsap.to(app, {css: {visibility: 'hidden'}, duration: .8})
    tl.from(
      headline_first, 
      {y:44, ease:"power3.easeOut", opacity: 0, delay: .8, duration: 1, stagger: {
        from: 'start'}}, .15)
    .from(headline_second, {y: 20, opacity: 0, ease: "power3.easeOut", duration: 1}, 1.4)

  }, [tl])
  return (
    <div className="">
      <Navbar />
      <main ref={app} className='top-20 absolute w-full'>
        <div className='flex flex-col justify-center items-center box-border h-[calc(100vh-80px)] text-center'>
          <div className='text-6xl p-5'>Simple and Creative Design</div>
          <div>It is free to try</div>
        </div>
        <div className='flex flex-col'>
          <Project link={sample}/>
          <Project link={sample2}/>
        </div>
      </main>
    </div>
  )
}
