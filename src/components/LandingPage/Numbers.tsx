import {useRef} from "react";
import Image from 'next/image';
import useCounter from "@/app/customHooks/useCounter";

const Numbers = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const {value: teachers} = useCounter({ref, limit: 7195, step: 12, interval: 2})
    const {value: students} = useCounter({ref, limit: 102255, step: 550, interval: 10})
    const {value: partners} = useCounter({ref, limit: 12, step: 1, interval: 2})
    const {value: projects} = useCounter({ref, limit: 12, step: 1, interval: 2})
    const {value: learningHours} = useCounter({ref, limit: 3228, step: 20, interval: 10})
    const {value: schools} = useCounter({ref, limit: 102, step: 2, interval: 12})

    return (
        <div className='bg-black-100' ref={ref}>
            <div
                className='w-[100%] mx-auto flex flex-col max-w-[1440px] items-center lg:px-[80px] xl:px-[140px] bg-black-100 h-max mt-[10rem] py-[64px] lg:mt-[40px]'>
                <div
                    className="relative before:hidden lg:before:block before:left-[220px] before:top-[56px] before:content-[url('/point-down.svg')] before:absolute">
                    <Image
                        src='/our-numbers.svg'
                        width={300}
                        height={100}
                        alt={'our numbers are counting'}
                        className='w-[263px] h-[64px] mb-[28px] lg:relative lg:left-[320px] '
                    />
                </div>
                <div
                    className='w-[100%] relative lg:grid lg:grid-cols-3 flex-col items-center text-white flex mx-auto lg:before:hidden gap-y-[61px] before:left-[48%] lg:justify-between before:top-[-28px] before:w-auto before:content-[url("/point-down.svg")]  before:absolute'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            {teachers}+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Teachers Trained
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            {students}+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Students Empowered
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            {schools}+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Schools Visited
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            {projects}+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Projects Completed
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            {learningHours}+
                        </p>
                        <p className='font-matter text-[1.1rem] text-gray-300 tracking-[0.015em]'>
                            Learning Hours
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[3rem] font-neue font-bold tracking-[0.008em]'>
                            {partners}+
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
