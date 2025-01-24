import Image from 'next/image';
import Button from "@/components/Generic/Button";

const Hero = () => {
    return (
        <div
            className='mt-[80px] lg:mt-[124px] w-full gap-x-[40px] flex flex-col lg:flex-row items-start lg:justify-between max-w-[1440px] mx-auto px-[20px] lg:px-[80px] xl:px-[140px]'>
            <div className='w-full mx-auto lg:mx-0'>
                <h1 className='max-w-[205px] lg:max-w-[337px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                    re:learn is driven by{' '}
                    <span className='text-[#ED7636]'>partnerships</span>
                </h1>
                <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[450px] xl:max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                    With the support of partnerships, we co-create and
                    implement solutions for various stakeholders in the
                    education sector, driving a reformation in education,
                    whilst integrating the use of technology to solve the
                    most pressing challenges in education.
                </p>
                <a href="https://forms.gle/TaoYSxjhnHoAJMDu6" target='_blank'>
                    <Button
                        animate={true}
                        btnText=' Become a Partner'
                        styles='block mb-[64px] lg:b-0 mx-auto lg:mx-0 bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] text-white text-center rounded-[40px]'/></a>
            </div>
            <Image
                src='/partnerships.jpg'
                alt='re:learn is driven by partnerships'
                width={584}
                height={496}
                className='w-full lg:w-[500px] lg:h-[383px] max-w-[500px] lg:max-w-[584px] xl:w-[540px] xl:h-[445px] 2xl:w-[584px] 2xl:h-[496px] mx-auto lg:mx-0'
            />


        </div>
    );
};
export default Hero;
