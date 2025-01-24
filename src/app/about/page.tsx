'use client'
import Hero from '@/components/AboutPage/Hero';
import AffiliateCentres from "@/components/AboutPage/AffilliateCentres";
import Team from '@/components/AboutPage/Team';
import SubscribeForm from '@/components/LandingPage/SubscribeForm';

const About = () => {

    return (
        <div className='w-screen'>
            <Hero/>
            <AffiliateCentres/>
            <Team/>
            <SubscribeForm/>
        </div>
    );
};
export default About;
