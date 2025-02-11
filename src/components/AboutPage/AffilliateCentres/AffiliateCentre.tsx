'use client'
import Image from 'next/image';
import {AffiliateCentre} from "@/types";
import Button from '@/components/Generic/Button';


const AffiliateCenter = ({title, description, image, arrow, link}: AffiliateCentre ) => {

    return (
        <div className=' w-screen bg-[#0E0E10] flex-1'>
            <div className='w-full max-w-[1440px] mx-auto px-[20px] lg:px-[80px] xl:px-[140px]'>
                <div className='w-full flex flex-col lg:flex-row items-center justify-between'>
                    <div className=''>
                        <div className='w-max px-[16px] py-[6px] mb-[24px] rounded-[24px] border border-[#43434C] bg-[#29292E] border-1 mx-auto lg:mx-0'>
                            <p className='text-center text-white/84 tracking-[0.2px] font-matter font-[500]'>
                                Our Affiliate Centres
                            </p>
                        </div>
                        <h2 className='font-bold font-neue max-w-[507px] mx-auto lg:mx-0 lg:px-0 text-[30px] lg:text-[3rem] text-center lg:text-left leading-[120%] mt-[28px] mb-[24px]'>
                            {title}
                        </h2>
                        <div className='flex flex-col gap-[20px] '>
                            {description.map((text, index) => (
                                <p
                                    key={index}
                                    className='font-matter text-[17px] lg:text-[20px] lg:px-0 max-w-[450px] font-normal mx-auto lg:mx-0  text-center lg:text-left text-white/90 tracking-[0.5%] leading-[150%]'
                                >
                                    {text}
                                </p>
                            ))}
                            <a
                                href={link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button
                                    styles='relative z-20 font-matter block mt-[40px] text-white bg-red-100 w-[12rem] h-[4rem] text-[1.125rem]'
                                    btnText='Learn More'
                                    rightIcon={'/arrow-up-right.svg'}
                                    animate={true}
                                />
                            </a>
                        </div>
                    </div>
                    <div className='relative mx-auto lg:mx-0 w-full max-w-[440px] lg:max-w-[545px] md:w-[440px] xl:w-[510px] 2xl:w-[545px]'>
                        <Image
                            src={image}
                            alt={title}
                            width={545}
                            height={553}
                            className='w-full max-w-[440px] lg:max-w-[545px] md:w-[440px] xl:w-[510px] 2xl:w-[545px] lg:mx-0'
                        />
                        <Image
                            src='/about-ellipse.svg'
                            alt='The Ed-Tech Centre of Excellence, TASUED'
                            width={268}
                            height={138}
                            className='z-20 w-[128px] h-[66px] lg:w-[268px] lg:h-[138px] max-w-[268px] max-h-[138px] absolute bottom-[0px] lg:bottom-[-40px] right-0 lg:right-[-60px] '
                        />
                    </div>
                </div>
                {arrow}
            </div>
        </div>
    );
};
export default AffiliateCenter;
