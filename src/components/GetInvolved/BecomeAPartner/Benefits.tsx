import Image from 'next/image';

const AffiliateCenter = () => {
    return (
        <div className='bg-[#0E0E10] text-white py-[80px] mt-[80px]'>
            <div className='font-neue font-bold flex flex-col items-center lg:justify-center lg:gap-x-[180px] lg:flex-row  lg:gap-x-[165px] lg:px-[80px] xl:px-[140px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                <div>
                    <h2 className='max-w-[485px] mx-auto lg:mx-0 px-[38px] lg:px-0 text-[30px] lg:text-[3rem] text-center lg:text-left leading-[120%] mt-[28px] mb-[20px]'>
                        You get interesting benefits when you partner with
                        re:learn
                    </h2>
                    <p className='font-matter text-[17px] lg:text-[20px] px-[30px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center lg:text-left text-white/90 tracking-[0.085px] leading-[150%]'>
                        We are committed to working with partners in the private
                        sector, public sector and government parastatals to
                        create world-class long term solutions to challenges in
                        the education sector.
                    </p>
                </div>
                <div className='relative max-w-[464px] px-[20px] lg:px-0 max-h-[483px] mx-auto lg:mx-0 lg:mr-[36px]'>
                    <Image
                        src='/benefits.svg'
                        alt='Benefits when you join'
                        width={550}
                        height={340}
                        className='mx-auto mx-[20px] lg:mx-0'
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
