'use client'

import {useState, forwardRef} from "react";
import {motion} from "framer-motion";
import Image from "next/image";

const Organizations = forwardRef<HTMLDivElement>((props, ref) => {
    const [currentCard, setCurrentCard] = useState(0);
    const cards = [
        {
            title: "re:learn",
            text: "The education practice of Co-Creation Hub Nigeria focused on using technology to improve STEM education by leveraging technology to create engaging content and introducing innovative teaching methods to STEM teachers with the aim of improving the learning outcomes of the students.",
        },
        {
            title: "eLimu",
            text: "A leading digital educational content provider in East Africa",
        },
        {
            title: "STEM Café",
            text: "A non-linear learning center where kids and young adults through play explore STEM through fun and interactive activities for them to experiment with amazing creations and ideas that develop lifelong learning and interest in STEM.",
        },
        {
            title: "Imisi 3D",
            text: "An Extended Reality (XR) creation lab focused on building the XR ecosystem in Nigeria, and beyond. It is dedicated to growing a community of African AR/VR creators, creating solutions using AR/VR, and providing educational engagement experiences with AR/VR.",
        }
    ];
    return (
        <section className='bg-[#0E0E10] text-white py-[80px] mt-[80px]' ref={ref} id='organizations'>
            <h2 className='font-bold font-neue max-w-[483px] tracking-[0.8%] mx-auto lg:px-0 text-[30px] lg:text-[3rem] text-center leading-[120%] mt-[28px] mb-[20px]'>
                Housing Four EdTech Organizations
            </h2>
            <div
                className='mt-[60px] lg:mt-[73px] max-w-[1440px] gap-x-[20px] mx-auto font-neue font-bold flex flex-col items-center lg:justify-between px-[20px] lg:flex-row lg:px-[80px] xl:px-[140px]'>

                <div className='flex-1 relative mx-auto lg:mx-0 w-max lg:w-full '>
                    <Image
                        src='/organization.png'
                        alt='The Ed-Tech Centre of Excellence, TASUED'
                        width={545}
                        height={553}
                        className='w-full max-w-[440px] lg:max-w-[545px] md:w-[440px] xl:w-[510px] 2xl:w-[545px] lg:mx-0'
                    />
                    <Image
                        src='/about-ellipse.svg'
                        alt='The Ed-Tech Centre of Excellence, TASUED'
                        width={268}
                        height={138}
                        className='w-[128px] h-[66px] lg:w-[268px] lg:h-[138px] max-w-[268px] max-h-[138px] absolute bottom-[-20px] lg:bottom-[-45px] left-[-40px] lg:left-[-99px] -scale-x-100 rotate-[30deg]'
                    />
                </div>
                <div
                    className={`flex-1  w-full max-w-[557px] min-h-[236px] flex flex-col gap-y-[16px] mt-12 lg:mt-0`}
                >
                    {cards.map((card, index) => (
                        <div className={`w-full h-max relative overflow-hidden`} key={index}>
                            <div
                                className={`rounded-[8px] relative px-[20px] md:px-[40px] ${
                                    currentCard === index
                                        ? `bg-white pb-[42px]`
                                        : "bg-[#F1F2F31A]"
                                }`}
                            >
                                <div
                                    onClick={() => {
                                        if (index === currentCard) {
                                            setCurrentCard(0);
                                        } else {
                                            setCurrentCard(index);
                                        }
                                    }}
                                    className="cursor-pointer relative z-10 flex items-center justify-between"
                                >
                                    <p
                                        className={`${
                                            currentCard === index
                                                ? "pb-[16px] text-[#0E0E10] "
                                                : "pb-[24px] text-white "
                                        }  font-neue cursor-pointer font-bold text-[24px] pt-[28px] md:text-[20px] tracking-[0.12px] lg:text-[24px]`}
                                    >
                                        {card.title}
                                    </p>
                                    <svg className={`${
                                        currentCard === index
                                            ? "stroke-[#0E0E10] rotate-180"
                                            : "stroke-white "
                                    }  `} width="16" height="10" viewBox="0 0 16 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L8 8L14 2" stroke-width="4" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <motion.div
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut"
                                    }}
                                    initial={{opacity: 0, display: "none"}}
                                    animate={{
                                        height:
                                            currentCard === index
                                                ? "max-content"
                                                : 0,
                                        opacity: currentCard === index ? 1 : 0,
                                        display:
                                            currentCard === index
                                                ? "block"
                                                : "hidden"
                                    }}
                                >
                                    <motion.p
                                        transition={{duration: 0.1}}
                                        initial={{opacity: 0}}
                                        animate={{
                                            opacity:
                                                currentCard === index ? 1 : 0
                                        }}
                                        className={`font-normal relative z-10 lg:font-medium text-[#0E0E10] leading-[144%] tracking-[0.27px] font-matter text-[16px] md:text-[17px] lg:text-[18px]`}
                                    >
                                        {card.text}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
})
export default Organizations;
Organizations.displayName = 'Organizations';
