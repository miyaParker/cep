import Image from 'next/image';

interface CardProps {
    icon: string;
    title: string;
    text: string;
    textColor?: string;
    styles: string;
}

const Card = ({ icon, title, text, textColor, styles }: CardProps) => {
    return (
        <div
            className={`px-[1.8rem] xl:px-[2.5rem] w-[100%] max-w-[374px] lg:w-[374px] lg:h-[352px] text-[1.1rem] py-[30px] xl:py-[53px] font-matter ${styles}`}
        >
            <Image
                src={icon}
                alt='content creation'
                className='mx-auto lg:mx-0'
                width={48}
                height={48}
            />
            <p className='text-center lg:text-left font-neue font-bold text-[25px] mt-[42px] mb-[14px] mx-auto lg:mx-0 max-w-max'>
                {title}
            </p>
            <p
                className={`mx-auto max-w-max text-center lg:text-left font-[17px] font-normal opacity-[0.84] ${textColor}`}
            >
                {text}
            </p>
        </div>
    );
};
export default Card;
