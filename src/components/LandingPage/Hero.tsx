import Button from '@/components/Generic/Button';
import Image from 'next/image';

const Hero = ({href}: { href: any }) => {
    const handleClick = () => {
        href.current?.scrollIntoView({behavior: 'smooth',});
    };
    return (
        <div className='mx-auto overflow-hidden'>
            <div
                className='z-20 relative w-[100%] leading-[44px] lg:px-0 mx-auto bg-[url("/hero-ellipse-mobile.svg")] sm:bg-[url("/hero-ellipse.svg")] 2xl:bg-[url("/hero-ellipse-2xl.svg")] bg-left-top lg:bg-right-top bg-no-repeat 3xl:bg-none'>
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
                        src='/hero.jpg'
                        alt='hero image'
                        width={868}
                        height={477}
                        className='mx-auto px-[20px] lg:px-0 w-[818px] xl:w-[872px] h-auto my-[62px]'
                    />
                </div>
            </div>
        </div>
    );
};
export default Hero;
