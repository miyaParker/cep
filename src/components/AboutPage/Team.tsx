import Image from 'next/image';

const Team = () => {
    return (
        <div className='mt-[120px] lg:px-[80px] xl:px-[140px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
            <h2 className='text-[30px] font-neue font-bold text-center mb-[3rem]'>
                Meet the re:learn team
            </h2>
            <div
                className='lg:grid lg:grid-cols-2 xl:grid-cols-[repeat(3,minmax(320px,373px))] flex flex-col lg:justify-center items-center gap-y-[40px] lg:gap-x-[24px]'>
                <div className='w-full h-max max-w-[373px] rounded-[4px] relative mx-auto px-[10px] lg:px-0'>
                    <Image
                        src='/aderonke.svg'
                        alt='Aderonke Adeniran Community Support Associate '
                        width={373}
                        height={412}
                        className='w-full h-max max-w-[373px] rounded-[4px]'
                    />

                    <a href='https://www.linkedin.com/in/oluwakemi-adeniran/' target='_blank'>
                        <div
                            className="w-[40px] rounded-[4px] h-[40px] bg-[#0E0E10]/10 absolute top-[12px] right-[12px] filtered">
                            <Image
                                src='/linkedin.svg'
                                alt='linkedin profile'
                                width={40}
                                height={40}
                                className=''
                            />
                        </div>
                    </a>
                    <p className='mt-[20px] text-[22px] font-bold font-neue text-center'>
                        Aderonke Adeniran
                    </p>
                    <p className='text-[1rem] text-center font-matter tracking-[0.16px] mt-[10px]'>
                        Community Support Associate
                    </p>
                </div>

                <div className='w-full h-max max-w-[373px] rounded-[4px] relative mx-auto px-[10px] lg:px-0'>
                    <Image
                        src='/abigael.svg'
                        alt='Abigael Anaza-Mark Programmes Associate '
                        width={373}
                        height={412}
                        className='w-full h-max rounded-[4px]'
                    />
                    <a href='https://www.linkedin.com/in/abigael-anaza-mark-30711214b' target='_blank'>
                        <div
                            className="w-[40px] rounded-[4px] h-[40px] bg-[#0E0E10]/10 absolute top-[12px] right-[12px] filtered">
                            <Image
                                src='/linkedin.svg'
                                alt='linkedin profile'
                                width={40}
                                height={40}
                                className=''
                            />
                        </div>
                    </a>
                    <p className='mt-[20px] text-[22px] font-bold font-neue text-center'>
                        Abigael Anaza-Mark
                    </p>
                    <p className='text-[1rem] text-center font-matter tracking-[0.16px] mt-[10px]'>
                        Programmes Associate
                    </p>
                </div>
                <div className='w-full h-max max-w-[373px] rounded-[4px] relative mx-auto px-[10px] lg:px-0'>
                    <Image
                        src='/chinyelu.svg'
                        alt='Chinyelu Udeh Practice Lead '
                        width={373}
                        height={412}
                        className='w-full h-max rounded-[4px]'
                    />
                    <a href='https://www.linkedin.com/in/chinyelu-udeh/' target='_blank'>
                        <div
                            className="w-[40px] rounded-[4px] h-[40px] bg-[#0E0E10]/10 absolute top-[12px] right-[12px] filtered">
                            <Image
                                src='/linkedin.svg'
                                alt='linkedin profile'
                                width={40}
                                height={40}
                                className=''
                            />
                        </div>
                    </a>
                    <p className='mt-[20px] text-[22px] font-bold font-neue text-center'>
                        Chinyelu Udeh
                    </p>
                    <p className='text-[1rem] text-center font-matter tracking-[0.16px] mt-[10px]'>
                        Practice Lead
                    </p>
                </div>
                <div className='w-full h-max max-w-[373px] rounded-[4px] relative mx-auto px-[10px] lg:px-0'>
                    <Image
                        src='/famous.svg'
                        alt='Famous Ogaga Learning Development Lead '
                        width={373}
                        height={412}
                        className='w-full h-max rounded-[4px]'
                    />

                    <a href='https://www.linkedin.com/in/famousogaga/' target='_blank'>
                        <div
                            className="w-[40px] rounded-[4px] h-[40px] bg-[#0E0E10]/10 absolute top-[12px] right-[12px] filtered">
                            <Image
                                src='/linkedin.svg'
                                alt='linkedin profile'
                                width={40}
                                height={40}
                                className=''
                            />
                        </div>
                    </a>
                    <p className='mt-[20px] text-[22px] font-bold font-neue text-center'>
                        Famous Ogaga
                    </p>
                    <p className='text-[1rem] text-center font-matter tracking-[0.16px] mt-[10px]'>
                        Learning Development Lead
                    </p>
                </div>
                <div className='w-full h-max max-w-[373px] rounded-[4px] relative mx-auto px-[10px] lg:px-0'>
                    <Image
                        src='/shalom.svg'
                        alt='Shalom Anurigwo Learning Development Associate '
                        width={373}
                        height={412}
                        className='w-full h-max rounded-[4px]'
                    />
                    <a href='https://www.linkedin.com/in/shalom-anurigwo/' target='_blank'>
                        <div
                            className="w-[40px] rounded-[4px] h-[40px] bg-[#0E0E10]/10 absolute top-[12px] right-[12px] filtered">
                            <Image
                                src='/linkedin.svg'
                                alt='linkedin profile'
                                width={40}
                                height={40}
                                className=''
                            />
                        </div>
                    </a>
                    <p className='mt-[20px] text-[22px] font-bold font-neue text-center'>
                        Shalom Anurigwo
                    </p>
                    <p className='text-[1rem] text-center font-matter tracking-[0.16px] mt-[10px]'>
                        Learning Development Associate
                    </p>
                </div>
                <div className='w-full h-max max-w-[373px] rounded-[4px] relative mx-auto px-[10px] lg:px-0'>
                    <Image
                        src='/yetunde.svg'
                        alt='Yetunde Omotosho Monitoring & Evaluation Associate'
                        width={373}
                        height={412}
                        className='w-full h-max rounded-[4px]'
                    />
                    <a href='https://www.linkedin.com/in/abiodunomotosho/' target='_blank'>

                    <div
                        className="w-[40px] rounded-[4px] h-[40px] bg-[#0E0E10]/10 absolute top-[12px] right-[12px] filtered">
                        <Image
                            src='/linkedin.svg'
                            alt='linkedin profile'
                            width={40}
                            height={40}
                            className=''
                        />
                    </div>
                    </a>
                    <p className='mt-[20px] text-[22px] font-bold font-neue text-center'>
                        Yetunde Omotosho
                    </p>
                    <p className='text-[1rem] text-center font-matter tracking-[0.16px] mt-[10px]'>
                        Monitoring & Evaluation Associate
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Team;
