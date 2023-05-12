import Card from '@/components/LandingPage/Card';

const HowWeWork = () => {
    return (
        <div className='px-[20px] lg:mx-auto w-[100%] mb-[10rem]'>
            <h2 className='font-neue font-bold text-center text-[3rem] mt-[120px] mb-[64px]'>
                How we work
            </h2>
            <div className='flex flex-col max-w-[2560px] mx-auto lg:flex-row justify-center items-center gap-y-[20px] lg:gap-y-0 lg:gap-x-[20px]'>
                <Card
                    icon='/content.svg'
                    title='Content Creation'
                    text='Curation and creation of
            interactive, engaging content
            and learning resources for key
            STEM subjects.'
                    textColor='text-gray-200'
                    styles='mb-[16px] lg:mb-0 border-2 rounded-[6px] border-[#EDE9E8] lg:border-alabaster border'
                />
                <Card
                    icon='/teaching.svg'
                    title='Teaching Methodologies'
                    text='We promote and make use of inquiry-based learning as a more effective methods for teaching STEM.'
                    styles='lg:border-red-100 lg:bg-seashell mb-[16px] lg:mb-0 border-2 border-[#EDE9E8] rounded-[6px] lg:border-alabaster border'
                />
                <Card
                    icon='/community.svg'
                    title='Community of Practice'
                    text='We are upskilling and engaging a network of teachers capable of delivering effective learning using technology, leveraging a community of practice (COP).'
                    styles='border-2 rounded-[6px] border-[#EDE9E8] lg:border-alabaster border'
                    textColor='text-gray-200'
                />
            </div>
        </div>
    );
};
export default HowWeWork;
