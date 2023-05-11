import Image from 'next/image';

const AffiliateCenter = () => {
    return (
        <div className='bg-[#0E0E10] text-white py-[80px] mt-[80px]'>
            <div className='font-neue font-bold flex flex-col items-center lg:justify-center lg:gap-x-[180px] lg:flex-row  lg:gap-x-[165px] lg:px-[80px] xl:px-[120px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                <div>
                    <div className='w-max px-[16px] py-[6px] mb-[24px] rounded-[24px] border border-[#43434C] bg-[#29292E] border-1 mx-auto lg:mx-0'>
                        <p className='text-center text-white/84 tracking-[0.2px] font-matter font-[500]'>
                            You get interesting benefits when you partner with
                            re:learn
                        </p>
                    </div>
                    <h2 className='max-w-[485px] mx-auto lg:mx-0 px-[38px] lg:px-0 text-[30px] lg:text-[3rem] text-center lg:text-left leading-[120%] mt-[28px] mb-[20px]'>
                        The Ed-Tech Centre of Excellence, TASUED
                    </h2>
                    <p className='font-matter text-[17px] lg:text-[20px] px-[30px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center lg:text-left text-white/90 tracking-[0.085px] leading-[150%]'>
                        We are committed to working with partners in the private
                        sector, public sector and government parastatals to
                        create world-class long term solutions to challenges in
                        the education sector.
                    </p>
                </div>
                <div className='relative max-w-[464px] max-h-[483px] mx-auto lg:mx-0 lg:mr-[36px]'>
                    <Image
                        src='/tasued.svg'
                        alt='The Ed-Tech Centre of Excellence, TASUED'
                        width={504}
                        height={503}
                        className='mx-auto mx-[20px] lg:mx-0'
                    />
                    <Image
                        src='/about-ellipse.svg'
                        alt='The Ed-Tech Centre of Excellence, TASUED'
                        width={268}
                        height={138}
                        className='w-[128px] h-[66px] lg:w-[268px] lg:h-[138px] max-w-[268px] max-h-[138px] absolute bottom-[-33px] lg:bottom-[-70px] right-0 lg:right-[-60px]'
                    />
                </div>
                <p className='font-matter mt-[73px]  text-[17px] lg:text-[20px] px-[30px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center lg:text-left text-white/90 tracking-[0.085px] leading-[150%] block lg:hidden'>
                    The centre through academic research, a community of ed-tech
                    enthusiasts, incubation of early-stage businesses, and a
                    research fellowship programme, will make a significant
                    contribution to e-learning and technology application in
                    schools & classrooms
                </p>
            </div>
        </div>
    );
};
export default AffiliateCenter;
