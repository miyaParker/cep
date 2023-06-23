'use client';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import {createPartner} from "@/api";
import FormData from "form-data";

interface IForm {
    fullName: string;
    email: string;
    organization: string,
    proposal: string,
    file: File | undefined
}

const PartnerForm = () => {
    const [data, setData] = useState<IForm>({
        fullName: '',
        email: '',
        organization: '',
        proposal: '',
        file: undefined
    } as IForm)
    const [error, setError] = useState<any>({})
    const [submitted, setSubmitted] = useState(false);

    const handleErrors = (data: IForm) => {
        let isValid = false
        for (const [key, value] of Object.entries(data)) {
            console.log(key, value)
            if (key === 'file' && value === undefined) {
                console.log()
                setError({[key]: "Please, complete all input fields", message: "Please, complete all input fields"})
                return isValid
            }
            if (key !== 'file' && !value.length) {
                setError({[key]: "Please, complete all input fields", message: "Please, complete all input fields"})
                return isValid
            }
        }
        return true;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const isFormValid = handleErrors(data)
        if (isFormValid) {
            const formData = new FormData()
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value)
            }
            createPartner(formData).then(res => {
                console.log("RESPONSE", res)
                if (res?.error) {
                    setError({serverError: res.error})
                }
            })
            setSubmitted(true)
            window.scrollTo({top: 10, behavior: 'smooth'})
        }

    };
    return (
        <div className='w-full'>
            <div className='w-full bg-[#0E0E10]'>
                <div
                    className='max-w-[1926px] mx-auto relative mt-[80px] lg:mt-[128px] bg-[#0E0E10] bg-[url("/ellipse-dark.svg")] bg-no-repeat'>
                    <a href="/get-involved/become-a-partner-at-relearn">
                        <div
                            className='ml-[20px] lg:ml-[80px] mt-[2rem] xl:my-[96px] font-matter absolute text-[17px] xl:ml-[140px] mr-[162px] pr-[18px] lg:pr-[24px] py-[13.5px] pl-[10px] lg:pl-[16px] flex items-center gap-x-[8px] font-matter bg-[#29292E] border border-1 border-[#43434C] rounded-[40px]'>
                            <Image className='rotate-180' width={24} height={24} src='/arrow-right-white.svg'
                                   alt='relearn'/><p
                            className='text-white text-[17px] font-medium leading-[17px]'>Back</p>
                        </div>
                    </a>
                    <h1 className='px-[10px] lg:px-0 pt-[116px] pb-[56px] xl:pt-[96px] lg:pb-[165px] text-center font-neue font-bold text-[30px] sm:text-[36px]  md:text-[48px] text-white'>Become
                        a partner at
                        re:learn</h1>
                </div>
            </div>
            <div className="bg-[#E5E5E5] pb-[10rem] px-[20px] lg:px-0 ">

                <form
                    className={`${submitted ? 'hidden' : 'block'} relative top-[28px] lg:top-[-69px] max-w-[640px] bg-white mx-auto py-[4rem] px-[3rem] rounded-[8px] partner-form`}
                    onSubmit={handleSubmit}>
                    <Image
                        className='w-[68px] h-[47px] md:w-[110px] h-[58px] top-[-60px] right-[40%] absolute lg:right-[-23px] lg:top-[-37px]'
                        src='/arrow-down-orange.svg' alt='become a partner' width={110} height={58}/>
                    <p className='hidden lg:block md:absolute text-[#E36654] lg:top-[-56px] lg:right-[-180px] rotate-[13.74deg]'>We
                        will love to work with you!</p>
                    <p className='font-matter font-semibold text-[25px] mb-[20px]'>
                        Tell us about yourself
                    </p>
                    <div
                        className='rounded-[5px] flex flex-col mb-4 w-[100%] mb-[48px] h-[3rem]'>
                        <label
                            htmlFor='fullName'
                            className='font-matter rounded-t-[5px] border-0 bg-gray-400 w-[100%] text-[15px] px-5 pt-[12px] pb-0 mb-0'
                        >
                            Full Name
                        </label>
                        <input
                            value={data.fullName}
                            onChange={(e) => {
                                setError({})
                                setData({...data, fullName: e.target.value})
                            }}
                            placeholder='Enter your full name'
                            id='fullName'
                            type='text'
                            className='rounded-b-[5px] placeholder:text-gray-200/50 placeholder:text-[18px] outline-0 font-matter block w-[100%] bg-gray-400 pb-3 px-5'
                        />
                    </div>
                    <div
                        className='rounded-[5px] flex flex-col mb-4 w-[100%] mb-[48px] h-[3rem]'>
                        <label
                            htmlFor='email'
                            className='font-matter rounded-t-[5px] border-0 bg-gray-400 w-[100%] text-[15px] px-5 pt-[12px] pb-0 mb-0'
                        >
                            Email
                        </label>
                        <input
                            value={data.email}
                            onChange={(e) => {
                                setError({})
                                setData({...data, email: e.target.value})
                            }}
                            placeholder='Enter your email'
                            id='email'
                            type='text'
                            className='rounded-b-[5px] placeholder:text-gray-200/50 placeholder:text-[18px] outline-0 font-matter block w-[100%] bg-gray-400 pb-3 px-5'
                        />
                    </div>
                    <div
                        className='rounded-[5px] flex flex-col mb-4 w-[100%] mb-[48px] h-[3rem]'>
                        <label
                            htmlFor='organization'
                            className='font-matter rounded-t-[5px] border-0 bg-gray-400 w-[100%] text-[15px] px-5 pt-[12px] pb-0 mb-0'
                        >
                            Organization
                        </label>
                        <input
                            value={data.organization}
                            onChange={(e) => {
                                setError({})
                                setData({...data, organization: e.target.value})
                            }}
                            placeholder='Organization'
                            id='organization'
                            type='text'
                            className='rounded-b-[5px] placeholder:text-gray-200/50 placeholder:text-[18px] outline-0 font-matter block w-[100%] bg-gray-400 pb-3 px-5'
                        />
                    </div>
                    <p className='font-matter font-semibold text-[25px] mt-[4rem] mb-[20px]'>
                        Why you will love to partner with us?
                    </p>
                    <div
                        className='rounded-[5px] flex flex-col rounded-4 mb-4 w-[100%] rounded-5'>
                        <label
                            htmlFor='proposal'
                            className='rounded-t-[5px] bg-gray-400 w-[100%] text-[15px] px-5 pt-[12px] pb-0 mb-0 font-matter'
                        >
                            Partnership Proposal
                        </label>
                        <textarea
                            value={data.proposal}
                            onChange={(e) => {
                                setError({})
                                setData({...data, proposal: e.target.value})
                            }}
                            placeholder='Write your message here'
                            id='proposal'
                            className='font-matter resize-none rounded-b-[5px] placeholder:text-gray-200/50 placeholder:text-[18px] outline-0 block w-[100%] bg-gray-400 px-5'
                            rows={7}
                        />
                    </div>
                    <div className='flex mb-4 mb-[24px] gap-x-[8px] items-center'>
                        <div
                            className='h-[2rem] w-[2rem] flex items-center justify-center bg-gray-400 rounded-full'>
                            <Image src='/paperclip.svg' alt='attach file here' width={16} height={18}/>
                        </div>
                        <label
                            htmlFor='file'
                            className='font-matter cursor-pointer border-0 text-[15px] pb-0 mb-0 w-max flex-1'
                        >
                            {data.file === undefined ? 'Attach files here (size limit: 5MB)' : data.file.name}
                        </label>
                        <input
                            onChange={(e) => {
                                setError({})
                                if (e.target.files) {
                                    console.log(e.target.files)
                                    setData({...data, file: e.target.files[0]})
                                }
                            }}
                            id='file'
                            type='file'
                            className='hidden'
                        />
                    </div>
                    {Object.keys(error).length ?
                        <div className="mx-auto max-w-[939px] flex"><Image className="mr-[8px]"
                                                                           src="/error.svg"
                                                                           alt="Form error"
                                                                           width={20}
                                                                           height={20}/><p
                            className="font-sans text-[15px] text-[#EF061D]">{error.serverError || error.message}</p>
                        </div> : null}
                    <div className='max-w-[30rem]'>
                        <button
                            className='bg-red-100 justify-center
                           mt-[48px] font-matter duration-500 rounded-[2.5rem] mx-auto flex items-center relative w-max text-white px-[42px] py-[20px] text-[18px] capitalize'>Send
                        </button>
                    </div>
                </form>
                <div
                    className={`${submitted ? 'flex' : 'hidden'} flex relative top-[28px] lg:top-[-69px] max-w-[640px] bg-white mx-auto py-[40px] px-[28px] rounded-[8px]`}>
                    <div
                        className='flex items-center justify-center bg-[#ECECEF] border border-1 border-[#DFDFE2] rounded-full w-[40px] h-[40px]'>
                        <Image src='/check-grey.svg' alt='submitted' width={24} height={24}/>
                    </div>
                    <div className='pl-[16px]'>
                        <p className='font-neue text-[25px] font-bold'>Your Message has been Sent!</p>
                        <p className='text-[17px] max-w-[387px]'>Our team will get back to you once your proposal
                            is reviewed</p>
                    </div>
                    <button onClick={() => setSubmitted(false)}
                            className='absolute text-white bottom-[25px] right-[28px] bg-[#1EA941] py-[8px] px-[24px] rounded-[2.5rem] mr-0 min-w-max'
                    >Got it
                    </button>

                </div>
            </div>
        </div>
    )
        ;
};
export default PartnerForm;
