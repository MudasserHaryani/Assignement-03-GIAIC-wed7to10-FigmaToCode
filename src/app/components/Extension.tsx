import React from 'react';
import Image from 'next/image';
import Icon from "@/app/assets/Icon.png";
const Extension = () => {
  return (
    <>
    <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#043873] text-[#ffffff] flex items-center justify-between gap-[98px]'>
        <div className='w-[696px] h-[294px] '>
            <h2 className='w-[697px] h-[87px] font-bold text-7xl'>Use as Extension</h2>
            <p className='w-[697px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] pr-[50px] mt-[24px]'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
            <button className='flex flex-row gap-[10px] bg-[#4F9CF9] py-[20px] px-[40px] justify-center items-center rounded-md font-medium text-lg mt-[60px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300'>Let's go <span><Image src={Icon} alt='Icon'/></span></button>
        </div>

        <div className='bg-[#C4DEFD] w-[686px] h-[479px]'></div>
    </div>


    </>
  )
}

export default Extension