"use client"
import Image from "next/image";
import ProjectDetails from "@/components/ProjectsPage/ProjectDetails";
import {Dispatch, SetStateAction, useState} from "react";

const Project = ({project, setIsModalOpen}: { project: any, setIsModalOpen: Dispatch<SetStateAction<boolean>> }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
        setIsModalOpen(!show)
    }
    return (
        <div>
            <div className="justify-items-start">
                <Image className="w-full mb-[28px] rounded-[4px]" src={project.img}
                       alt={project.name} width={378} height={252}/>
                <p className="max-w-[260px] font-neue text-[22px] lg:text-[25px] text-[#0E0E10] font-bold mb-[12px] leading-[120%]">{project.name}</p>
                <p onClick={handleClick}
                   className="cursor-pointer underline font-[500] font-matter text-[16px] text-[#333438] tracking-[0.24px]">Learn
                    more</p>
            </div>
            <ProjectDetails show={show} project={project}/>
        </div>
    )
}
export default Project
