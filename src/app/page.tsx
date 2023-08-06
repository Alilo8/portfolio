"use client"
import { useLayoutEffect, useRef } from 'react'
import { Navbar, Project } from '@/components'
import { gsap } from 'gsap'
import { sample, sample2 } from '@/assets'

export default function Home() {
  let app = useRef<HTMLDivElement>(null)
  let tl = gsap.timeline({delay: 0})

  useLayoutEffect(() => {
    const headline_first = app.current?.children[0]!
    const headline_second = headline_first?.nextSibling
    const button = headline_second?.nextSibling!
    const tags = app.current?.children[3].children!
    

    // gsap.set(app.current, {css: {visibility: 'hidden'}, duration: .8})
    tl.to(
      headline_first, 
      {y:44, ease:"power3.easeOut", opacity: 1, duration: 1, stagger: {
        from: 'start'}}, .15)
    .to(headline_second, {y: 20, opacity: 1, ease: "power3.easeOut", duration: 1}, 1.4)
    .to(button, {opacity: 1, duration: 1}, 1.4)
    .to(app.current , {opacity: 0, duration: 1, scrollTrigger: {trigger: app.current, start: 'bottom 80%', end: 'bottom center', scrub: true}})
    
    for(let i = 0; i<tags.length; i++){
      tl.to(tags[i], {opacity: 1, duration: 1}, 1.5 + i*0.2)
    }


  }, [tl])
  return (
    <div className="">
      <Navbar />
      <main  className='top-20 absolute w-full'>
        <div ref={app} className='flex flex-col justify-center items-center box-border h-[calc(100vh-80px)] text-center'>
          <div className='text-6xl p-5 opacity-0'>Simple and Creative Design</div>
          <div className='opacity-0 p-2'>It is free to try Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde natus temporibus eaque.</div>
          <button className='border border-black hover:bg-black hover:text-white py-3 px-20 mt-24 opacity-0'>Explore</button>
          <div className='flex gap-5 mt-24'>
            <div className='border border-black rounded-2xl px-2 py-1 hover:bg-black hover:text-white opacity-0'>UI/UX Design</div>
            <div className='border border-black rounded-2xl px-2 py-1 hover:bg-black hover:text-white opacity-0'>Frontend Development</div>
            <div className='border border-black rounded-2xl px-2 py-1 hover:bg-black hover:text-white opacity-0'>Wordpress Development</div>
            <div className='border border-black rounded-2xl px-2 py-1 hover:bg-black hover:text-white opacity-0'>MERN Stack</div>
            <div className='border border-black rounded-2xl px-2 py-1 hover:bg-black hover:text-white opacity-0'>Django Stack</div>
          </div>
        </div>
        <div className='flex flex-col'>
          <Project link={sample}/>
          <Project link={sample2}/>
        </div>
      </main>
    </div>
  )
}
