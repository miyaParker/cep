'use client'
import React, {useEffect, useState} from "react";
import {fetchPost} from "@/api";
import {usePathname} from 'next/navigation'
import {LinkedinShare, TwitterShare, FacebookShare} from 'react-share-kit';
import Image from "next/image";
import {Post} from "@/types";

const Post = () => {
    const [post, setPost] = useState({} as Post);
    const slug = usePathname()
    const [loading, setLoading] = useState(true);
    const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
    useEffect(() => {
        if (slug) {
            fetchPost(slug.replace("/news-and-updates", "")).then(post => {
                setPost(post.data)
                setLoading(false)
            });
        }
    }, [slug])
    const iconsStyles = {
        url: `${FRONTEND_URL}/${post?.slug}`, title: post?.title,
        bgColor: "#FFFFFF", color: "#18191B", round: true, size: 27
    }
    return (
        <div className='w-full pt-[160px] lg:pt-[218px] overflow-scroll'>

            <a href="/news-and-updates">
                <div className="flex gap-[0.5px] items-center mx-auto max-w-[1440px] px-[20px] lg:px-[130px]">
                    <Image src="/chevron-down.svg" alt="back to news and updates" width={24} height={24}
                           className='rotate-90'/>
                    <p className="font-matter tracking-[1.5%] leading-[120%]">Back</p>
                </div>
            </a>
            <div className="mx-auto max-w-[1440px] px-[20px] lg:px-[180px] xl:px-[238px]">
                <div className={`flex items-center justify-center w-full`}>
                    {post ? <div
                        className='hidden w-full lg:flex lg:flex-row mt-[80px] gap-x-[38px] xl:gap-x-[68px]'>
                        <div className="">
                            <div
                                className='mt-[20px] justify-center lg:justify-start lg:mx-0 flex items-center gap-x-[12px] mb-[24px]'>
                                <div className='flex items-center gap-x-[8px] mt-[8px] flex-wrap'>
                                    <div className='w-2 h-2 bg-black-100 rounded-full'></div>
                                    <p className={"rounded-[3px] text-[17px] font-medium font-matter"}>{post?.terms[0]?.name}</p>
                                </div>
                            </div>
                            <h1 className='w-full max-w-[798px] font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[45px] xl:text-[56px]'>
                                {post?.title}
                            </h1>
                            <div
                                className='bg-center bg-cover rounded-[6px] w-full lg:h-[520px] mx-auto lg:mx-0 my-[64px]'
                                style={{backgroundImage: `url(${post.featured_image})`}}></div>
                            <div className='flex gap-x-[98px] pl-[20px]'>
                                <div>
                                    <p className={"text-[17px] font-semibold font-matter mb-[8px] tracking-[1%] text-[#313235]"}>{post?.custom_fields?.editor_name}</p>
                                    <p className={"text-[17px] opacity-60 text-[#0E0E10] max-w-[182px] font-normal font-matter tracking-[1%]"}> {post?.custom_fields?.editor_position && post?.custom_fields?.editor_position[0]}</p>
                                    <p className={"mt-[48px] text-[17px] opacity-60 text-[#0E0E10] max-w-[182px] font-normal font-matter tracking-[1%]"}> Share
                                        Article:</p>
                                    <div className="mt-[20px] flex items-center gap-x-[12px]">
                                        <div
                                            className="flex items-center justify-center rounded-full border-[1px] border-[#A7A8AE] w-[28px] h-[28px]">
                                            <LinkedinShare {...iconsStyles}/>
                                        </div>
                                        <div
                                            className="flex items-center justify-center rounded-full border-[1px] border-[#A7A8AE] w-[28px] h-[28px]">
                                            <FacebookShare {...iconsStyles}/>
                                        </div>
                                        <div
                                            className="flex items-center justify-center rounded-full border-[1px] border-[#A7A8AE] w-[28px] h-[28px]">
                                            <TwitterShare {...iconsStyles}/>
                                        </div>
                                    </div>
                                </div>
                                {post?.content ? <div
                                    className='post flex-1 mb-[25px] xl:mb-[47.5px] leading-[140%] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[20px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0'
                                    dangerouslySetInnerHTML={{__html: post?.content}}/> : null}
                            </div>

                        </div>

                    </div> : loading ? <div
                            className='pb-40 hidden w-full lg:flex lg:flex-row mt-[80px] gap-x-[38px] xl:gap-x-[68px]'>
                            <div className="w-full">
                                <div
                                    className="mt-[20px] justify-center lg:justify-start lg:mx-0 flex items-center gap-x-[12px] mb-[24px]">
                                    <div className="flex items-center gap-x-[8px] mt-[8px] flex-wrap">
                                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                                        <div className="h-[20px] w-[100px] bg-gray-300 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div
                                    className="h-[156px] max-w-[798px] bg-gray-300 rounded animate-pulse mx-auto lg:mx-0 mb-[32px]"></div>
                                <div
                                    className="bg-gray-300 animate-pulse bg-center bg-cover rounded-[6px] w-full lg:h-[520px] mx-auto lg:mx-0 my-[64px]"></div>
                                <div className="flex gap-x-[98px]">
                                    <div>
                                        <div
                                            className="h-[20px] w-[150px] bg-gray-300 rounded animate-pulse mb-[8px]"></div>
                                        <div
                                            className="h-[20px] w-[120px] bg-gray-300 opacity-60 rounded animate-pulse mb-[8px]"></div>
                                        <div
                                            className="h-[20px] w-[100px] bg-gray-300 opacity-60 rounded animate-pulse mt-[48px]"></div>
                                    </div>
                                    <div
                                        className="flex-1 h-[560px] bg-gray-300 rounded animate-pulse mx-auto lg:mx-0"></div>
                                </div>
                            </div>
                        </div>
                        : "We encountered an error"}
                </div>
            </div>
        </div>
    )
}
export default Post
