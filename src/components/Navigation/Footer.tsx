import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <div className='bg-[#0E0E10] w-screen'>
                <footer
                    className='font-matter lg:flex-row lg:gap-x-[150px] xl:gap-x-[270px] 2xl:gap-x-[420px] 3xl:gap-x-[520px] lg:items-start lg:justify-start lg:text-[17px] text-white py-[72px] lg:py-[64px] max-w-[2560px] mx-auto flex flex-col px-[20px] lg:px-[80px] xl:px-[130px] 2xl:px-[160px] 3xl:px-[280px] 4xl:px-[420px]'>
                    <div className='mb-[4rem] self-start'>
                        <div className='flex flex-col mb-[56px]'>
                            <Image
                                src='/logo-footer.svg'
                                alt='relearn'
                                width={92}
                                height={24}
                                className=''
                            />
                            <p className='tracking-[1.5%] my-[24px]'>
                                8, Montgomery road, Yaba, Lagos
                            </p>
                            <p className='text-white tracking-[1.5%]'>
                                +2347031650809
                            </p>
                        </div>
                        <div>
                            <a
                                className='mb-[24px] block tracking-[1.5%]'
                                href='mailto:info@relearn.ng'
                            >
                                info@relearn.ng
                            </a>
                            <div className='flex gap-x-[1rem]'>
                                <Image
                                    src='/instagram.svg'
                                    alt='relearn instagram'
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src='/facebook.svg'
                                    alt='relearn facebook'
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src='/twitter.svg'
                                    alt='relearn twitter'
                                    width={32}
                                    height={32}
                                />
                                <Image
                                    src='/youtube.svg'
                                    alt='relearn youtube'
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-[4rem] self-start'>
                        <p
                            className='text-[22px] lg:text-[20px] tracking-[0.8%] font-neue font-bold mb-[32px] lg:mb-[24px]'>
                            Learn
                        </p>
                        <Link href='/about'><p className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                            About re:learn
                        </p></Link>
                        <Link href='/projects'><p className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                            Projects
                        </p></Link>
                        <Link href='news-and-updates'><p className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                            News & Update
                        </p>
                        </Link>
                        <Link href='/certificate-portal'><p className='tracking-[1.5%]'>Certificate Portal</p></Link>
                    </div>
                    <div className='text-[16px] lg:text-[17px] self-start'>
                        <p className='text-[22px] lg:text-[20px] tracking-[0.8%] font-neue font-bold mb-[32px] lg:mb-[24px]'>
                            Get Involved
                        </p>
                        <Link href='/get-involved/become-a-partner-at-relearn'><p
                            className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                            Become a Partner
                        </p>
                        </Link>
                        <Link href='/get-involved/educators-network'><p
                            className='tracking-[1.5%] mb-[32px] lg:mb-[24px]'>
                            Educator Network
                        </p>
                        </Link>
                        <p className='tracking-[1.5%]'>EdTech CoE</p>
                    </div>
                </footer>
            </div>
        </div>

    );
};
export default Footer;
