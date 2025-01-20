'use client'
import Image from "next/image";
import Article from "@/components/NewsAndUpdates/Article";
import Button from "@/components/Generic/Button";
import React, {useEffect, useState} from "react";
import {fetchAllPosts} from "@/api";
import {Post} from "@/types";

const NewsAndUpdates = () => {
    const [posts, setPosts] = useState([] as Post[]);
    const [data, setData] = useState([] as Post[]);
    const [loading, setLoading] = useState(true);

    const [activeTab, setActiveTab] = useState("All");
    const onClickTab = (title: string) => {
        setActiveTab(title);
        if (title === "All") {
            setData(posts);
            return;
        }
        const filteredPosts = posts.filter((post) => {
                const category = post?.terms[0]?.name
                return category === title
            }
        )
        setData(filteredPosts);
    };

    const bannerPost = posts.length ? posts[0] : null
    const tabs = ["All", "Blog", "Event"]
    const activeTabStyle = "font-semibold lg:text-[17px] border-b-2 text-[#313235]"


    const Tab = (title: string) => <p
        onClick={() => {
            onClickTab(title)
            console.log(activeTab === title, activeTab, title)
        }
        }
        className={`px-[2px] pb-[8px] transition-all duration-300 ease-in cursor-pointer tracking-[0.5%] leading-[120%] lg:text-[18px] ${activeTab === title ? activeTabStyle : "opacity-90 font-light"}`}
    >
        {title}
    </p>

    useEffect(() => {
        fetchAllPosts().then(posts => {
            setPosts(posts.data)
            setData(posts.data)
            setLoading(false);
        });
    }, [])
    return (
        <div className='w-full pt-[160px] lg:pt-[218px] overflow-scroll'>
            <div className="mx-auto max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[130px]">
                <div>
                    <h1 className="text-[#0E0E10] font-neue text-[37px] md:text-[42px] lg:text-[60px] font-bold">Latest
                        Update</h1>
                    <p className="mt-[24px] text-[#333438]/90 leading-[140%] font-matter text-[20px] lg:text-[22px]  max-w-[289px] md:max-w-[389px] lg:max-w-[515px]">
                        See what we have been up to</p>
                </div>
                {posts?.length ?
                    <div>
                        {/*Banner post*/}
                        {bannerPost && <div
                            className='hidden w-full lg:flex lg:flex-row mt-[80px] gap-x-[38px] xl:gap-x-[68px]'>
                            <div className='bg-center bg-cover rounded-[6px] w-[60%] lg:h-[408px] mx-auto lg:mx-0'
                                 style={{backgroundImage: `url(${bannerPost.featured_image})`}}></div>
                            <div className="w-[40%]">
                                <div
                                    className='mt-[20px] justify-center lg:justify-start lg:mx-0 flex items-center gap-x-[12px] mb-[24px]'>
                                    <div className='flex items-center gap-x-[8px] mt-[8px] flex-wrap'>
                                        <div className='w-2 h-2 bg-black-100 rounded-full'></div>
                                        <p className={"rounded-[3px] text-[17px] font-medium font-matter"}>{bannerPost?.terms[0]?.name}</p>
                                    </div>
                                </div>
                                <h1 className='w-full font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] xl:text-[40px]'>
                                    {bannerPost?.title}
                                </h1>
                                <div
                                    className='mt-[20px] mb-[25px] xl:mb-[47.5px] leading-[140%] max-w-[402px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[20px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'
                                    dangerouslySetInnerHTML={{__html: `${bannerPost?.excerpt}...`}}/>
                                {/*TODO replace with excerpt*/}
                                <div className='flex items-center gap-x-[16px]'>
                                    <a href={`/news-and-updates/${bannerPost.slug}`}><p
                                        className='text-[17px] font-matter text-red-100 font-medium tracking-[0.255px]'>Read
                                        More</p></a>
                                    <div
                                        className='rounded-full bg-red-100 w-[32px] h-[32px] flex items-center justify-center'>
                                        <Image src='/arrow-down.svg' className='rotate-[-90deg]'
                                               alt='why you should join us'
                                               width={24} height={24}/></div>
                                </div>
                            </div>

                        </div>}
                        <p
                            className={`lg:mt-[100px] xl:mt-[128px] hidden font-neue lg:inline-block h-8 w-[237px] text-left text-[32px] font-bold leading-none text-[#0E0E10]`}>
                            News & Updates
                        </p>
                        <div className="flex gap-[26px] items-center mt-[40px]">
                            {tabs.map((tab, index) => Tab(tab))}
                        </div>
                        <div
                            className="justify-center mt-[64px] lg:mt-[57px] mb-[48px] gap-x-[26px] gap-y-[68px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                            {data.map((article, index) => {
                                if (index > 0) {
                                    return <Article key={index} article={article} index={index}/>
                                }
                            })}
                        </div>
                        <Button
                            styles='mb-[156px] bg-[#F1F2F3] w-max relative z-20 font-matter block mx-auto mt-[40px] text-[#43434C] w-[12rem] h-[4rem] text-[1.125rem] px-[40px] py-[20px]'
                            btnText='Load More Stories'
                        />
                    </div> : loading ? <div className="w-full ">
                        <div className="">

                            <div className="hidden lg:flex lg:flex-row mt-[80px] gap-x-[38px] xl:gap-x-[68px]">
                                <div className="bg-gray-200 rounded-[6px] w-[60%] lg:h-[408px] animate-pulse"></div>
                                <div className="w-[40%] space-y-4">
                                    <div className="h-[24px] w-[80px] bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-[40px] w-full bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-[20px] w-[70%] bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-[20px] w-[60%] bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-[32px] w-[120px] bg-gray-300 rounded animate-pulse"></div>
                                </div>
                            </div>

                            <p className="lg:mt-[100px] xl:mt-[128px] hidden lg:inline-block h-[32px] w-[237px] bg-gray-200 rounded animate-pulse"></p>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-[68px] mt-[64px] lg:mt-[57px] mb-[48px]">
                                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="h-[200px] bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-[24px] w-[80%] bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-[16px] w-[70%] bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="h-[64px] w-[12rem] bg-gray-300 rounded mx-auto mt-[40px] animate-pulse"></div>
                        </div>
                    </div> : "No posts found"}
            </div>
        </div>
    )
}
export default NewsAndUpdates
