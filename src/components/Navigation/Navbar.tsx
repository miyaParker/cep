'use client';
import Image from 'next/image';
import { navItems } from '@/constants';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import GetInvolvedSection from '@/components/GetInvolved/GetInvolvedSection';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileMenuVisible, toggleMobileMenu] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleScroll = useCallback(() => {
        const currentScrollPos = window.scrollY;
        setVisible(
            prevScrollPos < 80 ||
                (prevScrollPos > currentScrollPos && prevScrollPos > 80)
        );
        setPrevScrollPos(currentScrollPos);
        return;
    }, [prevScrollPos]);

    useEffect(() => {
        toggleMobileMenu(false);
    }, [pathname]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if (prevScrollPos)
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
    }, [prevScrollPos, visible, handleScroll]);

    const getInvolvedLinks = {
        communities: {
            title: 'Our communities',
            links: [
                {
                    text: 'Teachers’ Lounge',
                    link: '/teachers-lounge'
                },
                {
                    text: 'Viable',
                    link: '/join-viable'
                },
                {
                    text: 'Digital Literacy COP',
                    link: '/digital-literacy-COP'
                },
                {
                    text: 'Educators’ Network',
                    link: '/educators-network'
                }
            ]
        },
        programs: [
            {
                title: 'Our Programs',
                links: [
                    {
                        text: 'EdTech Festival',
                        link: 'https://edtechfestival.relearn.ng/'
                    },
                    {
                        text: 'Schools EdTech Clinic',
                        link: '/edtech-clinic'
                    }
                ]
            },
            {
                title: 'Ecosystem',
                links: [
                    {
                        text: 'Our Ecosystem',
                        link: '/our-ecosystem'
                    }
                ]
            }
        ],
        partnerships: {
            title: 'Partnerships',
            links: [
                {
                    text: 'Become a Partner',
                    link: '/become-a-partner-at-relearn'
                }
            ]
        }
    };
    return (
        <div className='sticky top-0  z-[250]'>
            <nav
                className={`${
                    visible ? 'top-0' : 'top-[-8rem]'
                } transition-top duration-300 ease-out border-b w-full border-black-100/[0.05] hidden bg-white lg:flex h-[8rem] font-matter font-normal items-center justify-between`}
            >
                <div className='mx-auto relative flex  justify-between w-[100%] max-w-[1500px] lg:px-[80px] xl:px-[130px]'>
                    <Link href='/'>
                        <Image
                            src='/logo.svg'
                            alt='Image of re:learn logo'
                            width={107}
                            height={28}
                        />
                    </Link>
                    <ul className='flex justify-between items-center gap-x-[32px]'>
                        {navItems.map((item, index) => {
                            if (item?.link) {
                                return (
                                    <Link href={item.link} key={index}>
                                        <li
                                            className={`${
                                                pathname === item.link
                                                    ? 'text-red-100 font-semibold'
                                                    : 'text-[#333438]'
                                            } block capitalize font-normal text-[1.1rem] `}
                                        >
                                            {item.name}
                                        </li>
                                    </Link>
                                );
                            }
                            return (
                                <div key={index} className='h-max'>
                                    <div
                                        onClick={toggleDropdown}
                                        className='cursor-pointer relative flex items-center'
                                    >
                                        <li className='block capitalize font-normal text-[1.1rem] text-[#333438] mr-[6px]'>
                                            {item.name}
                                        </li>
                                        <Image
                                            src='/chevron-down.svg'
                                            alt='get involved'
                                            className='cursor-pointer'
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    {item?.children ? (
                                        <div
                                            onClick={toggleDropdown}
                                            className={`${
                                                showDropdown
                                                    ? 'nav-dropdown opacity-100  rounded-[12px] w-full max-w-[1172px]'
                                                    : 'invisible opacity-0 transition-opacity transition-visibility duration-500'
                                            } right-0 absolute bg-white  rounded-[4px] px-[20px] pt-[30px]`}
                                        >
                                            <div className='w-full max-w-[1172px] grid grid-cols-4  bg-white px-[80px] py-[40px] '>
                                                <div>
                                                    <p className='font-neue font-bold leading-[] tracking-[0.8%] text-[25px]'>
                                                        Get involved
                                                    </p>
                                                    <p className='text-[17px] w-full mt-[20px] max-w-[203px] font-matter opcity-[68%] text-[#313235AD]'>
                                                        Discover our communities
                                                        and programs.
                                                    </p>
                                                </div>
                                                {Object.values(
                                                    getInvolvedLinks
                                                ).map((section, index) => (
                                                    <GetInvolvedSection
                                                        key={index}
                                                        section={section}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </nav>
            <nav
                className={`${
                    visible || mobileMenuVisible ? 'top-0' : 'top-[-8rem]'
                } ${
                    mobileMenuVisible ? 'h-screen' : 'h-max'
                } transition duration-1000 ease-out flex-col w-full mx-auto bg-white flex lg:hidden z-40 font-matter font-normal sticky`}
            >
                <div className='flex flex-row justify-between items-center h-[80px] px-[20px] border-b border-black-100/[0.05]'>
                    <Link href='/'>
                        <Image
                            src='/logo.svg'
                            alt='Image of re:learn logo'
                            width={77}
                            height={20}
                        />
                    </Link>
                    <Image
                        onClick={() => toggleMobileMenu(!mobileMenuVisible)}
                        src='/hamburger-icon.svg'
                        alt='Image of re:learn logo'
                        width={24}
                        height={24}
                    />
                </div>
                {mobileMenuVisible ? (
                    <>
                        <motion.div
                            animate={{
                                x: showDropdown ? '-100vw' : '0'
                            }}
                            transition={{ type: 'tween' }}
                            className='top-0 w-full gap-[40px] absolute bg-white px-[20px] z-[120] flex flex-col justify-between'
                        >
                            <div className="flex justify-between h-[80px] items-center">
                                <Image
                                    src='/relearn-logo.svg'
                                    alt='relearn'
                                    className='cursor-pointer'
                                    width={75}
                                    height={24}
                                />
                                <Image
                                    onClick={()=>{toggleMobileMenu(false)}}
                                    src='/close.svg'
                                    alt='relearn'
                                    className='cursor-pointer'
                                    width={24}
                                    height={24}
                                />
                            </div>
                            {navItems.map((item, index) => {
                                if (item?.link) {
                                    return (
                                        <Link
                                            href={item.link}
                                            key={index}
                                            target={item?.target}
                                        >
                                            <li
                                                className={`${
                                                    pathname === item.link
                                                        ? 'text-red-100 font-semibold'
                                                        : 'text-[#333438]'
                                                } block capitalize font-normal text-[1.1rem] tracking-[0.1px]`}
                                            >
                                                {item.name}
                                            </li>
                                        </Link>
                                    );
                                }

                                return (
                                    <div key={index} className='h-max'>
                                        <div
                                            onClick={toggleDropdown}
                                            className='cursor-pointer relative flex items-center justify-between'
                                        >
                                            <li className='block capitalize font-normal text-[1.1rem] text-[#333438] mr-[6px]'>
                                                {item.name}
                                            </li>
                                            <Image
                                                src='/chevron-down.svg'
                                                alt='get involved'
                                                className='cursor-pointer -rotate-90'
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                        <div className='top-0 w-full absolute bg-white items-center z-50 flex flex-col justify-between h-screen overflow-y-scroll'>
                            {navItems.map((item, index) => {
                                if (item?.children) {
                                    return (
                                        <motion.div
                                            key={index}
                                            animate={{
                                                x: showDropdown ? '0' : '100vw'
                                            }}
                                            onClick={toggleDropdown}
                                            className={`${
                                                showDropdown
                                                    ? 'nav-dropdown opacity-100  rounded-[12px] w-full max-w-[1172px]'
                                                    : 'invisible opacity-0 transition-opacity transition-visibility duration-500'
                                            } right-0 absolute bg-white  rounded-[4px]`}
                                        >
                                            <div className='w-full flex flex-col bg-white px-[20px] gap-[40px] pb-[40px]'>
                                                <div className="flex justify-between h-[80px] items-center sticky top-0 z-[120]">
                                                    <Image
                                                        onClick={()=>{toggleDropdown()}}
                                                        src='/arrow-right-black.svg'
                                                        alt='relearn'
                                                        className='cursor-pointer rotate-180'
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <Image
                                                        onClick={()=>{toggleMobileMenu(false)}}
                                                        src='/close.svg'
                                                        alt='relearn'
                                                        className='cursor-pointer'
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                                <div>
                                                    <p className='font-neue font-bold leading-[] tracking-[0.8%] text-[25px]'>
                                                        Get involved
                                                    </p>
                                                    <p className='text-[17px] w-full mt-[20px] max-w-[203px] font-matter opcity-[68%] text-[#313235AD]'>
                                                        Discover our communities
                                                        and programs.
                                                    </p>
                                                </div>
                                                {Object.values(
                                                    getInvolvedLinks
                                                ).map((section, index) => (
                                                    <GetInvolvedSection
                                                        key={index}
                                                        section={section}
                                                    />
                                                ))}
                                            </div>
                                        </motion.div>
                                    );
                                }
                            })}
                        </div>
                    </>
                ) : null}
            </nav>
        </div>
    );
};
export default Navbar;
