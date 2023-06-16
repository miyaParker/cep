"use client"
import SubscribeForm from "@/components/LandingPage/SubscribeForm";
import ProjectsList from "@/components/ProjectsPage/ProjectsList";
import {Dispatch, SetStateAction} from "react";

const Projects = (props: any) => {

    return (
        <>
            <ProjectsList/>
            <SubscribeForm/>
        </>

    )
        ;
};
export default Projects;
