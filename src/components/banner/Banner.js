import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";


const Banner = () => {

    return (
        <section id='home' className="w-full h-[750px] mt-8 mb-0 flex font-titleFont border-b-[1px] border-b-black">
            <LeftBanner />
            <RightBanner />
        </section>
    )
}

export default Banner;