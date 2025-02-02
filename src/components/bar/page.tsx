import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '700',
  subsets: ['latin', 'greek', 'cyrillic'],
});

const Bar = () => {
  return (
    <main className={`w-full h-[40px] flex justify-center items-center font-bold lg:text-[40px] lg:ml-[-100px]  ${roboto.className}`}>
      <h1 className='text-[#FF9F0D] text-xl sm:3xl lg:mt-[20px]'>
        Food <span className='text-white'>tuck</span>
      </h1>
    </main>
  );
};

export default Bar;

