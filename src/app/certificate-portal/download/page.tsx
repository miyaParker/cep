'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Download = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const file = searchParams.get('file');
    const fileId = file?.split('?id=')[1].replace('/view?usp=sharing', '');
    const program = searchParams.get('program');

    return (
        <div className='pt-[256px] bg-[#F0F1F4] pb-[160px]'>
            {file && name && program ? (
                <div>
                    <p className='opacity-90 text-[#333438] text-[20px] pb-[24px] text-center font-matter tracking-[0.1px]'>
                        Proof of Participation
                    </p>
                    <p className='text-[#0E0E10] tracking-[0.375px] mx-auto font-neue w-full max-w-[615px] text-[25px] font-bold text-center'>{`This is to certify that ${name} completed the
                        ${program} Program`}</p>
                    <div className='flex items-center justify-between'>
                        <div className='border border-1 h-0 md:w-[126px] lg:w-[216px] xl:w-[316px] border-[#C8C8DA]'></div>
                        <a
                            href={`https://drive.google.com/uc?export=download&id=${fileId}`}
                            download='certificate.png'
                        >
                            <button
                                className='my-[2rem] bg-red-100 justify-center
                           font-matter duration-500 rounded-[2.5rem] mx-auto flex items-center relative w-max text-white px-[42px] py-[20px] text-[18px] caitalize'
                            >
                                Download
                            </button>
                        </a>
                        <div className='border border-1 h-0 md:w-[126px] lg:w-[216px] xl:w-[316px] border-[#C8C8DA]'></div>
                    </div>
                    <iframe
                        src={`https://drive.google.com/file/d/${fileId}/preview?embed=1&pli=1`}
                        width='640'
                        height='480'
                        allow='autoplay'
                        className='mx-auto border-none pointer-events-none'
                    ></iframe>


                </div>
            ) : null}
        </div>
    );
};
export default Download;
