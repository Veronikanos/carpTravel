'use client' 
// import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';

import { Karantina } from 'next/font/google';

const karantina = Karantina({   weight: ['400', '700'],
style: ['normal'],
subsets: ['latin'],
display: 'swap'})

const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav=()=>{
        setNav(!nav);
    } 

  return (
    <header className="padding-x pt-8 md:pt-6 z-10      relative         ">
      <nav className="max-width flex-between align-baseline text-white">
        <Link href="/">
        <Image
          src='/logo.png'
          alt='logo' 
          width={59}
          height={21}
          className='object-contain'
        />
        <span className={`${karantina.className} text-sm tracking-[2.59px]`}>CarpTravel</span>
        </Link>
        <ul className="hidden sm:flex sm:gap-6 xl:gap-14 text-sm tracking-[1.4px]">
          <li onClick={handleNav}>
            <Link className='py-3 xl:py-7 hover:underline underline-offset-4'  href="/about">About
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link className='py-3 xl:py-7 hover:underline underline-offset-4' href="/services">Services</Link>
          </li>
          <li onClick={handleNav}>
            <Link className='py-3 xl:py-7  hover:underline underline-offset-4' href="/career">Career</Link>
          </li>
          <li onClick={handleNav}>
            <Link className='py-3 xl:py-7  hover:underline underline-offset-4' href="/gallery">Gallery</Link>
          </li>
          <li onClick={handleNav}>
            <Link className='py-3 xl:py-7  hover:underline underline-offset-4' href="/contacts">Contacts</Link>
          </li>
        </ul>
        {/* Mobile button*/}
        <div onClick={handleNav} className="block sm:hidden z-10">
            <button className='uppercase mr-0 text-sm tracking-[1.4px]'>{nav ?  "close": 'Menu'}</button>
        </div>
        
        {/* Mobile menu */}
        {/* <div className=' '> */}
            {/* <button >close</button> */} 
        <ul className={nav ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 w-full h-screen backdrop-blur-xl flex-center flex-col  tracking-[1.8px]  text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 w-full h-screen backdrop-blur-xl flex-center flex-col  text-center ease-in duration-300"}>
            <li onClick={handleNav}>
              <Link href="/about" className="p-6 text-lg block">About</Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/services" className="p-6 text-lg block">Services</Link>
            </li>
            <li  onClick={handleNav}>
              <Link href="/career" className="p-6 text-lg block">Career</Link>
            </li>              
            <li onClick={handleNav}>
              <Link href="/gallery" className="p-6 text-lg block">Gallery</Link>
            </li>
            <li onClick={handleNav}>
              <Link href="/contacts" className="p-6 text-lg block">Contacts</Link>
            </li>
        </ul>
        {/* </div> */}
      </nav>
      </header>
  );
};

export default Header;
