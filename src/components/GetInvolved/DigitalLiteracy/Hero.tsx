import Image from 'next/image';

const Hero = ({learnMoreRef}: { learnMoreRef: any }) => {
    const handleClick = () => {
        learnMoreRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <>
            <div
                className='mt-[80px] lg:mt-[124px] mx-auto gap-x-[40px] w-full flex flex-col lg:flex-row lg:justify-between items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px]'>
                <div className='w-full'>
                    <h1 className='max-w-[205px] lg:max-w-[337px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>


                        <span className='text-[#ED7636]'>Digital Literacy</span> Community of
                        Practice
                    </h1>

                    <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[420px] xl:max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter  text-center lg:text-left text-[#333438] text-[20px] lg:text-[22px] lg:mx-0'>
                        The Digital Literacy Community of Practice (COP) is an initiative of the Safe Online with Meta
                        Campaign that amplifies training to Nigerian citizens on the safe and responsible use of the
                        internet.
                    </p>
                    <div className="flex items-center gap-[20px] mb-[80px] lg:mb-0">
                        <a href="http://bit.ly/safeonlinewithmeta" target={'_blank'} className="mx-auto lg:mx-0 block">
                            <div className='cursor-pointer items-center gap-x-[16px]  flex'>
                                <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>Join
                                    our Community</p>
                            </div>
                        </a>
                        <div onClick={handleClick} className='cursor-pointer items-center gap-x-[16px] hidden lg:flex'>
                            <p className='text-[17px] font-matter text-red-100 font-medium tracking-[0.255px]'>Learn
                                More</p>
                            <div
                                className='rounded-full bg-red-100 w-[32px] h-[32px] flex items-center justify-center'>
                                <Image src='/arrow-down.svg' alt='why you should join us' width={24} height={24}/>
                            </div>
                        </div>

                    </div>
                </div>

                <Image
                    src='/cop.png'
                    alt='Our Focus is Education'
                    width={562}
                    height={496}
                    className='w-full h-auto aspect-[584/476] object-cover sm:max-w-[320px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[584px]'
                />
            </div>

        </>
    );
};
export default Hero;
