import {articles} from "@/app/constants";
import Image from "next/image";
import Article from "@/components/NewsAndUpdates/Article";
import Button from "@/components/Generic/Button";

const NewsAndUpdates = () => {
    const news = []
    return (
        <div className='w-full pt-[160px] lg:pt-[180px] lg:pt-0 overflow-scroll'>
            {news.length ? <div
                    className="mx-auto max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[130px]">
                    <div>
                        <h1 className="text-[#0E0E10] font-neue text-[37px] md:text-[42px] lg:text-[60px] font-bold">Latest
                            Update</h1>
                        <p className="mt-[24px] text-[#333438]/90 leading-[140%] font-matter text-[20px] lg:text-[22px]  max-w-[289px] md:max-w-[389px] lg:max-w-[515px]">
                            See what we have been up to</p>
                    </div>
                    <div
                        className='hidden w-full lg:flex lg:flex-row mt-[80px] gap-x-[38px] xl:gap-x-[68px]'>
                        <Image
                            src='/news-latest.jpg'
                            alt='re:learn is driven by partnerships'
                            width={624}
                            height={450}
                            className='object-cover rounded-[6px] lg:w-[60%] lg:h-[408px] mx-auto lg:mx-0'
                        />
                        <div>
                            <div
                                className='mt-[20px] justify-center lg:justify-start lg:mx-0 flex items-center gap-x-[12px] mb-[24px]'>
                                <p className='rounded-[3px] text-[17px] font-medium font-matter px-[16px] py-[8px] bg-[#FBF2EA] text-[#E58A1F]'>Event</p>
                                <p>3 hours ago</p>
                            </div>
                            <h1 className='w-full font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] xl:text-[40px]'>
                                Teachers’ Day celebration: Teachers’ Lounge
                            </h1>
                            <p className='mt-[20px] mb-[25px] xl:mb-[47.5px] leading-[140%] max-w-[402px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[20px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'>
                                We trained 21 fellows in Lagos and Kenya in
                                the application of technology for teaching,
                                learning and education management.
                            </p>
                            <div className='flex items-center gap-x-[16px]'>
                                <p className='text-[17px] font-matter text-red-100 font-medium tracking-[0.255px]'>Read
                                    More</p>
                                <div className='rounded-full bg-red-100 w-[32px] h-[32px] flex items-center justify-center'>
                                    <Image src='/arrow-down.svg' className='rotate-[-90deg]' alt='why you should join us'
                                           width={24} height={24}/></div>
                            </div>
                        </div>

                    </div>
                    <p
                        className={`lg:mt-[100px] xl:mt-[128px] hidden font-neue lg:inline-block h-8 w-[237px] text-left text-[32px] font-bold leading-none text-[#0E0E10]`}>
                        News & Updates
                    </p>
                    <div
                        className="justify-center mt-[64px] lg:mt-[57px] mb-[48px] gap-x-[26px] gap-y-[68px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article, index) => {
                            if (index === 0) {
                                return <Article key={index} article={article} index={index}/>
                            }
                            return <Article key={index} article={article} index={index}/>
                        })}
                    </div>
                    <Button
                        styles='mb-[156px] bg-[#F1F2F3] w-max relative z-20 font-matter block mx-auto mt-[40px] text-[#43434C] w-[12rem] h-[4rem] text-[1.125rem] px-[40px] py-[20px]'
                        btnText='Load More Stories'
                    />
                </div> :
                <div className='flex flex-col items-center mx-auto max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[130px]'>
                    <Image
                        src='/empty-news.svg'
                        alt='Check Back Soon!'
                        width={570}
                        height={462}
                        className='w-full  max-w-[380px] lg:w-[500px] lg:max-w-[520px] xl:w-[520px] mx-auto lg:mx-0'
                    />

                    <h1 className='max-w-[271px] font-bold mx-auto lg:mx-0 leading-[120%] text-center font-neue text-[#0E0E10] text-[30px] md:text-[32px] mt-[10px]'>
                        Check Back Soon!
                    </h1>
                    <p className='mt-[16px] mb-[48px] leading-[140%] max-w-[509px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter text-center text-[#333438] text-[15px] md:text-[17px] lg:mx-0'>
                        The latest news and updates about re:learn will be posted on this
                        space. In the meanwhile, you can visit our social media pages to
                        see what’s happening.
                    </p>
                    <div className='flex gap-x-[1rem] mb-[160px]'>
                        <a href='https://instagram.com/relearnafrica?igshid=Y2IzZGU1MTFhOQ==' target='_blank'>
                            <Image
                                src='/instagram-grey.svg'
                                alt='relearn instagram'
                                width={32}
                                height={32}/>
                        </a>
                        <a href='https://facebook.com/CcHUBnigeria' target='_blank'>
                            <Image
                                src='/facebook-grey.svg'
                                alt='relearn facebook'
                                width={32}
                                height={32}
                            />
                        </a>
                        <a href='https://twitter.com/relearnNG?t=Hxou-GmPMa967uZRZEC6tA&s=09' target='_blank'>
                            <Image
                                src='/twitter-grey.svg'
                                alt='relearn twitter'
                                width={32}
                                height={32}
                            />
                        </a>
                        <a href='https://www.youtube.com/CcHubNigeria' target='_blank'>
                            <Image
                                src='/youtube-grey.svg'
                                alt='relearn youtube'
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>

                </div>
            }
        </div>
    )
}
export default NewsAndUpdates
