"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { gsap, ScrollTrigger } from 'gsap/all';

interface ProjectProps{
  link: StaticImageData
}

function Project({link}: ProjectProps) {
  gsap.registerPlugin(ScrollTrigger);
  const container_ref = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline()

  useLayoutEffect(() => {
    const details = container_ref.current?.children[1]!;
    const client = container_ref.current?.children[2]!;
    tl.to(container_ref.current, {y: -200, filter: "blur(0px)", scrollTrigger: {trigger: container_ref.current, start: 'top bottom', end: 'center bottom', scrub: true} }, 1)
    .from(details, {x: '-200%', scale: 2, scrollTrigger: {trigger: details, start: 'top 90%', end: 'top 80%', scrub: true} }, 1)
    .from([details, client], {backgroundColor: 'white', scrollTrigger: {trigger: details, start: 'top 80%', end: 'top 80%', scrub: true} }, 1)

  }, [tl]);  
  return (
    <div  className='p-10 md:p-20'>
      <div ref={container_ref} className='overflow-hidden w-fit md:w-5/6 blur-md'>
        <Image className={`w-fit md:w-full aspect-square md:aspect-auto object-cover transform transition-transform duration-700 hover:scale-125 hover:rotate-3`} src={link} alt='a'/>
        <span className='absolute z-10 top-0 text-white m-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero sequi molestias.</span>
        <span className='absolute z-10 bottom-0 text-white m-5'>Client</span>
      </div>
    </div>
  )
}

export default Project