import Card from '@/components/LandingPage/Card';
import {forwardRef} from "react";

const HowWeWork = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className='px-[20px] lg:mx-auto w-[100%] mb-[10rem]' ref={ref}>
            <h2 className='font-neue font-bold text-center text-[3rem] mt-[120px] mb-[64px]'>
                How we work
            </h2>
            <div
                className='flex flex-col max-w-[1440px] mx-auto lg:flex-row justify-center items-center gap-y-[20px] lg:gap-y-0 lg:gap-x-[20px]'>
                <Card
                    icon='/content.svg'
                    title='Content Creation'
                    text='Curation and creation of
            interactive, engaging content
            and learning resources for key
            STEM subjects.'
                    textColor='text-gray-200'
                    styles='mb-[16px] lg:mb-0'
                />
                <Card
                    icon='/teaching.svg'
                    title='Teaching Methodologies'
                    text='We promote and make use of inquiry-based learning as a more effective methods for teaching STEM.'
                    textColor='text-gray-200'
                    styles='mb-[16px] lg:mb-0'
                />
                <Card
                    icon='/community.svg'
                    title='Community of Practice'
                    text='We are upskilling and engaging a network of teachers capable of delivering effective learning using technology, leveraging a community of practice (COP).'
                    styles=''
                    textColor='text-gray-200'
                />
            </div>
        </div>
    );
});
HowWeWork.displayName = 'HowWeWork';
export default HowWeWork;
