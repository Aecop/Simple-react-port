import React from 'react';
import { bannerimg } from '../../assets/index';

const RightBanner = () => {
    return (
        <div className="relative w-1/2 flex justify-center mt-0">
            <img className='w-[500px] h-[700px] ' src={bannerimg} alt="Banner Image"/>
            {/*<div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#808080] shadow-shadowOne flex justify-center items-center">*/}
            {/*</div>*/}
        </div>

    )
};

export default RightBanner;