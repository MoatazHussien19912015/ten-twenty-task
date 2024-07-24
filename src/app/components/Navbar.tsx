import { navbarLinks } from '@/constants';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-between items-center h-[101px]  z-50 w-full max-w-[1400px] mt-8 p-8 border border-black bg-white'>
        <div className='w-[376px] h-5 text-sm flex justify-between max-sm:hidden '>
        {navbarLinks.map((link) => (
            <Link key={link.label}  href={link.route} className=''>
                {link.label}
            </Link>
        ))}
        </div>
        
        <button className='flex justify-around items-center   border border-black w-[148px] h-[36px] px-4  py-2 text-sm font-medium text-black transition hover:bg-transparent hover:bg-blue-600  active:text-blue-500'>
            <span className='text-[16px] leading-[110%] font-normal font-workSans'>Contact Us</span>
            <GoArrowRight className='w-[18px] h-[14px]' />
        </button>
        <RxHamburgerMenu size={48} className='max-sm:block hidden' />
        
    </nav>
  );
};

export default Navbar;