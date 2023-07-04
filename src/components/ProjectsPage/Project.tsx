"use client"
import Image from "next/image";
import {useState} from "react";
import dynamic from "next/dynamic";

const ProjectDetails = dynamic(() => import("./ProjectDetails"), {
    ssr: false,
})


const Project = ({project}: { project: any }) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="justify-items-start">
                <Image className="w-full mb-[24px] rounded-[4px]" src={project.img}
                       alt={project.name} width={378} height={252}/>
                <p className="max-w-[260px] font-neue text-[22px] lg:text-[25px] text-[#0E0E10] font-bold mb-[12px] leading-[120%]">{project.name}</p>
                <p onClick={() => setShow(true)}
                   className="cursor-pointer underline font-[500] font-matter text-[16px] text-[#333438] tracking-[0.24px]">Learn
                    more</p>
            </div>
            <ProjectDetails showModal={show} closeModal={()=>setShow(false)} project={project}/>
        </div>
    )
}
export default Project
