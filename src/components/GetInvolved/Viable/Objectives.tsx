'use client'
import {forwardRef} from "react";

const Objectives = forwardRef<HTMLDivElement>((props, ref) => {

    const objectives = ["Promote a shared culture of sustainable collaboration amongst important EdTech\n" +
    "                    stakeholders in an atmosphere of fun and dialogue.", "Build a pipeline of pre-service an in-service teachers as well as EdTech Enthusiasts\n" +
    "transitioning into more specific roles in Education Technology in order to attract more\n" +
    "talent into this sector.", "Connect viable EdTech products to showcase opportunities where they get support\n" +
    "and funding opportunities for sustainable market entry."]

    return (
        <div className=' mt-[50px] lg:mt-[64px] max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px] mx-auto' ref={ref}
             id='COE'>
            <h2 className='font-bold font-neue lg:px-0 text-[30px] lg:text-[40px] text-center leading-[120%] mt-[3rem] mb-[20px]'>
                Our Objectives
            </h2>
            <div className="flex flex-col gap-3 ">
                {objectives.map((objective, index) => <div key={index}
                                                           className="rounded pr-5 md:pr-12 lg:pr-28 mx-auto bg-[#F2F2F3] flex items-start gap-3 py-4 lg:py-8 pl-6 lg:pl-12  rounded-[4px]text-[#313235]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0L13.182 6.81802L20 10L13.182 13.182L10 20L6.81802 13.182L0 10L6.81802 6.81802L10 0Z"
                            fill="#0E0E10"/>
                    </svg>
                    <p className="text-[18px] lg:text-[20px] font-matter w-full max-w-[752px] tracking-[1%] leading-[120%] text-[#313235]">
                        {objective}
                    </p>
                </div>)}
            </div>
            <a href="https://bit.ly/joinviable" target="_blank">
                <div
                    className='cursor-pointer items-center gap-x-[16px] flex mt-[48px] mb-[145px] lg:mb-[185px] mx-auto w-max'>
                    <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>Join
                        Viable</p>
                </div>
            </a>
        </div>
    );
})
export default Objectives;
Objectives.displayName = 'Objectives';
