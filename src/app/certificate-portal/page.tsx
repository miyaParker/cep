"use client"
import {ChangeEvent, FormEvent, useEffect, useReducer, useState} from "react";
import Image from "next/image";
import {getCertificate, getYears, getProgrammes} from "@/api";
import {years, programmes} from "@/app/constants";
import dynamic from "next/dynamic";
import VerifiedModal from "@/components/CertificatePortal/VerifiedModal";
import {useRouter} from 'next/navigation'
import Button from "@/components/Generic/Button";

export interface formData {
    name: string,
    programme: string,
    year: string
}


const formReducer = (state: formData, action: any) => {
    const {name, value} = action
    if (name === "reset") return ({
        name: "",
        programme: "",
        year: ""
    })
    state = {...state, [name]: value}
    return state
}
const CertificatePortal = () => {
    const router = useRouter()
    const VerifiedModal = dynamic(() => import("../../components/CertificatePortal/VerifiedModal"), {
        ssr: false,
    })
    const initialForm = {
        name: "",
        programme: "",
        year: ""
    }
    const [programmes, setProgrammes] = useState([])
    const [years, setYears] = useState([])
    const [active, setActive] = useState(false)
    const [loading, setLoading] = useState(false)
    const [state, dispatch] = useReducer(formReducer, initialForm)
    const [error, setError] = useState<any>({})
    const [showModal, setShowModal] = useState(false)
    const [verificationData, setVerificationData] = useState<any>({})

    const handleErrors = (data: formData) => {
        let isValid = false
        for (const [key, value] of Object.entries(data)) {
            if (!value.length) {
                setError({[key]: "Please, complete all input fields", message: "Please, complete all input fields"})
                return isValid
            }
        }
        return true;
    }
    const handleVerification = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setLoading(true)
        const isFormValid = handleErrors(state)
        if (isFormValid) {
            getCertificate(state).then(res => {
                if (res.error) {
                    setError({serverError: res.error})
                    dispatch({name: "reset"})
                } else {
                    setVerificationData(res.data)
                    setShowModal(true)
                }
                setLoading(false)
            })
        }

    }

    const handleDownload = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setLoading(true)
        const isFormValid = handleErrors(state)
        if (isFormValid) {
            getCertificate(state).then(res => {
                if (res.error) {
                    setError({serverError: res.error})
                    dispatch({name: "reset"})
                } else {
                    const {issued_to: name, file, program} = res.data.data
                    router.push(`/certificate-portal/download?name=${name}&program=${program}&file=${file.replace('file/d/', 'uc?id=').replace('/view?usp=share_link', '')}`)
                }
                setLoading(false)
            })
        }

    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        if (!active) setActive(true)
        setError({})
        dispatch({name: e.target.name, value: e.target.value})
    }
    useEffect(() => {
        getYears().then(res => setYears(res.data))
        getProgrammes().then(res => setProgrammes(res.data))
    }, [])
    return (
        <div
            className='overflow-hidden bg-[#F0F1F4] h-full mx-auto w-full  px-[20px] lg:px-[80px] xl:px-[140px]'>
            <div onClick={() => setActive(false)} className='pb-[68px] pt-[160px] lg:pt-[256px]'>
                <h1 className="mb-[20px] lg:mb-[24px] mx-auto leading-[120%] text-center w-full max-w-[300px] md:max-w-[347px] lg:max-w-[487px] font-bold font-neue text-[37px] md:text-[42px] lg:text-[60px]">Certificate
                    Verification Portal</h1>
                <p className="text-center mx-auto text-[20px] lg:text-[22px] leading-[140%] max-w-[284px] md:max-w-[504px] text-[#333438]/90 font-matter lg:max-w-[636px]">
                    Verification is essential. Confirm that You, an Employee or a Job Applicant completed a Programme at
                    re:learn
                </p>
            </div>

            <form
                className={`${active && !Object.keys(error).length ? 'border border-black-100' : ''}  ${
                    Object
                        .keys(error).length ? "form-error" : ""} ${
                    error
                        .serverError ? "input-error" : ""} mx-auto rounded-[8px] bg-[#FFFFFF] py-[64px] px-[20px] max-w-[539px] lg:max-w-[1024px] lg:px-[24px] lg:py-[16px] flex flex-col lg:flex-row lg:items-center`}>
                <div
                    className={`${
                        error
                            .name ? "input-error" : ""} flex flex-col pt-[12px] pb-[14px] rounded-[5px] lg:rounded-none  lg:border-[#E4E4E7] lg:border-r mb-[16px] lg:m-0 bg-[#F4F4F5] lg:bg-[#FFFFFF] px-[20px] lg:pr-[28px] lg:pl-0`}>
                    <label className="text-[14px] lg:text-[15px] text-[#333438]/80 font-sans">Name</label>
                    <input onClick={() => setActive(true)} onChange={handleChange} value={state.name} name="name"
                           placeholder="Participant’s full name"
                           className="bg-[#F4F4F5] lg:bg-[#FFFFFF] text-[#333438] font-sans outline-none text-[16px] lg:text-[17px]  placeholder:text-[#333438]/40 placeholder:text-[16px]"/>
                </div>
                <div
                    className={`${
                        error
                            .programme ? "input-error" : ""} flex flex-col pt-[12px] pb-[14px] lg:pr-[28px] lg:rounded-none lg:border-[#E4E4E7] lg:border-r lg:bg-[#FFFFFF] rounded-[5px] mb-[16px] lg:m-0 bg-[#F4F4F5] px-[20px]`}>
                    <label className="text-[14px] lg:text-[15px] text-[#333438]/80 font-sans">Programme</label>
                    <select required={true} onChange={handleChange} value={state.programme} name="programme"
                            className="text-[16px]  lg:text-[17px] bg-[#F4F4F5] lg:bg-[#FFFFFF] text-[#333438] ml-[-4px] font-sans outline-none text-[16px] placeholder:text-[#333438]/40 placeholder:text-[16px]">
                        <option value="" className="text-[#333438]/40" disabled={true} hidden={true}>Select Programme
                        </option>
                        {programmes.map((programme) => <option value={programme} key={programme}>{programme}</option>)}
                    </select>
                </div>
                <div
                    className={`flex flex-col pt-[12px] pb-[14px] rounded-[5px] bg-[#F4F4F5] lg:bg-[#FFFFFF] px-[20px] ${
                        error
                            .year ? "input-error" : ""}`}>
                    <label className="text-[14px] lg:text-[15px] text-[#333438]/80 font-sans">Year</label>
                    <select onChange={handleChange}
                            required={true}
                            value={state.year}
                            name="year"
                            className="text-[16px] lg:text-[17px] bg-[#F4F4F5] lg:bg-[#FFFFFF] text-[#333438] ml-[-4px] font-sans outline-none text-[16px] placeholder:text-[#333438]/40 placeholder:text-[16px]">
                        <option value="" className="text-[#333438]/40" disabled={true}
                                hidden={true}>Year
                        </option>
                        {years.map((year) => <option value={year} key={year}>{year}</option>)}
                    </select>
                </div>
                {Object.keys(error).length ?
                    <div className=" mt-[12px] flex lg:hidden max-w-[356px]"><Image className="mr-[8px]"
                                                                                    src="/error.svg"
                                                                                    alt="Form error"
                                                                                    width={20}
                                                                                    height={20}/><p
                        className="font-sans text-[15px] text-[#EF061D]">{error.serverError || error.message}</p>
                    </div> : null}
                <button
                    style={{opacity: Object.keys(error).length ? "60%" : "100%"}}
                    onClick={handleDownload}
                    className="outline-none text-[#FFF] mt-[68px] lg:mt-0 mx-auto w-max font-matter text-[17px] lg:text-[16px] font-[500] py-[20px] px-[42px] lg:px-[40px] bg-[#E23F27] rounded-[40px] tracking-[0.17px] lg:hidden">Download
                </button>
                <Button
                    handleClick={handleVerification}
                    disabled={loading}
                    btnText='Verify'
                    styles={`${Object.keys(error).length ? 'opacity-60' : 'opacity-100'} outline-none text-[#43434C] mt-[20px] lg:mt-0 mx-auto w-max font-sans text-[17px] lg:text-[16px] font-[500] py-[20px] px-[58px] bg-[#F1F2F3] rounded-[40px] tracking-[0.17px] lg:mr-[20px] lg:px-[32px]`}/>
                <Button
                    handleClick={handleDownload}
                    btnText='Download'
                    animate={true}
                    styles={`${Object.keys(error).length ? 'opacity-60' : 'opacity-100'} outline-none text-[#FFF] mt-[68px] font-[500] bg-[#E23F27]  tracking-[0.17px] lg:m-0 hidden lg:flex`}/>
            </form>
            {Object.keys(error).length ?
                <div className="mx-auto mt-[19px] max-w-[939px] hidden lg:flex"><Image className="mr-[8px]"
                                                                                       src="/error.svg"
                                                                                       alt="Form error" width={20}
                                                                                       height={20}/><p
                    className="font-sans text-[15px] text-[#EF061D]">{error.serverError || error.message}</p>
                </div> : null}

            {showModal ? <VerifiedModal data={verificationData.data} closeModal={() => setShowModal(false)}/> : null}
            <div onClick={() => setActive(false)} className='pb-[120px] lg:pb-[370px]'></div>
        </div>
    );
};
export default CertificatePortal;

