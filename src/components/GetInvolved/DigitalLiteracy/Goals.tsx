'use client'
import Image from 'next/image';
import {forwardRef} from "react";

const Goals =forwardRef<HTMLDivElement>((props, ref) => {
    const objectives = ["Improve Nigerians' outlook toward protecting online personal data and privacy", "Reduce barriers to the adoption of digital literacy and online safety among Stakeholders."]

    return (
        <div className='py-[80px] mt-0 lg:mt-[80px]' ref={ref} id='COE'>
            <div className='
               mx-auto
               gap-x-[40px]
               w-full
               flex
               flex-col-reverse
               items-center
               lg:flex-row
               lg:justify-between
               max-w-[1440px]
               px-[20px]
               lg:px-[80px]
               xl:px-[140px]
           '>
                <Image
                    src='/goals.png'
                    alt='Our Focus is Education'
                    width={562}
                    height={496}
                    className='
                       w-full
                       h-auto
                       aspect-[584/476]
                       object-cover
                       sm:max-w-[320px]
                       md:max-w-[420px]
                       lg:max-w-[450px]
                       xl:max-w-[584px]
                       mt-6
                       lg:mt-0
                   '
                />
                <div className='flex flex-col w-full max-w-[600px]'>
                    <h2 className='
                    w-full
                       max-w-[454px]
                       font-bold
                       mx-auto
                       lg:mx-0
                       leading-[120%]
                       text-left
                       font-neue
                       text-[#0E0E10]
                       text-[28px]
                       sm:text-[30px]
                       md:text-[32px]
                       lg:text-[48px]
                   '>
                        Goals That Move Us Forward
                    </h2>
                    <p className='
                       mt-[20px]
                       mb-[48px]
                       leading-[140%]
                       w-full
                       max-w-[420px]
                       xl:max-w-[479px]
                       mx-auto
                       lg:mx-0
                       tracking-[0.1px]
                       lg:tracking-[0.11px]
                       font-matter

                 text-left
                       text-[#333438]
                       text-[20px]
                       lg:text-[22px]
                   '>
                        We are committed to improving the quality of education
                        in Nigeria and across Africa, by using empirical
                        evidence from research-backed innovative teaching
                        methods and digital tools to improve learning outcomes.
                    </p>
                    <div className="flex flex-col gap-4">
                        {objectives.map((objective, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 rounded-[4px] text-[#313235] w-full"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 mt-1"
                                >
                                    <path
                                        d="M10 0L13.182 6.81802L20 10L13.182 13.182L10 20L6.81802 13.182L0 10L6.81802 6.81802L10 0Z"
                                        fill="#0E0E10"
                                    />
                                </svg>
                                <p className="
               font-matter
               text-[20px]
               lg:text-[22px]
               tracking-[0.5%]
               max-w-[429px]
               leading-[29px]
           ">
                                    {objective}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Goals;
Goals.displayName = 'Goals';
