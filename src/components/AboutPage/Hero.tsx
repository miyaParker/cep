import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className='mx-auto w-full pt-[136px] lg:pt-0 flex flex-col lg:flex-row lg:justify-between max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px]'>
                <div>
                    <h1 className='max-w-[205px] lg:max-w-[337px] lg:mt-[312px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        Our Focus is{' '}
                        <span className='text-[#ED7636]'>Education</span>
                    </h1>
                    <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[420px] xl:max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                        We are committed to improving the quality of education
                        in Nigeria and across Africa, by using empirical
                        evidence from research-backed innovative teaching
                        methods and digital tools to improve learning outcomes.
                    </p>
                </div>

                <Image
                    src='/about-image.svg'
                    alt='Our Focus is Education'
                    width={584}
                    height={496}
                    className='w-full max-w-[400px] xl:max-w-[584px] lg:w-[400px] xl:w-[584px] mx-auto lg:mx-0 lg:mt-[264px]'
                />
            </div>
            <div className='mt-[80px] lg:mt-[124px] text-center font-neue'>
                <p className='text-[22px] lg:text-[25px] mx-auto mb-[28px] font-bold'>
                    Mission
                </p>
                <p className='w-full font-[300] text-[36px] lg:text-[55px] leading-[120%] xl:text-[60px] lg:px-0 px-[20px] max-w-[520px]  lg:max-w-[726px] xl:max-w-[836px] mx-auto'>
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
