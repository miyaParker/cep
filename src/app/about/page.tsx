'use client'
import Hero from '@/components/AboutPage/Hero';
import AffiliateCenter from '@/components/AboutPage/AffiliateCenter';
import Team from '@/components/AboutPage/Team';
import SubscribeForm from '@/components/LandingPage/SubscribeForm';
import {usePathname} from "next/navigation";

const About = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className='w-screen'>
            <Hero/>
            <AffiliateCenter/>
            <Team/>
            <SubscribeForm/>
        </div>
    );
};
export default About;
