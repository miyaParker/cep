import Image from 'next/image';

interface ButtonProps {
    handleClick?: any;
    styles: string;
    btnText: string;
    rightIcon?: string;
}

const Button = ({ styles, btnText, rightIcon, handleClick }: ButtonProps) => {
    return (
        <button
            onClick={handleClick}
            className={`rounded-[2.5rem] mx-auto flex justify-center items-center ${styles}`}
        >
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
