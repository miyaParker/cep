"use client";
import Image from "next/image";
import {navItems, mobileNavItems} from "@/constants";
import Link from "next/link";
import {useState, useEffect, useRef, useCallback, useContext} from "react";
import {usePathname} from "next/navigation";

const FooterLinkSection = ({section}) => {
    return (
        <div>
            <div className="text-[#313235]">
                <div className="w-max">
                    <p className="font-matter text-[18px] leading-[120%] text-left uppercase">
                        {section.title}
                    </p>
                    <div className="w-full bg-[#313235D6] bg-opacity-80 h-[1px]"></div>
                </div>
            </div>
            <div className="">
                {section.links.map((link, index) => (
                    <p
                        key={index}
                        className="font-matter text-[17px] leading-[120%] text-left mt-[16px]"
                    >
                        {link}
                    </p>
                ))}
            </div>
        </div>
    );
};

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
            window.addEventListener("scroll", handleScroll);
            if (prevScrollPos)
                return () => {
                    window.removeEventListener("scroll", handleScroll);
                };
        }, [prevScrollPos, visible, handleScroll]);

        const getInvolvedLinks = {
            communities: {
                title: "Our communities",
                links:
                    ["Teachers’ Lounge", "Viable", "Digital Literacy COP", "Educators’ Network"]
            }
            ,
            programs: {
                title: "Our Programs",
                links:
                    ["EdTech Festival", "Schools EdTech Clinic"]
            }
            ,
            ecosystem: {
                title: "Ecosystem",
                links:
                    ["Our Ecosystem"]
            }
            ,
            partnerships: {
                title: "Partnerships",
                links:
                    ["Become a Partner"]
            }

        }
        return (
            <div className='sticky top-0  z-[250]'>
                <nav
                    className={`${
                        visible ? "top-0" : "top-[-8rem]"} transition-top duration-300 ease-out border-b w-full border-black-100/[0.05] hidden bg-white lg:flex h-[8rem] font-matter font-normal items-center justify-between`}>
                    <div
                        className="mx-auto relative flex  justify-between w-[100%] max-w-[1500px] lg:px-[80px] xl:px-[130px]">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Image of re:learn logo"
                                width={107}
                                height={28}
                            />
                        </Link>
                        <ul className="flex justify-between items-center gap-x-[32px]">
                            {navItems.map((item, index) => {
                                if (item?.link) {
                                    return (
                                        <Link href={item.link} key={index}>
                                            <li
                                                className={`${pathname === item.link ? "text-red-100 font-semibold" : "text-[#333438]"} block capitalize font-normal text-[1.1rem] `}>
                                                {item.name}
                                            </li>
                                        </Link>);
                                }
                                return (
                                    <div key={index} className="h-max">
                                        <div onClick={toggleDropdown} className="cursor-pointer relative flex items-center">
                                            <li className="block capitalize font-normal text-[1.1rem] text-[#333438] mr-[6px]">
                                                {item.name}
                                            </li>
                                            <Image src="/chevron-down.svg" alt="get involved"
                                                   className="cursor-pointer"
                                                   width={24}
                                                   height={24}/>
                                        </div>
                                        {item?.children ? <div onClick={toggleDropdown}
                                                               className={`${showDropdown ? "nav-dropdown opacity-100  rounded-[12px] w-full max-w-[1172px]" : "invisible opacity-0 transition-opacity transition-visibility duration-500"} right-0 absolute bg-white  rounded-[4px] px-[20px] pt-[30px]`}>

                                            <div
                                                className="w-full max-w-[1172px] grid grid-cols-4  bg-white px-[80px] py-[40px] ">
                                                <div>
                                                    <p className="font-neue font-bold leading-[] tracking-[0.8%] text-[25px]">Get
                                                        involved</p>
                                                    <p className="text-[17px] w-full mt-[20px] max-w-[203px] font-matter opcity-[68%] text-[#313235AD]">Discover
                                                        our communities
                                                        and programs.</p>
                                                </div>
                                                {/*<div className="">*/}
                                                    {Object.values(getInvolvedLinks).map((section, index) => (
                                                        <FooterLinkSection key={index} section={section}/>
                                                    ))}
                                                {/*</div>*/}
                                                {/*<div>*/}
                                                {/*<div className="text-[#313235]">*/}
                                                {/*    <div className="w-max">*/}
                                                {/*        <p className="font-matter text-[18px] leading-[120%] text-left uppercase">{getInvolvedLinks.communities.title}</p>*/}
                                                {/*        <div*/}
                                                {/*            className="w-full bg-[#313235D6] bg-opacity-80 h-[1px]">*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}

                                                {/*</div>*/}

                                            </div>
                                            {/*{item?.children.map((child, index) => (<div key={index}*/}
                                            {/*                                            className="flex items-center gap-x-[8px] mb-[24px]">*/}
                                            {/*  <Image src={child.icon} alt={child.name}*/}
                                            {/*         width={28}*/}
                                            {/*         height={28} />*/}
                                            {/*  {child?.target ? <a target={child?.target} href={child.link}*/}
                                            {/*                      className="font-sans text-[16px] tracking-[0.5px]">{child.name}</a> :*/}
                                            {/*    <Link href={child.link}*/}
                                            {/*          className="font-sans text-[16px] tracking-[0.5px]">{child.name}</Link>}*/}
                                            {/*</div>))}*/}
                                        </div> : null}

                                    </div>);
                            })}

                        </ul>
                    </div>
                </nav>
                <nav
                    className={`${
                        visible || mobileMenuVisible ? "top-0" : "top-[-8rem]"} ${
                        mobileMenuVisible ? "h-screen" : "h-max"} transition duration-1000 ease-out flex-col w-full mx-auto fixed bg-white flex lg:hidden z-40 font-matter font-normal sticky`}>
                    <div
                        className="flex flex-row justify-between items-center h-[80px] px-[20px] border-b border-black-100/[0.05]">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Image of re:learn logo"
                                width={77}
                                height={20}
                            />
                        </Link>
                        <Image
                            onClick={() => toggleMobileMenu(!mobileMenuVisible)}
                            src="/hamburger-icon.svg"
                            alt="Image of re:learn logo"
                            width={24}
                            height={24}
                        />
                    </div>
                    {mobileMenuVisible ? <div
                        className="top-[80px] w-full pt-[16px] gap-[40px] sticky bg-white items-center z-50 flex flex-col justify-between">
                        {mobileNavItems.map((item, index) => {
                            if (item?.link) {
                                return (
                                    <Link href={item.link} key={index} target={item?.target}>
                                        <li
                                            className={`${pathname === item.link ? "text-red-100 font-semibold" : "text-[#333438]"} block capitalize font-normal text-[1.1rem] tracking-[0.1px]`}>
                                            {item.name}
                                        </li>
                                    </Link>);
                            }
                        })}
                    </div> : null}
                </nav>

            </div>
        )
            ;
    }
;
export default Navbar;
