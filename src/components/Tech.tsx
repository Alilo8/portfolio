import React, { useLayoutEffect, useRef } from 'react'
import { html_icon, css_icon, js_icon, ts_icon, react_icon, next_icon, tailwind_icon, bootstrap_icon } from '@/assets'
import Image from 'next/image'
import { gsap } from 'gsap/all'

const Tech = () => {
  const container_ref = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    const tools = container_ref.current?.children[1]!
    tl.from(container_ref.current, {y:50, filter:'blur(100px)', scrollTrigger: {trigger: container_ref.current, start: 'top bottom', end: 'center 75%', scrub: true}})
    tl.from(tools, {scale: -0.1, y:500, backgroundColor: 'white', scrollTrigger: {trigger: container_ref.current, start: 'top 85%', end: 'top 65%', scrub: true}})
  }, [tl])
  const images = [ {link: html_icon, name:'HTML'}, {link: css_icon, name:'CSS'}, {link: js_icon, name:'JavaScript'}, {link: ts_icon, name:'TypeScript'} , {link: react_icon, name:'React'}, {link: next_icon, name:'NextJS'}, {link: tailwind_icon, name:'tailwind'}, {link:bootstrap_icon, name:'bootstrap'}]
  return (
    <div ref={container_ref} className='flex flex-col px-5 py-3 w-fit border border-gray-800 rounded-lg shadow-[0_0px_20px_rgba(0,0,0,1)] hover:shadow-[0_0px_20px_rgba(255,255,255,1)] hover:bg-sky-700 hover:text-black transition-colors duration-500'>
      <span className='text-2xl text-center w-full mb-5 border-b border-gray-700'>Frontend</span>
      <div className='flex flex-wrap gap-10 items-center'>
        {images.map(image => (
          <div className='flex gap-1' key={image.name}>
            <Image src={image.link} alt='?'/>
            <span className='w-16'>{image.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech