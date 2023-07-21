'use client'
import Hero from '@/components/GetInvolved/EducatorsNetwork/Hero';
import FAQ from "@/components/GetInvolved/EducatorsNetwork/FAQ";
import {useRef} from "react";

const BecomeAPartner = () => {
    const faqRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Hero faqRef={faqRef}/>
            <FAQ ref={faqRef}/>
        </>
    );
};
export default BecomeAPartner;
