'use client'
import Image from 'next/image';
import Button from "@/components/Generic/Button";
import {useSearchParams} from "next/navigation";
import {useEffect, useRef} from "react";

const Objectives = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    useEffect(() => {
        if (searchParams.get('id') === 'COE') {
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [id, searchParams])

    return (
        <div className=' text-white py-[80px] mt-[80px]' ref={ref} id='COE'>

            <h2 className='max-w-[485px] mx-auto lg:mx-0 lg:px-0 text-[30px] lg:text-[3rem] text-center lg:text-left leading-[120%] mt-[28px] mb-[20px]'>
                Our Objectives
            </h2>
            <div className="pr-28 mx-auto bg-[#F2F2F3] flex items-center gap-3 py-8 pl-12 rounded-[4px] max-w-[752px] text-[#313235]">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L13.182 6.81802L20 10L13.182 13.182L10 20L6.81802 13.182L0 10L6.81802 6.81802L10 0Z"
                          fill="#0E0E10"/>
                </svg>
                <p className="text-[18px] lg:text-xl">
                    Promote a shared culture of sustainable collaboration amongst important EdTech
                    stakeholders in an atmosphere of fun and dialogue.
                </p>
            </div>


        </div>
    );
};
export default Objectives;
