import Component from "@/components/GetInvolved/TeachersLounge/Component";

const CommunityComponents = () => {
    const components = [
        {icon: "/testing.svg", value: "Edtech Product Testing Session"},
        {icon: "/back-to-school.svg", value: "Back to School Conversations"},
        {icon: "/bulb.svg", value: "Knowledge Sharing"},
        {icon: "/fire.svg", value: "Fireside Chat"},
        {icon: "/book.svg", value: "Book Review"},
        {icon: "/keynote.svg", value: "Masterclass Series"},
        {icon: "/group.svg", value: "Peer Mentoring"},

    ]
    return (
        <div className=" w-full py-[120px]">
            <div
                className='mb-[48px] items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px] mx-auto'>
                <h2 className='w-full font-bold mx-auto leading-[120%] text-center font-neue text-[#0E0E10] text-[32px] lg:text-[48px]'>
                    Components of our Community
                </h2>
            </div>
            <div className='hidden w-max mx-auto lg:grid grid-cols-3 gap-20 xl:gap-28'>
                {components.slice(0, 3).map((component) => (<Component key={component.value} component={component}/>))}
            </div>
            <div className='hidden mt-12 w-max mx-auto lg:grid grid-cols-4 gap-20 xl:gap-28'>
                {components.slice(3, 7).map((component) => (<Component key={component.value} component={component}/>))}
            </div>

            <div className='lg:hidden w-max mx-auto grid grid-cols-1 gap-14 md:grid-cols-2 '>
                {components.map((component) => (<Component key={component.value} component={component}/>))}
            </div>

            <a href="http://bit.ly/TEACHERSLOUNGE" target="_blank">
                <div className='cursor-pointer items-center gap-x-[16px] hidden lg:flex mt-[100px] mx-auto w-max'>
                    <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>Join
                        the Teachers&apos; Lounge</p>
                </div>
            </a>
        </div>
    );
};
export default CommunityComponents;
CommunityComponents.displayName = 'Hero';
