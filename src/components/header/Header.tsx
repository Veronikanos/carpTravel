'use client' 
// import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav=()=>{
        setNav(!nav);
    }

  return (
    <div className="cont mt-5">
      {/* <Link href='/'>LOGO</Link> */}
      <nav className="max-w-[1440px] m-auto flex justify-between items-center py-5 text-white">
        <Link href="/">LOGO</Link>
        <ul className="hidden sm:flex sm:gap-6 xl:gap-14">
          <li>
            <Link className='py-3 xl:py-7' href="/about">About</Link>
          </li>
          <li>
            <Link className='py-3 xl:py-7' href="/services">Services</Link>
          </li>
          <li>
            <Link className='py-3 xl:py-7' href="/career">Career</Link>
          </li>
          <li>
            <Link className='py-3 xl:py-7' href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link className='py-3 xl:py-7' href="/contacts">Contacts</Link>
          </li>
        </ul>
        {/* Mobile button*/}
        <div onClick={handleNav} className="block sm:hidden z-10">
            <button className='uppercase mr-0'>{nav ?  "close": 'Menu'}</button>
        </div>
        
        {/* Mobile menu */}
        {/* <div className=' '> */}
            {/* <button >close</button> */}
        <ul className={nav ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 w-full h-screen backdrop-blur-xl flex flex-col justify-center items-center  text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 w-full h-screen backdrop-blur-xl flex flex-col justify-center items-center  text-center ease-in duration-300"}>
        <li className='hover:underline-offset-4'>
              <Link href="/about" className="p-6 text-lg block">About</Link>
            </li>
            <li onClick={handleNav} className='hover:underline-offset-4'>
              <Link href="/services" className="p-6 text-lg block">Services</Link>
            </li>
            <li  onClick={handleNav} className='hover:underline-offset-4'>
              <Link href="/career" className="p-6 text-lg block">Career</Link>
            </li>
            <li onClick={handleNav} className='hover:underline-offset-4'>
              <Link href="/gallery" className="p-6 text-lg block">Gallery</Link>
            </li>
            <li onClick={handleNav} className='hover:underline-offset-4'>
              <Link href="/contacts" className="p-6 text-lg block">Contacts</Link>
            </li>
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;
