import React from 'react';
import ResumeCard from "./ResumeCard";
import JoonResume from '../../assets/JoonResume/JoonResume.pdf';
import Title from "../featurelayout";


const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(JoonResume).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Joon Resume';
            alink.click();
        })
    })
}

const Resume = () => {
    return (
        <section id="resume" className="w-full py-40 h-full border-b-[1px] border-b-black mt-10">
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Download My Resume Below!"
                    description="Resume" />
            </div>
            <div className="flex flex-col justify-center text-center items-center gap-4  h-1/2 mb-10">
                <div>
                    <button className="border-2 border-designColor
                       bg-black w-40 h-20 inline-flex justify-center items-center duration-500 cursor-pointer
                       bg-gradient-to-r from-[#5A5A5A] to-[#454545] group hover:bg-gradient-to-b hover:from-[#5A5A5A]
                       hover:to-[#454545] transition-colors duration-100 group hover:bg-gradient-to-b hover:from-bodyColor
                       hover:grayscale-900 transition-colors duration-1000
                       rounded" onClick={onButtonClick}>
                        Download Resume
                    </button>
                </div>
            </div>
            <div className="">
                <ul className="w-full flex justify-center">
                    <li className="resumelist">
                        Education
                    </li>
                </ul>
            </div>
            <div className="py-12 font-titleFont gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
            </div>
            <div className="w-full grid grid-cols-2 items-center justify-center flex text-center gap-4 mt-4" >
                <ResumeCard
                title="AS - Computer Technology"
                school="American Military University (2021-2023 APR Projected)"/>
                <ResumeCard
                    title="FullStack Dev Bootcamp"
                    school="University of Washington (2022-2023 APR Projected)"/>
            </div>
        </section>
    )
};

export default Resume;



