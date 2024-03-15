import Image from 'next/image';

interface ButtonProps {
    handleClick?: any;
    styles?: string;
    btnText: string;
    rightIcon?: string;
    animate?: boolean;
    disabled?:boolean;
}

const Button = ({styles, btnText, rightIcon, handleClick, animate, disabled}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={handleClick}
            className={`btn relative overflow-hidden rounded-[2.5rem] flex justify-center items-center py-[10px] px-[16px] sm:px-[36px] sm:py-[20px] font-sans font-medium ${styles}`}
        >
            {animate ? <div className='btn-bg w-[350px] h-[350px] rounded-full absolute top-[80px]'></div> : null}
            <span className='capitalize'>{btnText}</span>
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
