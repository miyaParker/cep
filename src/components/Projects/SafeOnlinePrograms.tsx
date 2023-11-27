'use client'
import { programs } from "@/constants";
import { useState } from "react";
const SafeOnlinePrograms=()=>{
  const [currentProgram, setCurrentProgram] = useState(0);

  return(
    <>
    <div className="max-w-[698px] mx-auto">
    <p
      className="text-[#0E0E10] mt-[128px] opacity-[84%] py-[8px] px-[18px] font-medium bg-[#F1F2F3] rounded-[20px] border border-[#E4E5E7] w-max">
      Our Programmes</p>
  <h2
  className="font-neue mt-[20px] font-bold text-[25px] leading-[120%] tracking-[0.125px] text-[#0E0E10]">Designed
  to foster internet
  responsibility & safety</h2>
  </div>
  <div
  className="w-full mt-[32px] overflow-scroll max-w-[784px] mx-auto bg-[#0E0E10] py-[32px] px-[20px] rounded-[6px]">
  <div className="flex gap-[8px] mt-[32px] min-w-[620px] w-full">
  <div className="w-[250px] flex flex-col gap-[8px]">
    {programs.map((program, index) => <button
        className={`${currentProgram === index ? "text-white font-bold" : "text-[#A9ABB2] font-medium"} block text-left py-[14px] pl-[16px] text-[14px] md:text-[17px] lg:text-[18px] font-neue leading-[128%] tracking-[0.27px] bg-white bg-opacity-[0.08] rounded-[4px] border border-[rgba(205, 252, 188, 0.15)]`}
  onClick={() => setCurrentProgram(index)}
  key={`program-${index}`}><p className={program.styles}>{program.title}</p></button>)}
  </div>
  <div className="rounded-[4px] py-[32px] px-[28px] flex-1 bg-[#DBFCCF]">
  <h3
    className="text-[#0E0E10] text-[20px] md:text-[22px] lg:text-[25px] font-neue tracking-[0.4px] leading-[120%] font-bold">{programs[currentProgram].title}</h3>
    <p
  className="mt-[12px] text-[#232324] text-[15px] md:text-[16px] lg:text-[18px] tracking-[0.3px] leading-[150%]">{programs[currentProgram].description}</p>
    </div>
    </div>
    </div>
  </>
  )
}

export default SafeOnlinePrograms
