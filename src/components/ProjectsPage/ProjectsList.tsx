import {projects} from "@/app/constants";
import Project from "@/components/ProjectsPage/Project";

const ProjectsList = () => {
    return (
        <div className='w-full pt-[160px] lg:pt-[288px] lg:pt-0'>
            < div
                className="mx-auto max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px]">
                <div>
                    <h1 className="text-[#0E0E10] font-neue text-[37px] md:text-[42px] lg:text-[60px] font-bold">Projects</h1>
                    <p className="mt-[24px] text-[#333438]/90 leading-[140%] font-matter text-[20px] lg:text-[22px]  max-w-[289px] md:max-w-[389px] lg:max-w-[515px]">We
                        organize different projects that inspire the next
                        generation of problem solvers</p>
                </div>
                <div
                    className="justify-center mt-[80px] gap-x-[36px] gap-y-[68px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => <Project key={index} project={project}/>)}
                </div>
            </div>
        </div>
    )
}
export default ProjectsList
