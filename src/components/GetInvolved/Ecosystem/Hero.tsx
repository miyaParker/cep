import Image from 'next/image';
import explore from "@/components/GetInvolved/Ecosystem/Explore";

const Hero = ({orgRef, exploreRef}: { orgRef: any ,exploreRef: any }) => {
    const onClickLearnMore = () => {
        orgRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    const onClickExplore = () => {
        exploreRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <>
            <div
                className='mt-[80px] lg:mt-[124px] mx-auto gap-x-[40px] w-full flex flex-col lg:flex-row lg:justify-between items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px]'>
                <div className='w-full'>
                    <h1 className='max-w-[510px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        The {' '}
                        <span className='text-[#ED7636]'>dynamic
                        world </span>of education
                    </h1>
                    <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[420px] xl:max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                        Seated in a 4-storey building, our EdTech
                        Ecosystem houses 4 EdTech
                        organisations
                        focusing on unique pathways to
                        incorporating
                        technology use for Education.

                    </p>
                    <div className="flex items-center gap-[20px]">
                        <div onClick={onClickExplore} className='cursor-pointer items-center gap-x-[16px] flex'>
                            <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>Book a Tour</p>
                        </div>
                        <div onClick={onClickLearnMore} className='cursor-pointer items-center gap-x-[16px] hidden lg:flex'>
                            <p className='text-[17px] font-matter text-red-100 font-medium tracking-[0.255px]'>Learn
                                More</p>
                            <div className='rounded-full bg-red-100 w-[32px] h-[32px] flex items-center justify-center'>
                                <Image src='/arrow-down.svg' alt='why you should join us' width={24} height={24}/></div>
                        </div>

                    </div>
                </div>
                <Image
                    src='/ecosystem.png'
                    alt='Our Focus is Education'
                    width={562}
                    height={496}
                    className='w-full max-w-[480px] lg:max-w-[562px] lg:w-[480px] lg:h-[462px] xl:w-[500px] xl:h-[483px] 2xl:w-[562px] 2xl:h-[544px] mx-auto lg:mx-0'
                />
            </div>
        </>
    );
};
export default Hero;
