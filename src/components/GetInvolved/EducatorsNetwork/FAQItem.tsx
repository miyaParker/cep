'use client'
import Image from "next/image";

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
            {currentIndex > 1 ?
                <p className={`${currentIndex === index ? 'block pl-[8px]' : 'hidden'}  w-full text-[17px] text-[#13131699]/60 tracking-[0.17px] leading-[150%] pb-[30px] max-w-[429px]`}>
                    {data.a}
                </p> :
                <p className={`${currentIndex === index ? 'block pl-[8px]' : 'hidden'}  w-full text-[17px] text-[#13131699]/60 tracking-[0.17px] leading-[150%] pb-[30px] max-w-[429px]`}>
                    To get started, fill out the online application form <a
                    className='inline-block leading-[150%] text-red-100 underline' href='https://forms.gle/BJXEvk9jrkMhW7LH6' target='_blank'>here</a>. The Educators’
                    Network is currently open to residents
                </p>}
        </div>
    )
}
export default FAQItem
