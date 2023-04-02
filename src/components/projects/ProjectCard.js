import React, { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";





const ProjectCard = ({title, description, src, glink, wlink}) => {
    return (
        <div className="flex flex-col w-aut px-12 h-[500px] py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-[#5A5A5A] to-[#454545] group hover:bg-gradient-to-b hover:from-[#5A5A5A] hover:to-[#454545] transition-colors duration-100 group hover:bg-gradient-to-b hover:from-bodyColor hover:grayscale-900 transition-colors duration-1000">
            <div className="w-full h-[100%] overflow-y-hidden rounded-lg">
                <img className="w-full h-60 object-cover group-hover:scale-90 duration-300" src={src} alt="src"/>

            </div>
            <div>
                <div className="w-full mt-5 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h1 className='text-designColor'>
                            {title}
                        </h1>
                        <div className="flex gap-2 ml-5">
                            <span className="text-2xl w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-designColor duration-500 cursor-pointer">
                                <a href={glink} target="_blank"><BsGithub /></a>
                            </span>
                                <span className="text-2xl w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-designColor duration-500 cursor-pointer">
                                <a href={wlink} target="-_blank"><FaGlobe /></a>
                            </span>
                        </div>
                    </div>
                        <div className='mt-4'>
                            {description}
                        </div>
                    </div>
            </div>
        </div>

    )
};

export default ProjectCard;