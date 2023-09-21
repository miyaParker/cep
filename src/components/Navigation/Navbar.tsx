"use client";
import Image from "next/image";
import { navItems, mobileNavItems } from "@/constants";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback, useContext } from "react";
import { usePathname } from "next/navigation";
import BannerContext from "@/app/contexts/BannerContext";

const Navbar = () => {
    const { visible: bannerVisible, toggleVisible } = useContext(BannerContext);
    const linkRef = useRef<HTMLAnchorElement | null>(null);
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
    return (
      <div>
        <nav
          className={`${
            visible ? "top-0" : "top-[-8rem]"} transition-top duration-300 ease-out border-b w-full border-black-100/[0.05] hidden z-50 fixed bg-white lg:flex h-[8rem] font-matter font-normal items-center justify-between`}>
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
                             height={24} />
                    </div>
                    {item?.children ? <div onClick={toggleDropdown}
                                           className={`${showDropdown ? "nav-dropdown opacity-100" : "invisible opacity-0 transition-opacity transition-visibility duration-500"} absolute bg-white  rounded-[4px] px-[20px] pt-[30px]`}>

                      {item?.children.map((child, index) => (<div key={index}
                                                                  className="flex items-center gap-x-[8px] mb-[24px]">
                        <Image src={child.icon} alt={child.name}
                               width={28}
                               height={28} />
                        {child?.target ? <a target={child?.target} href={child.link}
                                            className="font-sans text-[16px] tracking-[0.5px]">{child.name}</a> :
                          <Link href={child.link}
                                className="font-sans text-[16px] tracking-[0.5px]">{child.name}</Link>}
                      </div>))}
                    </div> : null}
                  </div>);
              })}

            </ul>
          </div>
        </nav>
        {pathname === "/" ? <>
          <div className={`${
            visible ? "top-[80px] lg:top-[128px]" : "top-0"} hidden flex-wrap leading-[150%] lg:leading-[100%] tracking-[0.1px] transition-top duration-300 ease-out gap-x-[20px] gap-x-[20px] lg:flex justify-center items-center w-full z-40 fixed text-[#0E0E10] py-[20px] bg-[#F7BD06]`}>
            <p className="font-matter text-center opacity-90 text-[20px]">Explore innovative solutions at the EdTech
              Festival on <span
                className="font-bold">Saturday, 23rd September 2023</span>
            </p>
            <Image width={24} height={24} src="/arrow-right-black.svg" alt="learn more about edtech festival"
                   className="block lg:hidden" />

            <a href="https://edtechfestival.relearn.ng" target="_blank" ref={linkRef}>

              <button
                className="tracking-[0.18px] hidden bg-[#D69A00] lg:flex items-center py-[8px] gap-[8px] pl-[20px] pr-[10px] text-white text-[18px] font-medium rounded-[5px]">
                <span>Learn More </span><Image width={24} height={24} src="/arrow-right-white.svg"
                                               alt="learn more about edtech festival" /></button>
            </a>
          </div>
          {bannerVisible &&
            <div onClick={(e) => {
              linkRef?.current && linkRef.current.click();
            }} className={`${
              visible ? "top-[80px]" : "top-0"} flex lg:hidden w-full px-[20px] min-[375px]:px-[47px] flex-wrap leading-[150%] tracking-[0.1px] transition-top duration-300 ease-out  justify-center items-center w-full z-40 fixed text-[#0E0E10] py-[20px] bg-[#F7BD06]`}>
              <p className="font-matter opacity-90 text-center text-[18px]">Explore innovative solutions at the EdTech
                Festival
                on <span className="font-bold">Saturday, 23rd September 2023 <Image width={24} height={24}
                                                                                    src="/arrow-right-black.svg"
                                                                                    alt="learn more about edtech festival"
                                                                                    className=" inline-block lg:hidden" /></span>
              </p>
              <Image width={20} height={20}
                     src="/close-yellow.svg"
                     alt="learn more about edtech festival"
                     className="absolute right-[14px] top-[14px]" onClick={(e) => {
                e.stopPropagation();
                toggleVisible(false);
              }} />
            </div>}</> : null}
        <nav
          className={`${
            visible || mobileMenuVisible ? "top-0" : "top-[-8rem]"} ${
            mobileMenuVisible ? "h-screen" : "h-max"} transition duration-1000 ease-out flex flex-col w-full mx-auto fixed bg-white flex lg:hidden z-40 font-matter font-normal`}>
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
            className="top-[80px] w-full pt-[16px] gap-[40px] absolute bg-white items-center z-50 flex flex-col justify-between">
            {mobileNavItems.map((item, index) => {
              if (item?.link) {
                return (
                  <Link href={item.link} key={index}>
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
