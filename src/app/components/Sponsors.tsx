import Image from 'next/image'
import sponsors from "@/app/assets/sponsors.png"
import React from 'react'

const Sponsors = () => {
  return (
    <>
    
    <div className='w-[1920px] h-[538] bg-[#ffffff] flex flex-col justify-center items-center py-[140px] px-[220px] gap-[100px]'>
        <h1 className='w-[1482px] h-[87px] font-bold text-center text-7xl leading-[87.14px] tracking-[-0.02em] justify-center'>Our sponsors</h1>
        <Image src={sponsors} alt='sponsors' className='w-[1482px] h-[71px]'/>
    </div>

    </>
  )
}

export default Sponsors