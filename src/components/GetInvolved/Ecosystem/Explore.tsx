const Explore = () => {
    return (
        <div className=" w-full py-[120px]">
            <div
                className='items-center max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px] mx-auto'>
                <h2 className='w-full max-w-[574px] font-bold mx-auto leading-[120%] text-center font-neue text-[#0E0E10] text-[32px] lg:text-[48px]'>
                    Explore the re:learn ecosystem
                </h2>
                <p className='w-full opacity-90 mt-[20px] mb-[55.5px] leading-[140%] max-w-[533px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center text-[#313235] text-[20px]'>
                    In addition to these organisations, the EdTech Ecosystem
                    also houses a micro-teaching lab, EdTech Product Testbed
                    and an ultra-modern event space. </p>
            </div>


            <div className="flex flex-col min-[500px]:flex-row gap-4 w-max mx-auto mt-[48px]">
                <div onClick={()=>{}}
                     className='cursor-pointer items-center gap-x-[16px] flex mx-auto w-max'>
                    <p className='px-[40px] py-[20px] text-white text-[17px] font-matter rounded-[40px] bg-red-100 font-medium tracking-[0.255px]'>
                        Send us an Email</p>
                </div>
                <div onClick={()=>{}}
                     className='cursor-pointer items-center gap-x-[16px] flex mx-auto w-max'>
                    <p className='border px-[40px] py-[20px] text-[] text-[17px] font-matter rounded-[40px]  font-medium tracking-[0.255px]'>
                        +2347064020742</p>
                </div>
            </div>

        </div>
    );
};
export default Explore;
