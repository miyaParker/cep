import Image from 'next/image';

interface ButtonProps {
    handleClick?: any;
    styles?: string;
    btnText: string;
    rightIcon?: string;
    animate?: boolean;
    disabled?:boolean;
    loading?:boolean;
}

const Button = ({styles, btnText, rightIcon, handleClick, animate, disabled, loading}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={handleClick}
            className={`btn relative overflow-hidden rounded-[2.5rem] flex justify-center items-center py-[10px] px-[16px] sm:px-[36px] sm:py-[20px] sm:w-max font-sans font-medium ${styles}`}
        >
            {animate ? <div className='btn-bg w-[350px] h-[350px] rounded-full absolute top-[80px]'></div> : null}
            <span className='capitalize'>{btnText}</span>
            {loading ? <div className=' w-[20px] h-[20px] rounded-full animate-spin border border-black-100'></div> : null}
            {rightIcon && (
                <Image
                    src={rightIcon}
                    alt='button-icon'
                    width={24}
                    height={24}
                    className='ml-[8px]'
                />
            )}
        </button>
    );
};
export default Button;
