import Image from 'next/image';
import Button from '@/components/Generic/Button';

const SubscribeForm = () => {
    return (
        <div className='pb-[5rem] lg:pb-[10rem] mx-auto w-[100%] mt-[164px] max-w-[2560px] px-[20px] lg:px-[80px] xl:px-[120px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px] '>
            <div className='px-[28px] md:px-[56px] bg-[#E23F27] text-white flex-col lg:flex-row flex lg:items-center justify-between py-[47px] lg:py-[2rem]  xl:py-[3rem] 2xl:py-[3.5rem] rounded-[12px] lg:px-[2rem] xl:px-[4rem] 2xl:px-[4.5rem] xl:gap-x-[43px] 2xl:gap-x-[53px]'>
                <div className='lg:mx-[20px] flex flex-col items-start xl:max-w-[407px] 2xl:max-w-[480px]'>
                    <Image
                        src='mail.svg'
                        alt='subscribe to Relearn newsletter'
                        width={32}
                        height={32}
                    />
                    <p className='leading-[25px] mt-[15px] font-neue font-bold lg:leading-[35px] text-[22px] lg:text-[25px] 2xl:text-[30px] lg:tracking-[1%]'>
                        Subscribe to our newsletter and get the latest updates
                        mailed to you.
                    </p>
                </div>

                <form className='w-[100%] flex-col lg:flex-row lg:bg-[#B82D19] py-[36px] flex justify-between items-center rounded-[6px] lg:px-[28px]'>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        required
                        className='rounded-[6px] lg:rounded-none px-[1rem] lg:px-0 font-matter mx-[20px] bg-[#B82D19] w-[100%] outline-none flex-1 lg:mr-[12px]  xl:mr-[47px] py-[17px] placeholder:text-white/70 lg:border-b lg:border-b-[1.4px] border-white/40 lg:bg-transparent '
                    />
                    <Button
                        styles='bg-white py-[18px] px-[30px] text-[#0E0E10] mt-[20px] lg:mt-0 w-[100%] lg:w-max font-matter font-500'
                        btnText='subscribe'
                    />
                </form>
            </div>
        </div>
    );
};
export default SubscribeForm;
