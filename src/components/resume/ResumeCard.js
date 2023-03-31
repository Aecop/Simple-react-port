import React from 'react';


const ResumeCard = ({title, school}) => {
    return (
        <div className="p-4 border-designColor border-2 grid grid-cols-2 justify-center items-center gap-4">
            <h1 className='text-center '>
                {title}
            </h1>
            <h1>
                {school}
            </h1>
        </div>
    )
};

export default ResumeCard;