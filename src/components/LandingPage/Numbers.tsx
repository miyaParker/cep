import Image from 'next/image';

const Numbers = () => {
    return (
        <div className='bg-black-100'>
            <div className='w-[100%] mx-auto flex flex-col max-w-[2560px] items-center lg:px-[80px] xl:px-[140px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px] bg-black-100 h-max mt-[10rem] py-[64px] lg:pt-[40px]'>
                <div className="relative before:hidden lg:before:block before:left-[220px] before:top-[56px] before:content-[url('/point-down.svg')] before:absolute">
                    <Image
                        src='/our-numbers.svg'
                        width={300}
                        height={100}
                        alt={'our numbers are counting'}
                        className='w-[263px] h-[64px] mb-[28px] lg:relative lg:left-[320px] '
                    />
                </div>
                <div className='w-[100%] relative lg:flex-row flex flex-col items-center text-white flex mx-auto lg:before:hidden gap-y-[61px] before:left-[48%] lg:justify-between before:top-[-28px] before:w-auto before:content-[url("/point-down.svg")]  before:absolute'>
                    <div className='flex flex-col items-center justify-center w-max'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            6,698+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Teachers Trained
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-max'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            100,285+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Students Empowered
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-max'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            100+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Schools Visited
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-max'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            12+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Projects Completed
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-max'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            12+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Partners so Far
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Numbers;
