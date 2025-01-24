'use client'
import Hero from '@/components/GetInvolved/Ecosystem/Hero';
import Organizations from "@/components/GetInvolved/Ecosystem/Organizations";
import Explore from "@/components/GetInvolved/Ecosystem/Explore";
import {useRef} from "react";

const Ecosystem = () => {
    const orgRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Hero orgRef={orgRef}/>
            <Organizations ref={orgRef}/>
            <Explore/>
        </>
    );
};
export default Ecosystem;
