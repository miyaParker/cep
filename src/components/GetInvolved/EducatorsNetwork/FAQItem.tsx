'use client'
import Image from "next/image";
import {useState} from "react";

const FAQItem = ({data}: { data: { q: string, a: string } }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div className='border-b border-b-1 border-[#DDDCE0] px-[8px]'>
            <div
                className='flex justify-between items-center py-[28px] '>
                <p className='font-matter text-[20px] tracking-[0.1px] text-[#333438]'>{data.q}</p>
                <Image onClick={() => setShowDetails(!showDetails)} className='cursor-pointer' src='/chevron-down.svg'
                       alt='read more' width={24}
                       height={24}/>
            </div>
            <p className={`${showDetails ? 'block' : 'hidden'} w-full text-[17px] text-[#13131699]/60 tracking-[0.17px] leading-[150%] pb-[30px] max-w-[429px]`}>
                {data.a}
            </p>
        </div>
    )
}
export default FAQItem
