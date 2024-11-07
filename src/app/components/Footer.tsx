import React from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/Logo.png'
const Footer = () => {
  return (
    <>
      <div className='bg-[#043873] text-white w-[1920px] h-[461px] left-[1px] py-[140px] px-[220px] gap-[200px]'>
        <div className='w-[1480px] h-[289px] flex flex-col gap-[100px]'>
            {/* link box */}
            <div className='w-[1480px] h-[169px] flex flex-row justify-between gap-[100px]'>
                <div className='w-[295px] h-[169px] flex flex-col gap-[15px]'>
                    <Image src={Logo} alt='Logo' className='w-[191px] h-[34px]'/>
                    <p className='w-[240px] h-[120px] font-normal text-lg leading-[30px] tracking-[-0.02em] pr-[20px]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>

                <div className='w-[295px] h-[127px] flex flex-col gap-[15px]'>
                    <h2 className='w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]'>Product</h2>
                    <p className='w-[70px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Overview</p>
                    <p className='w-[70px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Pricing</p>
                    <p className='w-[177px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Customer stories</p>
                </div>

                <div className='w-[295px] h-[127px] flex flex-col gap-[15px]'>
                    <h2 className='w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]'>Resources</h2>
                    <p className='w-[70px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Blog</p>
                    <p className='w-[128px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Guides & tutorial</p>
                    <p className='w-[177px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Help center</p>
                </div>

                <div className='w-[295px] h-[127px] flex flex-col gap-[15px]'>
                    <h2 className='w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]'>Company</h2>
                    <p className='w-[70px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>About us</p>
                    <p className='w-[128px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Careers</p>
                    <p className='w-[177px] h-[20px] font-normal text-base hover:scale-110 hover:text-yellow-500 hover:cursor-pointer'>Media kit</p>
                </div>

            </div>
            {/* copyright */}
            <div className='w-[1480px] h-[20px] flex justify-center items-center'>
                <p>©2021 Whitepace LLC.</p>
            </div>
        </div>
        </div>  

    </>
  )
}

export default Footer