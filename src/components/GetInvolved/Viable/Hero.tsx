import Image from 'next/image';

const Hero = ({objectivesRef}: { objectivesRef: any }) => {
    const handleClick = () => {
        objectivesRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <>
            <div
                className='mt-[80px] lg:mt-[124px] mx-auto gap-x-[40px] w-full flex flex-col lg:flex-row lg:justify-between items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px]'>
                <div className='w-full'>
                    <h1 className='max-w-[205px] lg:max-w-[337px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        Join{' '}
                        <span className='text-[#ED7636]'>Viable</span>
                    </h1>
                    <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[420px] xl:max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                        We are committed to improving the quality of education
                        in Nigeria and across Africa, by using empirical
                        evidence from research-backed innovative teaching
                        methods and digital tools to improve learning outcomes.
                    </p>
                    <div className="flex items-center gap-[20px]">
                        <a href="https://bit.ly/joinviable" target="_blank">
                            <div className='cursor-pointer items-center gap-x-[16px] hidden lg:flex'>
                                <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>Join
                                    our Community</p>
                            </div>
                        </a>
                            <div onClick={handleClick}
                                 className='cursor-pointer items-center gap-x-[16px] hidden lg:flex'>
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
                    src='/viable.png'
                    alt='Our Focus is Education'
                    width={584}
                    height={496}
                    className='w-full max-w-[480px] lg:max-w-[562px] lg:w-[480px] lg:h-[462px] xl:w-[500px] xl:h-[483px] 2xl:w-[584px] 2xl:h-[496px] mx-auto lg:mx-0'
                />
            </div>
            <div className='mt-[80px] lg:mt-[124px] mb-[80px] text-center font-neue'>
                <p className='text-[22px] lg:text-[25px] mx-auto mb-[28px] font-bold'>
                    Mission
                </p>
                <p className='w-full font-[300] text-[36px] lg:text-[55px] leading-[120%] xl:text-[60px] lg:px-0 px-[20px] max-w-[871px]  lg:max-w-[726px] xl:max-w-[836px] mx-auto'>
                    We aim to be a
                    <span className='font-bold'>{' '}leading voice{' '}</span>
                    influencing sustainable transformations{' '}
                    <span className='font-bold'> in Nigeria’s Education sector.</span>
                </p>
            </div>
        </>
    );
};
export default Hero;
