'use client'
import Hero from '@/components/GetInvolved/TeachersLounge/Hero';
import {useRef} from "react";
import Pillars from "@/components/GetInvolved/TeachersLounge/Pillars";
import CommunityComponents from "@/components/GetInvolved/TeachersLounge/CommunityComponents";

const BecomeAPartner = () => {
    const faqRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Hero faqRef={faqRef}/>
            <Pillars faqRef={faqRef}/>
            <CommunityComponents faqRef={faqRef}/>
        </>
    );
};
export default BecomeAPartner;
