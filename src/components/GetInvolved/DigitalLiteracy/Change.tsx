import ChangeComponent from "@/components/GetInvolved/DigitalLiteracy/ChangeComponent";

const Change = () => {

    const components = [
        {icon: "/testing.svg", value: "Digital Literacy Stakeholders Forum"},
        {icon: "/back-to-school.svg", value: "Digital literacy workshops and popups"},
        {icon: "/bulb.svg", value: "Training-of-trainers sessions"},
        {icon: "/fire.svg", value: "Peer-peer Knowledge Sharing Sessions"},
        {icon: "/book.svg", value: "Co-authoring and publication of thought leadership pieces on digital literacy and online safety "},
        {icon: "/keynote.svg", value: "Community-led digital literacy and online safety training"},
    ]
    return (
        <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[80px] xl:px-[140px] w-full py-[80px] lg:py-[120px]">
            <div
                className='items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px] mx-auto'>
                <h2 className='w-full max-w-[574px] font-bold mx-auto leading-[120%] text-left lg:text-center font-neue text-[#0E0E10] text-[32px] lg:text-[48px]'>
                    How We Work Together to Drive Change
                </h2>
                <p className='w-full opacity-90 mt-[20px] mb-[55.5px] leading-[140%] max-w-[686px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-leftt lg:text-center text-[#313235] text-[20px]'>
                    Following a community-of-practice approach, member organisations represented in the COP co-create
                    actionable pathways to advance set objectives through;
                </p>
            </div>
            <div className='w-full mx-auto md:grid md:grid-cols-2 gap-[32px] xl:gap-[40px]'>
                {components.map((component) => (<ChangeComponent key={component.value} component={component}/>))}
            </div>

            <a href="http://bit.ly/safeonlinewithmeta" target={'_blank'}>
                <div
                     className='cursor-pointer items-center gap-x-[16px]  flex mt-[100px] mx-auto w-max max-w-full'>
                    <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>Join
                        the Digital Literacy COP</p>
                </div>
            </a>

        </div>
    );
};
export default Change;
Change.displayName = 'Hero';
