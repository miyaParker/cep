'use client'
import Hero from '@/components/GetInvolved/Viable/Hero';
import Objectives from '@/components/GetInvolved/Viable/Objectives';
import {useRef} from "react";

const About = () => {
    const objectivesRef = useRef<HTMLDivElement>(null);

    return (
        <div className='w-screen'>
            <Hero objectivesRef={objectivesRef}/>
            <Objectives ref={objectivesRef}/>
        </div>
    );
};
export default About;
