'use client';
import React, { useState } from 'react';
import './HeroSection.scss';
import Slider from './Slider';
import { heroImages } from '@/constants';
type Props = {};

const HeroSection = (props: Props) => {
    /* const [images, setImages] = useState<[string]>(heroImages); */
    const [currentImage, setCurrentImage] = useState<number>(0);

    const changeImage = () => {
       setCurrentImage(currentImage < 2?currentImage + 1:0);
    };

  return (
    <section style={{backgroundImage: `url(${heroImages[currentImage]})`}}  className='doittoo w-full bg-center bg-cover h-[900px] top-0 left-0 absolute -z-50 mb-5 '>
            <div className='absolute left-[135px] top-[350px] w-[756px] h-[176px]' /* className='my-[25%] ml-28 max-w-[756px] w-full' */>
                <h3 className='font-workSans text-[16px] font-normal capitalize leading-[150%] text-[#EEF4F9]'>welcome to TenTwenty farms</h3>
                <h1 className='font-workSans text-[64px] font-normal capitalize leading-[100%] text-[#EEF4F9]'>
                    from our farms 
                </h1>
                <h1 className='font-workSans text-[64px] font-normal capitalize leading-[100%] text-[#EEF4F9]'>
                to your hands
                </h1>
            </div>
            <Slider changeImage={changeImage} curretImage={currentImage} />
            
    </section>
  );
};

export default HeroSection;