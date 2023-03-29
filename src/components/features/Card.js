import React from 'react';

const Card = ({title, description, icon}) => {
    return(
        <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-[#5A5A5A] to-[#454545] group hover:bg-gradient-to-b hover:from-[#5A5A5A] hover:to-[#454545] transition-colors duration-100">
            <div className="flex flex-col gap-5">
                <div>
                    <span className="text-5xl text-designColor">
                        {icon}
                    </span>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-titleFont font-bold">
                        {title}
                    </h2>
                    <p className="base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Card;