'use client';
import Button from '@/components/Generic/Button';
import {useEffect, useState} from 'react';
import Image from 'next/image';

const FeedbackForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [classes, setClasses] = useState('show-form');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmitted(!submitted);
    };
    const showForm = () => {
        setSubmitted(!submitted);
    };
    useEffect(() => {
        console.log(submitted);
        if (submitted) {
            setClasses('hide-form');
        } else setClasses('show-form');
    }, [submitted]);
    return (
        <>
            <div className='z-10'>
                <h2 className='text-center font-neue font-bold text-[3rem] mt-[120px] mb-[20px] mx-auto max-w-max'>
                    We’ll love to hear from you!
                </h2>
                <p className='mx-auto text-center font-matter text-[20px] max-w-[495px] mb-[40px]'>
                    Whether you are just curious or want to share an idea with
                    us, we will be in touch.
                </p>
            </div>
            <div className='overflow-hidden z-0 mx-auto w-[100%] px-[20px] lg:px-0 relative top-0'>
                <form className={classes} onSubmit={handleSubmit}>
                    <div
                        className='mx-auto rounded-[5px] flex flex-col mb-4 w-[100%] max-w-[30rem] lg:w-[30rem] mb-[48px] h-[3rem]'>
                        <label
                            htmlFor='email'
                            className='font-matter rounded-t-[5px] border-0 bg-gray-400 w-[100%] text-[15px] px-5 pt-[12px] pb-0 mb-0'
                        >
                            Email
                        </label>
                        <input
                            placeholder='Enter your email'
                            id='email'
                            type='text'
                            className='rounded-b-[5px] placeholder:text-gray-200/50 placeholder:text-[18px] outline-0 font-matter block w-[100%] bg-gray-400 pb-3 px-5'
                        />
                    </div>
                    <div
                        className='rounded-[5px] flex flex-col rounded-4 mb-4 w-[100%] max-w-[30rem] lg:w-[30rem] mx-auto rounded-5'>
                        <label
                            htmlFor='message'
                            className='rounded-t-[5px] bg-gray-400 w-[100%] text-[15px] px-5 pt-[12px] pb-0 mb-0 font-matter'
                        >
                            Message
                        </label>
                        <textarea
                            placeholder='Leave a message'
                            id='message'
                            className='font-matter resize-none rounded-b-[5px] placeholder:text-gray-200/50 placeholder:text-[18px] outline-0 block w-[100%] lg:w-[30rem] bg-gray-400 px-5'
                            rows={7}
                        />
                    </div>
                    <div className='mx-auto max-w-[30rem]'>
                        <button
                            className={`${
                                submitted
                                    ? 'bg-[#1BC645] relative top-0 justify-between'
                                    : 'bg-red-100 justify-center'
                            }
                           mt-[48px] font-matter duration-500 rounded-[2.5rem] mx-0 flex items-center relative w-[100%] max-w-[30rem] lg:w-[30rem] text-white p-[12px] text-[18px] capitalize `}
                        >
                            <div className='flex items-center gap-x-[8px] justify-between'>
                                {' '}
                                {submitted ? (
                                    <Image
                                        src='/check.svg'
                                        alt='message sent'
                                        width={24}
                                        height={24}
                                        className='ml-[22px]'
                                    />
                                ) : null}
                                <span>{`${
                                    submitted
                                        ? 'Your Message has been sent!'
                                        : 'Submit'
                                }`}</span>
                            </div>
                            {submitted ? (
                                <p className='bg-[#1EA941] py-[8px] px-[24px] rounded-[2.5rem] mr-0 min-w-max'
                                >Got it</p>
                            ) : null}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default FeedbackForm;
