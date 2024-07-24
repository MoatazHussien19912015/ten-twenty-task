import React from 'react';
import { carouselImages } from '@/constants';
import Carousel from './Carousel';
type Props = {};

const CarouselSection = (props: Props) => {
    
    return (
      <section className='absolute h-[1586px] left-0 top-[900px] max-w-[1440px] w-full mt-10 bg-[#FFFCFA]'>
       
        <h1 className='absolute top-[50px] w-full md:left-[335px] md:top-[153px] xs:h-[71px] xs:w-[377px] md:w-full max-w-[749px] h-[92px] font-workSans font-normal text-[56px] leading-[76px] tracking-[-1px]  text-center'>
          Quality Products</h1>
          <p className=' absolute xs:left-[53px] top-[170px] xs:w-[312px] xs:h-[111px] md:left-[336.11px] md:top-[275px] md:h-[111px] max-w-[748px] text-[#7A7777] font-workSans font-normal text-[24px] leading-[28px] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Carousel images={carouselImages} />
        <h3 className='absolute  top-[1160px] font-workSans font-normal text-[36px] leading-[60px] tracking-[-1px] text-black text-center w-full'>Client 1</h3>
        <h3 className='absolute  top-[1232px] font-workSans font-normal text-[24px] leading-[28px]  text-[#7A7777]  text-center w-full'>Dubai, United Arab Emirates</h3>
        </section>
    );
  };
  
  export default CarouselSection;