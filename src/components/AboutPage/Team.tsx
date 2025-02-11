import Image from 'next/image';

export interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
    linkedinUrl: string;
    alt: string;
}

const TeamMember = ({name, role, imageSrc, linkedinUrl, alt}: TeamMember) => (
    <div className='w-full h-max max-w-[373px] rounded-[4px] relative mx-auto px-[10px] lg:px-0'>
        <Image
            src={imageSrc}
            alt={alt}
            width={373}
            height={412}
            className='w-full h-max rounded-[4px]'
        />
        <a href={linkedinUrl} target='_blank' rel="noopener noreferrer">
            <div className="w-[40px] rounded-[4px] h-[40px] bg-[#0E0E10]/10 absolute top-[12px] right-[12px] filtered">
                <Image
                    src='/linkedin.svg'
                    alt='linkedin profile'
                    width={40}
                    height={40}
                />
            </div>
        </a>
        <p className='mt-[24px] text-[22px] font-bold font-neue text-center'>
            {name}
        </p>
        <p className='text-[1rem] text-center font-matter tracking-[0.16px] mt-[12px]'>
            {role}
        </p>
    </div>
);

const Team = () => {
    const teamMembers = [
        {
            name: 'Chinyelu Akpa',
            role: 'Practice Lead',
            imageSrc: '/chinyelu.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/chinyelu-udeh/',
            alt: 'Chinyelu Udeh Practice Lead'
        },
        {
            name: 'Lilian Kibagendi',
            role: 'Programmes Manager',
            imageSrc: '/lilian.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/liliankibagendi/',
            alt: 'Lilian'
        },
        {
            name: 'Oluwatobi Fasami',
            role: 'Programmes Manager',
            imageSrc: '/tobi.png',
            linkedinUrl: 'https://www.linkedin.com/in/tobi/',
            alt: 'Famous Ogaga Learning Development Lead'
        },
        {
            name: 'Shalom Anurigwo',
            role: 'Learning Development Associate',
            imageSrc: '/shalom.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/shalom-anurigwo/',
            alt: 'Shalom Anurigwo Learning Development Associate'
        },
        {
            name: 'Janet Nyanrida',
            role: 'Programmes Associate',
            imageSrc: '/janet.png',
            linkedinUrl: 'https://www.linkedin.com/in/janet-nyarinda-90433251/',
            alt: 'Janet Nyanrida'
        },
        {
            name: 'Neema Muganga',
            role: 'Product Support Associate',
            imageSrc: '/neema.png',
            linkedinUrl: 'https://www.linkedin.com/in/neema-muganga/',
            alt: 'Neema Muganga'
        },
        {
            name: 'Auralia Adilla Mboya',
            role: 'Product Support Associate',
            imageSrc: '/auralia.png',
            linkedinUrl: 'https://www.linkedin.com/in/auralia-adilla-mboya/',
            alt: 'Auralia Adilla Mboya'
        },
        {
            name: 'Christine Ombima',
            role: 'Product Support Associate',
            imageSrc: '/christine.png',
            linkedinUrl: 'https://www.linkedin.com/in/christine-ombima/',
            alt: 'Christine Ombima'
        }
    ];
    return (
        <div className='max-w-[1440px] mx-auto mt-[120px] lg:px-[80px] xl:px-[140px]'>
            <h2 className='text-[30px] font-neue font-bold text-center mb-[3rem]'>
                Meet the re:learn team
            </h2>

            <div
                className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[repeat(3,1fr)] md:justify-items-center items-center gap-y-[80px] lg:gap-x-[24px]'>
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default Team;
