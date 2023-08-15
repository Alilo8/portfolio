"use client";

import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const nav_items = [{title: 'Home', link: '/', delay: '300ms'},
                    {title: 'Work', link: '/', delay: '400ms'},
                    {title: 'Contact', link: '/', delay: '500ms'},
                    {title: 'About', link: '/', delay: '600ms'},]
    return (
        <nav className='fixed z-10'>
            <div className='flex justify-between items-center text-gray-400  w-screen fixed text-xl backdrop-blur-md  border-b border-gray-800'>
                <span className='text-2xl px-10 py-7'>Portfolio</span>
                <div onClick={() => setMenuOpen(!menuOpen)} className='flex flex-col gap-1 group cursor-pointer px-10 py-7'>
                    <span className={`bg-gray-400 group-hover:bg-white w-8 h-[2px] rounded-sm transition-[transform] duration-500  ${menuOpen ? 'rotate-[405deg] -mb-1' : ''}`}></span>
                    <span className={`bg-gray-400 group-hover:bg-white w-8 h-[2px] rounded-sm transition-[transform] duration-500 ${menuOpen ? 'translate-x-96 -mb-2' : ''}`}></span>
                    <span className={`bg-gray-400 group-hover:bg-white w-8 h-[2px] rounded-sm transition-[transform] duration-500 ${menuOpen ? 'rotate-[-405deg] -mb-1' : ''}`}></span>
                </div>
            </div>
            <div className={`flex flex-col fixed w-screen justify-center items-center h-[calc(100vh-80px)] backdrop-blur-md top-20 ${menuOpen ? 'left-0' : 'left-[100%]'} transition-[left] duration-500`}>
                <ul className={`flex flex-col text-2xl text-gray-400 gap-5 w-2/4`}>
                    {nav_items.map(nav_item => (
                        <li className={`cursor-pointer ${menuOpen ? 'ml-0': 'ml-[200%]'} rounded-full transition-[margin-left] duration-500 text-center border-t border-b border-black`} style={{transitionDelay: nav_item.delay}} key={nav_item.title}>
                                <div className="w-full p-5 hover:text-white rounded-full shadow-[0_0px_20px_rgba(0,0,0,1)] hover:shadow-[0_0px_20px_rgba(255,255,255,1)] transition-shadow">{nav_item.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar