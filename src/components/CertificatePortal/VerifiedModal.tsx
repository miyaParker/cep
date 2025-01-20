import { createPortal } from 'react-dom';
import Image from 'next/image';

interface DataProps {
    issued_on: string;
    issued_to: string;
    issue_date: string;
}

interface VerifiedModalProps {
    data: DataProps;
    closeModal: () => void;
}

const VerifiedModal: React.FC<VerifiedModalProps> = ({ data, closeModal }) => {
    const modalRoot =
        typeof window !== 'undefined'
            ? document.getElementById('modal-root')
            : null;

    if (!modalRoot) return null; // Ensure modalRoot exists before rendering

    return createPortal(
        <div className='modal bg-gray-200/50 w-screen h-[100vh] fixed top-0 z-50 left-0 flex items-center justify-center lg:px-0'>
            <div className='mx-[20px] rounded-[8px] pt-[3rem] w-[100%] max-w-[373px] px-[8px] verify-modal bg-white absolute text-black'>
                <div
                    onClick={closeModal}
                    className='bg-[#F6F6F9] absolute top-[18px] right-[18px] lg:top-[24px] lg:right-[24px] cursor-pointer w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] rounded-full flex justify-center items-center'
                >
                    <Image
                        src='/close.svg'
                        alt='close modal'
                        width={24}
                        height={24}
                        className='w-[20px] lg:w-[20px]'
                    />
                </div>
                <p className='text-[#0E0E10] font-neue font-bold text-center text-[25px] pb-[55px] tracking-[0.5%]'>
                    Verification
                </p>
                <div className='pb-[26px] items-center flex gap-x-[15px] border-b-[1.4px] border-[#E4E4EC] pl-[24px]'>
                    <Image
                        src='/circle-check.svg'
                        alt='verified certificate'
                        width={24}
                        height={24}
                    />
                    <p className='tracking-[1%] text-[20px] font-matter text-[#333438]'>{`Issued on ${data.issued_on}`}</p>
                </div>
                <div className='flex gap-x-[15px] items-center border-b-[1.4px] border-[#E4E4EC] pl-[24px]'>
                    <Image
                        src='/circle-check.svg'
                        alt='verified certificate'
                        width={24}
                        height={24}
                    />
                    <p className='py-[26px] tracking-[1%] text-[20px] font-matter text-[#333438]'>
                        Issued to{' '}
                        <span className='font-bold'>{data.issued_to}</span>
                    </p>
                </div>
                <div className='flex gap-x-[15px] items-center border-b-[1.4px] border-[#E4E4EC] pl-[24px]'>
                    <Image
                        src='/circle-check.svg'
                        alt='verified certificate'
                        width={24}
                        height={24}
                    />
                    <p className='py-[26px] tracking-[1%] text-[20px] font-matter text-[#333438]'>{`Accepted on ${data.issue_date}`}</p>
                </div>
                <div className='flex gap-x-[15px] items-center border-b-[1.4px] border-[#E4E4EC] pl-[24px]'>
                    <Image
                        src='/circle-check-green.svg'
                        alt='verified certificate'
                        width={24}
                        height={24}
                    />
                    <p className='py-[26px] tracking-[1%] text-[20px] font-matter text-[#333438] uppercase font-semibold'>
                        VERIFIED
                    </p>
                </div>
            </div>
        </div>,
        modalRoot
    );
};

export default VerifiedModal;
