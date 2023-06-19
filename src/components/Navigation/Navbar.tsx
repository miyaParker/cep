import Image from 'next/image';
import { navbarItems } from '@/constants';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav className='border-b w-full border-black-100/[0.05] hidden z-20 fixed top-0 bg-white lg:flex h-[8rem] font-matter font-normal items-center justify-between'>
                <div className='mx-auto relative flex  justify-between w-[100%] max-w-[2560px] lg:px-[80px] xl:px-[120px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                    <Link href='/'>
                        <Image
                            src='/logo.svg'
                            alt='Image of re:learn logo'
                            width={107}
                            height={28}
                        />
                    </Link>
                    <ul className='flex justify-between items-center gap-x-[32px]'>
                        {navbarItems.main.map((item, id) => (
                            <Link href={item.link} key={id}>
                                <li className='block capitalize font-normal text-[1.1rem] text-[#333438]'>
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
            <nav className='w-[100%] h-[80px] mx-auto fixed top-0 bg-white flex lg:hidden z-40 border-b border-black-100/[0.05] font-matter font-normal px-[20px] items-center justify-between'>
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        alt='Image of re:learn logo'
                        width={77}
                        height={20}
                    />
                </Link>
                <Image
                    src='/hamburger-icon.svg'
                    alt='Image of re:learn logo'
                    width={24}
                    height={24}
                />
            </nav>
        </div>
    );
};
export default Navbar;
