import Image from "next/image";
import {useState} from "react";

const FAQItem = ({
                     data,
                     setShow, index, currentIndex
                 }: { data: { q: string, a: string }, currentIndex: number, index: number, setShow: () => void }) => {
    return (
        <div onClick={() => setShow()} className='cursor-pointer border-b border-b-1 border-[#DDDCE0] px-[8px]'>
            <div
                className='flex justify-between items-center py-[28px]'>
                <p className={`${currentIndex === index ? 'font-semibold text-[#0E0E10] pl-[8px]' : 'font-normal text-[#333438]'} font-matter text-[20px] tracking-[0.1px] `}>{data.q}</p>
                <Image className='cursor-pointer' src='/chevron-down.svg'
                       alt='read more' width={24}
                       height={24}/>
            </div>
            <p className={`${currentIndex === index ? 'block pl-[8px]' : 'hidden'}  w-full text-[17px] text-[#13131699]/60 tracking-[0.17px] leading-[150%] pb-[30px] max-w-[429px]`}>
                {data.a}
            </p>
        </div>
    )
}
export default FAQItem
