import React from 'react';
import Title from '../featurelayout'
import Card from './Card';
import { RiComputerFill } from 'react-icons/ri'
import { MdOutlineWeb } from 'react-icons/md';


const Features = () => {
    return (
        <section id='features' className="w-full h-[800px] pb-20 border-b-[1px]">
            <Title title="Features"description="What I do"/>
            {/*<div className="w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#000000] group hover:bg-gradient-to-b hover:from-bodyColor hover:to-[#000000] transition-colors duration-100">*/}

            {/*</div>*/}
            <div className="grid grid-cols-2 gap-20">
                <Card
                title="IT Ops"
                description="Maintains the computer networks of all types of organisations, providing technical support and ensuring the whole company runs smoothly. IT Support monitors and maintains the company computer systems, installs, and configures hardware and software, and solves technical issues as they arise"
                icon={<RiComputerFill/>}/>
                <Card
                title="Software Developer"
                description="Build Full-Stack application with implementation with JavaScript (ReactJs, ExpressJs, NodeJs, HTML, CSS and MongoDB."
                icon={<MdOutlineWeb/>}/>
            </div>
        </section>
    )
}

export default Features;