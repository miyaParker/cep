'use client'
import Hero from '@/components/GetInvolved/TeachersLounge/Hero';
import {useRef} from "react";
import Pillars from "@/components/GetInvolved/TeachersLounge/Pillars";
import CommunityComponents from "@/components/GetInvolved/TeachersLounge/CommunityComponents";

const TeachersLounge = () => {
    const pillarsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Hero pillarsRef={pillarsRef}/>
            <Pillars ref={pillarsRef}/>
            <CommunityComponents/>
        </>
    );
};
export default TeachersLounge;
