
import Image from "next/image";
import React from 'react';

import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <main className="w-full max-h-full flex justify-center items-center flex-col  sm:flex-row  md:flex-row  md:w-full lg:w-[1920] lg:h-[950px] ">
    
      

      {/* Content on the left side */}
      <div className="w-[50%] h-[100%] ml-[-160px]  lg:w-[472px] lg:h-[365px]  lg:left-[300px] rounded-[30px] lg:mb-[500px]">
        <h3 className={` text-[18px] sm:ml-[120px] md:ml-[120px] lg:w-[249px] lg:h-[40px]  lg:left[300px]   text-[#FF9F0D] lg:text-[32px] lg:leading-[2.5rem] ${greatVibes.className}`}> It's Quick & Amusing!</h3>
        <div className=" text-white text-[20px] sm:text-[30px] sm:ml-[120px] md:ml-[120px] lg:w-[472px] lg:h-[136px] lg:top-[341px] lg:left-[300px] lg:mt-[20px] font-bold lg:text-[32px] lg:leading-[24px]"> <span className='text-[#FF9F0D] '>Th</span> e Art of speed
        <h2 className="lg:mt-[6px]">food Quality</h2></div>
        <p className="  text-white md:ml-[120px] sm:ml-[120px] lg:w-418px lg:h-[48px] lg:top-[509px] lg:left-[300px] lg:mt-[-60px] font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
        <div>
        <button className="w-[80px] h-[30px] rounded-[20px] mt-[20px] bg-[#FF9F0D] text-[12px] p-2 font-bold sm:ml-[120px] md:ml-[120px] md:mb-[80px] lg:mt-[50px] lg:w-[150px] lg:h-[60px] lg:rounded-[40px]"> See Menu</button>
      </div>
      </div>

      <div>
        <Image src={'/images/image1.png'} alt="picture" width={200} height={200} className="w-[240px] h-[100%] ml-[120px] mt-[-100px]sm:ml-[120px] md:ml-[120px] md:w-[300px]md:mt-[30px] lg:h-[670px] lg:w-[877.8px] lg:top-[160px] lg:left-[900px] lg:mb-[350px]" />
      </div>

      







      
    </main>
  );
};

export default Hero;
