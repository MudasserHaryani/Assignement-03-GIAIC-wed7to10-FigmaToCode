import Image from 'next/image'
import Icon from "@/app/assets/Icon.png"
import React from 'react'

const Work = () => {
  return (
    <>
    <div className='w-[1920px] h-[574px] bg-[#043873] py-[140px] px-[220px] left-[1px] text-[#ffffff]'>
        <div className='w-[1481px] h-[294px] flex flex-col justify-center items-center' >
            <h2 className='w-[1064px] h-[87px]  font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center'>Your work, everywhere you are</h2>
            <p className='w-[1064px] h-[60px] items-center font-normal text-lg leading-[30px] tracking-[-0.02em] justify-center text-center mt-[24px]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            <button className='w-[195px] h-[63px] rounded-lg py-[20px] px-[40px] gap-[10px] flex flex-row items-center justify-center bg-[#4F9CF9] mt-[60px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300'>Try Taskey <span><Image src={Icon} alt='Icon'/></span></button>
        </div>

    </div>
    
    </>
  )
}

export default Work