import {createPortal} from "react-dom";
import Image from "next/image";
import {useState, useEffect} from "react";

const ProjectDetails = ({
                            project,
                            showModal,
                            closeModal
                        }: { project: any, showModal: boolean, closeModal: () => void }) => {
    const [domReady, setDomReady] = useState(false)

    useEffect(() => {
        setDomReady(true)
    }, [])
    const modalRoot = document.getElementById('modal-root')!
    return (<div>
        {
            domReady ?
                createPortal(
                    <div
                        className="modal bg-gray-200/50 w-screen h-[100vh] fixed top-0 z-50 left-0 flex items-center justify-center"
                        style={{display: showModal ? "flex" : "none"}}>
                        <div
                            className="w-[90%] max-w-[640px] h-max max-h-[90vh] overflow-scroll relative rounded-[8px] px-[20px] md:pl-[44px]  bg-white">
                            <div onClick={closeModal}
                                 className='bg-[#F6F6F9] absolute top-[18px] right-[18px] lg:top-[24px] lg:right-[24px] cursor-pointer w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] rounded-full flex justify-center items-center'>
                                <Image src="/close.svg" alt={'close modal'} width={24} height={24}
                                       className={'w-[20px] lg:w-[20px]'}/>
                            </div>
                            <p className="font-neue mt-[40px] font-bold text-[25px] leading-[120%] tracking-[0.125px] text-[#0E0E10]">{project.name}</p>
                            {project.details.summary.map((summary: any, index: number) =>
                                <p key={index}
                                   className="mt-[20px] max-w-[521px] font-matter text-[17px] leading-[140%] tracking-[0.17px] text-[#333438]">{summary}</p>
                            )}

                            <p className="my-[20px] font-bold font-neue text-[20px] leading-[140%] tracking-[0.16px] text-[#0E0E10]">{project.details.info?.title}</p>
                            {project.details.info?.keyPoints?.map((keyPoint: string, index: number) =>
                                <div key={index} className="flex items-start max-w-[521px]">
                                    <Image alt={`keypoint -${index}`} src={`/star-${index + 1}.svg`}
                                           className="mr-[12px]" width={20} height={20}/>
                                    <p className="mb-[20px] font-matter text-[17px] leading-[140%] tracking-[0.17px] text-[#333438]">{keyPoint}</p>
                                </div>
                            )}
                            {project.details.info?.description?.map((description: string, index: number) =>
                                <p key={index}
                                   className="mt-[20px] max-w-[521px] font-matter text-[17px] leading-[140%] tracking-[0.17px] text-[#333438]">{description}</p>
                            )}
                            <p className="mb-[20px] mt-[8px] max-w-[521px] font-bold font-neue text-[20px] leading-[140%] tracking-[0.16px] text-[#0E0E10]">Impact</p>
                            {project.impact.map((impact: any, index: number) => {
                                if (impact?.location) {
                                    return (
                                        <div key={index} className="flex mr-[20px] mb-[20px] flex-wrap">
                                            {impact?.info?.map((info: any, index: number) => (
                                                <div key={index}
                                                     className="flex items-center mr-[20px] my-2 py-[17px] px-[12px] bg-[#F6F6F9] rounded-[4px]">
                                                    <p className="font-bold text-[28px] text-[#0E0E10] mr-[10px] font-neue">{info.number}</p>
                                                    <p
                                                        className=" font-matter text-[17px] uppercase leading-[140%] tracking-[0.17px] text-[#333438]">{info.description}</p>
                                                </div>))}
                                            <div className="flex ml-[12px] items-center"><Image className="mr-[6px]"
                                                                                                src="location-pin.svg"
                                                                                                alt="location"
                                                                                                width={20}
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
                                                {impact?.info?.map((info: any, index: number) => <div key={index}
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
                    </div>, modalRoot
                ) : <></>
        }
    </div>)

}
export default ProjectDetails
