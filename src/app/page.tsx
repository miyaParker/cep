'use client'
import "./page.module.css"
import {useRef} from "react";
import Organizations from '@/components/LandingPage/Organizations';
import FeedbackForm from '@/components/LandingPage/FeedbackForm';
import Hero from '@/components/LandingPage/Hero';
import HowWeWork from '@/components/LandingPage/HowWeWork';
import Numbers from '@/components/LandingPage/Numbers';
import SubscribeForm from '@/components/LandingPage/SubscribeForm';
import Image from "next/image";

const Home = () => {
    const hWWRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <Hero href={hWWRef}/>
            <HowWeWork ref={hWWRef}/>
            <Numbers/>
            <Organizations/>
            <div
                className='cursor-pointer flex items-center justify-center learn-more w-[100%] mt-[50px] text-[#E23F27]'>
                <a href='/get-involved/become-a-partner-at-relearn'>
                    <p className='tracking-[1%] font-matter text duration-500'>
                        Learn more about our partnerships
                    </p>
                </a>
                <Image
                    src='/arrow-right-orange.svg'
                    alt='view more partnerships'
                    width={26}
                    height={24}
                    className='relative left-[4px] duration-500'
                />
            </div>
            <SubscribeForm/>
            <FeedbackForm/>
        </>
    );
};
export default Home;
