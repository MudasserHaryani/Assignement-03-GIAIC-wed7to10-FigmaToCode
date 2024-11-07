import React from "react";
import Image from "next/image";
import Icon from "@/app/assets/Icon.png";
import work from "@/app/assets/work.png"


const Project = () => {
  return (
    <>
      <div className="px-[240px] py-[140px] bg-white">
        <div className="w-[1480px] h-[547px] flex flex-row justify-between">
          <div className="py-[68px] flex flex-col">
            <h2 className="w-[672px] h-[174px] text-7xl font-bold leading-[87.74px] tracking-[-0.02em] text-[#212529]">
              Project Management
            </h2>
            <p className="w-[672px] h-[90px] text-lg font-normal leading-[30px] tracking-[-0.02em] text-[#212529] pt-6 pr-[50px]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="w-[201px] h-[63px] bg-[#4F9CF9] rounded-md mt-[60px] text-[#FFFFFF] font-medium text-lg px-5 flex flex-row justify-center items-center gap-[10px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300">
              Get Started
              <span className="w-[14px] h-[14px] ">
                <Image src={Icon} alt="Icon"/>
              </span>
            </button>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>

    {/* SECOND PORTION */}
        <div className="w-[1480px] h-[661px] bg-white mt-[100px] flex flex-row gap-[100px] items-center">
          {/* LEFT SIDE PORTION */}
          <div className="flex w-[710px] h-[661px] relative">
            <Image src={work} alt="work together" className="w-[710px] h-[661px]"/>

          </div>

          {/* RIGHT SIDE PORTION */}
          <div className="w-[670px] h-[294px] gap-[60px] items-center">
            <h2 className="w-[670px] h-[87px] font-bold text-7xl leading-[87.14px] ">Work together</h2>
            <p className="w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] pt-6 pr-[40px]">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
            <button className="bg-[#4F9CF9] w-[186px] h-[63px] rounded-md mt-[90px] flex flex-row justify-center items-center gap-[10px] text-white py-[20px] px-[36px] font-medium text-lg hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300">Try it now <span><Image src={Icon} alt="Icon"/></span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
