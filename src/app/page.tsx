"use client"
import { useLayoutEffect, useRef } from 'react'
import { Navbar, Project, Tech } from '@/components'
import { gsap } from 'gsap'
import { profile_pic, sample, sample2, } from '@/assets'
import Image from 'next/image'

export default function Home() {
  const skills = ['Frontend Development', 'Wordpress development', 'MERN Stack', 'Django Stack']

  let app = useRef<HTMLDivElement>(null)
  let tl = gsap.timeline({delay: 0})
  

  useLayoutEffect(() => {
    const headline_first = app.current?.children[0].children[0].children[0]!
    const headline_second = headline_first?.nextSibling
    const button = app.current?.children[1]!
    const tags = app.current?.children[2].children!
    

    // gsap.set(app.current, {css: {visibility: 'hidden'}, duration: .8})
    tl.to(
      headline_first, 
      {y:44, ease:"power3.easeOut", opacity: 1, duration: 1, stagger: {
        from: 'start'}},)
    .to(headline_second, {y: 20, opacity: 1, ease: "power3.easeOut", duration: 1}, 0.1)
    .to(button, {opacity: 1, duration: 1}, .1)
    .to(app.current , {opacity: 0, duration: 1, scrollTrigger: {trigger: app.current, start: 'bottom 80%', end: 'bottom center', scrub: true}})
    
    for(let i = 0; i<tags.length; i++){
      tl.to(tags[i], {opacity: 1, duration: 1}, .1 + i*0.2)
    }


  }, [tl])
  return (
    <div className="">
      <Navbar />
      {/* <video className='h-screen w-screen object-cover' autoPlay loop muted>
        <source src='/background.mp4' type='video/mp4'></source>
      </video>
       */}
      <main className='absolute w-full pt-20 text-gray-200'>
        <div ref={app} className='flex flex-col justify-center items-center box-border h-screen'>
          <div className='flex flex-col md:flex-row items-center p-5 justify-center mx-8 text-start'>
            <div className='flex flex-col h-full justify-center text-center'>
              <div className='text-xl md:text-4xl py-5 px-2 opacity-0 color -mt-11'><span className='text-2xl md:text-9xl font-bold text-gray-300 text_gradient'>AliHxN</span></div>
              <div className='text-md md:text-2xl opacity-0 p-2 [text-shadow:_0_5px_30px_rgb(256_256_256_/_100%)]'>I am a web developer with more frontend than backend knowledge. I try to keep things simple...</div>
            </div>
            {/* <Image className='w-44 h-56 shadow-2xl shadow-black transform transition-transform duration-700 hover:scale-125'  src={profile_pic} alt='profile'/> */}
          </div>
          <button className='  text-black shadow-[0_0px_20px_rgba(0,0,0,1)] bg-gray-500 hover:bg-white hover:shadow-[0_0px_20px_rgba(255,255,255,1)] transition-[background-color] duration-500 py-3 px-20 mt-24 opacity-0 '>Explore</button>
          <div className='flex gap-5 mt-12'>
            {skills.map(skill => (
              <div className='border rounded-2xl px-2 py-1  border-gray-800 hover:text-black hover:shadow-[0_0px_20px_rgba(255,255,255,1)] hover:border-gray-500 hover:bg-gray-500 transition-[background-color] duration-500 shadow-[0_0px_20px_rgba(0,0,0,1)]  opacity-0' key={skill}>{skill}</div>
            ))}
          </div>
        </div>
        <div className='flex flex-col mt-12 mx-8 md:mx-24 justify-center items-center'>
          <span className='text-4xl p-10 text-center'>Tech & Tools</span>
          <Tech />
        </div>
        <div className='flex flex-col mt-48'>
          <span className='text-4xl p-10 text-center mb-28'>Featured Projects</span>
          <Project link={sample}/>
          <Project link={sample2}/>
        </div>
        <div className='flex border-t border-gray-700 bg-gray-950 p-10 justify-between'>
              <div>
                <div>Socials</div>
                <div>Linkedin</div>
                <div>Instagram</div>
                <div>Github</div>
              </div>
              <div>
                <div>Contact</div>
                <div>Email</div>
                <div>Discord</div>
              </div>
        </div>
      </main>
    </div>
  )
}
