import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#043873] text-white flex items-center'>

        <div className='w-[656px] h-[361px]'>
        <div className='w-[656px] h-[238px]'>
            <h2 className='font-bold text-[64px] leading[77.45px] tracking-[-0.02em] mb-6'>Get More Done with whitepace</h2>
            <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] pr-[40px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            <button className='w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg flex flex-row gap-[10px] p-5 text-lg font-normal items-center mt-[60px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300'><p>Try Whitepace free</p><span>&#8594;</span></button>
        </div>
        </div>
<div className='w-[824px] h-[549px] bg-[#C4DEFD]'></div>

    </div>


    </>
  )
}

export default Hero