import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className='w-full pt-[136px] lg:pt-0 flex flex-col lg:flex-row lg:justify-center lg:gap-x-[111px] max-w-[2560px] px-[20px] lg:px-[80px] xl:px-[120px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                <div>
                    <h1 className='max-w-[205px] lg:max-w-[337px] lg:mt-[312px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        Our Focus is{' '}
                        <span className='text-[#ED7636]'>Education</span>
                    </h1>
                    <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                        We are committed to improving the quality of education
                        in Nigeria and across Africa, by using empirical
                        evidence from research-backed innovative teaching
                        methods and digital tools to improve learning outcomes.
                    </p>
                </div>

                <Image
                    src='/about-image.svg'
                    alt='Our Focus is Education'
                    width={506}
                    height={520}
                    className='lg:w-[506px] lg:h-[520px] mx-auto lg:mx-0 lg:mt-[264px]'
                />
            </div>
            <div className='mt-[80px] lg:mt-[124px] text-center font-neue'>
                <p className='text-[22px] lg:text-[25px] mx-auto mb-[28px] font-bold'>
                    Mission
                </p>
                <p className='font-[300] text-[36px] leading-[120%] lg:text-[60px] lg:px-0 px-[26px] max-w-[836px] mx-auto'>
                    Working with{' '}
                    <span className='font-bold'>key stakeholders</span> across
                    the public & private sectors, both nationally &
                    internationally, we aim to be the{' '}
                    <span className='font-bold'>largest community</span> of
                    stakeholders working to reimagine education on the
                    <span className='font-bold'> continent.</span>
                </p>
            </div>
        </>
    );
};
export default Hero;
