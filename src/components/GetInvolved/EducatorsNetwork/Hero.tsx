import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div
                className='w-full pt-[136px] lg:pt-0 flex flex-col lg:flex-row lg:justify-between max-w-[2560px] px-[20px] lg:px-[80px] xl:px-[140px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                <div>
                    <h1 className='max-w-[205px] lg:max-w-[436px] lg:mt-[312px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        Join a{' '}<span className='text-[#ED7636]'>new wave</span>{' '}
                        of educators
                    </h1>
                    <p className='mt-[20px] mb-[55.5px] leading-[140%] max-w-[462px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                        We are a community of individuals with
                        a passion for generating and supporting ideas
                        and creativity; a focal point for promoting and
                        celebrating excellence in teaching, mentoring
                        and networking
                    </p>
                    <div className='flex items-center gap-x-[16px]'>
                        <p className='text-[17px] font-matter text-red-100 font-medium tracking-[0.255px]'>See why you
                            should join us</p>
                        <div className='rounded-full bg-red-100 w-[32px] h-[32px] flex items-center justify-center'><Image src='/arrow-down.svg' alt='why you should join us' width={24} height={24}/></div>
                    </div>

                </div>

                <Image
                    src='/partnerships.svg'
                    alt='re:learn is driven by partnerships'
                    width={620}
                    height={490}
                    className='lg:w-[620px] lg:h-[490px] mx-auto lg:mx-0 lg:mt-[264px]'
                />


            </div>
        </>
    );
};
export default Hero;
