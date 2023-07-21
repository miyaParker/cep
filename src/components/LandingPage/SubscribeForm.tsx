'use client'
import Image from 'next/image';
import Button from '@/components/Generic/Button';
import {useState} from "react";
import {subscribe} from "@/api";

const SubscribeForm = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    const [error, setError] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        subscribe(email).then(res => {
            if (res.status === 201) {
                setSubscribed(true)
                setEmail('')
            }
            if (res.error) {
                setError(res.error)
            }
        })
    }
    return (
        <div
            className='mx-auto w-[100%] mt-[163px] mb-[160px] max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px]'>
            <div
                className='px-[28px] md:px-[56px] bg-[#E23F27] text-white flex-col lg:flex-row flex lg:items-center justify-between py-[47px] lg:py-[2rem]  xl:py-[3rem] rounded-[12px] lg:px-[2rem] xl:px-[4rem]'>
                <div className='lg:mx-[20px] flex flex-col items-start xl:max-w-[407px]'>
                    <Image
                        src='mail.svg'
                        alt='subscribe to Relearn newsletter'
                        width={32}
                        height={32}
                    />
                    <p className='leading-[25px] mt-[15px] font-neue font-bold lg:leading-[35px] text-[22px] lg:text-[25px] lg:tracking-[1%]'>
                        Subscribe to our newsletter and get the latest updates
                        mailed to you.
                    </p>
                </div>

                {subscribed ?

                    <div
                        className={`flex lg:justify-between flex-col lg:flex-row items-center relative bg-[#B82D19] py-[14px] pl-[28px] pr-[14px] rounded-[6px] mt-[14px] lg:mt-0 xl:rounded-[60px]`}>
                        <div className='justify-center flex items-start lg:items-center'>
                            <Image src='/check-white.svg' alt='submitted' width={24} height={24}
                                   className='mr-[8px] hidden lg:block'/>
                            <p className='text-center font-matter leading-[128%] text-[16px] font-medium mr-[17px]'>You
                                have Successfully Subscribed to our Newsletter!</p>
                        </div>
                        <button onClick={() => setSubscribed(false)}
                                className='inline lg:block min-w-max mx-auto lg:mx-0 font-medium text-[#0E0E10] bg-white py-[18px] px-[27px] rounded-[2.5rem] mt-[10px] lg:mt-0'
                        >Got it
                        </button>

                    </div> :
                    <form onSubmit={handleSubmit}
                          className='w-[100%] flex-col lg:flex-row lg:bg-[#B82D19] py-[36px] flex justify-between items-center rounded-[6px] lg:px-[28px]'>
                        <input
                            value={email}
                            onChange={(e) => {
                                setError('')
                                setEmail(e.target.value)
                            }}
                            type='email'
                            placeholder='Enter your email'
                            required
                            className='rounded-[6px] lg:rounded-none px-[1rem] lg:px-0 font-matter mx-[20px] bg-[#B82D19] w-[100%] outline-none flex-1 lg:mr-[12px]  xl:mr-[47px] py-[17px] placeholder:text-white/70 lg:border-b lg:border-b-[1.4px] border-white/40 lg:bg-transparent '
                        />
                        {error ?
                            <div className="mx-auto max-w-[939px] flex"><Image className="mr-[8px]"
                                                                               src="/error.svg"
                                                                               alt="Form error"
                                                                               width={20}
                                                                               height={20}/><p
                                className="font-sans text-[15px] text-[#EF061D]">{error}</p>
                            </div> : null}
                        <Button
                            styles='bg-white py-[18px] px-[30px] text-[#0E0E10] mt-[20px] lg:mt-0 w-[100%] lg:w-max font-matter font-500'
                            btnText='subscribe'
                        />
                    </form>}

            </div>
        </div>
    );
};
export default SubscribeForm;
