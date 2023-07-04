import Button from '@/components/Generic/Button';
import Image from 'next/image';

const Hero = ({href}: { href: any }) => {
    const handleClick = () => {
        href.current?.scrollIntoView({behavior: 'smooth',});
    };
    return (
        <div className='mx-auto overflow-x-hidden'>
            <div
                className='z-20 relative w-[100%] leading-[44px] lg:px-0 mx-auto before:absolute before:z-10 xl:before:content-[url("/hero-ellipse.svg")] xl:before:left-[285px] 3xl:before:content-[""]'>
                <h1 className='pt-[152px] lg:pt-[256px] mx-auto px-[47px] lg:px-0 relative font-neue font-bold hero-text text-[37px] lg:text-[3.75rem] z-20 max-w-[751px] min-w-[4rem] leading-[1.2] text-center text-black-100'>
                    Using{' '}
                    <span className='text-orange-100'>
                        research-backed methods & technology
                    </span>{' '}
                    to improve learning outcomes.
                </h1>
                <Button
                    styles='relative z-20 font-matter block mx-auto mt-[40px] text-white bg-red-100 w-[12rem] h-[4rem] text-[1.125rem]'
                    btnText='Learn More'
                    rightIcon={'/arrow-down.svg'}
                    handleClick={handleClick}
                    animate={true}
                />
                <div className='relative z-20'>
                    <Image
                        src='/hero-image.svg'
                        alt='hero image'
                        width={818}
                        height={475}
                        className='mx-auto px-[20px] lg:px-0 w-[818px] xl:w-[872px] h-auto my-[62px]'
                    />
                </div>
            </div>
        </div>
    );
};
export default Hero;
