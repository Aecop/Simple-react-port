import React from 'react';

const Title = ({title, description}) => {
    return(
        <div className="flex flex-col font-titleFont py-10">
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide mb-5">
                {title}
            </h3>
            <h1 className="text-3xl font-bold capitalize">
                {description}
            </h1>
        </div>
    )
};

export default Title;