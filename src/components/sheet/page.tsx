"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SlMenu } from "react-icons/sl";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button> <SlMenu 
            className="text-white text-xl sm:3xl" /></Button>
        
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
              <h1 className='text-[#FF9F0D] text-xl font-extrabold '>Food <span className='text-black'>tuck</span></h1>
                
                
                </SheetTitle> 
            </SheetHeader>

            <ul className=''>
           <li className=' flex flex-col gap-4 font-bold cursor-pointer text-black text-base'>
            <Link  href="#">Home</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Pages</Link>
            <Link href="#">About</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Contact</Link>
           </li>
         </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
