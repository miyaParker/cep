import {projects} from "@/app/constants";
import Project from "@/components/ProjectsPage/Project";
import {PROJECTS_GROUPS} from "@/constants";
import {useEffect, useRef, useState} from "react";
import Tabs from "@/components/Projects/Tabs";
import {GROUP_IDS} from "@/constants";
const ProjectsList = () => {
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [inViewStates, setInViewStates] = useState<boolean[]>([]);
    const [scrollTop, setScrollTop] = useState(0);
    const [activeTab, setActiveTab] = useState(PROJECTS_GROUPS["2021_CURRENT"]);
    const onClickTab = (group: string) => {
        setActiveTab(group);
        const box = boxRefs.current[GROUP_IDS[group]];
        if (box) {
            box.scrollIntoView({ behavior: "smooth" });
        }
    }

    const concatList = (list: any, item: any) => {
        const group = item?.group;
        if (group) {
            return {
                ...list,
                [group]: list.hasOwnProperty(group) ? [...list[group], item] : [item]
            };
        }
        return list;
    };

    const projectsList = projects.reduce((projects, currentProject) => {
        const group = currentProject?.group;
        if (Object.values(PROJECTS_GROUPS).includes(group as string)) {
            return concatList(projects, currentProject);
        }
        return projects;
    }, {});


    const projectGroup = (group: string, list: any, id: number) => <div
        ref={(el: HTMLDivElement) => (boxRefs.current[id] = el)} className="pt-[60px]">
        <p className="mb-[10px] text-[16px] md:text-[18px] lg:text-[20px] font-matter tracking-[0.5%] leading-[112%]">{group}</p>
        <div
            className={`h-[1px] mb-[32px] bg-[#E23F27] box ${inViewStates[id] ? 'in-view' : ''}`}
        ></div>
        <div
            className="justify-center gap-x-[36px] gap-y-[68px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
            {list?.map((project: any, index: number) => <Project key={index} project={project}/>)}
        </div>
    </div>

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const newInViewStates = Array(boxRefs.current.length).fill(false);
                entries.forEach(entry => {
                    const index = boxRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index >= 0 && entry.intersectionRatio > 0.6) {
                        newInViewStates[index] = entry.isIntersecting;
                    }
                });
                setInViewStates(newInViewStates);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        const updateObserver = () => {
            let currentPosition = window.pageYOffset;
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
            boxRefs.current.forEach(box => {
                if (box) {
                    observer.observe(box);
                }
            });
        };

        updateObserver();
        const handleScroll = () => {
            updateObserver();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            boxRefs.current.forEach(box => {
                if (box) {
                    observer.unobserve(box);
                }
            });
        };
    }, [scrollTop]);

    const activeTabStyle = "font-medium lg:text-[20px] bg-gray-100"
    return (
        <div className='mx-auto max-w-[1440px] w-full pt-[160px] lg:pt-[218px] px-[20px] lg:px-[80px] xl:px-[140px]'>
            <Tabs
                activeTab={activeTab}
                onClickTab={onClickTab}
                activeTabStyle={activeTabStyle}
            />
            <div
                className=" ">
                <div>
                    <h1 className="text-[#0E0E10] font-neue text-[37px] md:text-[42px] lg:text-[60px] font-bold">Projects</h1>
                    <p className="mt-[24px] text-[#333438]/90 leading-[140%] font-matter text-[20px] lg:text-[22px]  max-w-[624px] md:max-w-[589px] lg:max-w-[624px]">We
                        take great pride in implementing impactful projects aimed at inspiring the next generation of
                        highly innovative thinkers.</p>
                </div>

                <div>
                    {Object.keys(PROJECTS_GROUPS).map((key, index) => {
                        const group = PROJECTS_GROUPS[key as keyof typeof PROJECTS_GROUPS];
                        const projects = projectsList[group as keyof typeof projectsList];
                        return projectGroup(group, projects, index + 1);
                    })}
                </div>
            </div>
        </div>
    )
}
export default ProjectsList
