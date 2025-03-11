"use client"

const Article = ({article, index}: { article: any, index: number }) => {
    return (
        <a href={`/news-and-updates/${article.slug}`}>
            <div
                className={` rounded-[3px] border border-white hover:border-[#0E0E10] duration-500 p-[16px]`}>
                <div className={`justify-items-start`}>

                    <div className='bg-center bg-cover h-[252px] w-full mb-[28px] rounded-[4px]'
                         style={{backgroundImage: `url(${article.featured_image ? article.featured_image : "/news-latest.jpg)"}`}}>
                    </div>
                    <div className='flex items-center gap-x-[8px] mb-[24px] flex-wrap'>
                        <div className='w-2 h-2 bg-black-100 rounded-full'></div>
                        <p className={"rounded-[3px] text-[17px] font-medium font-matter py-[8px]"}>{article?.terms[0]?.name}</p>
                    </div>
                    <p className="max-w-[260px] font-neue text-[22px] lg:text-[25px] text-[#0E0E10] font-bold mb-[12px] leading-[120%]">{article.title}</p>
                    <p
                        className='max-w-[315px] cursor-pointer font-[500] font-matter text-[17px] text-[#333438] tracking-[1%]'
                        dangerouslySetInnerHTML={{__html: `${article?.excerpt.slice(0,68)}...`}}/>
                </div>
            </div>
        </a>
    )
}
export default Article
