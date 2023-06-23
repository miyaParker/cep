'use client'
import {useSearchParams} from "next/navigation";
import Image from "next/image";

const Download = () => {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const file = searchParams.get('file')
    const program = searchParams.get('program')
    const handleDownload = () => {
        if (file) {
            const response = fetch(file).then(res => {
                return res.blob()
            }).then(data => {
                console.log(data)
                const href = URL.createObjectURL(data);

                // const anchorElement = document.createElement('a');
                // anchorElement.href = href;
                // anchorElement.download = 'certificate.png';
                //
                // document.body.appendChild(anchorElement);
                // anchorElement.click();
                //
                // document.body.removeChild(anchorElement);
                // window.URL.revokeObjectURL(href);
            })
        }
    }
    return (
        <div className='pt-[256px] bg-[#F0F1F4] pb-[160px]'>
            {file && name && program ?
                <div>
                    <p className='opacity-90 text-[#333438] text-[20px] pb-[24px] text-center font-matter tracking-[0.1px]'>Proof
                        of Participation</p>
                    <p className='text-[#0E0E10] tracking-[0.375px] mx-auto font-neue w-full max-w-[615px] text-[25px] text-[25px] font-bold text-center'>{`This is to certify that ${name} completed the
                        ${program} Program`}</p>
                    <div className='flex items-center justify-between'>
                        <div
                            className='border border-1 h-0 md:w-[126px] lg:w-[216px] xl:w-[316px] border-[#C8C8DA]'></div>
                        <a href={`${file}&export=download`} download='certificate.png'>
                            <button
                                // onClick={handleDownload}
                                className='my-[2rem] bg-red-100 justify-center
                           font-matter duration-500 rounded-[2.5rem] mx-auto flex items-center relative w-max text-white px-[42px] py-[20px] text-[18px] caitalize'>Download
                            </button>
                        </a>
                        <div
                            className='border border-1 h-0 md:w-[126px] lg:w-[216px] xl:w-[316px] border-[#C8C8DA]'></div>
                    </div>
                    <Image src={file} alt='file' width={763} height={540}
                           className='mx-auto w-full px-[20px] max-w-[763px] max-h-[540px]'/>
                </div> : null}
        </div>
    )
}
export default Download
