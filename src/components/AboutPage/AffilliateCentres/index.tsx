'use client'
import {useSearchParams} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import AffiliateCenter from "@/components/AboutPage/AffilliateCentres/AffiliateCentre";
import Image from "next/image";

const AffiliateCentres = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    useEffect(() => {
        if (searchParams.get('id') === 'COE') {
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [id, searchParams])
    const [active, setActive] = useState<number>(2)
    const handleClickFirst = () => {
        setActive(2)
    }
    const handleClickSecond = () => {
        setActive(1)
    }

    const affiliateCenters = [
        {
            title: "SAIL Innovation Centre",
            description: [
                "SAIL Innovation Lab is a unique space that offers cross-functional programmes and opportunities, as well as a basic foundation that can inspire young people in Lagos East (students, graduates, entrepreneurs, job seekers) to gather, learn and create. The space fosters a comfortable and safe environment that encourages young people to see it as their second home.",
                "The primary purpose of the innovation space is to create employment opportunities, inspire grass-roots innovations and build partnerships and networks that drive economic prosperity and collaboratively solve significant social and business problems."
            ],
            image: "/sail-center.png",
            arrow: <div onClick={handleClickSecond}
                        className="mx-auto lg:mx-0 cursor-pointer mt-[20px] lg:mt-[50px] rounded-[10px] p-[5px]  pr-[10px] lg:pr-[20px] bg-[#E7E9EE33] bg-opacity-20 w-max flex items-center gap-2 lg:gap-5">
                <p className="rounded-[10px] px-[10px] lg:px-[20px] py-[5px] lg:py-[10px] text-white bg-[#0E0E10] font-medium font-matter">SAIL
                    Lab</p>
                <p className="text-white font-normal font-matter text-[14px] lg:[16px]">TASUED Ed-Tech centre</p>
                <Image
                    src={"/arrow-right-white.svg"}
                    alt={'back to tasued'}
                    width={24}
                    height={24}
                    className=''
                />
            </div>,
            link:'https://sailab.ng/',
        },
        {
            title: "The Ed-Tech Centre of Excellence, TASUED",
            description: [
                "The Ed-Tech CoE, created in partnership with the Tai Solarin University of Education Ijebu Ode and Co-Creation Hub Limited, aims to accelerate research and development in the application of technology for teaching, learning & management of education in Africa.",
                "The centre through academic research, community of ed-tech enthusiasts, incubation of early-stage businesses, and a research fellowship programme, will make a significant contribution to e-learning and technology application in schools & classrooms."
            ],
            image: "/tasued.jpg",
            arrow: <div onClick={handleClickFirst}
                        className="mx-auto lg:mx-0 cursor-pointer mt-[20px] lg:mt-[50px] rounded-[10px] p-[5px] pl-[10px] lg:pl-[20px] bg-[#E7E9EE33] bg-opacity-20 w-max flex items-center gap-2 lg:gap-5">
                <Image
                    src={"/arrow-right-white.svg"}
                    alt={'back to tasued'}
                    width={24}
                    height={24}
                    className='rotate-180'
                />
                <p className=" text-white font-normal font-matter text-[14px] lg:[16px]">SAIL
                    Lab</p>
                <p className="text-white bg-[#0E0E10] font-medium font-matter rounded-[10px] px-[10px] lg:px-[20px] py-[5px] lg:py-[10px]">TASUED
                    Ed-Tech centre</p>

            </div>,
            link:'https://edtechcoe.com/'
        }
    ]
    return (
        <div className='w-full bg-[#0E0E10] text-white py-[80px] mt-[80px] lg:mt-[128px]' ref={ref} id='COE'>
            <div className='overflow-hidden mx-auto'>
                <motion.div
                    animate={{
                        left:
                            active === 1
                                ? "-100vw"
                                : "0",
                    }}
                    className={` relative w-max flex`}>
                    {
                        affiliateCenters.map((center, i) => <AffiliateCenter {...center} key={i}/>)
                    }
                </motion.div>
            </div>
        </div>
    );
};
export default AffiliateCentres;
