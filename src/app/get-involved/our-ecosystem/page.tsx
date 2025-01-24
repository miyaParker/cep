'use client'
import Hero from '@/components/GetInvolved/Ecosystem/Hero';
import Organizations from "@/components/GetInvolved/Ecosystem/Organizations";
import Explore from "@/components/GetInvolved/Ecosystem/Explore";
import {useRef} from "react";

const Ecosystem = () => {
    const orgRef = useRef<HTMLDivElement>(null);
    const exploreRef = useRef<HTMLDivElement>(null);


    return (
        <>
            <Hero orgRef={orgRef} exploreRef={exploreRef}/>
            <Organizations ref={orgRef}/>
            <Explore ref={exploreRef}/>
        </>
    );
};
export default Ecosystem;
