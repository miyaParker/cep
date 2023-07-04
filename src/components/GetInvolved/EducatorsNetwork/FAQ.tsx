'use client'
import {forwardRef} from "react";
import Image from "next/image";
import FAQItem from "@/components/GetInvolved/EducatorsNetwork/FAQItem";
import {useState} from "react";
import {faqs} from "@/constants";
import Button from "@/components/Generic/Button";

const FAQ = forwardRef<HTMLDivElement>((props, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div ref={ref}
             className='w-full mx-auto mb-[128px] pt-[136px] lg:pt-[120px] lg:pb-[80px] flex flex-col items-center lg:flex-row lg:gap-x-[50px] xl:gap-x-[111px] max-w-[1440px] lg:px-[80px] xl:px-[140px]'>
            <div className='w-full lg:w-[50%] px-[20px] lg:px-0'>
                <h2 className='mx-auto lg:mx-0 text-center lg:text-left max-w-[427px] mb-[24px] font-neue font-bold text-[3rem] leading-[120%] text-[#0E0E10]'>Why
                    you should
                    join the
                    network</h2>
                <p className='mx-auto lg:mx-0 text-center lg:text-left font-matter leading-[150%] mb-[40px] max-w-[456px] text-[20px] text-[#333438]'>By <span
                    className='font-bold'>2030</span>, Sub-Saharan Africa
                    needs 17 million new
                    teachers to join the education workforce</p>
                <div className='flex items-center lg:items-start flex-col lg:flex-row  gap-x-[12px] mb-[40px]'>
                    <Image src='/stipend.svg' alt='Competitive Stipend' width={32} height={32}/>
                    <div>
                        <p className='text-center lg:text-left  text-[#333438] font-neue text-[20px] font-bold tracking-[0.28px]'>Competitive
                            Stipend</p>
                        <p className='text-center lg:text-left text-[#333438] max-w-[456px] text-[#333438] font-matter text-[17px] tracking-[0.28px]'>Competitive
                            monthly pay, with tons of additional
                            benefits and regular access to the re:learn Centre</p>
                    </div>
                </div>
                <div className='flex items-center lg:items-start flex-col lg:flex-row  gap-x-[12px] mb-[40px]'>
                    <Image src='/schedule.svg' alt='Competitive Stipend' width={32} height={32}/>
                    <div>
                        <p className='text-center lg:text-left font-neue text-[20px] font-bold tracking-[0.28px] text-[#333438] '>Flexible
                            Work
                            Schedule</p>
                        <p className='text-center lg:text-left max-w-[456px] text-[#333438] font-matter text-[17px] tracking-[0.28px] text-[#333438]'>With
                            an
                            average of 15-20 active teaching hours
                            each week</p>
                    </div>
                </div>
                <div className='flex items-center lg:items-start flex-col lg:flex-row gap-x-[12px] mb-[48px]'>
                    <Image src='/network.svg' alt='Competitive Stipend' width={32} height={32}/>
                    <div>
                        <p className='text-center lg:text-left font-neue text-[20px] font-bold tracking-[0.28px] text-[#333438]'>Build
                            your
                            Ed-Tech Network</p>
                        <p className='max-w-[456px] text-[#333438] font-matter text-[17px] tracking-[0.28px] text-[#333438]'>Work
                            with
                            young professionals who are passionate
                            about building thriving careers in the EdTech space.</p>
                    </div>
                </div>
                <a href="/get-involved/become-a-partner-at-relearn/apply">
                    <Button
                        btnText='Join our Network'
                        animate={true}
                        styles='block mb-[64px] lg:b-0 mx-auto lg:mx-0 lg:ml-[4px] bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] text-white text-center rounded-[40px]'/>
                </a>
            </div>
            <div
                className='w-full lg:w-[50%]  max-w-[570px] h-max w-full py-[40px] px-[28px] rounded-[3px] bg-[#F4F4F6]'>
                <p className='text-center lg:text-left font-neue font-bold text-[25px] tracking-[0.2px] mb-[32px]'>Frequently
                    Asked Questions</p>
                {faqs.map((faq, index) => <FAQItem data={faq} key={index} index={index + 1}
                                                   setShow={() => {
                                                       if (currentIndex === index + 1) setCurrentIndex(0)
                                                       else setCurrentIndex(index + 1)
                                                   }} currentIndex={currentIndex}/>)}
            </div>

        </div>
    )
})
export default FAQ
FAQ.displayName = 'FAQ'
