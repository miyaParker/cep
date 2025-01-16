'use client'
import Hero from '@/components/AboutPage/Hero';
import AffiliateCenter from '@/components/AboutPage/AffiliateCenter';
import Team from '@/components/AboutPage/Team';
import SubscribeForm from '@/components/LandingPage/SubscribeForm';
import EmblaCarousel from "@/app/about/EmblaCarousel";
import '../embla.css'

const About = () => {

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
