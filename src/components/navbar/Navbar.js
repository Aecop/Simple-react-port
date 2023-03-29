import React from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from "../../constants";

const Navbar = () => {
    return (
        <div className="pt-3 w-full sticky top-0 z-50 h-24 mx-auto flex bg-bodyColor justify-between items-center font-titleFont border-b-[1px] border-b-grey-600">
            <div>
                <h1 className="text-2xl">JOON RUIZ</h1>
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    {
                        navLinksdata.map(({_id, title,link}) => (
                            <li className="text-base font-normal text-grey-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                                <Link activeClass="active" to={link} spy={true} offset={true} duration={500}>
                                    {title}
                                </Link>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

export default Navbar;