"use client";

import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const nav_items = [{title: 'Home', link: '/', delay: '300ms'},
                    {title: 'Work', link: '/', delay: '400ms'},
                    {title: 'Contact', link: '/', delay: '500ms'},
                    {title: 'About', link: '/', delay: '600ms'},]
    return (
        <nav className='flex bg-black justify-between items-center  text-gray-400 px-10 py-7 w-screen fixed text-xl z-10'>
            <span className='text-2xl'>Portfolio</span>
            <ul className={`flex flex-col bg-black absolute justify-center items-center w-screen top-20 gap-10 ${menuOpen ? 'left-0' : 'left-[100%]'} py-10 transition-[left] duration-500`}>
                {nav_items.map(nav_item => (
                    <li className={`hover:text-white cursor-pointer ${menuOpen ? 'ml-0': 'ml-[200%]'} transition-[margin-left] duration-500`} style={{transitionDelay: nav_item.delay}} key={nav_item.title}>
                            {nav_item.title}
                    </li>
                ))}
            </ul>
            <div onClick={() => setMenuOpen(!menuOpen)} className='flex flex-col gap-1 group cursor-pointer'>
                <span className={`bg-gray-400 group-hover:bg-white w-8 h-1 rounded-sm transition-[transform] duration-500  ${menuOpen ? 'rotate-[405deg] -mb-2' : ''}`}></span>
                <span className={`bg-gray-400 group-hover:bg-white w-8 h-1 rounded-sm transition-[transform] duration-500 ${menuOpen ? 'translate-x-96 -mb-2' : ''}`}></span>
                <span className={`bg-gray-400 group-hover:bg-white w-8 h-1 rounded-sm transition-[transform] duration-500 ${menuOpen ? 'rotate-[-405deg] -mb-2' : ''}`}></span>
            </div>
            
        </nav>
    )
}

export default Navbar