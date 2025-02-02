import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { PiHandbagLight } from "react-icons/pi";
import { SheetSide } from '../sheet/page';
import { NavigationMenuDemo } from '../navigation/page';

import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] flex justify-between items-center md:ml-[-35px] md:justify-between lg:w-[1320px] lg:h-[87px] lg:top-[45px] lg:left-[300px] lg:ml-[100px]'>
        {/* left side */}
        <SheetSide/>
        <ul className='text-white  font-semibold hidden md:block md:ml-[100px] '>
           <li className=' flex items-center space-x-8 md:space-x-4 text-base md:text-lg  '>
            <Link href="#">Home</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Pages</Link>
            <Link href="#"> <NavigationMenuDemo/></Link>
            <Link href="#">Shop</Link>
            <Link href="#">Contact</Link>
           </li>
         </ul>

    {/* right side */}
    
      <div className='flex'>

        <div className='  flex justify-start items-center w-[160px] h-[30px] mr-2 rounded-[27px] border-[#FF9F0D] border-[1px]'>
            <input type="text" placeholder='search....' className='w-full h-full bg-transparent p-2  outline-none ' />
            <FaSearch className='text-white  md:text-2xl font-extrabold pr-2' />
        </div>
        {/* icons */}
        <PiHandbagLight  className='text-white text-xl  mr-2 font-extrabold h-[30px] '/>
      </div>
    

    












      
    </header>
  )
}

export default Header
