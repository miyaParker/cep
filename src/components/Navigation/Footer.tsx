import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#0E0E10] w-screen text-white'>
            <footer>
                <div className='font-matter lg:flex-row lg:justify-between lg:items-start lg:justify-start lg:text-[17px] text-white py-[72px] lg:py-[64px] max-w-[1500px] mx-auto flex flex-col px-[20px] lg:px-[80px] xl:px-[130px]'>
                    <div className='self-start'>
                        <div className='flex flex-col gap-[24px]'>
                            <div className='relative left-[-60px] top-[-40px]'>
                                <Image
                                    src='/logo-footer.png'
                                    alt='relearn'
                                    width={200}
                                    height={28}
                                    className='block mb-[4px]'
                                />
                            </div>
                            <div className='relative bottom-20 flex flex-col gap-[24px]'>
                                <a
                                    className='block tracking-[1.5%]'
                                    href='mailto:info@relearn.ng'
                                    target='_blank'
                                >
                                    info@relearn.ng
                                </a>
                                <p className='text-white tracking-[1.5%]'>
                                    +2347031650809
                                </p>
                                <p className='tracking-[1.5%]'>
                                    8, Montgomery road, Yaba, Lagos
                                </p>
                                <p className='tracking-[1.5%] max-w-[308px]'>
                                    Jahazi Building, 154 James Gichuru
                                    Road, Nairobi, Kenya
                                </p>
                            </div>
                        </div>
                        <div className='mt-[-15px] flex gap-x-[1rem]'>
                            <a
                                href='https://www.instagram.com/relearnafrica/profilecard/?igsh=MW9mYnJ2cGk2OXZmMg%3D%3D'
                                target='_blank'
                            >
                                <Image
                                    src='/instagram.svg'
                                    alt='relearn instagram'
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a
                                href='https://www.facebook.com/people/Re-LearnAfrica/61554009331506'
                                target='_blank'
                            >
                                <Image
                                    src='/facebook.svg'
                                    alt='relearn facebook'
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a
                                href='https://x.com/relearnNG'
                                target='_blank'
                            >
                                <Image
                                    src='/twitter.svg'
                                    alt='relearn twitter'
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a
                                href='https://www.youtube.com/CcHubNigeria'
                                target='_blank'
                            >
                                <Image
                                    src='/youtube.svg'
                                    alt='relearn youtube'
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </div>
                    </div>
                    <div className='my-[4rem] lg:my-0 self-start'>
                        <p className='text-[22px] lg:text-[20px] tracking-[0.8%] font-neue font-bold mb-[32px] lg:mb-[24px]'>
                            Learn
                        </p>
                        <Link href='/about'>
                            <p className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                About re:learn
                            </p>
                        </Link>
                        <Link href='/projects'>
                            <p className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Projects
                            </p>
                        </Link>
                        <Link href='/our-ecosystem'>
                            <p className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Our Ecosystem
                            </p>
                        </Link>
                        <Link href='/news-and-updates'>
                            <p className='tracking-[1.5%]'>
                                News & Update
                            </p>
                        </Link>

                    </div>
                    <div className='text-[16px] lg:text-[17px] self-start'>
                        <p className='text-[22px] lg:text-[20px] tracking-[0.8%] font-neue font-bold mb-[32px] lg:mb-[24px]'>
                            Get Involved
                        </p>
                        <Link href='/get-involved/teachers-lounge'>
                            <p className='text-[17px] tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Teachers' Lounge
                            </p>
                        </Link>
                        <Link href='/get-involved/viable'>
                            <p className='text-[17px] tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Viable
                            </p>
                        </Link>
                        <Link href='/get-involved/digital-literacy-community-of-practice'>
                            <p className='text-[17px] tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Digital Literacy Community of Practice
                            </p>
                        </Link>
                        <Link href='/get-involved/schools-edtech-clinic'>
                            <p className='text-[17px] tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Schools EdTech Clinic
                            </p>
                        </Link>

                        <Link href='/get-involved/educators-network'>
                            <p className='text-[17px] tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Educator Network
                            </p>
                        </Link>
                        <Link href='/get-involved/edtech-festival'>
                            <p className='text-[17px] tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                EdTech Festival
                            </p>
                        </Link>
                        <Link href='/get-involved/become-a-partner-at-relearn'>
                            <p className='text-[17px] text-[17px] tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                                Become a Partner
                            </p>
                        </Link>
                        {/*<Link href='/about?id=COE'>*/}
                        {/*    <p className='tracking-[1.5%]'>EdTech CoE</p>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
