import Organizations from '@/components/LandingPage/Organizations';
import FeedbackForm from '@/components/LandingPage/FeedbackForm';
import Hero from '@/components/LandingPage/Hero';
import HowWeWork from '@/components/LandingPage/HowWeWork';
import Numbers from '@/components/LandingPage/Numbers';
import SubscribeForm from '@/components/LandingPage/SubscribeForm';

const Home = () => {
    return (
        <>
            <Hero />
            <HowWeWork />
            <Numbers />
            <Organizations />
            <SubscribeForm />
            <FeedbackForm />
        </>
    );
};
export default Home;
