import Hero from '@/components/AboutPage/Hero';
import AffiliateCenter from '@/components/AboutPage/AffiliateCenter';
import Team from '@/components/AboutPage/Team';
import SubscribeForm from '@/components/LandingPage/SubscribeForm';

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
