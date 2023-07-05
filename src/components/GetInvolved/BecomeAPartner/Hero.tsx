import Image from 'next/image';
import Button from "@/components/Generic/Button";

const Hero = () => {
    return (
        <>
            <div
                className='w-full pt-[136px] lg:pt-0 flex flex-col lg:flex-row items-start lg:justify-between max-w-[1440px] mx-auto px-[20px] lg:px-[80px] xl:px-[140px]'>
                <div className='mx-auto lg:mx-0'>
                    <h1 className='max-w-[205px] lg:max-w-[337px] lg:mt-[312px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]'>
                        re:learn is driven by{' '}
                        <span className='text-[#ED7636]'>partnerships</span>
                    </h1>
                    <p className='mt-[20px] mb-[48px] leading-[140%] max-w-[400px] xl:max-w-[479px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                        With the support of partnerships, we co-create and
                        implement solutions for various stakeholders in the
                        education sector, driving a reformation in education,
                        whilst integrating the use of technology to solve the
                        most pressing challenges in education.
                    </p>
                    <a href="/get-involved/become-a-partner-at-relearn/apply">
                        <Button
                            animate={true}
                            btnText=' Become a Partner'
                            styles='block mb-[64px] lg:b-0 mx-auto lg:mx-0 bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] text-white text-center rounded-[40px]'/></a>
                </div>
                <Image
                    src='/partnerships.svg'
                    alt='re:learn is driven by partnerships'
                    width={506}
                    height={520}
                    className='w-full max-w-[420px] xl:max-w-[620px] lg:w-[420px] xl:w-[620px] xl:h-[490px] mx-auto lg:mx-0 lg:mt-[264px]'
                />


            </div>
        </>
    );
};
export default Hero;
