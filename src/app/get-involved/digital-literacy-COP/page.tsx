'use client'
import Hero from '@/components/GetInvolved/DigitalLiteracy/Hero';
import Goals from "@/components/GetInvolved/DigitalLiteracy/Goals";
import Change from "@/components/GetInvolved/DigitalLiteracy/Change";
import {useRef} from "react";

const BecomeAPartner = () => {
    const learnMoreRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Hero learnMoreRef={learnMoreRef} />
            <Goals ref={learnMoreRef}/>
            <Change/>
        </>
    );
};
export default BecomeAPartner;
