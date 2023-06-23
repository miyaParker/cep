import Image from "next/image";
import FAQItem from "@/components/GetInvolved/EducatorsNetwork/FAQItem";

const FAQ = () => {
    const faqItems = [{
        q: 'How do I become part of the network?',
        a: 'To get started, fill out the online application form here. The Educators’ Network is currently open to residents.'
    }, {
        q: 'Do I need to know how to code?',
        a: 'No. If you have a passion for education and are comfortable using a computer then you have enough to get started.'
    },
        {
            q: 'What is STEM?',
            a: 'STEM stands for Science, Technology, Engineering and Mathematics. Our goal is to enhance te delivery of STEM lessons in schools across Nigeria.'
        }, {
            q: 'Do I need to have an education background?',
            a: 'No, classroom experience is not a requirement. The Educators’ Network is open to people from different backgrounds.'
        }, {
            q: 'What will I teach?',
            a: 'Educators are provided with content and extensive training on delivering the content in the classroom.'
        }, {
            q: 'Is this a full time role?',
            a: 'Yes. Being an Educator is a full time role that comes with a monthly and lots of benefits.'
        }]
    return (
        <div
            className='w-full mb-[128px] pt-[136px] lg:pt-[120px] lg:pb-[80px] flex flex-col lg:flex-row lg:gap-x-[111px] max-w-[2560px] px-[20px] lg:px-[80px] xl:px-[140px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
            <div>
                <h2 className='max-w-[427px] mb-[24px] font-neue font-bold text-[3rem] leading-[120%] text-[#0E0E10]'>Why
                    you should
                    join the
                    network</h2>
                <p className='font-matter leading-[150%] mb-[40px] max-w-[456px] text-[20px] text-[#333438]'>By <span
                    className='font-bold'>2030</span>, Sub-Saharan Africa
                    needs 17 million new
                    teachers to join the education workforce</p>
                <div className='flex items-start gap-x-[12px] mb-[40px]'>
                    <Image src='/stipend.svg' alt='Competitive Stipend' width={32} height={32}/>
                    <div>
                        <p className='text-[#333438] font-neue text-[20px] font-bold tracking-[0.28px]'>Competitive
                            Stipend</p>
                        <p className='text-[#333438] max-w-[456px] text-[#333438] font-matter text-[17px] tracking-[0.28px]'>Competitive
                            monthly pay, with tons of additional
                            benefits and regular access to the re:learn Centre</p>
                    </div>
                </div>
                <div className='flex items-start gap-x-[12px] mb-[40px]'>
                    <Image src='/schedule.svg' alt='Competitive Stipend' width={32} height={32}/>
                    <div>
                        <p className='font-neue text-[20px] font-bold tracking-[0.28px] text-[#333438] '>Flexible Work
                            Schedule</p>
                        <p className='max-w-[456px] text-[#333438] font-matter text-[17px] tracking-[0.28px] text-[#333438]'>With
                            an
                            average of 15-20 active teaching hours
                            each week</p>
                    </div>
                </div>
                <div className='flex items-start gap-x-[12px] mb-[48px]'>
                    <Image src='/network.svg' alt='Competitive Stipend' width={32} height={32}/>
                    <div>
                        <p className='font-neue text-[20px] font-bold tracking-[0.28px] text-[#333438]'>Build your
                            Ed-Tech Network</p>
                        <p className='max-w-[456px] text-[#333438] font-matter text-[17px] tracking-[0.28px] text-[#333438]'>Work
                            with
                            young professionals who are passionate
                            about building thriving careers in the EdTech space.</p>
                    </div>
                </div>
                <a href="/get-involved/become-a-partner-at-relearn/apply">
                    <button
                        className='block mb-[64px] lg:b-0 mx-auto lg:mx-0 lg:ml-[4px] bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[17px] text-white text-center rounded-[40px]'>
                        Join our Network
                    </button>
                </a>
            </div>
            <div className='max-w-[570px] h-max w-full py-[40px] px-[28px] lg:px-28px  rounded-[3px] bg-[#F4F4F6]'>
                <p className='font-neue font-bold text-[25px] tracking-[0.2px] mb-[32px]'>Frequently Asked Questions</p>
                {faqItems.map((faqItem, index) => <FAQItem data={faqItem} key={index}/>)}
            </div>

        </div>
    )
}
export default FAQ
