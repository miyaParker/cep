'use client'
import Image from 'next/image';
import {navbarItems} from '@/constants';
import Link from 'next/link';
import {useState} from "react";

const Navbar = () => {
        const [showDropdown, setShowDropdown] = useState(false);
        const toggleDropdown = () => {
            setShowDropdown(!showDropdown)
        }
        return (
            <div>
                <nav
                    className='border-b w-full border-black-100/[0.05] hidden z-50 fixed top-0 bg-white lg:flex h-[8rem] font-matter font-normal items-center justify-between'>
                    <div
                        className='mx-auto relative flex  justify-between w-[100%] max-w-[2560px] lg:px-[80px] xl:px-[130px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                        <Link href='/'>
                            <Image
                                src='/logo.svg'
                                alt='Image of re:learn logo'
                                width={107}
                                height={28}
                            />
                        </Link>
                        <ul className='flex justify-between items-center gap-x-[32px]'>
                            {navbarItems.main.map((item, index) => {
                                if (item?.link) {
                                    return (
                                        <Link href={item.link} key={index}>
                                            <li className='block capitalize font-normal text-[1.1rem] text-[#333438]'>
                                                {item.name}
                                            </li>
                                        </Link>)
                                }
                                return (
                                    <div key={index}>
                                        <div className='relative flex items-center'>
                                            <li className='block capitalize font-normal text-[1.1rem] text-[#333438] mr-[6px]'>
                                                {item.name}
                                            </li>
                                            <Image onClick={toggleDropdown} src='/chevron-down.svg' alt='get involved'
                                                   className='cursor-pointer'
                                                   width={24}
                                                   height={24}/>
                                        </div>
                                        {item?.children ? <div onClick={toggleDropdown}
                                                               className={`${showDropdown ? 'nav-dropdown' : 'opacity-0 transition-opacity duration-500'} absolute bg-white  rounded-[4px] px-[20px] py-[30px]`}>

                                            {item?.children.map((child, index) => (<div key={index}
                                                                                        className='flex items-center gap-x-[8px] mb-[24px]'>
                                                <Image src={child.icon} alt={child.name}
                                                       width={28}
                                                       height={28}/>
                                                <Link href={child.link}
                                                      className='font-sans text-[16px] tracking-[0.5&]'>{child.name}</Link>
                                            </div>))}
                                        </div> : null}
                                    </div>)
                            })}

                        </ul>
                    </div>
                </nav>
                <nav
                    className='w-[100%] h-[80px] mx-auto fixed top-0 bg-white flex lg:hidden z-40 border-b border-black-100/[0.05] font-matter font-normal px-[20px] items-center justify-between'>
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
        )
            ;
    }
;
export default Navbar;
