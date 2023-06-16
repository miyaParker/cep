import Image from "next/image";

const ProjectDetails = ({project, show}: { project: any, show:boolean }) => {

    return (
            <div className="w-screen blur-none h-full absolute top-[-128px] left-0 flex  justify-center" style={{display:show?"flex":"none"}}>
                <div className="max-w-[640px] rounded-[8px] bg-white z-50 h-max">
                    <p className="font-neue mt-[24px] font-bold text-[25px] leading-[120%] tracking-[0.125px] text-[#0E0E10]">{project.name}</p>
                    {project.details.summary.map((summary: any) =>
                        <p className="mt-[20px] font-matter text-[17px] leading-[140%] tracking-[0.17px] text-[#333438]">{summary}</p>
                    )}

                    <p className="my-[20px] font-bold font-neue text-[20px] leading-[140%] tracking-[0.16px] text-[#0E0E10]">{project.details.info?.title}</p>
                    {project.details.info?.keyPoints?.map((keyPoint: string, index:number) =>
                        <div className="flex items-start">
                            <Image alt={`keypoint -${index}`} src={`/star-${index + 1}.svg`}
                                   className="mr-[12px]" width={20} height={20}/>
                            <p className="mb-[20px] font-matter text-[17px] leading-[140%] tracking-[0.17px] text-[#333438]">{keyPoint}</p>
                        </div>
                    )}
                    {project.details.info?.description?.map((description: string) =>
                        <p className="mt-[20px] font-matter text-[17px] leading-[140%] tracking-[0.17px] text-[#333438]">{description}</p>
                    )}
                    <p className="mb-[20px] mt-[8px] font-bold font-neue text-[20px] leading-[140%] tracking-[0.16px] text-[#0E0E10]">Impact</p>
                    {project.impact.map((impact: any) => {
                        if (impact?.location) {
                            return (
                                <div className="flex mr-[20px] mb-[20px]">
                                    {impact?.info?.map((info: any) => <div
                                        className="flex items-center mr-[20px] py-[17px] px-[12px] bg-[#F6F6F9] rounded-[4px]">
                                        <p className="font-bold text-[28px] text-[#0E0E10] mr-[10px] font-neue">{info.number}</p>
                                        <p
                                            className=" font-matter text-[17px] uppercase leading-[140%] tracking-[0.17px] text-[#333438]">{info.description}</p>
                                    </div>)}
                                    <div className="flex ml-[12px]"><Image className="mr-[6px]"
                                                                           src="location-pin.svg"
                                                                           alt="location" width={20}
                                                                           height={20}/>
                                        <p>{impact.location}</p></div>
                                </div>
                            )
                        }
                        if (!impact?.location && !impact?.project) {
                            return (
                                <div className="flex mr-[20px] mb-[20px]">
                                    <div
                                        className="flex items-center mr-[20px] py-[17px] px-[12px] bg-[#F6F6F9] rounded-[4px]">
                                        <p className="font-bold text-[28px] text-[#0E0E10] mr-[10px] font-neue">{impact.number}</p>
                                        <p
                                            className=" font-matter text-[17px] uppercase leading-[140%] tracking-[0.17px] text-[#333438]">{impact.description}</p>
                                    </div>
                                </div>)
                        }
                        if (impact?.project) {
                            return (
                                <div>
                                    <div className=" flex items-center mb-[12px]">
                                        <p className="font-neue font-500 h-[4px] mr-[6px]  w-[4px] bg-[#E23F27] rounded-full"></p>
                                        <p className="text-[#E23F27] font-neue font-500">{impact.project}</p>
                                    </div>

                                    <div className="flex mr-[20px] flex-wrap">
                                        {impact?.info?.map((info: any) => <div
                                            className="flex items-center mb-[20px] mr-[20px] py-[17px] px-[12px] bg-[#F6F6F9] rounded-[4px]">
                                            <p className="font-bold text-[28px] text-[#0E0E10] mr-[10px] font-neue">{info.number}</p>
                                            <p
                                                className=" font-matter text-[17px] uppercase leading-[140%] tracking-[0.17px] text-[#333438]">{info.description}</p>
                                        </div>)}
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
        </div>
    )
}
export default ProjectDetails
