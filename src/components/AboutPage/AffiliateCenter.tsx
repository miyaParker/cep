'use client'
import Image from 'next/image';
import Button from "@/components/Generic/Button";
import {usePathname, useSearchParams} from "next/navigation";
import {useEffect, useRef} from "react";

const AffiliateCenter = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    useEffect(() => {
        if (searchParams.get('id') === 'COE') {
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [id])

    return (
        <div className='bg-[#0E0E10] text-white py-[80px] mt-[80px]' ref={ref} id='COE'>
            <div
                className='max-w-[1440px] mx-auto font-neue font-bold flex flex-col items-start lg:justify-between px-[20px] lg:flex-row lg:px-[80px] xl:px-[140px]'>
                <div className='mx-auto lg:mx-0'>
                    <div
                        className='w-max px-[16px] py-[6px] mb-[24px] rounded-[24px] border border-[#43434C] bg-[#29292E] border-1 mx-auto lg:mx-0'>
                        <p className='text-center text-white/84 tracking-[0.2px] font-matter font-[500]'>
                            Our Affiliate Centre
                        </p>
                    </div>
                    <h2 className='max-w-[485px] mx-auto lg:mx-0 lg:px-0 text-[30px] lg:text-[3rem] text-center lg:text-left leading-[120%] mt-[28px] mb-[20px]'>
                        The Ed-Tech Centre of Excellence, TASUED
                    </h2>
                    <p className='font-matter text-[17px] lg:text-[20px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center lg:text-left text-white/90 tracking-[0.085px] leading-[150%]'>
                        The Ed-Tech CoE, created in partnership with the Tai
                        Solarin University of Education Ijebu Ode and
                        Co-Creation Hub Limited, aims to accelerate research and
                        development in the application of technology for
                        teaching, learning & management of education in Africa.
                    </p>
                    <p className='font-matter text-[17px] lg:text-[20px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center lg:text-left text-white/90 tracking-[0.085px] leading-[150%] hidden lg:block'>
                        The centre through academic research, a community of
                        ed-tech enthusiasts, incubation of early-stage
                        businesses, and a research fellowship programme, will
                        make a significant contribution to e-learning and
                        technology application in schools & classrooms
                    </p>
                    <a href='https://edtechcoe.com/' target='_blank'>
                        <Button btnText='Learn More' rightIcon='/arrow-up.svg' animate={true}
                                styles='bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] rounded-[40px] hidden lg:flex'/>
                    </a>
                </div>
                <div className='relative mx-auto lg:mx-0 lg:w-[420px] xl:w-[504px]'>
                    <Image
                        src='/tasued.svg'
                        alt='The Ed-Tech Centre of Excellence, TASUED'
                        width={504}
                        height={503}
                        className='w-full mx-auto mx-[20px] lg:mx-0'
                    />
                    <Image
                        src='/about-ellipse.svg'
                        alt='The Ed-Tech Centre of Excellence, TASUED'
                        width={268}
                        height={138}
                        className='w-[128px] h-[66px] lg:w-[268px] lg:h-[138px] max-w-[268px] max-h-[138px] absolute bottom-[-33px] lg:bottom-[-70px] right-0 lg:right-[-60px]'
                    />
                </div>
                <p className='font-matter mt-[73px]  text-[17px] lg:text-[20px] px-[30px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center lg:text-left text-white/90 tracking-[0.085px] leading-[150%] block lg:hidden'>
                    The centre through academic research, a community of ed-tech
                    enthusiasts, incubation of early-stage businesses, and a
                    research fellowship programme, will make a significant
                    contribution to e-learning and technology application in
                    schools & classrooms
                </p>
            </div>
        </div>
    );
};
export default AffiliateCenter;
