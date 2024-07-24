'use client';
import { heroImages } from '@/constants';
import React, { useEffect, useState } from 'react';

type Props = {
    changeImage: () => void;
    curretImage: number
};

const Slider = ({changeImage, curretImage}: Props) => {
    const [images, setImages] = useState(heroImages);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(false);

    
    

    

   
    

  return (
    <div className='absolute left-[135px] top-[692px] w-[345px] h-[141px] flex justify-between'>
            <svg viewBox="0 0 200 200">
                <path key={curretImage} onAnimationEnd={changeImage} className={'doit'} d="M2 12L2 188 Q 2,198 20,198 L 188 198 Q198,198 198,188 L198 12 Q198,2 188,2 L12 2 Q2,2 2,12z" stroke="white" stroke-width="4" fill="none"/>
                <image x="50%" y="50%"  transform="translate(-60,-60)"
                    width="120" 
                    height="120" 
                    xlinkHref={images[curretImage]} 
                    
                    
                />
            </svg>
            <div className='flex justify-center items-center gap-5 text-white'>
                <span>{curretImage + 1}</span>
                <hr className='w-[103px] border-t-2' />
                
                <span>{heroImages.length}</span>
            </div>
            </div>
  );
};

export default Slider;