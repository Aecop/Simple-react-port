import React from 'react';
import Title from '../featurelayout/'
import ProjectCard from "./ProjectCard";
import { recgrabber, youtubeclone } from '../../assets/index'

const Projects = () => {
    return (
        <secton id="projects" className="w-full py-40 h-[800px] border-b-[1px] border-b-black mt-10">
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Here are my projects"
                    description="Projects"/>
            </div>
            <div className="grid grid-cols-2 gap-14">
                <ProjectCard
                title="RecGrabber"
                description="Search Near CampingSites/Trails/BikeTrails by the location! Used NodeJS, HTML, CSS "
                src={recgrabber}/>
                <ProjectCard
                title="YoutubeClone"
                description="Clone of YouTube and similarity function as YouTube Used ReactJs, NodeJs, HTML, CSS"
                src={youtubeclone}/>
            </div>
        </secton>
    )
};

export default Projects;