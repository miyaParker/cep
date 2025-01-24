'use client'
import Image from "next/image";
import {motion} from "framer-motion";

const FAQItem = ({
                     data,
                     setShow, index, currentIndex
                 }: { data: { q: string, a: string }, currentIndex: number, index: number, setShow: () => void }) => {
    return (
        <motion.div onClick={() => setShow()} className='cursor-pointer border-b border-b-1 border-[#DDDCE0] px-[8px]'>
            <div
                className='flex justify-between items-center py-[28px]'>
                <p className={`${currentIndex === index ? 'font-semibold text-[#0E0E10] pl-[8px]' : 'font-normal text-[#333438]'} font-matter text-[20px] tracking-[0.1px] `}>{data.q}</p>
                <Image className='cursor-pointer' src='/chevron-down.svg'
                       alt='read more' width={24}
                       height={24}/>
            </div>

            <motion.div
                initial={{height: 0, opacity: 0}}
                animate={{
                    height: currentIndex === index ? "auto" : 0,
                    opacity: currentIndex === index ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                    height: {duration: 0.3},
                    opacity: {duration: 0.3}
                }}
                style={{
                    overflow: 'hidden',
                    display: currentIndex === index ? 'block' : 'none'
                }}
            >
                {currentIndex > 1 ?
                    <p className={`${currentIndex === index ? ' pl-[8px]' : ''} font-matter  w-full text-[17px] text-[#13131699]/60 tracking-[0.17px] leading-[150%] max-w-[429px] mb-3`}>{data.a}</p> :
                    <p className={`${currentIndex === index ? ' pl-[8px]' : ''} font-matter w-full text-[17px] text-[#13131699]/60 tracking-[0.17px] leading-[150%] pb-[30px] max-w-[429px]`}>
                        To get started, fill out the online application form <a
                        className='inline-block leading-[150%] text-red-100 underline'
                        href='https://forms.gle/BJXEvk9jrkMhW7LH6' target='_blank'>here</a>. The Educators’
                        Network is currently open to residents
                    </p>}

            </motion.div>
        </motion.div>
    )
}
export default FAQItem
