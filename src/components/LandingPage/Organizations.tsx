import Image from 'next/image';

const Organizations = () => {
    return (
        <div className='mt-[10rem]'>
            <h2 className='text-center text-[3rem] font-bold mb-[3rem] w-[100%] max-w-[624px] mx-auto font-neue'>
                World-trusted organizations believe in what we do
            </h2>
            <div className='w-[100%] max-w-[2560px] px-[20px] lg:px-[80px] xl:px-[140px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-[140px] mx-auto'>
                <div className='rounded-tl-[6px] lg:rounded-tl-[4px] flex items-center justify-center border-2 border-gray-100 h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/google-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[70px] h-[23px] lg:h-[35px] lg:w-[104px] grayscale hover:grayscale-0'
                    />
                </div>
                <div className='border-2 border-l-0 border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/raspberry-pi-logo.svg'
                        alt='google logo'
                        width={120}
                        height={33}
                        className='w-[81px] h-[22px] lg:h-[33px] lg:w-[120px] grayscale hover:grayscale-0 transition-all delay-50 ease-in'
                    />
                </div>
                <div className='rounded-tr-[6px] md:rounded-tr-none border-2 border-l-0 border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/mcarthurf-logo.svg'
                        alt='google logo'
                        width={81}
                        height={19}
                        className='w-[81px] h-[29px] lg:h-[42px] lg:w-[120px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='md:rounded-tr-[6px] lg:rounded-none border-l-2 border-b-2 md:border-2 md:border-l-0 border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/europeanc-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[70px] h-[49px] lg:h-[72px] lg:w-[104px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='border-2 border-t-0 lg:border-t-2 lg:border-l-0 border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/meta-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[81px] h-[16px] lg:h-[24px] lg:w-[120px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>

                <div className='lg:rounded-tr-[4px] border-r-2 border-b-2 lg:border-2 lg:border-l-0 md:border-b-2 md:border-r-0 border-gray-100 flex items-center justify-center h-[]102px  md:h-[120px]lg:h-[144px] '>
                    <Image
                        src='/mastercardf-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[51px] h-[49px] lg:h-[72px] lg:w-[76px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='lg:rounded-bl-[4px] border-2 border-t-0 border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/uk-th-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[81px] h-[32px] lg:h-[48px] lg:w-[120px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='border-2 border-t-0 border-l-0 border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/lasric-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[81px] h-[29px] lg:h-[42px] lg:w-[120px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='md:rounded-bl-[6px] lg:rounded-none border-l-0 md:border-l-2 border-2 border-t-0 lg:border-l-0 md:border-l-2   border-gray-100 flex items-center justify-center h-[]102px  md:h-[120px]lg:h-[144px]'>
                    <Image
                        src='/lasg-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[63px] h-[49px] lg:h-[72px] lg:w-[93px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='rounded-bl-[6px] md:rounded-none border-2 border-t-0 md:border-l-0  border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/act-foundation.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[52px] h-[45px] lg:h-[66px] lg:w-[76px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='border-2 border-t-0 border-l-0  border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '>
                    <Image
                        src='/sail-logo.svg'
                        alt='google logo'
                        width={104}
                        height={35}
                        className='w-[81px] h-[42px] lg:h-[48px] lg:w-[120px] grayscale hover:grayscale-0 transition-all delay-50'
                    />
                </div>
                <div className='rounded-br-[6px] lg:rounded-br-[4px] border-2 border-t-0 border-l-0 border-gray-100 flex items-center justify-center h-[102px] md:h-[120px] lg:h-[144px] '></div>
            </div>
        </div>
    );
};
export default Organizations;
