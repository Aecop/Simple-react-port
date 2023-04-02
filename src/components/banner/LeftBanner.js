import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import {FaCss3, FaGithub, FaHtml5, FaLinkedinIn, FaPython, FaReact} from "react-icons/fa";
import {SiJavascript, SiMongodb, SiMysql, SiTailwindcss} from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["<Software Developer />", "<IT Ops />"],
        loop: true,
        typeSpeed: 15,
        deleteSpeed: 15,
        delaySpeed: 3000
    })
    return (
        <div className="w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-normal">Welcome & Hello World!</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm {""}
                    <span className="text-designColor capitalize">
                            Joon Ruiz
                        </span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a {""}
                    <span>
                            {[text]}
                        </span>
                    <Cursor cursorBlinking='false' cursorStyle='|' cursorColor="#808000" />
                </h2>
                <p>
                    Initially started my career with Information Technology field as field technician, system administrator, it support specialist for 7 years.
                    Once I found out about software developer, I fell in love. With love and passion for the software development, I decided to pursue a new role as
                    a software developer. I am a motivated leaner who love to achieve goals and thrill seeker who likes to take risk! Also, I am proud to say I am
                    a happy father of ZEE (Labradoodle)
                </p>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <a href="https://www.linkedin.com/in/joon-ruiz-967611201/" target="_blank"><FaLinkedinIn/></a>
                    </span>
                    <span className="bannerIcon">
                        <a href="https://github.com/Aecop" target="_blank"> <FaGithub/></a>
                    </span>
                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Skills
                </h2>
                <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaPython/>
                        </span>
                    <span className="bannerIcon">
                            <SiJavascript/>
                        </span>
                    <span className="bannerIcon">
                            <FaReact/>
                        </span>
                    <span className="bannerIcon">
                            <FaHtml5/>
                        </span>
                    <span className="bannerIcon">
                            <FaCss3/>
                        </span>
                    <span className="bannerIcon">
                            <SiTailwindcss/>
                        </span>
                    <span className="bannerIcon">
                            <SiMysql/>
                        </span>
                    <span className="bannerIcon">
                            <SiMongodb/>
                        </span>
                </div>
            </div>
        </div>
    )
};

export default LeftBanner;