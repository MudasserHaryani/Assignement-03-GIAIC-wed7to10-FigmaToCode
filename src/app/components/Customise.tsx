import React from 'react'
import Image from 'next/image'
import Icon from "@/app/assets/Icon.png";
const Customise = () => {
  return (
    <>
    <div className='w-[1920px] h-[812.09px] left-[1px] bg-[#ffffff] py-[140px] px-[220px] flex flex-row justify-between gap-[98px]'>
        <div className='bg-[#C4DEFD] w-[748px] h-[532.09px] '>
        </div>
        <div className='w-[669px] h-[411px] flex flex-col justify-center my-auto'>
            <h2 className='w-[669px] h-[174px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] pr-[60px]'>Customise it to your needs</h2>
            <p className='w-[669px] h-[90px] text-[#212529] font-normal text-lg justify-start leading-[30px] tracking-[-0.02em] pr-[70px] mt-[24px]'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            <button className='flex flex-row gap-[10px] bg-[#4F9CF9] py-[20px] px-[40px] justify-center items-center rounded-lg font-medium text-lg mt-[60px] w-[171px] h-[63px] text-[#ffffff] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300'>Let's go <span><Image src={Icon} alt='Icon'/></span></button>
        </div>
    </div>
    </>
  )
}

export default Customise