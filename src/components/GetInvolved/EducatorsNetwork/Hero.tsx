import Image from 'next/image';
import Button from "@/components/Generic/Button";

const Hero = ({faqRef}: { faqRef: any }) => {
    const handleClick = () => {
        faqRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
            <div
                className='mt-[80px] lg:mt-[124px] w-full gap-x-[40px] flex flex-col lg:flex-row lg:justify-between items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px] mx-auto'>
                <div className='w-full'>
                    <h1 className='max-w-[205px] lg:max-w-[436px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
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
                    <a href="https://forms.gle/BJXEvk9jrkMhW7LH6" className='block lg:hidden'>
                        <Button
                            animate={true}
                            btnText={'Join our Network'}
                            styles='block mb-[64px] lg:b-0 mx-auto lg:mx-0 bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] text-white text-center rounded-[40px]'/></a>
                    <div onClick={handleClick} className='cursor-pointer items-center gap-x-[16px] hidden lg:flex'>
                        <p className='text-[17px] font-matter text-red-100 font-medium tracking-[0.255px]'>See why you
                            should join us</p>
                        <div className='rounded-full bg-red-100 w-[32px] h-[32px] flex items-center justify-center'>
                            <Image src='/arrow-down.svg' alt='why you should join us' width={24} height={24}/></div>
                    </div>

                </div>

                <Image
                    src='/educators-network.jpg'
                    alt='re:learn is driven by partnerships'
                    width={584}
                    height={496}
                    className='w-full lg:w-[500px] lg:h-[383px] max-w-[500px] lg:max-w-[584px] xl:w-[540px] xl:h-[445px] 2xl:w-[584px] 2xl:h-[496px] mx-auto lg:mx-0'
                />


            </div>
    );
};
export default Hero;
Hero.displayName = 'Hero';
