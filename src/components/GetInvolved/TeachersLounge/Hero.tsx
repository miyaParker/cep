import Image from 'next/image';
import Button from "@/components/Generic/Button";

const Hero = ({pillarsRef}: { pillarsRef: any }) => {
    const handleClick = () => {
        pillarsRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <>
            <div
                className='w-full gap-x-[40px] mt-[80px] pb-[80px] lg:pb-[130px] lg:mt-[124px] flex flex-col items-center lg:flex-row lg:justify-between max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px] mx-auto'>
                <div className='w-full'>
                    <h1 className='max-w-[205px] lg:max-w-[485px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        Join the{' '}<span className='text-[#ED7636]'>Teachers’ Lounge</span>{' '}
                    </h1>
                    <p className='opacity-90 mt-[20px] mb-[55.5px] leading-[140%] max-w-[462px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#313235] text-[20px] lg:mx-0'>
                        The Teachers’ Lounge is a 21st-century community for teachers where they can develop relevant
                        skills that support their growth and help foster their students’ learning outcomes.
                    </p>

                    <a href="https://forms.gle/BJXEvk9jrkMhW7LH6" className='block xl:hidden'>
                        <Button
                            animate={true}
                            btnText={'Join the Teacher’s Lounge'}
                            styles='block mb-[64px] lg:b-0 mx-auto lg:mx-0 bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] text-white text-center rounded-[40px]'/></a>
                    <div className="flex items-center gap-[20px] hidden xl:flex">
                        <div onClick={handleClick} className='cursor-pointer items-center gap-x-[16px] '>
                            <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>Join
                                the Teacher’s Lounge</p>
                        </div>
                        <div onClick={handleClick} className='cursor-pointer items-center gap-x-[16px] hidden xl:flex'>
                            <p className='text-[17px] font-matter text-red-100 font-medium tracking-[0.255px]'>Learn
                                More</p>
                            <div className='rounded-full bg-red-100 w-[32px] h-[32px] flex items-center justify-center'>
                                <Image src='/arrow-down.svg' alt='why you should join us' width={24} height={24}/></div>
                        </div>
                    </div>

                </div>

                <Image
                    src='/lounge.png'
                    alt='re:learn is driven by partnerships'
                    width={584}
                    height={496}
                    className='w-full lg:w-[500px] lg:h-[383px] max-w-[500px] lg:max-w-[584px] xl:w-[540px] xl:h-[445px] 2xl:w-[584px] 2xl:h-[496px] mx-auto lg:mx-0'
                />


            </div>
        </>
    );
};
export default Hero;
Hero.displayName = 'Hero';
