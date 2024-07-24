'use client';
import React, { useEffect, useRef } from 'react';
import './Carousel.scss';
import { carouselImages } from '@/constants';
import Image from 'next/image';
type Props = {
  images: string[];
};


const Carousel = ({images}: Props) => {
    const slider = React.useRef<HTMLInputElement>(null);
    const inner = React.useRef<HTMLInputElement>(null);
    let isDown = React.useRef<boolean>(false);
    let startX = React.useRef<number | null>(null);
    let scrollLeft = React.useRef<number | null>(null);
  
    useEffect(() => {
      if (slider && slider.current) {
        let sliderRef = slider.current;
        sliderRef.addEventListener("mousedown", mouseDownHandler);
        sliderRef.addEventListener("mouseenter", mouseEnterHandler);
        sliderRef.addEventListener("mouseup", mouseUpHandler);
        sliderRef.addEventListener("mousemove", mouseMoveHandler);
  
        return () => {
          sliderRef.removeEventListener("mousedown", mouseDownHandler);
          sliderRef.removeEventListener("mouseenter", mouseEnterHandler);
          sliderRef.removeEventListener("mouseup", mouseUpHandler);
          sliderRef.removeEventListener("mousemove", mouseMoveHandler);
        };
      }
    }, []);
  
    function mouseDownHandler(e: MouseEvent) {
      isDown.current = true;
      startX.current = e.offsetX - inner.current.offsetLeft;
      slider.current.style.cursor = "grabbing";
      
    }
  
    function mouseEnterHandler(e: MouseEvent) {
      slider.current.style.cursor = "grab";
    }
  
    
  
    function mouseUpHandler() {
      isDown.current = false;
      slider.current.style.cursor = "grab";
    }
  
    function mouseMoveHandler(e: MouseEvent) {
      if (!isDown.current) return;
      e.preventDefault();
      scrollLeft.current = e.offsetX;
      inner.current.style.left = `${scrollLeft.current - startX.current}px`;
    

    if (parseInt(inner.current.style.left) > 0) {
      inner.current.style.left = "0px";
    }

    if (inner.current.getBoundingClientRect().right < slider.current.getBoundingClientRect().right) {
    inner.current.style.left = `-${inner.current.getBoundingClientRect().width - slider.current.getBoundingClientRect().width}px`;
    }
      
    }
  
    return (
      <div className="container w-full" ref={slider}>
          <div className='items-container' ref={inner}>
            {images?.map((item, i) => (
              <div className='item flex flex-col items-center justify-center' key={i}>
                <Image src={item} width={434.9} height={619.21} alt='image' className='w-[232.67px] h-[331.27px] md:w-[434.9px] md:h-[619.21px]' />
              </div>
            ))}
          </div>
      </div>
    );
  }
  
  export default Carousel;