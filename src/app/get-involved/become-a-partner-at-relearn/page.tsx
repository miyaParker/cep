import Hero from '@/components/GetInvolved/BecomeAPartner/Hero';
import Organizations from '@/components/LandingPage/Organizations';
import Benefits from '@/components/GetInvolved/BecomeAPartner/Benefits';

const BecomeAPartner = () => {
    return (
        <>
            <Hero />
            <Benefits />
            <Organizations />
            <div className='mb-[160px]'></div>
        </>
    );
};
export default BecomeAPartner;
