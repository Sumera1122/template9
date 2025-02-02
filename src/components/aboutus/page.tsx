import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import "../aboutus/aboutus.css";
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
});


import React from 'react'


const Aboutus = () => {
  return (
    // left side
    <div className="aboutus-container">
        <div className="sub-container">
        <h4 className={`heading ${greatVibes.className} `}>About us</h4>
        <div className="heading-2"> <span>we</span> create the best <h2> foody product</h2></div>
        <p className="paragraph">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum, Urna, elit augue urna, vitae feugiat pretium donec id elementum, Ultrices mattis sed vitae mus risus, Lacus nisi, et ac dapibus sit eu velit in consequate.

        </p>
           
        <div className="check-container">
        <p> <FaCheck  className="mr-2  text-[14px]"/>  Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        <p> <FaCheck className="mr-2   text-[14px]" />   Quisque diam pellentesque bibendum non dui volutpat fringilla. </p>
        <p> <FaCheck  className="mr-2  text-[14px]"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="button-div">
            <button>Read More</button>
        </div>
        </div>
        {/* left end here */}

        {/* right side */}
        <div className="images-container">
            <Image src={'/images/image2.jpg'} alt="profile" width={400} height={200} className="img1"  />
            <Image src={'/images/image3.jpg'} alt="profile" width={100} height={100} className="img2"/>
            <Image src={'/images/image4.jpg'} alt="profile" width={100} height={100} className="img3" />

        </div>
      
    </div>
    
  )
}

export default Aboutus
