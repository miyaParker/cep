"use client"
import Image from "next/image";

const Article = ({article, index}: { article: any, index: number }) => {
    return (
        <div className={`${index === 0 && 'display lg:hidden'}`}>
            <div className={`justify-items-start`}>
                <Image className="w-full mb-[28px] rounded-[4px]" src={article.img}
                       alt={article.name} width={378} height={252}/>
                <div className='flex items-center gap-x-[12px] mb-[24px] flex-wrap'>
                    <p className='rounded-[3px] text-[17px] font-medium font-matter px-[16px] py-[8px] bg-[#FBF2EA] text-[#E58A1F]'>{article.category}</p>
                    <p>{article.datePublished}</p>
                </div>
                <p className="max-w-[260px] font-neue text-[22px] lg:text-[25px] text-[#0E0E10] font-bold mb-[12px] leading-[120%]">{article.name}</p>
                <p className="max-w-[315px] cursor-pointer font-[500] font-matter text-[17px] text-[#333438] tracking-[1%]">{article.description}</p>
            </div>
        </div>
    )
}
export default Article
