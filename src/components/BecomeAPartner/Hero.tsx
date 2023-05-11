import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className='w-full pt-[136px] lg:pt-0 flex flex-col lg:flex-row lg:justify-center lg:gap-x-[111px] max-w-[2560px] px-[20px] lg:px-[80px] xl:px-[120px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                <div>
                    <h1 className='max-w-[205px] lg:max-w-[337px] lg:mt-[312px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        re:learn is driven by{' '}
                        <span className='text-[#ED7636]'>partnerships</span>
                    </h1>
                    <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                        With the support of partnerships, we co-create and
                        implement solutions for various stakeholders in the
                        education sector, driving a reformation in education,
                        whilst integrating the use of technology to solve the
                        most pressing challenges in education.
                    </p>
                    <button className='bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] text-center rounded-[40px]'>
                        Become a Partner
                    </button>
                </div>

                <Image
                    src='/partnerships.svg'
                    alt='re:learn is driven by partnerships'
                    width={506}
                    height={520}
                    className='lg:w-[506px] lg:h-[520px] mx-auto lg:mx-0 lg:mt-[264px]'
                />
            </div>
        </>
    );
};
export default Hero;
