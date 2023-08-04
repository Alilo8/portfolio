"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { gsap, ScrollTrigger } from 'gsap/all';

interface ProjectProps{
  link: StaticImageData
}

function Project({link}: ProjectProps) {
  gsap.registerPlugin(ScrollTrigger);
  const elementRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline()

  useLayoutEffect(() => {
    tl.set(elementRef, {filter: "blur(100px)"}, 1)
    tl.to(elementRef.current, {y: -100, filter: "blur(0px)", stagger: { each: 0.25, from: 'start'}, scrollTrigger: {trigger: elementRef.current, start: 'top bottom', end: 'center bottom', scrub: true} }, 1)
  }, [tl]);  
  return (
    <div  className='p-10 md:p-20'>
      <div ref={elementRef} className='overflow-hidden w-fit md:w-5/6  md:h-auto blur-sm'>
        <Image className={`aspect-square md:aspect-auto object-cover transform transition-transform duration-700 hover:scale-125 hover:rotate-3`} src={link} alt='a'/>
      </div>
    </div>
  )
}

export default Project