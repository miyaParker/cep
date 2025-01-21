import Image from 'next/image';
import Button from "@/components/Generic/Button";
import Pill from "@/components/EdtechClinic/Pill";
import Pillar from "@/components/GetInvolved/TeachersLounge/Pillar";

const Pillars = ({faqRef}: { faqRef: any }) => {
    const handleClick = () => {
        faqRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    const pillars = [
        {number: 1, value: "Innovative  Pedagogies"},
        {number: 2, value: "Digital Literacy"},
        {number: 3, value: "Subject Mastery"},
        {number: 4, value: "Community"},

    ]
    return (
        <div className="bg-[#FAFAFA] w-full pt-[120px]">
            <div
                className='items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px] mx-auto'>
                <h2 className='w-full lg:max-w-[523px] font-bold mx-auto leading-[120%] text-center font-neue text-[#0E0E10] text-[32px] lg:text-[48px]'>
                    The lounge is structured
                    on these 4 Pillars
                </h2>
                <p className='w-full opacity-90 mt-[20px] mb-[55.5px] leading-[140%] max-w-[686px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center text-[#313235] text-[20px]'>
                    The lounge is focused on equipping teachers with innovative pedagogies,
                    learning theories that promote students&apos; comprehension, digital skills/tools
                    for teaching and learning, and access to several opportunities/training,
                    through an animated community of practice to promote the adoption of
                    effective teaching methodology in the classroom.
                </p>
            </div>
            <div className='w-full mx-auto max-w-[700px] grid grid-cols-2 gap-2'>
                {pillars.map((pillar) => (<Pillar key={pillar.number} pillar={pillar}/>))}
            </div>
        </div>
    );
};
export default Pillars;
Pillars.displayName = 'Hero';
